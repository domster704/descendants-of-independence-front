import React, { useState } from "react";
import * as style from "./Login.module.css";
import logo from "./img/logo.png";
import ViewingBtn from "./ViewingBtn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewing, setViewing] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const toggleViewing = (e) => {
    e.preventDefault();
    setViewing(!viewing);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setEmailError("Введите email");
    }
    if (password.trim() === "") {
      setPasswordError("Введите пароль");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
      setPasswordError("Пароль должен содержать спецсимволы");
    } else {
      const formData = {
        email,
        password,
      };
      console.log(formData);
    }
  };

  return (
    <div className={style.login_wrapper}>
      <div className={style.login}>
        <img className={style.img} src={logo} alt="Logo" />
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={`${style.input} ${emailError && style.error}`}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <div className={style.error_message}>{emailError}</div>
          )}
          <div className={style.password_wrapper}>
            <input
              type={viewing ? "text" : "password"}
              className={`${style.input} ${passwordError && style.error}`}
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <ViewingBtn
              style={style}
              viewing={viewing}
              toggleViewing={toggleViewing}
            />
          </div>
          {passwordError && (
            <div className={style.error_message}>{passwordError}</div>
          )}
          <button type="submit" className={style.btn}>
            Войти
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="6.5" r="3.5" fill="#D9D9D9" />
              <circle cx="6.5" cy="6.5" r="6" stroke="white" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
