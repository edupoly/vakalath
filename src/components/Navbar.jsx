import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../services/userSlice";

const Navbar = ({ isShow, setIsShow }) => {
  const userDetails = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/login")
  };
  return (
    <div className="d-flex justify-content-between align-items-center w-100 py-1 ms-4 me-4">
      <div className="list-unstyled d-block d-lg-none">
        <i
          onClick={() => setIsShow(true)}
          className="bi bi-list list-icon-mobile fs-1"
        ></i>
      </div>
      <div>
        {isShow ? (
          <div className="fs-3">Vakalath - AI based Court Filing System</div>
        ) : (
          <div className="fw-bold fs-1">VAKALATH</div>
        )}
      </div>
      <div>
        {!userDetails ? (
          <Link to={"/login"} className="btn btn-success">
            Login
          </Link>
        ) : isShow ? (
          <ul className="list-unstyled d-flex gap-4 align-items-center  mb-0">
            <span>
              <li className="text-secondary">Welcome..</li>
              <li className="text-capitalize">
                {userDetails?.firstname} {userDetails?.lastname}
              </li>
            </span>
            <li>
              <button
                className="btn btn-danger btn-sm fw-semibold"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <div className="avatar-circle">
            {userDetails?.firstname[0]}
            {userDetails?.lastname[0]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
