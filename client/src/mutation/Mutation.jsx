import { gql } from "@apollo/client";

export const Delete_User=gql`
    mutation deleteUser($id:ID!){
        deleteUser(id:$id){
            id
            name
        }
    }
`
export const Add_User=gql`
mutation AddUser($name:String!,$email:String!,$password:String!){
    createUser(name:$name,email:$email,password:$password){
        id
        name
        email
    }
}`

export const Edit_user=gql`
mutation editUser($input:UpdateUserDetails!){
    updateUser(input:$input){
        name
        email
    }
}`

export const Add_Task=gql`
 mutation AddTask($input:CreateTask!){
    createTask(input:$input){
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

 export const Delete_Task=gql`
    mutation deleteTask($id:ID!){
        deleteTask(id:$id){
            id
            title
            description
        }
 }`

 export const Edit_Task=gql`
  mutation editiTask($id:ID!,$title:String, $description:String){
    updateTask(id:$id,title:$title,description:$description){
        id
        title
        description
    }
  }`