import { Navigate } from "react-router-dom";
import Authenticated from "../components/Authenticated";
import InformationPage from "../pages/information";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import RoomPage from "../pages/room";
import ChooseMemberPage from "../pages/room/choose_member"
import RoomDetailPage from "../pages/room/detail";

const router = [
  {
    path: "",
    element: <Navigate to="/room" replace />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "information",
    element: (
      <Authenticated>
        <InformationPage />
      </Authenticated>
    ),
  },
  {
    path: "choose_member",
    element: (
      <Authenticated>
        <ChooseMemberPage />
      </Authenticated>
    ),
  },
  {
    path: "room",
    element: (
      <Authenticated>
        <RoomPage />
      </Authenticated>
    ),
  },
  {
    path: "room/:roomId",
    element: (
      <Authenticated>
        <RoomDetailPage />
      </Authenticated>
    ),
  },
];

export default router;
