import React, { useEffect, useState } from "react";
import { highCourtInitialValues } from "../../../services/functions";
import { useFileCaseMutation } from "../../../services/caseDetailsApi";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";

function ABForm({ caseType, setFormData, modalRef }) {
    const [filecase] = useFileCaseMutation();
    const [petitioners, setPetitioners] = useState([
        { name: "", address: "", age: "" },
    ]);
    const [respondents, setRespondents] = useState([
        { name: "", address: "", age: "" },
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
            // DateOfArrest: "2023-06-21",
            CrlMpNo: "CRLMP/2023/412",
            SessionJudge: "Hon'ble Justice R. Subramanian",
            DateOfDismissal: "2023-07-18",
            ToDistrict: "Madurai District",

            Petitioners: [
                {
                    "Name": "Mohammed Irfan",
                    "Address": "Plot No. 45, Mehdipatnam, Hyderabad, Telangana",
                    "Age": 35
                },
                {
                    "Name": "Kavitha Reddy",
                    "Address": "House No. 8-76, Gachibowli, Hyderabad, Telangana",
                    "Age": 30
                }
            ],
            Respondents: [
                {
                    "Name": "GHMC Commissioner",
                    "Address": "GHMC Office, Tank Bund Road, Hyderabad, Telangana",
                    "Age": 50
                },
                {
                    "Name": "Municipal Engineer",
                    "Address": "Circle Office, Kukatpally, Hyderabad, Telangana",
                    "Age": 45
                }
            ],
            Userid: userDetails && userDetails["_id"],

        },
        onSubmit: (values) => {
            console.log(values);
            setFormData({ ...values });
            filecase({ ...values, FilledFrom: "anticiptorybail" });
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

    useEffect(() => {
        console.log("caseType", caseType);
        setPetitioners(vakalathForm.values?.Petitioners)
        setRespondents(vakalathForm.values?.Respondents)
    }, [])
    return (
        <form onSubmit={vakalathForm.handleSubmit} className=" m-5 my-md-4">
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
                <FloatingInput
                    id={`CrlpNo`}
                    name={`CrlpNo`}
                    label={`CrlpNo`}
                    value={vakalathForm?.values?.CrlpNo}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id={`Date`}
                    name={`Date`}
                    label={`Date`}
                    value={vakalathForm?.values?.Date}
                    type="date"
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
                    id={`CrlMpNo`}
                    name={`CrlMpNo`}
                    label={`CrlMpNo`}
                    value={vakalathForm?.values?.CrlMpNo}
                    type="text"
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
                    type="date"
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

export default ABForm;
