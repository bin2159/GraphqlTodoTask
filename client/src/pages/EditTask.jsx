import React, { useEffect, useState } from 'react'
import { Get_Task, Get_Tasks } from '../queries/Queries'
import { Edit_Task } from '../mutation/Mutation'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'

const EditTask = () => {
    const {id}=useParams()
    const {data,loading,error}=useQuery(Get_Task,{variables:{id}})
    const navigate=useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editTask]=useMutation(Edit_Task,{variables:{id,title,description},refetchQueries:[{query:Get_Tasks}]})

    
    useEffect(()=>{
        if(data){
            setTitle(data.task.title)
            setDescription(data.task.description)
            setName(data.task.user.name)
            setEmail(data.task.user.email)
        }
    },[data])
    
    
    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>{error.message}</div>
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        if(title===""||description===""){
            return alert("Please fill all feilds")
        }
        editTask()
        navigate('/task')
    }
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col w-1/2 mt-[50px] rounded-3xl h-[320px] bg-gray-200 items-center justify-center"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder="Enter title"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Enter email"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          disabled
          type="text"
          value={name}
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3 "
        />
        <input
          disabled
          type="text"
          value={email}
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3 "
        />

        <button
          type="submit"
          className="w-[300px] bg-slate-900 text-white rounded-md mt-3 font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditTask
