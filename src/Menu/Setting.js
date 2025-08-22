import React from 'react'
import { NavLink } from "react-router-dom";

const Setting = () => {
  return (
    <div className="dashboard-container">
          <nav className="sidebar">
            <div className="logo">LOGO</div>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  대시보드
                </NavLink>
              </li>
              <li>
                <NavLink to="/User" className={({ isActive }) => (isActive ? "active" : "")}>
                  사용자 관리
                </NavLink>
              </li>
              <li>
                <NavLink to="/Post" className={({ isActive }) => (isActive ? "active" : "")}>
                  게시판 관리
                </NavLink>
              </li>
              <li>
                <NavLink to="/Statistics" className={({ isActive }) => (isActive ? "active" : "")}>
                  통계
                </NavLink>
              </li>
              <li>
                <NavLink to="/Setting" className={({ isActive }) => (isActive ? "active" : "")}>
                  설정
                </NavLink>
              </li>
            </ul>
          </nav>
    
          <main className="main-content">
            <section className="top-section">
              <div className="card large">
                <h2 className="UserList">관리자 계정</h2>
                <div className="Bar">
                  <div>가입일</div>
                  <div>이름</div>
                  <div>닉네임</div>
                  <div>아이디</div>
                </div>
              </div>
              <div className="card large">
                <h2 className="UserList">관리자 목록</h2>
                <div className="Bar">
                  <div>가입일</div>
                  <div>이름</div>
                  <div>닉네임</div>
                  <div>아이디</div>
                </div>
              </div>
          </section>
          </main> 
    </div>
  )
}

export default Setting
