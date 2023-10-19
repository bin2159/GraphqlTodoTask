import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Delete_Task } from '../mutation/Mutation';
import { Get_Tasks } from '../queries/Queries';
import { useNavigate } from 'react-router-dom';

const TaskInfo = ({task}) => {
  const navigate=useNavigate()
  const [optionValue, setOptionValue] = useState(["Delete", "View", "Edit"]);
  const [deleteTask]=useMutation(Delete_Task,{variables:{id:task.id},refetchQueries:[{query:Get_Tasks}]})
  const handleChange=(e)=>{
    console.log(e.target.value)
    if(e.target.value==='Delete'){
        deleteTask()
    }
    else if(e.target.value==='Edit'){
        navigate(`/edittask/${task.id}`)
    }
    else if(e.target.value==='View'){
        navigate(`/viewtask/${task.id}`)
    }
    else{
        alert("Click on given options")
    }
}
  return (
    <div>
      <hr className="bg-black h-1" />
      <div>
        <ul className="flex">
          <li className="ml-4 mt-1 p-2">{task.title}</li>
          <li className="ml-10 mt-1 p-2">{task.description}</li>
          <li className="ml-10 mt-1 p-2">{task.user.name}</li>
          <li className="ml-10 mt-1 p-2">
            <select className="bg-gray-700 rounded-md p-1 text-white font-semibold ml-10"  onChange={e=>handleChange(e)}>
            <option key={0}>{"Select option"}</option>
                
              {optionValue.map((option,index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TaskInfo
