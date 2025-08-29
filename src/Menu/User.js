import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 실제 API 주소로 변경하세요!
    axios.get("https://localhost:5001/api/users")
      .then((res) => {
        console.log("회원정보 불러오기 성공:", res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("회원정보 불러오기 실패:", err);
      });
  }, []);

  return (
    <div className="user-container">
      <h2>사용자 관리</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>아이디</th>
            <th>가입일</th>
            <th>검사횟수</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">회원이 없습니다.</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name || "이름"}</td>
                <td>{user.username || "아이디"}</td>
                <td>{user.joinDate || "가입일"}</td>
                <td>{user.testCount ?? 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
