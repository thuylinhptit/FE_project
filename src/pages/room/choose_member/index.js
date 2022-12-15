import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import userServices from '../../../services/userServices';
import { toast } from "react-toastify";
import authServices from '../../../services/authServices';

const ChooseMemberPage = () => {
    const navigate = useNavigate();
    const [selectedMember, setSelectedMember] = useState([]);
    const [chooseMemberData, setChooseMemberData] = useState([]);

    const getListMember = async () => {
        const res = await userServices.getListMember();
        console.log(res);
        setChooseMemberData(res.data);
    }

    const onChangeMember = (member, check) => {
        if (check == true) {
            setSelectedMember([...selectedMember, member])
        }
        else {
            let cache = selectedMember.filter(item => item.id != member.id);
            setSelectedMember(cache)
        }

    }
    useEffect(() => {
        console.log(selectedMember)

        return () => {

        }
    }, [selectedMember])

    useEffect(() => {
        getListMember();
    }, [])


    const handleChooseMember = async () => {
        navigate("/room/1", { state: { selectedMember } })
    };

    return (
        <div className="box-wrapper">
            <div className="booking-room">
                <div className="text-center mt-2">
                    <h3>Choose Participants</h3>
                </div>
                <div className="listing d-flex flex-column gap-3 mt-4">
                    {
                        chooseMemberData.map((item, index) => (
                            <label key={index} htmlFor="user-1" className="option d-flex justify-content-between">
                                <div className="d-flex gap-2">

                                    <div className="info">
                                        <div className="name">
                                            {
                                                item.name
                                            }
                                            <span className="email">
                                                {
                                                    item.email
                                                }
                                            </span>
                                        </div>
                                        <div className="team">
                                            {
                                                item.department
                                            }
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => onChangeMember(item, e.target.checked)} type="checkbox" id="user-1" name="participants" />
                            </label>
                        ))
                    }

                </div>
            </div>
            <button
                type="button"
                id="register-btn"
                className="btn btn-secondary"
                onClick={handleChooseMember}
            >
                Add
            </button>
        </div>
    );
};

export default ChooseMemberPage;
