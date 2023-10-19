import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import User from './pages/User'
import AddUser from './pages/AddUser'
import ViewUser from './pages/ViewUser'
import EditUser from './pages/EditUser'
import AddTask from './pages/AddTask'
import Task from './pages/Task'
import ViewTask from './pages/ViewTask'
import EditTask from './pages/EditTask'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/viewuser/:id" element={<ViewUser />} />
      <Route path="/edituser/:id" element={<EditUser/>} />
      <Route path="/addtask" element={<AddTask/>}/>
      <Route path="/task" element={<Task/>} />
      <Route path="/edittask/:id" element={<EditTask/>}/>
      <Route path="/viewtask/:id" element={<ViewTask/>}/>
   </Routes>
    </>
   
  )
}

export default App
