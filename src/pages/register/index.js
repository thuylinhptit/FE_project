import "./index.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="box-wrapper">
      <div className="register-form">
        <h2 className="pt-1">Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-field">
              <span className="icon">
                <FaUser />
              </span>
              <input type="text" id="username" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="form-field">
              <span className="icon">
                <MdEmail />
              </span>
              <input type="email" id="email" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-field">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input type="password" id="password" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm your password</label>
            <div className="form-field">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input
                type="password"
                id="confirm-password"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <button type="submit" id="login-btn" className="btn btn-success">
              Register
            </button>
          </div>
          <div className="mt-2">
            <span>
              {" "}
              Already have an account? <Link to="/login"> Sign in</Link>.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
