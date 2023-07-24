import React from 'react'
import "./addUser.scss";
import { GridColDef } from '@mui/x-data-grid';




type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
};
const AddUser = (props: Props) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // add new item
        //axios.post("/api/$slug", {})
    }
  return (
    <div className='addUser'>
          <div className="modal">
              <span className="close" onClick={() => props.setOpen(false)}>
                  X
              </span>
              <h1>Add new {props.slug}</h1>
              <form onSubmit={handleSubmit}>
                  
                  {
                      props.columns.filter(item => item.field !== 'id' && item.field !== 'img')
                          .map((column) => {
                              return (
                             <div className="item">
                           
                                 <label >{column.headerName}</label>
                                 <input type={column.type} placeholder={column.field} />
                               </div> 
                              )
                      })
                  }   
                  <button>Add</button>
              </form>
      </div>
    </div>
  )
}

export default AddUser
