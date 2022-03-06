import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    {
      path: "/posts",
      title: "Posts",
    },
    {
      path: "/about",
      title: "About",
    },
  ];
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <MyButton onClick={logout}>Logout</MyButton>
          <TransitionGroup className="navbar__links">
            {links.map((link) => (
              <CSSTransition
                key={link.path}
                timeout={500}
                classNames="navbar__link"
              >
                <Link to={link.path} className="navbar__link">
                  {link.title}
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
