import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Alert } from "@mui/material";
import CountUp from "react-countup";
import CreateInvoice from "../components/CreateInvoice";
const SingleSchool = () => {
  const { id } = useParams();
  //   fetch school data
  const { data, loading, error } = useFetch(
    `http://localhost:3030/schools/${id}`
  );
  // fetch invoice data
  const {
    data: invoiceData,
    loading: invoiceLoading,
    error: invoiceError,
  } = useFetch(`http://localhost:3030/invoices?schoolId=${id}`);

  return (
    <div className=" flex w-full h-full">
      <Sidebar />
      <div className="px-2 py-20 w-full h-full space-y-3">
        {(loading || invoiceLoading) && <p>Loading...</p>}
        {(error || invoiceError) && <Alert severity="error">{error}</Alert>}

        <h1 className="text-2xl font-bold">School Details</h1>
        {(invoiceData || data) && !loading && !invoiceLoading && (
          <div className="w-full h-full lg:w-11/12 lg:mx-auto space-y-2">
            <div className=" w-full h-full bg-jade-200  text-jade-900 p-5 space-y-1 rounded-md shadow-md border border-jade-500 ">
              <h3>{data.name}</h3>
              <p>Type: {data.type}</p>
              <p>Products: {data.products.join(", ")}</p>
              <p>County: {data.county}</p>
              <p>Registration Date: {data.registrationDate}</p>
              <p>Contact: {data.contact}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Invoices</h3>
              <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 space-y-2">
                {invoiceData.map((invoice) => (
                  <li
                    key={invoice.id}
                    className="relative bg-jade-900 space-y-2 rounded-md text-jade-200 p-4"
                  >
                    <h3 className="text-xl font-bold">{invoice.item}</h3>
                    <div className=" space-y-2 text-sm">
                      <div className=" ">
                        <p className=" inline">Amount: </p>
                        <span className=" bg-jade-950 text-jade-200 p-1 rounded text-sm">
                          <CountUp
                            end={invoice.amount}
                            duration={2}
                            prefix="KES "
                          />
                        </span>
                      </div>
                      <div className="">
                        <p className=" inline">Due date: </p>
                        <span className=" bg-jade-950 text-jade-200 p-1 rounded text-sm">
                          {invoice.dueDate}
                        </span>
                      </div>
                      <div
                        className={`absolute text-sm bottom-2 z-10 right-2  bg-jade-200 px-2 rounded text-jade-900 ${
                          invoice.status === "Pending"
                            ? " bg-red-200 text-jade-900"
                            : ""
                        }`}
                      >
                        <p>{invoice.status}</p>
                      </div>
                      <Link
                        to={`/edit/invoice/${invoice.id}`}
                        className={`absolute text-sm top-2 z-10 right-2  bg-jade-200 px-2 rounded text-jade-900`}
                      >
                        <p>Edit</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Create Invoice</h3>
              <CreateInvoice school={data.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleSchool;
