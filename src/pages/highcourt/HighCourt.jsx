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
import RespondentDetails from "./RespondentDetails";
import PetitionerDetails from "./PetitionerDetails";

function HighCourt({ casedata }) {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const [filecase] = useFileCaseMutation();
  const modalRef = useRef(null);
  const userDetails = useSelector((state) => state.user.userInfo);
  const [triggerGetCaseById, { data, isLoading }] = useLazyGetCaseByIdQuery();
  const [petitionerCount, setPetitionerCount] = useState(1);
  const [updateForm] = useEditFileCaseMutation();
  const [petitioners, setPetitioners] = useState([
    { name: '', address: '', age: '' },
  ]);
  const [respondents, setRespondents] = useState([
    { name: '', address: '', age: '' },
  ]);
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
      // if (data?.case) {
      //   console.log("lkfdfghkjh", values);

      //   updateForm({ ...values });
      // } else {
      //   filecase(values);
      // }
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
    vakalathForm.setFieldValue('petitioners', [
    {
        "name": "Rajesh Kumar",
        "address": "12A, Banjara Hills, Hyderabad - 500034",
        "age": "8"
    },
    {
        "name": "Meena Kumari",
        "address": "12A, Banjara Hills, Hyderabad - 500034",
        "age": "13"
    }
]);
    vakalathForm.setFieldValue('respondents', [
    {
        "name": "Ravi Verma",
        "address": "21B, Jubilee Hills, Hyderabad - 500033",
        "age": "13"
    },
    {
        "name": "Ravi Verma",
        "address": "21B, Jubilee Hills, Hyderabad - 500033",
        "age": "13"
    },
    {
        "name": "Ravi Verma",
        "address": "21B, Jubilee Hills, Hyderabad - 500033",
        "age": "13"
    },
]);
  }, [petitioners, respondents]);

  const formatDate = () => {
    const rawDate = vakalathForm.values.Date;

    if (!rawDate) return '';

    const parsedDate = new Date(rawDate);

    return isNaN(parsedDate) ? '' : parsedDate.toISOString().split('T')[0];
  };

  useEffect(() => {
    document.title = "HighCourt"
  }, [])

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
              <option value="CMA">CMA</option>
              <option value="CRP">CRP</option>
              <option value="FIRST APPEAL">FIRST APPEAL</option>
              <option value="SECOND APPEAL">SECOND APPEAL</option>
              <option value="WRIT APPEAL">WA</option>
              <option value="Writ Affidavit">Writ</option>
              <option value="ANTICIPATORY BAIL">AB</option>
              <option value="BAIL">BAIL</option>
              <option value="CRIMINAL APPEAL">CRLA</option>
              <option value="CRIMINAL REVISION CASE">CRLRC</option>
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
        <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
        <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
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
