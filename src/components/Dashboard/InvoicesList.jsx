/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const InvoicesList = ({ invoices, schools }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const schoolMap = schools.reduce((map, school) => {
    map[school.id] = school;
    return map;
  }, {});

  const columns = [
    { id: "invoice_Number", label: "Invoice Number", minWidth: 170 },
    {
      id: "school",
      label: "School",
      minWidth: 170,
      //   align: "right",
      //   format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "item",
      label: "Item",
      minWidth: 170,
    },
    {
      id: "creation_Date",
      label: "Creation Date",
      minWidth: 170,
    },
    {
      id: "due_Date",
      label: "Due Date",
      minWidth: 170,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 170,
      format: (value) => value.toFixed(2),
    },
    {
      id: "paid_amount",
      label: "Paid Amount",
      minWidth: 170,

      format: (value) => value.toFixed(2),
    },
    {
      id: "balance",
      label: "Balance",
      minWidth: 170,

      format: (value) => value.toFixed(2),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 170,
    },
    {
      id: "Days_until_due",
      label: "Days Until Due",
      minWidth: 170,
    },
  ];

  function createData(
    invoice_Number,
    school,
    item,
    creation_Date,
    due_Date,
    amount,
    paid_amount,
    balance,
    status,
    Days_until_due
  ) {
    return {
      invoice_Number,
      school,
      item,
      creation_Date,
      due_Date,
      amount,
      paid_amount,
      balance,
      status,
      Days_until_due,
    };
  }

  const rows = invoices.map((invoice) => {
    const school = schoolMap[invoice.schoolId];
    return createData(
      invoice.id,
      school?.name,
      invoice.item,
      invoice.creationDate,
      invoice.dueDate,
      invoice.amount,
      invoice.paidAmount,
      invoice.balance,
      invoice.status,
      invoice.daysUntilDue
    );
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", }}>
      <TableContainer sx={{ maxHeight: 440, }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{
             background: "#03301f",
            //  color: ""
          }}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{
                            color: "#b8fadd"
                         }} key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default InvoicesList;
