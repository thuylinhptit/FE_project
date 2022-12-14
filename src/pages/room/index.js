import "./index.css";

const RoomPage = () => {
  return (
    <div className="box-wrapper">
      <div className="booking-room">
        <div className="text-center mt-2">
          <h3>Booking Meeting Room</h3>
        </div>
        <div className="listing d-flex flex-column gap-3 mt-4">
          <div className="room-item d-flex justify-content-between align-items-center">
            <div>
              <div className="room">English Classroom | EC01</div>
              <div className="room-status">Active</div>
            </div>
            <a href="#id" className="room-action">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </a>
          </div>
          <div className="room-item d-flex justify-content-between align-items-center">
            <div>
              <div className="room">English Classroom | EC01</div>
              <div className="room-status">Active</div>
            </div>
            <a href="#id" className="room-action">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </a>
          </div>
          <div className="room-item d-flex justify-content-between align-items-center">
            <div>
              <div className="room">English Classroom | EC01</div>
              <div className="room-status">Active</div>
            </div>
            <a href="#id" className="room-action">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </a>
          </div>
          <div className="room-item d-flex justify-content-between align-items-center">
            <div>
              <div className="room">English Classroom | EC01</div>
              <div className="room-status">Active</div>
            </div>
            <a href="#id" className="room-action">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
