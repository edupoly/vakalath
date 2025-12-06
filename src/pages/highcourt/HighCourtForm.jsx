import React, { useEffect, useState } from "react";
// import { highCourtInitialValues } from "../../../services/functions";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEditFileCaseMutation, useFileCaseMutation } from "../../services/caseDetailsApi";
import PetitionerDetails from "./PetitionerDetails";
import RespondentDetails from "./RespondentDetails";
import FloatingInput from "../../components/floatingInput";
import { fieldsData } from "../../services/highcourtFields";
import { initialValues } from "../../services/initialFormValues";
import HighCourtModal from "./Modal";
import { setFData } from "../../services/submitedDataSlice";

function HighCourtForm({ caseType, formData, setFormData, modalRef, data }) {
    const [submitted, setSubmitted] = useState(false)
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
    const dispatch = useDispatch()

    const selectedInitialValues = initialValues[caseType] ? { ...initialValues[caseType], Petitioners: petitioners, Respondents: respondents, CaseType: caseType, FilledFrom: "highcourt", Userid: userDetails && userDetails["_id"] } : {}
    console.log("initialValues[caseType]", initialValues[caseType]);

    const vakalathForm = useFormik({
        enableReinitialize: true,
        initialValues: { ...selectedInitialValues },
        onSubmit: (values) => {
            console.log(values);
            setFormData({ ...values/* , CaseType: caseType, */ });
            dispatch(setFData({ ...values/* , CaseType: caseType, */ }));

            // if (data?.case) {
            //     updateForm({ ...values });
            // } else {
            //     filecase({
            //         ...values,
            //         // FilledFrom: "highcourt",
            //         // CaseType: caseType,
            //     });
            // }
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.show();
        },
    });

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
                            const isDefaultTextField = field.name === "OPNO";
                            const defaultPrefix = "CRL.P.No.";
                            const handleChange = (e) => {
                                let value = e.target.value;
                                if (isDefaultTextField) {
                                    if (!value.startsWith(defaultPrefix)) {
                                        value = defaultPrefix ;
                                    }
                                }
                                vakalathForm.setFieldValue(field.name, value);
                            };
                            let displayValue = vakalathForm.values[field.name] || "";
                            if (isDefaultTextField && displayValue === "") {
                                displayValue = defaultPrefix; // show default text if empty
                            }
                            return (<FloatingInput
                                key={field?.name}
                                id={`${field?.name}`}
                                name={`${field?.name}`}
                                label={`${field?.label}`}
                                value={displayValue}
                                type={`${field?.type}`}
                                onChange={handleChange}
                            />)
                        })}
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-end ">
                        <button
                            type="submit"
                            onClick={() => setSubmitted(true)}
                            className={`btn btn-success border border-3 border-success w-md-50 w-lg-25 ${submitted && "disabled"}`}
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
