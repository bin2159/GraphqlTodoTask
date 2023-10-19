import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Delete_User } from "../mutation/Mutation";
import { useNavigate } from "react-router-dom";
import { Get_Tasks, Get_Users } from '../queries/Queries'

const UserInfo = ({ user }) => {
    const navigate=useNavigate()
  const [optionValue, setOptionValue] = useState(["Delete", "View", "Edit"]);
    const [deleteUser]=useMutation(Delete_User,{variables:{id:user.id},refetchQueries:[{query:Get_Users},{query:Get_Tasks}]})
    const handleChange=(e)=>{
        console.log(e.target.value)
        if(e.target.value==='Delete'){
            console.log("delete")
           deleteUser()
        }
        else if(e.target.value==='Edit'){
            navigate(`/edittask/${user.id}`)
        }
        else if(e.target.value==='View'){
            navigate(`/viewtask/${user.id}`)
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
          <li className="ml-4 mt-1 p-2">{user.name}</li>
          <li className="ml-4 mt-1 p-2">{user.email}</li>
          <li className="ml-4 mt-1 p-2">
            <select className="bg-gray-700 rounded-md p-1 text-white font-semibold"  onChange={e=>handleChange(e)}>
            <option key={0}>{"Select option"}</option>
                
              {optionValue.map((option,index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
