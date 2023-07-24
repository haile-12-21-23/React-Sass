import { DataGrid, GridColDef, GridToolbar,  } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Box,  } from "@mui/material";
import { Link } from "react-router-dom";


type Props = {
  columns: GridColDef[],
  rows: object[],
  slug:string
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //Make APi call to delete user;
    console.log(id+" has been deleted successfully.")
  }
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params)=>{
      
      return (
        <div className="action">
         
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="view.svg" alt="" />
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="delete.svg" alt="" />
          </div>
        </div>
      )
    }
    
  };
  return (
    <div className="dataTable"> <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
              }}
              slots={{toolbar:GridToolbar}}
              slotProps={
                  {
                      toolbar: {
                          showQuickFilter: true,
                          quickFilterProps:{debounceMs:500}
                      }
                }
              }
        pageSizeOptions={[5]}
        checkboxSelection
              disableRowSelectionOnClick
              disableColumnSelector
              disableDensitySelector
              disableColumnFilter
      />
      </Box>
      </div>
  )
}

export default DataTable