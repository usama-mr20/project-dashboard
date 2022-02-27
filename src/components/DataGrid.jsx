import React from "react";
import { DataGridPro, GridToolbar } from "@mui/x-data-grid-pro";
import { useSelector } from "react-redux";
const PDataGrid = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 50, editable: true },

    { field: "title", headerName: "Title", width: 180, editable: true },
    {
      field: "division",
      headerName: "Division",
      width: 150,
      editable: true,
    },
    {
      field: "project_owner",
      headerName: "Project Owner",
      width: 160,
      editable: true,
    },
    {
      field: "budget",
      headerName: "Budget",
      type: "number",
      width: 110,
      editable: true,
      valueFormatter: ({ value }) => `$ ${value}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      editable: true,
    },
    {
      field: "created",
      headerName: "Created",
      type: "date",
      width: 160,
      editable: true,
    },
    {
      field: "modified",
      headerName: "Modified",
      type: "date",
      width: 160,
      editable: true,
    },
  ];

  const { data } = useSelector((state) => state.data);

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGridPro
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default PDataGrid;
