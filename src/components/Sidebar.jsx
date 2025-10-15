import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ isShow, setIsShow }) => {
  const location = useLocation()

  const sidebarDetails = [
    { path: "/district", label: "District Court" },
    { path: "/highcourt", label: "High Court of Telangana" },
    { path: "/supremecourt", label: "Supreme Court" },
    { path: "/companylaw", label: "Company Law (NCLT)" },
    { path: "/clients", label: "Clients Management" },
    { path: "/profile", label: "Personal Profile" },
  ]

  return (
    <div className={`sidebar text-center ${isShow ? "d-block" : "d-none"}`}>
      <div className="fs-1 fw-bold">
        <Link className="text-decoration-none text-light" to={'/'}>VAKALATH</Link>
        <i
          onClick={() => setIsShow(false)}
          className="bi bi-x-lg close-tag d-block d-lg-none"
        ></i>
      </div>
      <ul className="list-unstyled text-start d-flex flex-column gap-4 mt-5">
        {sidebarDetails.map(({ path, label }) => (
          <Link key={path} className="text-decoration-none text-white" to={path}>
            <li className={`fs-5 ms-4 p-1 ps-3 rounded-start-pill ${location?.pathname.includes(path) ? "active" : ""}`}>
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
