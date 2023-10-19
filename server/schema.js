import User from "./models/user.js";
import Task from "./models/task.js";
import gql from "graphql-tag";

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    user: User
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Query {
    user(id: ID!): User
    task(id: ID!): Task
    users: [User!]
    tasks: [Task!]
  }
  input UpdateUserDetails {
    id: ID!
    name: String
    email: String
    password: String
  }
  input CreateTask {
    title: String!
    description: String!
    user: String!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(input: UpdateUserDetails): User
    deleteUser(id: ID!): User

    createTask(input: CreateTask!): Task
    updateTask(id: ID!, title: String, description: String): Task
    deleteTask(id: ID!): Task
  }
`;
const resolvers = {
  Task: {
    user: async (parent, args) => await User.findById(parent.user),
  },
  Query: {
    user: async (parent, args) => await User.findById(args.id),
    users: async (parent, args) => await User.find(),
    tasks: async (parent, args) => await Task.find(),
    task: async (parent, args) => await Task.findById(args.id),
  },
  Mutation: {
    createUser: async (parent, args) => await User.create(args),
    updateUser: async (parent, args) =>
      await User.findByIdAndUpdate(
        args.input.id,
        { $set: { name: args.input.name, email: args.input.email } },
        { new: true }
      ),
    deleteUser: async (parent, args) => {
      Task.find({ user: args.id }).then((task) =>
        task.forEach((data) => data.deleteOne())
      );
      return await User.findByIdAndDelete(args.id);
    },

    createTask: async (parent, args) => await Task.create(args.input),
    updateTask: async (parent, args) =>
      await Task.findByIdAndUpdate(
        args.id,
        { $set: { title: args.title, description: args.description } },
        { new: true }
      ),
    deleteTask: async (parent, args) => await Task.findByIdAndDelete(args.id),
  },
};

export { typeDefs, resolvers };
