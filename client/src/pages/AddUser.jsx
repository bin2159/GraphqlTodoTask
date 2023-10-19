import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Add_User } from "../mutation/Mutation";
import { useNavigate } from "react-router-dom";
import { Get_Users } from "../queries/Queries";

const AddUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser] = useMutation(Add_User, {
    variables: { name, email, password },
    refetchQueries: [{ query: Get_Users }],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return alert("Please fill all feilds");
    }
    addUser();
    navigate('/')
  };
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col w-1/2 mt-[50px] rounded-3xl h-[320px] bg-gray-200 items-center justify-center"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
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
  );
};

export default AddUser;
