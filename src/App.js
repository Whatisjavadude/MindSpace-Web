import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Menu/DashBoard";
import User from "./Menu/User";
import UserSetting from "./Menu/UserSetting";
import Post from "./Menu/Post";
import Statistics from "./Menu/Statistics";
import Setting from "./Menu/Setting";
import "./App.css";

// ....

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/User" element={<User />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/UserSetting" element={<UserSetting />} />
      </Routes>
    </div>
  );
};

export default App;
