import React, { useEffect, useState } from "react";
import { highCourtInitialValues } from "../../../services/functions";
import {
    useEditFileCaseMutation,
    useFileCaseMutation,
} from "../../../services/caseDetailsApi";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PetitionerDetails from "../../highcourt/PetitionerDetails";
import RespondentDetails from "../../highcourt/RespondentDetails";
import FloatingInput from "../../../components/floatingInput";
import HighCourtModal from "../../highcourt/Modal";

function ABForm({ caseType, formData, setFormData, modalRef, data }) {
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
            CrlpNo: "",
            CrimeNumber: "",
            PoliceStationName: "",
            Sections: "",
            Date: "",
            CrlMpNo: "",
            SessionJudge: "",
            DateOfDismissal: "",
            ToDistrict: "",
            Petitioners: petitioners,
            Respondents: respondents,
            FilledFrom: "",
            CaseType: "",
            Userid: userDetails && userDetails["_id"],
        },
        onSubmit: (values) => {
            console.log(values);
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
        // const rawDate = vakalathForm.values.Date;
        if (!date) return "";
        const parsedDate = new Date(date);
        return isNaN(parsedDate) ? "" : parsedDate.toISOString().split("T")[0];
    };

    useEffect(() => {
        document.title = "HighCourt"
        if (data?.case) {
            // vakalathForm.values = { ...data?.case }
            vakalathForm.setValues({ ...data?.case })
            console.log("vakalathForm.values", vakalathForm.values);
            setPetitioners(data?.case?.Petitioners)
            setRespondents(data?.case?.Respondents)
        }
    }, [data])

    useEffect(() => {
        console.log("onChange", vakalathForm?.values);
        // setRespondents(vakalathForm?.values?.Respondents)
        // setPetitioners(vakalathForm?.values?.Petitioners)
    }, [vakalathForm.handleChange]);
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
                        value={formatDate(vakalathForm?.values?.Date)}
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
                        value={formatDate(vakalathForm?.values?.DateOfDismissal)}
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

export default ABForm;
