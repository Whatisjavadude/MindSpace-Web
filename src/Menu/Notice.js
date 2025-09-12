import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./DashBoard.css";
import axios from "axios";

const Notice = () => {
    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    const [searchTop, setSearchTop] = useState("");
    const [searchBottom, setSearchBottom] = useState("");

    const [notices, setNotices] = useState([
        { id: 1, date: "2025-02-01", title: "공지1", content: "첫 번째 공지 내용입니다." },
        { id: 2, date: "2025-05-18", title: "공지2", content: "두 번째 공지 내용입니다." },
        { id: 3, date: "2025-09-23", title: "공지3", content: "세 번째 공지 내용입니다." }
    ]);

    const [openRow, setOpenRow] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");


    const handleEdit = (notice) => {
        setOpenRow(notice.id);
        setEditTitle(notice.title);
        setEditContent(notice.content);
    };

    const handleSave = (id) => {
        setNotices((prev) =>
            prev.map((n) =>
                n.id === id ? { ...n, title: editTitle, content: editContent } : n
            )
        );
        setOpenRow(null);
        setEditTitle("");
        setEditContent("");
    };

    useEffect(() => {
        axios.get("http://localhost:5001/api/users")
            .then((res) => {
                console.log("회원정보 불러오기 성공:", res.data);
                const allUsers = res.data.users || [];
                setUsers(allUsers);

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

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
                <section className="top-section">
                    <div className="user-top">
                        <div className="card">
                            <div className="search">
                                <div className="card-title">공지</div>
                            </div>

                            <table className="list-table border w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-2">작성일</th>
                                        <th className="p-2">제목</th>
                                        <th className="p-2">답변</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notices.map((notice) => (
                                        <React.Fragment key={notice.id}>
                                            <tr>
                                                <td className="p-2">{notice.date}</td>
                                                <td className="p-2">{notice.title}</td>
                                                <td className="p-2">
                                                    <button
                                                        className="text-blue-600 underline"
                                                        onClick={() =>
                                                            openRow === notice.id ? setOpenRow(null) : handleEdit(notice)
                                                        }
                                                    >
                                                        {openRow === notice.id ? "닫기" : "수정"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {openRow === notice.id && (
                                                <tr>
                                                    <td colSpan={3} className="p-4 bg-gray-50">
                                                        <div className="mb-2">
                                                            <label className="block mb-1 text-sm font-medium">제목 </label>
                                                            <input
                                                                type="text"
                                                                value={editTitle}
                                                                onChange={(e) => setEditTitle(e.target.value)}
                                                                className="w-full border p-2 rounded"                                                            />
                                                        </div>
                                                        <div className="mb-2">
                                                            <label className="block mb-1 text-sm font-medium">내용 </label>
                                                            <textarea
                                                                value={editContent}
                                                                onChange={(e) => setEditContent(e.target.value)}
                                                                className="w-full h-24 border p-2 rounded"
                                                            />
                                                        </div>
                                                        <div className="flex justify-end gap-2 mt-2">
                                                            <button
                                                                className="px-3 py-1 bg-blue-500 text-white rounded"
                                                                onClick={() => handleSave(notice.id)}
                                                            >
                                                                저장
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
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
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Notice;
