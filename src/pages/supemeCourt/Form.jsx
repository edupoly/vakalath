import React, { useEffect, useState } from 'react'
import FloatingInput from '../../components/floatingInput'
import { useFormik } from 'formik';
import { useFileCaseMutation, useLazyGetCaseByIdQuery } from '../../services/caseDetailsApi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SupremeCourtForm() {
    const { id } = useParams();
    const userDetails = useSelector((state) => state.user.userInfo);
    const [filecase] = useFileCaseMutation();
    const [triggerGetCaseById, { data, isLoading }] = useLazyGetCaseByIdQuery();
    const [caseType, setCaseType] = useState("");
    const vakalathForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            CouncilName: "",
            CouncilAddress: "",
            DateOfFiling: "",
            PetitionerName1: "",
            RespondentName1: "",
            Category: "",
            Userid: userDetails && userDetails["_id"],
        },
        onSubmit: (values) => {
            console.log(values);
            // setFormData({ ...values });
            filecase({ ...values, Court: "Supreme Court", FilledFrom: "supremecourt", Form: "SupremeCourtForm" });
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.show();
        },
    });
    useEffect(() => {
        if (data?.case) {
            vakalathForm.setValues(data.case);
        }
    }, [data]);

    useEffect(() => {
        document.title = "Supreme Court"
        if (id) {
            triggerGetCaseById(id);
        }
    }, [id]);
    return (
        <div className='p-4 py-3'>
            <h4>Supreme Court</h4>
            <form onSubmit={vakalathForm.handleSubmit} className="bg-white p-3 px-4 border border-1 rounded">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                    <FloatingInput id="CouncilName" name="CouncilName" label="Council Name" value={vakalathForm.values.CouncilName} type="text" onChange={vakalathForm.handleChange} />
                    <FloatingInput id="CouncilAddress" name="CouncilAddress" label="Council Address" value={vakalathForm.values.CouncilAddress} type="text" onChange={vakalathForm.handleChange} />
                    <FloatingInput id="DateOfFiling" name="DateOfFiling" label="Date of Filing" value={vakalathForm.values.DateOfFiling} type="date" placeholder="Select date" onChange={vakalathForm.handleChange} />
                    <FloatingInput id="PetitionerName1" name="PetitionerName1" label="1st Petitioner's Name" value={vakalathForm.values.PetitionerName1} type="text" onChange={vakalathForm.handleChange} />
                    <FloatingInput id="RespondentName1" name="RespondentName1" label="1st Respondent's Name" value={vakalathForm.values.RespondentName1} type="text" onChange={vakalathForm.handleChange} />
                    <FloatingInput id="Category" name="Category" label="Category" value={vakalathForm.values.Category} type="text" onChange={vakalathForm.handleChange} />
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
        </div>
    )
}

export default SupremeCourtForm
