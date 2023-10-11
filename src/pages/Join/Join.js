import React from "react";
import "./Join.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  const [form, setForm] = useState({
    year: "연도",
    month: "월",
    day: "일",
  });

  const now = new Date();

  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y.toString() + "년");
  }

  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    months.push(m.toString() + "월");
  }

  let days = [];
  for (let d = 1; d <= 31; d += 1) {
    days.push(d.toString() + "일");
  }

  return (
    <div className="signup">
      <div className="header">
        <button onClick={goToLogin} className="back-btn">
          ﹤ 뒤로
        </button>
        <div></div>
      </div>

      <div className="header-title">
        <div className="title">회원가입</div>
        <div></div>
      </div>

      <div className="personalInfo">
        <div className="detail">
          <div>기본 정보</div>
          <a className="remark">필수 사항</a>
        </div>
        <input className="input email" type="text" placeholder="이메일"></input>
        <input
          className="input password"
          type="password"
          placeholder="비밀번호"
        ></input>
        <input
          className="input password-verify"
          type="password"
          placeholder="비밀번호 확인"
        ></input>

        <div className="detail">
          <div>닉네임과 프로필 이미지</div>
          <a className="non-remark">선택 사항</a>
        </div>
        <input
          className="input nickname"
          type="text"
          placeholder="닉네임"
        ></input>

        <div className="detail">
          <div>전화번호</div>
          <a className="non-remark">선택 사항</a>
        </div>
        <div className="mobile-number">
          <select className="pre-number">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>019</option>
          </select>
          <input
            className="input mobile"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요."
          ></input>
        </div>

        <div className="detail">
          <div>생일</div>
          <a className="non-remark">선택 사항</a>
        </div>
        <div className="birth">
          <select
            className="birthyear"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          >
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="birthmonth"
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
          >
            {months.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="birthday"
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          >
            {days.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button className="joinbtn">
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Join;