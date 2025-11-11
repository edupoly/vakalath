// App.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "./services/userApi";
import { setUser } from "./services/userSlice";
import { Packer } from "docx";
import { renderAsync } from "docx-preview";
import { CRLATemplate } from "./pages/highcourt/crla/template";
import { ABTemplate } from "./pages/criminal/anticiptoryBail/template1";
import { AntiBailTemplate } from "./pages/highcourt/antibail/template";
import { initialValues } from "./services/initialFormValues";

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

   const containerRef = useRef(); 
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const doc = CRLATemplate && CRLATemplate(initialValues["criminalAppeal"]);
      if (doc) {
        Packer.toBlob(doc).then((blob) => {
          renderAsync(blob, containerRef.current, null, {
            className: "docx-preview",
            style: { width: "100%", height: "500px", border: "1px solid #ccc" },
          });
        });
      }
    }
  }, []);
  return (
    <div className="body-bg">
      <div className="w-100 position-relative">
        <Sidebar isShow={isShow} setIsShow={setIsShow} />
        <div className="main-screen">
          <Navbar isShow={isShow} setIsShow={setIsShow} />
          <Outlet isShow={isShow} setIsShow={setIsShow} />
          {/* <div className="doc-previewer">
            <div ref={containerRef} />
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default App;
