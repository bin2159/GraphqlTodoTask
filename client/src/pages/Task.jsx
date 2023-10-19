import { useQuery } from '@apollo/client'
import React from 'react'
import { Get_Tasks } from '../queries/Queries'
import TaskInfo from './TaskInfo'

const Task = () => {
    const {data,loading,error}=useQuery(Get_Tasks)
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error.message}</div>
    }
  return (
    <div>
    <div className='bg-white m-20'>
        <ul className='flex text-black font-bold text-lg'>
            <li className='ml-4'>Title</li>
            <li className='ml-20'>Description</li>
            <li className='ml-20'>User</li>
            <li className='ml-20'>Action</li>
        </ul>
    {data.tasks.map(task => (
        <TaskInfo key={task.id} task={task}/>
    ))}
    </div>

</div>
  )
}

export default Task
