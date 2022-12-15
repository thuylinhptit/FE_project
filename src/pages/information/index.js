import "./index.css";
import DefaultAvatar from "../../assets/default_avatar.png";
import { AiFillCamera } from "react-icons/ai";
import { FaUser, FaVenusMars } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const InformationPage = () => {

  return (
    <div className="box-wrapper">
      <div id="profile">
        <div className="heading">
          <h3 className="mt-1">Profile</h3>
        </div>
        <div className="info mt-3">
          <div className="d-inline-block avatar-group">
            <div className="avatar-wrapper d-flex flex-column justify-content-center my-2 position-relative">
              <div className="avatar">
                <img
                  src={DefaultAvatar}
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
                    type="file"
                    id="upload-avatar"
                    className="d-none"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h5>Thuy Linh</h5>
          </div>
        </div>
        <div className="main-info px-5 mt-4 d-flex flex-column gap-1">
          <div className="info-field d-flex justify-content-between py-2">
            <div className="label">
              <FaUser />
            </div>
            <div className="value">Thuy Linh</div>
          </div>
          <div className="info-field d-flex justify-content-between py-2">
            <div className="label">
              <MdEmail />
            </div>
            <div className="value">thuylinh123@gmail.com</div>
          </div>
          <div className="info-field d-flex justify-content-between py-2">
            <div className="label">
              <HiUserGroup />
            </div>
            <div className="value">HMI Lab</div>
          </div>
          <div className="info-field d-flex justify-content-between py-2">
            <div className="label">
              <FaVenusMars />
            </div>
            <div className="value">Female</div>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-center px-5">
          <button className="btn btn-success">Done</button>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
