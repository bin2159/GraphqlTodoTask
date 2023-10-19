import { gql } from "@apollo/client";

export const Get_Users=gql`
    query getusers{
        users{
            id
            name
            email
        }
    }
`
export const Get_User=gql`
query getuser($id:ID!){
    user(id:$id){
        id
        name
        email
        password
    }
}`

export const Get_Tasks=gql`
    query getTasks{
        tasks{
            id
            title
            description
            user{
                id
                name
                email
            }
        }
    }
`
export const Get_Task=gql`
 query getTask($id:ID!){
    task(id:$id){
        id
        title
        description
        user{
            id
            name
            email
        }
    }
 }`