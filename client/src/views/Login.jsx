import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/action/actiontype";
import { useState } from "react";
import { useDispatch } from "react-redux";
const LoginSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputDataLogin, setInputDataLogin] = useState({
    userName: "",
    password: "",
  });
  function handleInput(event) {
    let user = {
      ...inputDataLogin,
      [event.target.name]: event.target.value,
    };
    setInputDataLogin(user);
  }
  function submitForm(e) {
    e.preventDefault();
    dispatch(login(inputDataLogin)).then(() => {
      navigate("/");
    });
  }
  return (
    <div className="container-login">
      <div className="left-section">
        <div className="vector-1"></div>
        <div
          style={{
            height: "286px",
            marginTop: "126px",
            marginLeft: "126px",
          }}
        >
          {/* -webkit-linear-gradient(#eee, #333); */}
          <h4
            className=""
            style={{
              fontWeight: 700,
              fontSize: "117.75px",
              lineHeight: "142.51px",
              width: "383px",
              background:
                "linear-gradient(98.28deg, #EB5757 4.09%, #9B51E0 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "Text",
            }}
          >
            TO DO LIST
          </h4>
        </div>
        <div className="image-section"></div>
        <div className="vector-2"></div>
      </div>
      <div className="login-section">
        <div className="welcome-to-do-list">welcome to To Do List</div>
        <div className="please-sign-in">
          Please sign-in to your account, and start manage further
        </div>
        <div className="sign-in">Sign In</div>
        <form onSubmit={submitForm}>
          <div>
            <label className="username">Username</label>
            <input
              type="text"
              className="user-login"
              placeholder="Your registered username"
              onChange={handleInput}
              name="userName"
            />
          </div>
          <div>
          <label className="user-password">Password</label>
            <input
              type="password"
              placeholder="Your passsword"
              onChange={handleInput}
              name="password"
              className="password-login"
            />
          </div>
          <button className="submit-login-button"><p className="text-sign-in">Sign in</p></button>
        </form>
        <p className="sign-up-description">Don't have an account yet? <Link style={{textDecoration:"none",color:"blue"}} to={"/register"}>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginSection;
