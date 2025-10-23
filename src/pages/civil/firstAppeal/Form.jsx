import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';

function FirstAppealForm() {
    const [filecase] = useFileCaseMutation();
    const [petitioners, setPetitioners] = useState([
        { name: '', address: '', age: '' },
    ]);
    const [respondents, setRespondents] = useState([
        { name: '', address: '', age: '' },
    ]);
    const userDetails = useSelector((state) => state.user.userInfo);

    const vakalathForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            CourtName: "",
            OSNumber: "",
            HighCourtName: "",
            ASNumber: "",
            AppellantName: "",
            AppellantAddress: "",
            CounselName: "",
            JudgmentDate: "",
            TrialCourtName: "",
            TrialCourtPlace: "",
            GroundsOfAppeal: "",
            ValuationAmount: "",
            CourtFeeAmount: "",
            DistrictName: "",
            FilingDate: "",
            ASMPNumber: "",
            PetitionPrayer: "",
            SwornDate: "",
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
        <form onSubmit={vakalathForm.handleSubmit} className=" m-5 my-md-4">
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput
                    id="CourtName"
                    name="CourtName"
                    label="Court Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.CourtName}
                />
                <FloatingInput
                    id="OSNumber"
                    name="OSNumber"
                    label="O.S. Number"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.OSNumber}
                />
                <FloatingInput
                    id="HighCourtName"
                    name="HighCourtName"
                    label="High Court Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.HighCourtName}
                />
                <FloatingInput
                    id="ASNumber"
                    name="ASNumber"
                    label="A.S. Number"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.ASNumber}
                />
                <FloatingInput
                    id="AppellantName"
                    name="AppellantName"
                    label="Appellant Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.AppellantName}
                />
                <FloatingInput
                    id="AppellantAddress"
                    name="AppellantAddress"
                    label="Appellant Address"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.AppellantAddress}
                />
                <FloatingInput
                    id="CounselName"
                    name="CounselName"
                    label="Counsel Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.CounselName}
                />
                <FloatingInput
                    id="JudgmentDate"
                    name="JudgmentDate"
                    label="Judgment Date"
                    type="date"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.JudgmentDate}
                />
                <FloatingInput
                    id="TrialCourtName"
                    name="TrialCourtName"
                    label="Trial Court Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.TrialCourtName}
                />
                <FloatingInput
                    id="TrialCourtPlace"
                    name="TrialCourtPlace"
                    label="Trial Court Place"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.TrialCourtPlace}
                />
                <FloatingInput
                    id="GroundsOfAppeal"
                    name="GroundsOfAppeal"
                    label="Grounds of Appeal"
                    type="textarea"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.GroundsOfAppeal}
                />
                <FloatingInput
                    id="ValuationAmount"
                    name="ValuationAmount"
                    label="Valuation Amount (Rs.)"
                    type="number"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.ValuationAmount}
                />
                <FloatingInput
                    id="CourtFeeAmount"
                    name="CourtFeeAmount"
                    label="Court Fee Amount (Rs.)"
                    type="number"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.CourtFeeAmount}
                />
                <FloatingInput
                    id="DistrictName"
                    name="DistrictName"
                    label="District Name"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.DistrictName}
                />
                <FloatingInput
                    id="FilingDate"
                    name="FilingDate"
                    label="Filing Date"
                    type="date"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.FilingDate}
                />
                <FloatingInput
                    id="ASMPNumber"
                    name="ASMPNumber"
                    label="A.S.M.P. Number"
                    type="text"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.ASMPNumber}
                />
                <FloatingInput
                    id="PetitionPrayer"
                    name="PetitionPrayer"
                    label="Petition Prayer"
                    type="textarea"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.PetitionPrayer}
                />
                <FloatingInput
                    id="SwornDate"
                    name="SwornDate"
                    label="Sworn Date"
                    type="date"
                    onChange={vakalathForm.handleChange}
                    value={vakalathForm.values.SwornDate}
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
    )
}

export default FirstAppealForm
