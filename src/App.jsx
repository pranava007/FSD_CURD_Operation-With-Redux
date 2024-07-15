import React from 'react'
import Users from './Pages/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Pages/CreateUser'
import UpdateUser from './Pages/UpdateUser'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/create' element={<CreateUser/>}/>
      <Route path='/edit/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App