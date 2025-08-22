import React from 'react'
import { NavLink } from "react-router-dom";

const Post = () => {
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
            <h2 className="UserList">문의</h2>
            <div className="Bar">
              <div>작성일</div>
              <div>내용</div>
              <div>답변</div>
              <button><NavLink to="/UserSetting" className={({ isActive }) => (isActive ? "active" : "")}>등록/수정</NavLink></button>
            </div>
          </div>
        </section>
      </main>  
    </div>
  )
}

export default Post
