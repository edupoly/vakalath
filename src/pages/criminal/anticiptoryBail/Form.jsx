import React, { useEffect, useState } from "react";
import { highCourtInitialValues } from "../../../services/functions";
import { useEditFileCaseMutation, useFileCaseMutation } from "../../../services/caseDetailsApi";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";
import HighCourtModal from "../../highcourt/Modal";

function ABForm({ caseType,formData, setFormData, modalRef }) {
    const [filecase] = useFileCaseMutation();
    const [updateForm] = useEditFileCaseMutation();
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
            "CrlpNo": "CRLP/2023/1456",
            "CrimeNumber": "Crime No. 789/2023",
            "PoliceStationName": "Anna Nagar Police Station",
            "Sections": "IPC 376, 354A, 506(ii)",
            "Date": "2025-10-26",
            "CrlMpNo": "CRLMP/2023/412",
            "SessionJudge": "Hon'ble Justice R. Subramanian",
            "DateOfDismissal": "2025-10-26",
            "ToDistrict": "Madurai District",
            "Petitioners": [
                {
                    "Name": "Rajesh Kumar",
                    "Address": "12A, Banjara Hills, Hyderabad - 500034",
                    "Age": "33"
                }
            ],
            "Respondents": [
                {
                    "Name": "Ravi Verma",
                    "Address": "21B, Jubilee Hills, Hyderabad - 500033",
                    "Age": "52"
                }
            ],
            "Userid": "68f0c14ca9ee6f80509d4521",
            "FilledFrom": "highcourt",
            "CaseType": "anticipatory_bail"
        },
        onSubmit: (values) => {
            console.log(values);
            setFormData({ ...values });
            // if (data?.case) {
            //     updateForm({ ...values });
            // } else {
                filecase({
                    ...values, FilledFrom: "highcourt", Petitioners: petitioners,
                    Respondents: respondents, CaseType: caseType
                });
            // }
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
        console.log("onChange", vakalathForm?.values);
        // setRespondents(vakalathForm?.values?.Respondents)
        // setPetitioners(vakalathForm?.values?.Petitioners)
    }, [vakalathForm.handleChange])
    return (
        <div>
            <form onSubmit={vakalathForm.handleSubmit} className=" ">
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
            <HighCourtModal formData={formData} modalRef={modalRef} />
        </div>
    );
}

export default ABForm;
