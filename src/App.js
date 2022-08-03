import React from "react";
import Navigator from "./Components/Navigator";
import Users from "./Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./Components/UserDetail";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navigator />
      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update" element={<UpdateUser />} />
      <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}
