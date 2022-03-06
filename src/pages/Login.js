import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div className="page">
      <div className="container">
        <div className="login">
          <h1>Страница для логина</h1>
          <form onSubmit={login} className="form">
            <MyInput type="text" placeholder="Enter login" />
            <MyInput
              type="password"
              placeholder="Enter password"
              autoComplete="on"
            />
            <MyButton>Войти</MyButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
