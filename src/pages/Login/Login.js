import React, { useState } from "react";
import "./Login.scss";
import logo1 from "./Logo.png";
import logo2 from "./logo_wecode.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const setChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const goToMain = () => {
    navigate("/main");
  };

  const goToJoin = () => {
    navigate('/join');
  };

  return (
    <div className="login">
      <div className="logo-board">
        <img src={logo1} alt="로고1" />
        <img src={logo2} alt="로고2" />
      </div>

      <div className="email-password">
        <input className="input" type="text" placeholder="이메일"></input>
        <input
          className="input"
          type="password"
          placeholder="비밀번호"
        ></input>
        <button onClick={goToMain} className="loginbtn">
          로그인
        </button>
      </div>

      <div className="buttons">
        <button onClick={goToJoin} className="btn join">
          회원 가입
        </button>
        <div>|</div>
        <button className="btn find">비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default Login;
