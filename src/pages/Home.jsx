import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLazyGetCasesByIdQuery } from "../services/caseDetailsApi";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";

const Home = () => {
  const userDetails = useSelector((state) => state.user.userInfo);
  const [triggerGetCasesById, { data, isLoading }] = useLazyGetCasesByIdQuery();
  const [selectedType, setType] = useState(null)
  useEffect(() => {
    document.title = "Home"
  })
  useEffect(() => {
    console.log("casese", data);
  }, [data]);
  useEffect(() => {
    if (userDetails && userDetails["_id"]) {
      triggerGetCasesById(userDetails["_id"]);
    }
  }, [userDetails]);
  return (
    <div className="home d-flex flex-wrap justify-content-center my-2">
      {data?.caseData?.[0] ? data?.caseData?.map((type) => {
        return <div key={type?.name} onClick={()=>setType(type?.name)} className={`card-custom text-decoration-none p-3 text-dark ${selectedType == type?.name ? "active" : ""}`}>
          <div className="fs-4 fw-bold">{type?.name}</div>
          <div className="">No of Cases : {type?.quantity}</div>
        </div>
      })
        : <div className="card-custom text-dark p-3">
          <div className="">No cases filled yet.</div>
        </div>
      }
      <MainPage type={selectedType} setType={setType} />
      {/* <Link to={"/cases"} className="card-custom text-decoration-none text-dark">
        <div>
          <div className="fs-4 fw-bold">High Court</div>
          <div className="mt-3">No of Cases : {4}</div>
        </div>
      </Link>
      <Link to={"/cases"} className="card-custom text-decoration-none text-dark">
        <div>
          <div className="fs-4 fw-bold">Supreme Court</div>
          <div className="mt-3">No of Cases : {5}</div>
        </div>
      </Link>
      <Link to={"/cases"} className="card-custom text-decoration-none text-dark">
        <div>
          <div className="fs-4 fw-bold">Clients</div>
          <div className="mt-3">No of Clients : {2}</div>
        </div>
      </Link> */}
    </div>
  );
};

export default Home;