import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import authServices from "../../services/authServices";
import "./index.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = async () => {
    const res = await authServices.login(loginData);
    console.log(res);
    if (res.status === 200) {
      const user = res.data;
      login(user);
      toast("Login success", {
        type: "success",
      });
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setLoginData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  return (
    <div className="box-wrapper">
      <div className="login-form">
        <h2 className="pt-1">Login</h2>
        <p id="error" className="text-danger"></p>
        <form id="#login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-field">
              <span className="icon">
                <MdEmail />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-field">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <a href="#forgot" id="forgot-password">
              <small>Forgot password?</small>
            </a>
          </div>
          <div className="form-action d-flex flex-column gap-2">
            <button
              type="button"
              id="login-btn"
              className="btn btn-success"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              id="register-btn"
              className="btn btn-secondary"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
