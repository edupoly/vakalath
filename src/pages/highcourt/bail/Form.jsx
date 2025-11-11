import React, { useState } from "react";
import { highCourtInitialValues } from "../../../services/functions";
import { useFileCaseMutation } from "../../../services/caseDetailsApi";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";

function BailForm() {
  const [filecase] = useFileCaseMutation();
  const [petitioners, setPetitioners] = useState([
    { Name: "", Address: "", Age: "" },
  ]);
  const [respondents, setRespondents] = useState([
    { Name: "", Address: "", Age: "" },
  ]);
  const userDetails = useSelector((state) => state.user.userInfo);

  const vakalathForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      CrlpNo: "",
      CrimeNumber: "",
      PoliceStationName: "",
      Sections: "",
      DateOfArrest: "",
      Respondents: respondents,
      Petitioners: petitioners,
      CrlMpNo: "",
      SessionJudge: "",
      DateOfDismissal: "",
      JailName: "",
      ToDistrict: "",

    },
    onSubmit: (values) => {
      console.log(values);
      setFormData({ ...values });
      filecase({ ...values, FilledFrom: "bail" });
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    },
  });

  const formatDate = () => {
    const rawDate = vakalathForm.values.Date;
    if (!rawDate) return "";
    const parsedDate = new Date(rawDate);
    return isNaN(parsedDate) ? "" : parsedDate.toISOString().split("T")[0];
  };
  return (
    <form onSubmit={vakalathForm.handleSubmit} className=" ">

      <PetitionerDetails
        petitioners={petitioners}
        setPetitioners={setPetitioners}
      />
      <RespondentDetails
        respondents={respondents}
        setRespondents={setRespondents}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
        <FloatingInput
          id={`CrlpNo`}
          name={`CrlpNo`}
          label={`CrlpNo`}
          value={vakalathForm?.values?.CrlpNo}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`CrimeNumber`}
          name={`CrimeNumber`}
          label={`CrimeNumber`}
          value={vakalathForm?.values?.CrimeNumber}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`PoliceStationName`}
          name={`PoliceStationName`}
          label={`PoliceStationName`}
          value={vakalathForm?.values?.PoliceStationName}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`Sections`}
          name={`Sections`}
          label={`Sections`}
          value={vakalathForm?.values?.Sections}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`DateOfArrest`}
          name={`DateOfArrest`}
          label={`DateOfArrest`}
          value={vakalathForm?.values?.DateOfArrest}
          type="number"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`CrlMpNo`}
          name={`CrlMpNo`}
          label={`CrlMpNo`}
          value={vakalathForm?.values?.CrlMpNo}
          type="number"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`SessionJudge`}
          name={`SessionJudge`}
          label={`SessionJudge`}
          value={vakalathForm?.values?.SessionJudge}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`DateOfDismissal`}
          name={`DateOfDismissal`}
          label={`DateOfDismissal`}
          value={vakalathForm?.values?.DateOfDismissal}
          type="number"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`Date`}
          name={`Date`}
          label={`Date`}
          value={vakalathForm?.values?.Date}
          type="number"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`JailName`}
          name={`JailName`}
          label={`JailName`}
          value={vakalathForm?.values?.JailName}
          type="text"
          onChange={vakalathForm.handleChange}
        />
        <FloatingInput
          id={`ToDistrict`}
          name={`ToDistrict`}
          label={`ToDistrict`}
          value={vakalathForm?.values?.ToDistrict}
          type="text"
          onChange={vakalathForm.handleChange}
        />
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
  );
}

export default BailForm;
