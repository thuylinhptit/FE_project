import "./index.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoTextSize } from "react-icons/go";
import { FcDepartment } from "react-icons/fc";
import { BiGridSmall } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import authServices from "../../services/authServices";
import DefaultAvatar from "../../assets/default_avatar.png";
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    age: 22,
    phone: "023456789",
    department: "",
    role: "",
    face_embed: []
  });
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (id, username) => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('id', id);
    formData.append('username', username);
    const response = await axios.post("http://127.0.0.1:8080/api/face/register/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },

    })

  };

  const handleRegister = async () => {
    const res = await authServices.register(registerData);
    console.log(res);
    if (res.status >= 200 && res.status <= 300) {
      //await handleSubmission(res.data.id, res.data.username)
      toast("Register success", {
        type: "success",
      });
      navigate("/login")
    }
    console.log(registerData);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  console.log(selectedFile);
  return (
    <div className="box-wrapper">
      <div className="register-form">
        <h2 className="pt-1">Register</h2>
        <form>
          <div className="info mt-3">
            <div className="d-inline-block avatar-group">
              <div className="avatar-wrapper d-flex flex-column justify-content-center my-2 position-relative">
                <div className="avatar">
                  <img
                    src={selectedFile ? URL.createObjectURL(selectedFile) : DefaultAvatar}
                    width="100%"
                    height="100%"
                    id="avatar"
                    alt=""
                  />
                </div>
                <div className="thumb">
                  <div className="upload-avatar">
                    <label htmlFor="upload-avatar" title="upload avatar">
                      <AiFillCamera />
                    </label>
                    <input
                      onChange={changeHandler}
                      type="file"
                      id="upload-avatar"
                      className="d-none"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-field">
              <span className="icon">
                <FaUser />
              </span>
              <input onChange={onChange} type="text" id="username" name="username" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="form-field">
              <span className="icon">
                <GoTextSize />
              </span>
              <input onChange={onChange} type="text" id="name" name="name" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" >Email</label>
            <div className="form-field">
              <span className="icon">
                <MdEmail />
              </span>
              <input onChange={onChange} type="email" id="email" name="email" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <div className="form-field">
              <span className="icon">
                <FcDepartment />
              </span>
              <input onChange={onChange} type="text" id="department" name="department" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <div className="form-field">
              <span className="icon">
                <BiGridSmall />
              </span>
              <input onChange={onChange} type="text" id="role" name="role" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="form-field">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input onChange={onChange} type="password" id="password" name="password" className="form-control" />
            </div>
          </div>

          <div className="form-group mt-3">
            <button onClick={handleRegister} type="button" id="login-btn" className="btn btn-success">
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
