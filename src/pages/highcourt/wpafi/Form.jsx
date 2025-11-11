import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useFileCaseMutation, useEditFileCaseMutation } from "../../../services/caseDetailsApi";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";
import HighCourtModal from "../../highcourt/Modal";

function WPAffidavitForm({ caseType, formData, setFormData, modalRef, data }) {
  const [filecase] = useFileCaseMutation();
  const [updateForm] = useEditFileCaseMutation();
  const [petitioners, setPetitioners] = useState([{ Name: "", Address: "", Age: "" }]);
  const [respondents, setRespondents] = useState([{ Name: "", Address: "", Age: "" }]);
  const userDetails = useSelector((state) => state.user.userInfo);

  const affidavitForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      highcourt: "",
      wpNo: "",
      myear: "",
      PETITIONER_ADDRESS: "",
      RESPONDENT_ADDRESS: "",
      verification: "",
      place: "",
      MAIN_PRAYER: "",
      INTERIM_PRAYER: "",
      fdate: "",
      Petitioners: petitioners,
      Respondents: respondents,
      FilledFrom: "",
      CaseType: "",
      Userid: userDetails && userDetails["_id"],
    },
    onSubmit: (values) => {
      setFormData({ ...values });
      if (data?.case) {
        updateForm({ ...values });
      } else {
        filecase({
          ...values,
          FilledFrom: "highcourt",
          CaseType: caseType,
        });
      }
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    },
  });

  const formatDate = (date) => {
    if (!date) return "";
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? "" : parsedDate.toISOString().split("T")[0];
  };

  useEffect(() => {
    document.title = "Writ Petition Affidavit";
    if (data?.case) {
      affidavitForm.setValues({ ...data?.case });
      setPetitioners(data?.case?.Petitioners);
      setRespondents(data?.case?.Respondents);
    }
  }, [data]);

  return (
    <div className="p-5">
      <form onSubmit={affidavitForm.handleSubmit}>
        <PetitionerDetails
          petitioners={petitioners}
          setPetitioners={setPetitioners}
          vakalathForm={affidavitForm}
        />
        <RespondentDetails
          respondents={respondents}
          setRespondents={setRespondents}
          vakalathForm={affidavitForm}
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
          <FloatingInput
            id="highcourt"
            name="highcourt"
            label="High Court"
            value={affidavitForm?.values?.highcourt}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="wpNo"
            name="wpNo"
            label="W.P. No."
            value={affidavitForm?.values?.wpNo}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="myear"
            name="myear"
            label="Year"
            value={affidavitForm?.values?.myear}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="PETITIONER_ADDRESS"
            name="PETITIONER_ADDRESS"
            label="Petitioner Address"
            value={affidavitForm?.values?.PETITIONER_ADDRESS}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="RESPONDENT_ADDRESS"
            name="RESPONDENT_ADDRESS"
            label="Respondent Address"
            value={affidavitForm?.values?.RESPONDENT_ADDRESS}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="verification"
            name="verification"
            label="Verification (Name of Deponent)"
            value={affidavitForm?.values?.verification}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="place"
            name="place"
            label="Place"
            value={affidavitForm?.values?.place}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="MAIN_PRAYER"
            name="MAIN_PRAYER"
            label="Main Prayer"
            value={affidavitForm?.values?.MAIN_PRAYER}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="INTERIM_PRAYER"
            name="INTERIM_PRAYER"
            label="Interim Prayer"
            value={affidavitForm?.values?.INTERIM_PRAYER}
            type="text"
            onChange={affidavitForm.handleChange}
          />
          <FloatingInput
            id="fdate"
            name="fdate"
            label="Affidavit Date"
            value={formatDate(affidavitForm?.values?.fdate)}
            type="date"
            onChange={affidavitForm.handleChange}
          />
        </div>

        <div className="d-flex justify-content-center justify-content-md-end">
          <button
            type="submit"
            className="btn btn-success border border-3 border-success w-md-50 w-lg-25"
          >
            Submit
          </button>
        </div>
      </form>

      <HighCourtModal formData={formData} modalRef={modalRef} type={caseType} />
    </div>
  );
}

export default WPAffidavitForm;
