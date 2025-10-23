import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';

function AppealForm() {
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
            AppealNumber: "",
            SessionCaseNumber: "",
            TrialCourtName: "",
            TrialCourtJudgeName: "",
            JudgmentDate: "",
            AppellantName: "",
            AppellantAddress: "",
            CounselName: "",
            GroundsOfAppeal: "",
            DistrictName: "",
            FilingDate: "",
            ConvictionSection: "",
            SentenceType: "",
            SentencePeriod: "",
            FineAmount: "",
            DefaultSentencePeriod: "",
            FineStatus: "",
            TrialBailStatus: "",
            AppealNumberInBailPetition: "",
            Respondents: [],
            Petitioners: [],
            JailName: "",
            BailCourtName: "",
            PetitionNumber: "",
            PetitionDate: "",
            Userid: userDetails && userDetails["_id"],
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
                <FloatingInput id="CourtName" name="CourtName" label="Court Name" value={vakalathForm.values.CourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="AppealNumber" name="AppealNumber" label="Appeal Number" value={vakalathForm.values.AppealNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="SessionCaseNumber" name="SessionCaseNumber" label="Session Case Number" value={vakalathForm.values.SessionCaseNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="TrialCourtName" name="TrialCourtName" label="Trial Court Name" value={vakalathForm.values.TrialCourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="TrialCourtJudgeName" name="TrialCourtJudgeName" label="Trial Court Judge Name" value={vakalathForm.values.TrialCourtJudgeName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="JudgmentDate" name="JudgmentDate" label="Judgment Date" value={vakalathForm.values.JudgmentDate} type="date" onChange={vakalathForm.handleChange} />
                <FloatingInput id="CounselName" name="CounselName" label="Counsel Name" value={vakalathForm.values.CounselName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="DistrictName" name="DistrictName" label="District Name" value={vakalathForm.values.DistrictName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="FilingDate" name="FilingDate" label="Filing Date" value={vakalathForm.values.FilingDate} type="date" onChange={vakalathForm.handleChange} />
                <FloatingInput id="ConvictionSection" name="ConvictionSection" label="Conviction Section" value={vakalathForm.values.ConvictionSection} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="SentenceType" name="SentenceType" label="Sentence Type" value={vakalathForm.values.SentenceType} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="SentencePeriod" name="SentencePeriod" label="Sentence Period" value={vakalathForm.values.SentencePeriod} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="FineAmount" name="FineAmount" label="Fine Amount" value={vakalathForm.values.FineAmount} type="number" onChange={vakalathForm.handleChange} />
                <FloatingInput id="DefaultSentencePeriod" name="DefaultSentencePeriod" label="Default Sentence Period" value={vakalathForm.values.DefaultSentencePeriod} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="FineStatus" name="FineStatus" label="Fine Status" value={vakalathForm.values.FineStatus} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="TrialBailStatus" name="TrialBailStatus" label="Trial Bail Status" value={vakalathForm.values.TrialBailStatus} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="AppealNumberInBailPetition" name="AppealNumberInBailPetition" label="Appeal Number In Bail Petition" value={vakalathForm.values.AppealNumberInBailPetition} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="JailName" name="JailName" label="Jail Name" value={vakalathForm.values.JailName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="BailCourtName" name="BailCourtName" label="Bail Court Name" value={vakalathForm.values.BailCourtName} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="PetitionNumber" name="PetitionNumber" label="Petition Number" value={vakalathForm.values.PetitionNumber} type="text" onChange={vakalathForm.handleChange} />
                <FloatingInput id="PetitionDate" name="PetitionDate" label="Petition Date" value={vakalathForm.values.PetitionDate} type="date" onChange={vakalathForm.handleChange} />
                <FloatingInput id="UserId" name="UserId" label="User ID" value={vakalathForm.values.UserId} type="text" onChange={vakalathForm.handleChange} />
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

export default AppealForm
