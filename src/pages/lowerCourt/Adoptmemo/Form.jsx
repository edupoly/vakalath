import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';
import HighCourtModal from '../../highcourt/Modal';

function AdoptMemoForm({ caseType, formData, setFormData, modalRef }) {
    const [filecase] = useFileCaseMutation();
    const [petitioners, setPetitioners] = useState([
        { Name: '', Address: '', Age: '' },
    ]);
    const [respondents, setRespondents] = useState([
        { Name: '', Address: '', Age: '' },
    ]);
    const userDetails = useSelector((state) => state.user.userInfo);

    const vakalathForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            Districtname:"",
            myyear:"",
            Petitioners:petitioners,
            Respondents:respondents,
            Place:"",
            fDate:"",
            CounselAddress:"",
            IANo:"",
            OSNo:""
        },
        onSubmit: (values) => {
            console.log(values);
            // setFormData({ ...values });
            //   filecase(values);
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.show();
        },
    });

    const formatDate = () => {
        const rawDate = vakalathForm.values.Date;
        if (!rawDate) return '';
        const parsedDate = new Date(rawDate);
        return isNaN(parsedDate) ? '' : parsedDate.toISOString().split('T')[0];
    };
    return (
        <>
        <form onSubmit={vakalathForm.handleSubmit} className=" ">
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput
                    id="Districtname"
                    label="District Name"
                    type="text"
                    {...vakalathForm.getFieldProps('Districtname')}
                    value={vakalathForm.values.Districtname}
                />
                <FloatingInput
                    id="myyear"
                    label="Year"
                    type='number'
                    {...vakalathForm.getFieldProps('myyear')}
                    value={vakalathForm.values.myyear}
                />
                <FloatingInput
                    id="IANo"
                    label="IANo"
                    type='text'
                    {...vakalathForm.getFieldProps('IANo')}
                    value={vakalathForm.values.IANo}
                />
                <FloatingInput
                    id="OSNo"
                    label="OSNo"
                    type='text'
                    {...vakalathForm.getFieldProps('OSNo')}
                    value={vakalathForm.values.OSNo}
                />
                <FloatingInput
                    id="Place"
                    label="Place"
                    type="text"
                    {...vakalathForm.getFieldProps('Place')}
                    value={vakalathForm.values.Place}
                />
                <FloatingInput
                    id="fDate"
                    label="Date"
                    type="date"
                    {...vakalathForm.getFieldProps('fDate')}
                    value={vakalathForm.values.fDate}
                />
                <FloatingInput
                    id="CounselAddress"
                    label="Counsel Address"
                    type="text"
                    {...vakalathForm.getFieldProps('CounselAddress')}
                    value={vakalathForm.values.CounselAddress}
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
        <HighCourtModal formData={formData} modalRef={modalRef} type={caseType} />
        </>
    )
}

export default AdoptMemoForm;
