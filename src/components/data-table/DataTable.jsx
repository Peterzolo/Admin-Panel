import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./DataTable.scss";
import { userColumns, userRows } from "../../data/userData";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import TableViewIcon from "@mui/icons-material/TableView";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <TableViewIcon />
              </div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    // <div style={{ height: 400, width: "100%" }}>
    <div className="userTable">
      <div className="add-new-wrapper">
        <div className="new-add-title">Add New User</div>
        <div className="add-link">
          <Link to="/user/new" className="addNew">
            Add New
          </Link>
        </div>
      </div>
      <DataGrid
        className="container"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
