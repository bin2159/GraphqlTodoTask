import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Get_User, Get_Users } from "../queries/Queries";
import { useNavigate, useParams } from "react-router-dom";
import { Edit_user } from "../mutation/Mutation";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { data, loading, error } = useQuery(Get_User, { variables: { id } });
  const [updateUser] = useMutation(Edit_user,{variables: { input:{id,name,email}},refetchQueries:[{query:Get_Users}]});

  const setDetails = () => {
    if (data) {
      setName(data.user.name);
      setEmail(data.user.email);
      setPassword(data.user.password);
    }
  };
  useEffect(() => {
    setDetails();
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return alert("Please fill all feilds");
    }
    updateUser();
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
          value={name}
          placeholder="Enter name"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Enter email"
          className="w-[300px] border-b-[1.5px] p-[2px] font-semibold indent-2 border-solid border-gray m-3"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          disabled
          type="password"
          value={password}
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

export default EditUser;
