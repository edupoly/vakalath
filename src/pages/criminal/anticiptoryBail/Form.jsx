import React, { useEffect, useState } from "react";
import { useFileCaseMutation } from "../../../services/caseDetailsApi";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";
import HighCourtModal from "../../highcourt/Modal";

function ABForm({ caseType, formData, setFormData }) {
  const [filecase] = useFileCaseMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      CrlpNo: "CRLP/2023/1456",
      CrimeNumber: "Crime No. 789/2023",
      PoliceStationName: "Anna Nagar Police Station",
      Sections: "IPC 376, 354A, 506(ii)",
      Date: "2023-06-21",
      CrlMpNo: "CRLMP/2023/412",
      SessionJudge: "Hon'ble Justice R. Subramanian",
      DateOfDismissal: "2023-07-18",
      ToDistrict: "Madurai District",
      Petitioners: [
        {
          Name: "Mohammed Irfan",
          Address: "Plot No. 45, Mehdipatnam, Hyderabad, Telangana",
          Age: 35,
        },
        {
          Name: "Kavitha Reddy",
          Address: "House No. 8-76, Gachibowli, Hyderabad, Telangana",
          Age: 30,
        },
      ],
      Respondents: [
        {
          Name: "GHMC Commissioner",
          Address: "GHMC Office, Tank Bund Road, Hyderabad, Telangana",
          Age: 50,
        },
        {
          Name: "Municipal Engineer",
          Address: "Circle Office, Kukatpally, Hyderabad, Telangana",
          Age: 45,
        },
      ],
      Userid: userDetails?._id,
    },
    onSubmit: (values) => {
      setFormData({ ...values });
      //   filecase({ ...values, FilledFrom: "anticiptorybail" });
      setIsModalOpen(true); // open modal
    },
  });

  useEffect(() => {
    setPetitioners(vakalathForm.values.Petitioners);
    setRespondents(vakalathForm.values.Respondents);
  }, [vakalathForm.values]);

  const fields = [
    "CrlpNo",
    "Date",
    "CrimeNumber",
    "PoliceStationName",
    "Sections",
    "CrlMpNo",
    "SessionJudge",
    "DateOfDismissal",
    "ToDistrict",
  ];

  return (
    <>
      <form onSubmit={vakalathForm.handleSubmit} className="m-5 my-md-4">
        <PetitionerDetails
          petitioners={petitioners}
          setPetitioners={setPetitioners}
          vakalathForm={vakalathForm}
        />
        <RespondentDetails
          respondents={respondents}
          setRespondents={setRespondents}
          vakalathForm={vakalathForm}
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
          {fields.map((field) => (
            <FloatingInput
              key={field}
              id={field}
              name={field}
              label={field}
              value={vakalathForm.values[field]}
              type={field.toLowerCase().includes("date") ? "date" : "text"}
              onChange={vakalathForm.handleChange}
            />
          ))}
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

      <HighCourtModal
        formData={formData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ABForm;
