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
      Respondents: [],
      Petitioners: [],
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
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`CrimeNumber`}
          name={`CrimeNumber`}
          label={`CrimeNumber`}
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`PoliceStationName`}
          name={`PoliceStationName`}
          label={`PoliceStationName`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`Sections`}
          name={`Sections`}
          label={`Sections`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`DateOfArrest`}
          name={`DateOfArrest`}
          label={`DateOfArrest`}
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`CrlMpNo`}
          name={`CrlMpNo`}
          label={`CrlMpNo`}
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`SessionJudge`}
          name={`SessionJudge`}
          label={`SessionJudge`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`DateOfDismissal`}
          name={`DateOfDismissal`}
          label={`DateOfDismissal`}
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`PoliceStationName`}
          name={`PoliceStationName`}
          label={`PoliceStationName`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`Date`}
          name={`Date`}
          label={`Date`}
          value={""}
          type="number"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`JailName`}
          name={`JailName`}
          label={`JailName`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
        />
        <FloatingInput
          id={`ToDistrict`}
          name={`ToDistrict`}
          label={`ToDistrict`}
          value={""}
          type="text"
          onChange={(e) => vakalathForm.handleChange()}
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
