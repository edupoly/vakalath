import React, { useEffect, useRef, useState } from "react";
import {
  useDeleteFileCaseMutation,
  useGetAllCasesByIdQuery,
  useLazyGetAllCasesByIdQuery,
} from "../services/caseDetailsApi";
import { useSelector } from "react-redux";
import "./MainPage.css";
import HighCourtModal from "./highcourt/Modal";
import { Link, useParams } from "react-router-dom";
import AnticiptoryBailFile from "./criminal/anticiptoryBail/template";
import CriminalBailFile from "./criminal/bail/template";
import HighCourtTemplate from "./highcourt/template";

const MainPage = ({ type, setType }) => {
  const userDetails = useSelector((state) => state.user.userInfo);
  const [triggerGetAllCasesById, { data, isLoading }] = useLazyGetAllCasesByIdQuery();
  const [deleteFileCase] = useDeleteFileCaseMutation();

  const modalRef = useRef(null);

  const [pdfData, setPdfData] = useState("");
  const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    console.log("casese", data);
  }, [data]);

  function openCase(selectedCase) {
    setPdfData(selectedCase);
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  }

  async function deleteCase(id) {

    await deleteFileCase(id);
    triggerGetAllCasesById(userDetails["_id"])

  }

  useEffect(() => {
    if (userDetails && userDetails["_id"]) {
      triggerGetAllCasesById(userDetails["_id"]);
    }
  }, [userDetails]);

  return (
    <div className="container">
      <h2 className="mb-4 fw-bold">Client's Cases</h2>
      <div className="table-responsive">
        <table className="table table-bordered mx-auto">
          <thead className="table-primary">
            <tr>
              <th className="text-center">Sl.no</th>
              <th className="text-center">Court</th>
              <th className="text-center">Petitioner</th>
              <th className="text-center">Respondent</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.cases?.map((c, i) => (
              <React.Fragment key={i}>
                {(!type || type == c?.FilledFrom) &&
                  <tr className="text-center">
                    <td>{i + 1}</td>
                    <td>{c?.FilledFrom}</td>
                    <td>{c?.Petitioners[0] ? c?.Petitioners?.[0]?.Name : c?.PetitionerName1 ? c?.PetitionerName1 : ""}</td>
                    <td>{c?.Respondents[0] ? c?.Respondents?.[0]?.Name : c?.RespondentName1 ? c?.RespondentName1 : ""}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-success px-2 py-1"
                        onClick={() => {
                          openCase(c);
                          setSelectedType(c?.CaseType)
                        }}
                      >
                        <i className="bi bi-eye lh-1"></i>
                      </button>
                      <Link
                        to={`/${c?.FilledFrom}/${c["_id"]}`}
                        className="btn btn-info text-light px-2 py-1"
                      >
                        <i className="bi bi-pencil-square lh-1"></i>
                      </Link>
                      <button
                        className="btn btn-danger px-2 py-1"
                        onClick={() => {
                          deleteCase(c["_id"]);
                        }}
                      >
                        <i className="bi bi-trash3 lh-1"></i>
                      </button>
                    </td>
                  </tr>
                }
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <HighCourtModal formData={pdfData} modalRef={modalRef} type={selectedType} />
    </div>
  );
};

export default MainPage;