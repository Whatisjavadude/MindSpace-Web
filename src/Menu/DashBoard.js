import React from "react";
import { NavLink } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  const newUsers = [];

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
          <div className="card">
            <h3>방문자 현황</h3>
            <div className="placeholder">그래프</div>
          </div>
          <div className="card medium">
            <div className="card-header">
              <h3>신규 회원</h3>
              <NavLink to="/users" className="plus-btn">+</NavLink>
            </div>

            <div className="user-list">
              {newUsers.length === 0 ? (
                <p className="empty">신규 회원이 없습니다.</p>
              ) : (
                newUsers.map((user, idx) => (
                  <div key={idx} className="user-item">
                    <div className="user-name">{user.name || "이름"}</div>
                    <div className="user-info">
                      {user.email || "아이디"} | {user.date || "가입 날짜 & 시간"}
                    </div>
                    <hr />
                  </div>
                ))
              )}
            </div>
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
          <div className="card">
            <div className="card-header">
              <h3>FAQ</h3>
              <NavLink to="/users" className="plus-btn">+</NavLink>
            </div>

            <div className="faq-list">
              <div className="faq-item">
                <p className="faq-question">자주 묻는 질문 1</p>
                <p className="faq-answer">답변</p>
                <hr />
              </div>
              <div className="faq-item">
                <p className="faq-question">자주 묻는 질문 2</p>
                <p className="faq-answer">답변</p>
                <hr />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>공지</h3>
              <NavLink to="/notice" className="plus-btn">+</NavLink>
            </div>

            <div className="notice-list">
              {[
                { id: 1, title: "공지 제목1", content: "내용", isNew: true },
                { id: 2, title: "공지 제목2", content: "내용", isNew: false },
                { id: 3, title: "공지 제목3", content: "내용", isNew: false }
              ].map((notice) => (
                <div key={notice.id} className="notice-item">
                  <p className="notice-title">
                    {notice.isNew && <span className="new-label">[NEW] </span>}
                    {notice.title}
                  </p>
                  <span className="notice-content">{notice.content}</span>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
