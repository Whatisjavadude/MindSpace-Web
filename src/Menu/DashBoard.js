// 대시보드
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/users")
      .then((res) => {
        const allUsers = res.data.users || [];

        // 오늘 날짜 기준 7일 전
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        // 가입일이 일주일 이내인 회원
        const recentUsers = allUsers.filter(user => {
          if (!user.createdAt) return false;
          const createdDate = new Date(user.createdAt);
          return createdDate >= oneWeekAgo;
        });

        setNewUsers(recentUsers);
      })
      .catch((err) => {
        console.error("회원정보 불러오기 실패:", err);
      });
  }, []);

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
        <section className="top">
          <div className="card">
            <div className="card-header">
              <div className="title">방문자 현황</div>
            </div>
            <div className="graph">그래프</div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="title">신규 회원</div>
              <NavLink to="/NewTotal" className="plus-btn">+</NavLink>
            </div>

            <div className="user-list">
              {newUsers.length === 0 ? (
                <p className="graph">신규 회원이 없습니다.</p>
              ) : (
                newUsers.slice(0, 3).map((user, idx) => (
                  <div key={idx} className="user-item">
                    <div className="user-name">{user.name || "이름"}</div>
                    <div className="user-info">
                      {user.email || "아이디"} |{" "}
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }).replace(/\. /g, ".").replace(/\.$/, "")
                        : "가입일"}
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

        <section className="bottom">
          <div className="card">
            <div className="card-header">
              <div className="title">FAQ</div>
              <NavLink to="/users" className="plus-btn">더보기</NavLink>
            </div>

            <div className="faq-list">
              {[
                { id: 1, title: "FAQ 질문 1", content: "내용" },
                { id: 2, title: "FAQ 질문 2", content: "내용" },
                { id: 3, title: "FAQ 질문 3", content: "내용" }
              ].map((faq) => (
                <div key={faq.id} className="faq-item">
                  <p className="faq-question">{faq.title}</p>
                  <span className="faq-answer">{faq.content}</span>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="title">공지</div>
              <NavLink to="/notice" className="plus-btn">더보기</NavLink>
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
