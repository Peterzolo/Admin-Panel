import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { listData } from "../../data/newData";
import "./Table.scss"

const items = listData;

const ListTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell">{item.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={item.img} alt="" className="image" />
                  {item.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{item.customer}</TableCell>
              <TableCell className="tableCell">{item.date}</TableCell>
              <TableCell className="tableCell">{item.amount}</TableCell>
              <TableCell className="tableCell">{item.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${item.status}`}>{item.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
