import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  useEffect(()=>{
  document.title="Home"
  })
  
  return (
    <div className="home d-flex flex-wrap justify-content-center mt-5 mb-5">
      <Link to={"/cases"} className="card-custom text-decoration-none text-dark">
       <div>
      <div className="fs-4 fw-bold">District Court</div>
      <div className="mt-3">No of Cases : {3}</div>
      </div>
      </Link>
       <Link to={"/cases"}  className="card-custom text-decoration-none text-dark">
       <div>
      <div className="fs-4 fw-bold">High Court</div>
      <div className="mt-3">No of Cases : {4}</div>
      </div>
      </Link>
       <Link to={"/cases"}  className="card-custom text-decoration-none text-dark">
       <div>
      <div className="fs-4 fw-bold">Supreme Court</div>
      <div className="mt-3">No of Cases : {5}</div>
      </div>
      </Link>
       <Link to={"/cases"}  className="card-custom text-decoration-none text-dark">
       <div>
      <div className="fs-4 fw-bold">Clients</div>
      <div className="mt-3">No of Clients : {2}</div>
      </div>
      </Link>
    </div>
  );
};

export default Home;