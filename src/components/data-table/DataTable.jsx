import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./DataTable.scss";
import { userColumns, userRows } from "../../data/userData";

const DataTable = () => {
  return (
    // <div style={{ height: 400, width: "100%" }}>
    <div className="userTable">
      <DataGrid
        className="container"
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
