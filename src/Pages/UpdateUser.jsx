import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux/UserSlice'

const UpdateUser = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users.users)

  const user = users.find(ele => ele._id === id)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setAge(user.age)
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:5000/api/Update-user/${id}`, { name, email, age })
      dispatch(updateUser(response.data.result))
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name</label>
            <input
              type="text"
              placeholder='Enter Your Name'
              name='name'
              className='form-control'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input
              type="text"
              placeholder='Enter Your Email'
              id="email"
              name='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className='form-label'>Age</label>
            <input
              type="number"
              placeholder='Enter Your Age'
              id="age"
              name='age'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
