// App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "./services/userApi";
import { setUser } from "./services/userSlice";

function App() {
  const [isShow, setIsShow] = useState(window.innerWidth < 1024 ? false : true);
  const token = localStorage.getItem('token');
  const { data, isLoading } = useGetProfileQuery(token, { skip: !token });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    if (isLoading) return;
    if (data?.user) {
      dispatch(setUser(data.user));
    } else {
      navigate('/login');
    }
  }, [data, isLoading, token]);


  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, []);

  return (
    <div className="body-bg">
      <div className="w-100 position-relative">
        <Sidebar isShow={isShow} setIsShow={setIsShow} />
        <div className="main-screen">
          <Navbar isShow={isShow} setIsShow={setIsShow} />
          <Outlet isShow={isShow} setIsShow={setIsShow} />
        </div>
      </div>
    </div>
  );
}

export default App;
