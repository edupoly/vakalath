import React, { useEffect, useState } from "react";
// import { highCourtInitialValues } from "../../../services/functions";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useEditFileCaseMutation, useFileCaseMutation } from "../../services/caseDetailsApi";
import PetitionerDetails from "./PetitionerDetails";
import RespondentDetails from "./RespondentDetails";
import FloatingInput from "../../components/floatingInput";
import { fieldsData } from "../../services/highcourtFields";
import { initialValues } from "../../services/initialFormValues";
import HighCourtModal from "./Modal";

function HighCourtForm({ caseType, formData, setFormData, modalRef, data }) {
    const [filecase] = useFileCaseMutation();
    const [updateForm] = useEditFileCaseMutation();
    const [petitioners, setPetitioners] = useState([
        { Name: "Rajesh Kumar", Address: "12A, Banjara Hills, Hyderabad - 500034", Age: "6" }
        // { Name: "", Address: "", Age: "" },
    ]);
    const [respondents, setRespondents] = useState([
        { Name: "Ravi Verma", Address: "21B, Jubilee Hills, Hyderabad - 500033", Age: "21" }
        // { Name: "", Address: "", Age: "" },
    ]);
    const userDetails = useSelector((state) => state.user.userInfo);

    const selectedInitialValues = initialValues[caseType] ? { ...initialValues[caseType], Petitioners: petitioners, Respondents: respondents, Userid: userDetails && userDetails["_id"] } : {}
    console.log("initialValues[caseType]", initialValues[caseType]);

    const vakalathForm = useFormik({
        enableReinitialize: true,
        initialValues: { ...selectedInitialValues },
        onSubmit: (values) => {
            console.log(values);
            setFormData({ ...values, CaseType: caseType, });
            // if (data?.case) {
            //     updateForm({ ...values });
            // } else {
            // filecase({
            //     ...values,
            //     FilledFrom: "highcourt",
            //     CaseType: caseType,
            // });
            // }
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
        console.log("initialValues", selectedInitialValues, initialValues[caseType], caseType);

    }, [data])

    return (
        <div>
            <form onSubmit={vakalathForm.handleSubmit} className=" ">
                {caseType && <div>
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
                        {fieldsData[caseType]?.map((field) => {
                            return (<FloatingInput
                                key={field?.name}
                                id={`${field?.name}`}
                                name={`${field?.name}`}
                                label={`${field?.label}`}
                                value={vakalathForm?.values[field?.name] || ""}
                                type={`${field?.type}`}
                                onChange={vakalathForm.handleChange}
                            />)
                        })}
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-end ">
                        <button
                            type="submit"
                            className="btn btn-success border border-3 border-success w-md-50 w-lg-25"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                }
            </form>
            <HighCourtModal formData={formData} modalRef={modalRef} type={caseType} />
        </div>
    );
}

export default HighCourtForm;
