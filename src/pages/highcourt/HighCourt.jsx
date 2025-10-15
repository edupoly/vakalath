import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import HighCourtTemplate from "./template";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import {
  useEditFileCaseMutation,
  useFileCaseMutation,
  useGetCaseByIdQuery,
  useLazyGetCaseByIdQuery,
} from "../../services/caseDetailsApi";
import HighCourtModal from "./Modal";
import { useSelector } from "react-redux";
import { countEntries, highCourtInitialValues } from "../../services/functions";
import { useParams } from "react-router-dom";

function HighCourt({ casedata }) {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const [filecase] = useFileCaseMutation();
  const modalRef = useRef(null);
  const userDetails = useSelector((state) => state.user.userInfo);
  const [triggerGetCaseById, { data, isLoading }] = useLazyGetCaseByIdQuery();
  const [petitionerCount, setPetitionerCount] = useState(1);
  const [respondentCount, setRespondentCount] = useState(1);
  const [updateForm] = useEditFileCaseMutation();

  const vakalathForm = useFormik({
    enableReinitialize: true,
    initialValues: data?.case || {
      ...highCourtInitialValues,
      Userid: userDetails && userDetails["_id"],
    },
    // initialValues: { ...highCourtInitialValues, Userid: userDetails && userDetails['_id'] },
    onSubmit: (values) => {
      console.log(values);
      setFormData({ ...values });
      if (data?.case) {
        console.log("lkfdfghkjh", values);

        updateForm({ ...values });
      } else {
        filecase(values);
      }
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    },
  });

  useEffect(() => {
    if (id) {
      triggerGetCaseById(id);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      const petitionerCount1 = Object.keys(highCourtInitialValues).filter(
        (key) => key.startsWith("PetitionerName")
      ).length;
      const respondentCount1 = Object.keys(highCourtInitialValues).filter(
        (key) => key.startsWith("RespondentName")
      ).length;
      setPetitionerCount(petitionerCount1 || 1);
      setRespondentCount(respondentCount1 || 1);
      console.log(
        "petitionerCount1respondentCount1",
        petitionerCount1,
        respondentCount1
      );
    }
  }, [highCourtInitialValues]);

  const addPetitioner = (type) => {
    if (type === "Petitioner") {
      setPetitionerCount((prev) => prev + 1);
    } else if (type === "Respondent") {
      setRespondentCount((prev) => prev + 1);
    }
  };

  const formatDate = () => {
    const rawDate = vakalathForm.values.Date;

    if (!rawDate) return '';

    const parsedDate = new Date(rawDate);

    return isNaN(parsedDate) ? '' : parsedDate.toISOString().split('T')[0];
  };

  useEffect(() => {
    document.title = "HighCourt"
  },[])

  return (
    <div>
      <form onSubmit={vakalathForm.handleSubmit} className=" m-5 my-md-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
          <div className="form-floating col  mb-3">
            <input
              className="form-control"
              id="CouncilName"
              placeholder="Enter Council Name"
              name="CouncilName"
              value={vakalathForm.values.CouncilName}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="CouncilName" className="ms-3">
              Council Name
            </label>
          </div>

          <div className="form-floating col mb-3">
            <input
              className="form-control"
              id="BarCouncilEnrollmentNumber"
              placeholder="Enter Bar Council Enrollment Number"
              name="BarCouncilEnrollmentNumber"
              value={vakalathForm.values.BarCouncilEnrollmentNumber}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="BarCouncilEnrollmentNumber" className="ms-3">
              Bar Council Enrollment Number
            </label>
          </div>

          <div className="form-floating col mb-3">
            <input
              className="form-control"
              id="CouncilAddress"
              placeholder="Enter Council Address"
              name="CouncilAddress"
              value={vakalathForm.values.CouncilAddress}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="CouncilAddress" className="ms-3">
              Council Address
            </label>
          </div>

          <div className="form-floating col mb-3">
            <select
              className="form-select"
              id="CaseType"
              name="CaseType"
              value={vakalathForm.values.CaseType}
              onChange={vakalathForm.handleChange}
            >
              <option value="" disabled>
                Select Case Type
              </option>
              <option value="Civil">Civil</option>
              <option value="Criminal">Criminal</option>
              <option value="Writ">Writ</option>
            </select>
            <label htmlFor="CaseType" className="ms-3">
              Case Type
            </label>
          </div>

          <div className="form-floating col mb-3">
            <input
              type="date"
              className="form-control"
              id="Date"
              name="Date"
              value={formatDate()}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="Date" className="ms-3">
              Date
            </label>
          </div>

          <div className="form-floating col mb-3">
            <input
              className="form-control"
              id="CourtName"
              placeholder="Enter Court Name"
              name="CourtName"
              value={vakalathForm.values.CourtName}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="CourtName" className="ms-3">
              Court Name
            </label>
          </div>

          <div className="form-floating col mb-3">
            <input
              className="form-control"
              id="State"
              placeholder="Enter State"
              name="State"
              value={vakalathForm.values.State}
              onChange={vakalathForm.handleChange}
            />
            <label htmlFor="State" className="ms-3">
              State
            </label>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <label>Petitioner</label>
            {petitionerCount < 3 && (
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => addPetitioner("Petitioner")}
              >
                + Add Petitioner
              </button>
            )}
          </div>
          {[...Array(petitionerCount)].map((_, i) => (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3" key={i}>
              <div className="form-floating col mb-3">
                <input
                  className="form-control"
                  id={`PetitionerName${i + 1}`}
                  name={`PetitionerName${i + 1}`}
                  placeholder={`PetitionerName${i + 1}`}
                  value={vakalathForm.values[`PetitionerName${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`PetitionerName${i + 1}`} className="ms-3">
                  Petitioner Name
                </label>
              </div>

              <div className="form-floating col mb-3">
                <input
                  className="form-control"
                  id={`PetitionerAddress${i + 1}`}
                  name={`PetitionerAddress${i + 1}`}
                  placeholder={`PetitionerAddress${i + 1}`}
                  value={vakalathForm.values[`PetitionerAddress${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`PetitionerAddress${i + 1}`} className="ms-3">
                  Petitioner's Address
                </label>
              </div>

              <div className="form-floating col mb-3">
                <input
                  type="number"
                  className="form-control"
                  id={`PetitionerAge${i + 1}`}
                  name={`PetitionerAge${i + 1}`}
                  placeholder={`PetitionerAge${i + 1}`}
                  value={vakalathForm.values[`PetitionerAge${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`PetitionerAge${i + 1}`} className="ms-3">
                  Petitioner Age
                </label>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <label>Respondent</label>
            {respondentCount < 3 && (
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => addPetitioner("Respondent")}
              >
                + Add Respondent
              </button>
            )}
          </div>
          {[...Array(respondentCount)].map((_, i) => (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3" key={i}>
              <div className="form-floating col mb-3">
                <input
                  className="form-control"
                  id={`RespondentName${i + 1}`}
                  name={`RespondentName${i + 1}`}
                  placeholder={`RespondentName${i + 1}`}
                  value={vakalathForm.values[`RespondentName${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`RespondentName${i + 1}`} className="ms-3">
                  Respondent Name
                </label>
              </div>

              <div className="form-floating col mb-3">
                <input
                  className="form-control"
                  id={`RespondentAddress${i + 1}`}
                  name={`RespondentAddress${i + 1}`}
                  placeholder={`RespondentAddress${i + 1}`}
                  value={vakalathForm.values[`RespondentAddress${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`RespondentAddress${i + 1}`} className="ms-3">
                  Respondent's Address
                </label>
              </div>

              <div className="form-floating col mb-3">
                <input
                  type="number"
                  className="form-control"
                  id={`RespondentAge${i + 1}`}
                  name={`RespondentAge${i + 1}`}
                  placeholder={`RespondentAge${i + 1}`}
                  value={vakalathForm.values[`RespondentAge${i + 1}`] || ""}
                  onChange={vakalathForm.handleChange}
                />
                <label htmlFor={`RespondentAge${i + 1}`} className="ms-3">
                  Respondent Age
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center justify-content-md-end ">
          <button
            type="submit"
            className="btn btn-success border border-3 border-success  w-md-50 w-lg-25"
          >
            Submit
          </button>
        </div>
      </form>
      <HighCourtModal formData={formData} modalRef={modalRef} />
    </div>
  );
}

export default HighCourt;
