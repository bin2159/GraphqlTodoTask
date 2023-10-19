import React from 'react'
import { useQuery } from '@apollo/client'
import { Get_Users } from '../queries/Queries'
import UserInfo from './UserInfo'
const User = () => {
    const { loading, error, data } = useQuery(Get_Users)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error :{error.message}</div>
    console.log(data)
    return (
        <div>
            <div className='bg-white m-20'>
                <ul className='flex text-black font-bold text-lg'>
                    <li className='ml-4'>Name</li>
                    <li className='ml-20'>Email</li>
                    <li className='ml-20'>Action</li>
                </ul>
            {data.users.map(user => (
                <UserInfo key={user.id} user={user}/>
            ))}
            </div>

        </div>
    )
}

export default User
