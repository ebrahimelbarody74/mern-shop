import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/apiCalls";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFeching, error } = useSelector((state) => state.user);
  console.log(isFeching);
  console.log(error);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    // fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    //   .then((res) => {
    //     res.json();
    //     if (res.status == 200) {
    //       navigate("/");
    //     }
    //     console.log(res);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <form onSubmit={handelSubmit}>
        <h3>SIGN IN</h3>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">Wronge !!</div>}
        <button disabled={isFeching}>LOGIN</button>
        <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
        <a href="#">CREATE A NEW ACCOUNT</a>
      </form>
    </div>
  );
}

export default Login;
