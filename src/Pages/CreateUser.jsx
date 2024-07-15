import axios from 'axios'
import React, { useState } from 'react'
import { createUser } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CreateUser = () => {
    const dispath = useDispatch()

    

    const navigate = useNavigate()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        try {

            const response = await axios.post("http://localhost:5000/api/create-user",{name,email,age})
            dispath(createUser(response.data.result))
            navigate("/")


            
        } catch (error) {
            console.log(error);
            
        }

    }

  return (
    <>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
        <div className='w-50 bg-white rounded p-3' >
            <form action="" onSubmit={handleSubmit} >
              <div className="mb-3" >
                <label htmlFor="name" className='form-label'>Name </label>
                    <input type="text" placeholder='Enter YourName' className='form-control' id="name" onChange={(e)=>setName(e.target.value)} />
               
              </div>

              <div className="mb-3" >
                <label htmlFor="email" className='form-label' >Email</label>
                    <input type="text"   placeholder='Enter Your Email' id="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} />
               
              </div>

              <div className="mb-3" >
                <label htmlFor="age"className='form-label'>Age </label>
                    <input type="number"  placeholder='Enter Your Age' id="age" className='form-control' onChange={(e)=>setAge(e.target.value)} />
                
              </div>
              <button className='btn btn-success'>Submit</button>
            </form>

        </div>

    </div>

    </>
  )
}

export default CreateUser