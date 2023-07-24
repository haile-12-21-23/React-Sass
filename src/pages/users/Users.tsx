import React, { useState } from 'react'
import './users.scss'
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef, } from '@mui/x-data-grid';
import { userRows } from '../../data';
import AddUser from '../../components/addUser/AddUser';
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
  {field:"img",headerName:"Avatar",width:100, renderCell(params) {
      return <img src={params.row.img ||"noAvatar.png"} alt="" />
  },
  },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
 {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
    {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
     {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
       type: "string",
   
  },
       {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];




const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>{setOpen(true)}}>Add Nwe User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <AddUser setOpen={setOpen} slug={'user'} columns={columns} />}
    </div>
  )
}

export default Users
