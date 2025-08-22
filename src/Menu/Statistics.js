import React from "react";
import { NavLink } from "react-router-dom";

const Statistics = () => {
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
            <h3>방문자 통계</h3>
            <div className="placeholder"></div>
          </div>

          <div className="card profile-card">
            <div className="profile-image">사진</div>
            <div className="profile-info">
              <p>관리자</p>
              <span>아이디</span>
            </div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="card small">
            <h3>검사 횟수 평균</h3>
            <div className="placeholder"></div>
          </div>
          <div className="card small">
            <h3>변화도 평균</h3>
            <div className="placeholder"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Statistics;
