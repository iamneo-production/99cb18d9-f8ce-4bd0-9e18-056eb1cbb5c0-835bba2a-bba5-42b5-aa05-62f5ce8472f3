import { forwardRef, useRef, useState } from "react";
import useMyNavigate from "../utilityFiles/RouterConfig/useMyNavigate";
import UserLogin from "./LoginComponents/UserLogin";
import AdminLogin from "./LoginComponents/AdminLogin";
import Toggler from "./LoginComponents/Toggler";
import "./styles/loginsignup.css";

const Login = forwardRef(({}, ref) => {
  // passed on pages
  const customNavigation = useMyNavigate();
  const runnerRef = useRef();

  function toggler(ps) {
    runnerRef.current.classList.toggle("l-s-login-runner-run");
  }

  return (
    <>
      <div className="l-s-container" style={{ backgroundColor: "white" }}>
        <div className="l-s-c1 l-s-c-h">
          <div className="l-s-pg-router-div">
            <h2>New here ?</h2>
            <p>
              Create new account and experience our service, click on the bellow
              button to signup
            </p>
            <button ref={ref}>Sign up</button>
          </div>
        </div>
        <div className="l-s-c2">
          <div className="l-s-login-runner-wrapper">
            <div ref={runnerRef} className="l-s-login-runner">
              <UserLogin customNavigation={customNavigation} />
              <AdminLogin customNavigation={customNavigation} />
            </div>
            <Toggler toggler={toggler} />
          </div>
        </div>
      </div>
    </>
  );
});
export default Login;
