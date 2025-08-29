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
          <div className="card">
            <div className="newUser">
              <h3>문의</h3>
              <table className="list-table">
                <thead>
                  <tr>
                    <th>작성일</th>
                    <th>내용</th>
                    <th>답변</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 데이터 자리 */}
                  {[
                    { id: 1, date: "2025-08-27", content: "문의 내용 1" },
                    { id: 2, date: "2025-08-26", content: "문의 내용 2" }
                  ].map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.content}</td>
                      <td>
                        <NavLink to={`/inquiry/${item.id}`} className="detail-link">
                          자세히
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card profile-card">
            <div className="profile-image">사진</div>
            <div className="profile-info">
              <p>관리자</p>
              <span>아이디</span>
            </div>
            <div className="profile-actions">
            </div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="card">
            <div className="newUser">
              <h3>FAQ</h3>
            </div>
            <table className="list-table">
              <thead>
                <tr>
                  <th>자주 묻는 질문</th>
                  <th>답변</th>
                </tr>
              </thead>
              <tbody>
                {/* 데이터 자리 */}
                <tr>
                  <td>자주 묻는 질문 1</td>
                  <td>
                    <NavLink to="/faq/1" className="detail-link">
                      수정
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <td>자주 묻는 질문 2</td>
                  <td>
                    <NavLink to="/faq/2" className="detail-link">
                      수정
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Post
