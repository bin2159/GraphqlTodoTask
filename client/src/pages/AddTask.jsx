import React, { useState } from "react";
import { Add_Task } from "../mutation/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import { Get_Tasks, Get_Users } from "../queries/Queries";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState();

  const { data, loading, error } = useQuery(Get_Users);
  const [addTask] = useMutation(Add_Task, {
    variables: {
      input: { title, description, user },
    },
    refetchQueries: [{ query: Get_Tasks }]
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || user === "") {
      return alert("Please fill all feilds");
    }
    addTask();
    setTitle("");
    setDescription("");
    setUser("");
    navigate("/task");
  };
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col w-1/2 mt-[50px] rounded-3xl h-[320px] bg-gray-200 items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
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
          placeholder="Enter description"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />
        <select
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        >
          <option key={0}>{"Select user"}</option>

          {data.users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-[300px] bg-slate-900 text-white rounded-md mt-3 font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
