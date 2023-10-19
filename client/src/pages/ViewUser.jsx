import { useQuery } from '@apollo/client'
import React from 'react'
import { Get_User } from '../queries/Queries'
import { useParams } from 'react-router-dom'
const ViewUser = () => {
    const {id}=useParams()
    const {data,loading,error}=useQuery(Get_User,{variables:{id}})
    console.log(id)
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error.message}</div>
    }
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center bg-gray-200 w-[250px] h-[250px] rounded-[2.5rem]'>
        <h1><span className='font-semibold text-gray-900 m-1'>Name : </span>{data.user.name}</h1>
        <h1><span className='font-semibold text-gray-900 m-1'>Email : </span>{data.user.email}</h1>


      </div>
    </div>
  )
}

export default ViewUser
