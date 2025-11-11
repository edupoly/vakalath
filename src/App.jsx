// App.jsx
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "./services/userApi";
import { setUser } from "./services/userSlice";
import { AdvocateCommrTemplate } from "./pages/lowerCourt/Adoptmemo/templateAdvocateCommr";
import { CRPTemplate } from "./pages/civil/crp/template1";
import { Packer } from "docx";
import { renderAsync } from "docx-preview";
import { AttachmentBeforeJudgmentTemplate } from "./pages/lowerCourt/AttachmentBeforeJudgement/template";
import { BailLowerCourtTemplate } from "./pages/lowerCourt/Bail Lowercourt/template";
import { CopyApplicationTemplate } from "./pages/lowerCourt/Copy Application/template";
import { CentralAdministrativeTribunalTemplate } from "./pages/lowerCourt/Cat";
import { CaveatLowerCourtTemplate } from "./pages/lowerCourt/caveat-lower-court";
import { ChiefAffidavitTemplate } from "./pages/lowerCourt/chiefAffidavit";
import { complaintUnderSection200 } from "./pages/lowerCourt/complaintUnderSection200";
import { compromiseNiAct138 } from "./pages/lowerCourt/compromise-ni-act-138";
import { counterdvc } from "./pages/lowerCourt/counter-dvc";
import { crlAppeal } from "./pages/lowerCourt/crlAppeal";
import { custodyOfChild } from "./pages/lowerCourt/custodyOfChild";
import { discharge } from "./pages/lowerCourt/discharge";
import { divorceCruelty } from "./pages/lowerCourt/divorce-cruelty";

function App() {
  const [isShow, setIsShow] = useState(window.innerWidth < 1024 ? false : true);
  const token = localStorage.getItem("token");
  const { data, isLoading } = useGetProfileQuery(token, { skip: !token });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef();
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    if (isLoading) return;
    if (data?.user) {
      dispatch(setUser(data.user));
    } else {
      navigate("/login");
    }
  }, [data, isLoading, token]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const doc = divorceCruelty(); // use the named export
      Packer.toBlob(doc).then((blob) => {
        renderAsync(blob, containerRef.current, null, {
          className: "docx-preview",
          style: { width: "100%", height: "500px", border: "1px solid #ccc" },
        });
      });
    }
  }, []);

  const handleDownload = () => {
    if (!complaintUnderSection200) return;
    const doc = divorceCruelty();
    Packer.toBlob(doc).then((blob) => {
      const fileName = `divorceCruelty.docx`;
      saveAs(blob, fileName);
    });
  };
  return (
    <div className="body-bg">
      <div className="w-100 position-relative">
        <Sidebar isShow={isShow} setIsShow={setIsShow} />
        <div className="main-screen">
          <Navbar isShow={isShow} setIsShow={setIsShow} />
          {/* <Outlet isShow={isShow} setIsShow={setIsShow} /> */}
          <button className="btn btn-success p-2" onClick={handleDownload}>
            Download DOCX
          </button>
          <div ref={containerRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
