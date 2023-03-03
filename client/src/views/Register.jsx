import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/action/actiontype";
import { useState } from "react";
import { useDispatch } from "react-redux";
const RegisterSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputDataRegister, setInputDataRegister] = useState({
    userName: "",
    password: "",
    phoneNumber:"",
    email:"",
    name:""
  });
  function handleInput(event) {
    let user = {
      ...inputDataRegister,
      [event.target.name]: event.target.value,
    };
    setInputDataRegister(user);
  }
  function submitForm(e) {
    e.preventDefault();
    dispatch(register(inputDataRegister)).then(() => {
      navigate("/login");
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
        <div className="sign-in">SignUp</div>
        <form onSubmit={submitForm}>
          <div>
            <label className="username">Name</label>
            <input
              type="text"
              className="user-login"
              placeholder="Your name"
              onChange={handleInput}
              name="name"
            />
          </div>
          <div>
          <label className="user-password"> PhoneNumber</label>
            <input
              type="text"
              placeholder="+62"
              onChange={handleInput}
              name="phoneNumber"
              className="password-login"
            />
          </div>
            <label className="label-user-email">Email</label>
            <input
              type="text"
              className="user-email"
              placeholder="example@gmail.com"
              onChange={handleInput}
              name="email"
            />
            <label className="user-name-register-label">UserName</label>
            <input
              type="text"
              className="user-name-register"
              placeholder="Your Username"
              onChange={handleInput}
              name="userName"
            />
            <label className="password-register-label">Password</label>
            <input
              type="password"
              className="password-register"
              placeholder="*****"
              onChange={handleInput}
              name="password"
            />
          
          <button className="submit-register-button"><p className="text-sign-in">Sign up</p></button>
        </form>
        <p className="text-register">Already have an account? <Link style={{textDecoration:"none",color:"blue"}} to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterSection;
