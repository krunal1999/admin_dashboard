import { DataGrid } from "@mui/x-data-grid";
import "./datatable.css";
import { columns, rows } from "../dbsource/datatablesourse";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      width: 200,
      headerName: "Action",

      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/1">
              <button variant="outlined" className="viewbutton">
                view
              </button>
            </Link>
            <button variant="outlined" className="deleteButton">
              delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="datatable">
        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 100]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DataTable;
