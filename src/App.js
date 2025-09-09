import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Menu/DashBoard";
import User from "./Menu/User";
import UserSetting from "./Menu/UserSetting";
import NewTotal from "./Menu/NewTotal";
import UserTotal from "./Menu/UserTotal";
import Post from "./Menu/Post";
import FAQ from "./Menu/FAQ";
import Notice from "./Menu/Notice";
import Ask from "./Menu/Ask";
import Statistics from "./Menu/Statistics";
import Setting from "./Menu/Setting";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/User" element={<User />} />
        <Route path="/NewTotal" element={<NewTotal />} />
        <Route path="/UserTotal" element={<UserTotal />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Ask/:id" element={<Ask />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/UserSetting" element={<UserSetting />} />
      </Routes>
    </div>
  );
};

export default App;
