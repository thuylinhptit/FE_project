import { json, useLocation } from 'react-router';
import { useEffect, useState } from "react";
import "./index.css";
import authServices from '../../../services/authServices';
import { icons } from 'react-icons/lib';
import { toast } from 'react-toastify';


const RoomDetailPage = () => {
  const { state } = useLocation()
  console.log(state)

  const [roomDetailData, setRoomDetailData] = useState([]);
  const [checkTime, setCheckTime] = useState({
    start_time: "",
    end_time: ""
  });

  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setCheckTime((time_old) => {
      return {
        ...time_old,
        [name]: value
      }
    })
  };

  const handleButtonAdd = async () => {
    console.log(roomDetailData);
    console.log(checkTime);
    const response = await Promise.all(roomDetailData.map(async (item) => {
      const data = {
        ...checkTime,
        staff_id: item.id
      }
      await authServices.shift(data)

    }))
    if (response) {
      toast("Booking room success", {
        type: "success",
      });
    }
  }

  useEffect(() => {
    setRoomDetailData(state.selectedMember)
  }, [])
  return (
    <div className="box-wrapper">
      <div className="booking-room">
        <div className="text-center mt-2">
          <h3>Meeting Room</h3>
        </div>
        <div className="row mt-4">
          <div className="col-md-5">
            <div className="text-center">
              <h4>Information</h4>
            </div>
            <div className="room-info">
              <div className="d-flex justify-content-between">
                <div className="label">Room</div>
                <div className="value">Meeting Room</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="label">Code</div>
                <div className="value">EC01</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="label">Author</div>
                <div className="value">
                  {
                    user?.name
                  }
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="label">Status</div>
                <div className="value">Active</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="label">Start time: </div>
                <div className="form-group">
                  <div className="form-field">
                    <input onChange={onChange} value={checkTime.start_time} type="datetime-local" id="starttime" name="start_time" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="label">End time: </div>
                <div className="form-group">
                  <div className="form-field">
                    <input onChange={onChange} value={checkTime.end_time} type="datetime-local" id="endtime" name="end_time" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-center position-relative">
              <h4>Members</h4>
              <div
                onClick={handleButtonAdd}
                className="btn btn-success position-absolute btn-sm"
                style={{ right: 0, top: 0 }}
              >
                Add
              </div>
            </div>
            <div className="list-members mt-4 d-flex flex-column gap-2">

              {
                roomDetailData.map((item, index) => (
                  <div key={index} className="member">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="member-info">
                        <div className="name">
                          {
                            item.name
                          }
                        </div>
                        <div className="email">
                          {
                            item.email
                          }
                        </div>
                      </div>
                      <div className="action">
                        <div className="btn p-0">
                          <i className="fa-solid fa-trash text-danger"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
