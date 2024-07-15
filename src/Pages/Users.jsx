import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUser } from '../Redux/UserSlice'
import { Link } from 'react-router-dom'

const Users = () => {

    

     const dispatch = useDispatch()
     const users = useSelector(state=>state.users.users)
     console.log(users);


    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async()=>{
        try {
            const response = await axios.get("https://fsd-curd-operation-backent.onrender.com/api/get-user")
            dispatch(getUser(response.data.result))
            
        } catch (error) {
            console.log(error);
        }
    }
 
    const handledelete = async(id)=>{
      try {
        const respons = await axios.delete(`https://fsd-curd-operation-backent.onrender.com/api/del-user/${id}`)
        dispatch(deleteUser({id}))
        
      } catch (error) {
        console.log(error);
      }
    }

  return (
   <>
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center col-12' >
    <div className=' bg-white rounded p-3'>
     <Link to='/create' className='btn btn-dark btn-sm' >Create User</Link>
     <table className='table' >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th colSpan={2} >Action</th>
           
          </tr>
        </thead>
        <tbody  >
    {users.map((ele)=>{
      return(
      
        <tr key={ele._id}  >
          <td>{ele.name}</td>
          <td>{ele.email}</td>
          <td>{ele.age}</td>
          <td>  <Link to={`/edit/${ele._id}`} className='btn btn-success m-1 '  >Edit</Link >
          <button onClick={()=>handledelete(ele._id)} className='btn btn-danger' >Delete</button></td>
        </tr>

      )
    })} 
  </tbody>
</table>
    </div>

   </div>
 
   
   </>
  )
}

export default Users