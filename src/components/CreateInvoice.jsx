/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Input } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Sidebar from "./Sidebar";

const CreateInvoice = ({ school }) => {
  // InvoiceData
  const [invoiceData, setInvoiceData] = useState({
    item: "",
    schoolId: school,
    amount: "",
    dueDate: "",
    paidAmount: 0,
    creationDate: moment().format("L"),
    balance: 0,
    status: "pending",
  });
  const [redirect, setRedirect] = useState(null);
  // get invoiceId from params
  const { invoiceId } = useParams();
  //  input header
  const inputHeader = (header) => {
    return <h2>{header}</h2>;
  };
  //  input Description
  const inputDescription = (description) => {
    return <p className=" text-sm text-gray-500">{description}</p>;
  };
  //   input Title
  const inputTitle = (header, description) => {
    return (
      <div className=" my-4">
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  };
  //   handle change for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  //   submit and add invoice
  const handlesubmit = (e) => {
    e.preventDefault();
    if (invoiceId) {
      axios
        .put(`http://localhost:3030/invoices/${invoiceId}`, invoiceData)
        .then((res) => {
          setRedirect("/");
          return toast.success("Invoice Updated Successfully");
        })
        .catch((err) => {
          return toast.error("Something went wrong");
        });
    } else {
      // if no input send message
      if (
        !invoiceData.amount ||
        !invoiceData.balance ||
        !invoiceData.schoolId ||
        !invoiceData.creationDate ||
        !invoiceData.dueDate ||
        !invoiceData.item ||
        !invoiceData.paidAmount ||
        !invoiceData.status
      ) {
        return toast.error("Please fill all the fields!");
      }
      axios
        .post("http://localhost:3030/invoices", {
          ...invoiceData,
          balance: invoiceData.amount,
        })
        .then((response) => {
          setRedirect("/");
          return toast.success("Invoice added successfully!");
        })
        .catch((err) => {
          return toast.error(err.message);
        });
    }
  };

  //   get invoice and update
  useEffect(() => {
    const getInvoice = () => {
      axios
        .get(`http://localhost:3030/invoices/${invoiceId}`)
        .then((res) => res.data)
        .then((data) => {
          setInvoiceData({
            item: data.item,
            schoolId: data. schoolId,
            amount: data.amount,
            dueDate: data.dueDate,
            paidAmount: data.paidAmount,
            creationDate: data.creationDate,
            balance: data.balance,
            status: data.status,
          });
        })
        .catch((err) => {
          return toast.error(err.message);
        });
    };
    if (!invoiceId) {
      return;
    }
    getInvoice();
  }, [invoiceId]);
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className={`${invoiceId ? "flex w-full h-full" : ""}`}>
      {invoiceId && <Sidebar />}
      <form
        onSubmit={handlesubmit}
        className={` space-y-3 ${
          invoiceId ? " w-full px-4 py-20  h-full " : ""
        }`}
      >
        <div>
          {inputTitle("Item", "Item Name")}
          <input
            type="text"
            onChange={handleChange}
            name="item"
            value={invoiceData.item}
          />
        </div>
        <div>
          {inputTitle("Amount", "Enter amount")}
          <input
            type="number"
            onChange={handleChange}
            name="amount"
            min={0}
            value={invoiceData.amount}
          />
        </div>
        <div>
          {inputTitle("Due Date", "Enter the due date")}
          <input
            type="date"
            onChange={handleChange}
            name="dueDate"
            value={invoiceData.dueDate}
          />
        </div>
        {invoiceId && (
          <>
            <div>
              {inputTitle("Paid Amount", "Enter the paid amount")}
              <input
                type="number"
                onChange={handleChange}
                name="paidAmount"
                value={invoiceData.paidAmount}
              />
            </div>
            <div>
              {inputTitle("Balance", "Enter the balance")}
              <input
                type="number"
                onChange={handleChange}
                name="balance"
                value={invoiceData.balance}
              />
            </div>
            <div>
              {inputTitle("status", "Enter status e.g paid, pending")}
              <input
                type="text"
                onChange={handleChange}
                name="status"
                value={invoiceData.status}
              />
            </div>
          </>
        )}
        <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateInvoice;
