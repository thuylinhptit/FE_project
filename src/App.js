import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useRoutes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import router from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  const content = useRoutes(router);
  const auth = useAuth();

  return (
    <>
      {auth.isInitialized ? content : <div>loading...</div>}
      <ToastContainer />
    </>
  );
}

export default App;
