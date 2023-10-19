import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex m-8 bg-gray-200 rounded-md hover:bg-gray-100">
        <Link to='/adduser'><li className="ml-4 text-pink-600 hover:text-gray-900">Add User</li></Link>
        <Link to='/addtask'><li className="ml-4 text-pink-600 hover:text-gray-900">Add Task</li></Link>
        <Link to='/task'><li className="ml-4 text-pink-600 hover:text-gray-900">Tasks</li></Link>
        <Link to='/'><li className="ml-4 text-pink-600 hover:text-gray-900">User</li></Link>

      </ul>
    </>
  );
};

export default Navbar;
