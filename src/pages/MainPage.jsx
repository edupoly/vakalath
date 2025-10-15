import React, { useEffect, useRef, useState } from "react";
import {
  useDeleteFileCaseMutation,
  useGetAllCasesByIdQuery,
  useLazyGetAllCasesByIdQuery,
} from "../services/caseDetailsApi";
import { useSelector } from "react-redux";
import "./MainPage.css";
import HighCourtModal from "./highcourt/Modal";
import { Link } from "react-router-dom";

const MainPage = () => {
  const userDetails = useSelector((state) => state.user.userInfo);
  const [triggerGetAllCasesById, { data, isLoading }] =
    useLazyGetAllCasesByIdQuery();
  const [deleteFileCase] = useDeleteFileCaseMutation();

  const modalRef = useRef(null);

  const [pdfData, setPdfData] = useState("");
  useEffect(() => {
    console.log("casese", data);
  }, [data]);

  function openCase(selectedCase) {
    setPdfData(selectedCase);
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  }

  function deleteCase(id) {
    
    deleteFileCase(id);
  }

  useEffect(() => {
    if (userDetails && userDetails["_id"]) {
      triggerGetAllCasesById(userDetails["_id"]);
    }
  }, [userDetails]);

  return (
    <div className="container mt-4 vh-100">
      <h2 className="mb-4 fw-bold">Client's Cases</h2>
      <div className="table-responsive">
        <table className="table table-bordered mx-auto">
          <thead className="table-primary">
            <tr>
              <th className="text-center">Sl.no</th>
              <th className="text-center">Petitioner</th>
              <th className="text-center">Respondent</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.cases?.map((c, i) => (
              <tr key={i} className="text-center">
                <td>{i + 1}</td>
                <td>{c?.PetitionerName1}</td>
                <td>{c?.RespondentName1}</td>
                <td className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      openCase(c);
                    }}
                  >
                    <i className="bi bi-eye me-2"></i>
                    <span className="btn-label">View Case</span>
                  </button>
                  <Link
                    to={`/highcourt/${c["_id"]}`}
                    className="btn btn-info text-light"
                  >
                    <i className="bi bi-pencil-square me-2"></i>
                    <span className="btn-label">Edit Case</span>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteCase(c["_id"]);
                    }}
                  >
                    <i className="bi bi-trash3 me-2"></i>
                    Delete Case
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HighCourtModal formData={pdfData} modalRef={modalRef} />
    </div>
  );
};

export default MainPage;