import React from "react";
import { NavLink } from "react-router-dom";
import "./DashBoard.css";

const User = () => {
  return (
    <div className="dashboard-container">
      {/* 사이드바 */}
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

      {/* 메인 컨텐츠 */}
      <main className="main-content">
        {/* 상단 : 신규 회원 목록 + 관리자 프로필 */}
        <section className="top-section">
          {/* 신규 회원 목록 */}
          <div className="card large">
            <h3>신규 회원 목록</h3>
            <table className="list-table">
              <thead>
                <tr>
                  <th>가입일</th>
                  <th>이름</th>
                  <th>닉네임</th>
                  <th>아이디</th>
                  <th>검사 횟수</th>
                  <th>검사 정보</th>
                </tr>
              </thead>
              <tbody>
                {/* 데이터 들어갈 자리 */}
              </tbody>
            </table>
          </div>

          {/* 관리자 프로필 */}
          <div className="card profile-card">
            <div className="profile-image">사진</div>
            <div className="profile-info">
              <p>관리자</p>
              <span>아이디</span>
            </div>
            <div className="profile-actions">
              <button>사진</button>
            </div>
          </div>
        </section>

        {/* 하단 : 사용자 목록 */}
        <section className="bottom-section">
          <div className="card medium">
            <div className="card-header">
              <h3>사용자 목록</h3>
              <NavLink to="/UserSetting" className={({ isActive }) => (isActive ? "active" : "")}>
                더보기
              </NavLink>
            </div>
            <table className="list-table">
              <thead>
                <tr>
                  <th>가입일</th>
                  <th>이름</th>
                  <th>닉네임</th>
                  <th>아이디</th>
                  <th>검사 횟수</th>
                  <th>검사 정보</th>
                </tr>
              </thead>
              <tbody>
                {/* 데이터 들어갈 자리 */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
