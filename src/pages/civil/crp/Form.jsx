import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';

function CRPForm() {
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
            CourtName: "",
            IAMainNumber: "",
            OSNumber: "",
            HighCourtName: "",
            CRPNumber: "",
            AppellantName: "",
            AppellantAddress: "",
            CounselName: "",
            JudgmentDate: "",
            TrialCourtName: "",
            TrialCourtPlace: "",
            GroundsOfRevision: "",
            ValuationAmount: "",
            CourtFeePaid: "",
            DistrictName: "",
            FilingDate: "",
            CRPMPNumber: "",
            PetitionPrayer: "",
            SwornDate: "",
            UserId: userDetails ? userDetails["_id"] : "",
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
        <form onSubmit={vakalathForm.handleSubmit} className=" ">
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput id="CourtName" name="CourtName" label="Court Name" value={vakalathForm.values.CourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="IAMainNumber" name="IAMainNumber" label="I.A. Number" value={vakalathForm.values.IAMainNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="OSNumber" name="OSNumber" label="O.S. Number" value={vakalathForm.values.OSNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="HighCourtName" name="HighCourtName" label="High Court Name" value={vakalathForm.values.HighCourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="CRPNumber" name="CRPNumber" label="C.R.P. Number" value={vakalathForm.values.CRPNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="AppellantName" name="AppellantName" label="Appellant Name" value={vakalathForm.values.AppellantName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="AppellantAddress" name="AppellantAddress" label="Appellant Address" value={vakalathForm.values.AppellantAddress} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="CounselName" name="CounselName" label="Counsel Name" value={vakalathForm.values.CounselName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="JudgmentDate" name="JudgmentDate" label="Judgment Date" value={vakalathForm.values.JudgmentDate} type="date" onChange={vakalathForm.handleChange} />
                <FloatingInput id="TrialCourtName" name="TrialCourtName" label="Trial Court Name" value={vakalathForm.values.TrialCourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="TrialCourtPlace" name="TrialCourtPlace" label="Trial Court Place" value={vakalathForm.values.TrialCourtPlace} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="GroundsOfRevision" name="GroundsOfRevision" label="Grounds Of Revision" value={vakalathForm.values.GroundsOfRevision} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="ValuationAmount" name="ValuationAmount" label="Valuation Amount" value={vakalathForm.values.ValuationAmount} type="number" onChange={vakalathForm.handleChange} />
                <FloatingInput id="CourtFeePaid" name="CourtFeePaid" label="Court Fee Paid" value={vakalathForm.values.CourtFeePaid} type="number" onChange={vakalathForm.handleChange} />
                <FloatingInput id="DistrictName" name="DistrictName" label="District Name" value={vakalathForm.values.DistrictName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="FilingDate" name="FilingDate" label="Filing Date" value={vakalathForm.values.FilingDate} type="date" onChange={vakalathForm.handleChange} />
                <FloatingInput id="CRPMPNumber" name="CRPMPNumber" label="C.R.P.M.P. Number" value={vakalathForm.values.CRPMPNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="PetitionPrayer" name="PetitionPrayer" label="Petition Prayer" value={vakalathForm.values.PetitionPrayer} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="SwornDate" name="SwornDate" label="Sworn Date" value={vakalathForm.values.SwornDate} type="date" onChange={vakalathForm.handleChange} />
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

export default CRPForm
