import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';

function WritAppealForm() {
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
            WritAppealNumber: "",
            WritAppealYear: "",
            WritPetitionNumber: "",
            WritPetitionYear: "",
            AppellantNames: [],        // array for multiple appellants
            RespondentNames: [],       // array for multiple respondents
            CounselName: "",
            JudgmentDate: "",
            JudgeName: "",
            DistrictName: "",
            FileNumber1: "",           // e.g., for W.A.No.
            FileNumber2: "",           // e.g., for W.P.M.P/W.P.No.
            FileNumber2Year: "",
            CourtFileName1: "",        // e.g., file of (court name)
            CourtFileName2: "",        // another court file name if needed
            AffidavitDeponentName: "",
            AffidavitDeponentFatherName: "",
            AffidavitDeponentAge: "",
            AffidavitDeponentOccupation: "",
            AffidavitDeponentAddress: "",
            AffidavitDistrict: "",
            AffidavitDate: "",
            VerificationDate: "",
            AdvocateName: "",
            DeponentName: "",
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
            WritAppealForm
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput
                    id="WritAppealNumber"
                    name="WritAppealNumber"
                    label="Writ Appeal Number"
                    value={vakalathForm.values.WritAppealNumber}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="YearOfWritAppeal"
                    name="YearOfWritAppeal"
                    label="Year of Writ Appeal"
                    value={vakalathForm.values.YearOfWritAppeal}
                    type="number"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="WritPetitionNumber"
                    name="WritPetitionNumber"
                    label="Writ Petition Number"
                    value={vakalathForm.values.WritPetitionNumber}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="YearOfWritPetition"
                    name="YearOfWritPetition"
                    label="Year of Writ Petition"
                    value={vakalathForm.values.YearOfWritPetition}
                    type="number"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="CounselName"
                    name="CounselName"
                    label="Counsel Name"
                    value={vakalathForm.values.CounselName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="DateOfJudgment"
                    name="DateOfJudgment"
                    label="Date of Judgment"
                    value={vakalathForm.values.DateOfJudgment}
                    type="date"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="JudgeName"
                    name="JudgeName"
                    label="Judge Name"
                    value={vakalathForm.values.JudgeName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="DistrictName"
                    name="DistrictName"
                    label="District Name"
                    value={vakalathForm.values.DistrictName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="FilingDate"
                    name="FilingDate"
                    label="Filing Date"
                    value={vakalathForm.values.FilingDate}
                    type="date"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="AffidavitDeponentName"
                    name="AffidavitDeponentName"
                    label="Affidavit Deponent Name"
                    value={vakalathForm.values.AffidavitDeponentName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="AffidavitDeponentFatherName"
                    name="AffidavitDeponentFatherName"
                    label="Affidavit Deponent Father's Name"
                    value={vakalathForm.values.AffidavitDeponentFatherName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="AffidavitDeponentAge"
                    name="AffidavitDeponentAge"
                    label="Affidavit Deponent Age"
                    value={vakalathForm.values.AffidavitDeponentAge}
                    type="number"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="AffidavitDeponentOccupation"
                    name="AffidavitDeponentOccupation"
                    label="Affidavit Deponent Occupation"
                    value={vakalathForm.values.AffidavitDeponentOccupation}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="AffidavitDeponentAddress"
                    name="AffidavitDeponentAddress"
                    label="Affidavit Deponent Address"
                    value={vakalathForm.values.AffidavitDeponentAddress}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="VerificationDate"
                    name="VerificationDate"
                    label="Verification Date"
                    value={vakalathForm.values.VerificationDate}
                    type="date"
                    onChange={vakalathForm.handleChange}
                />

                <FloatingInput
                    id="VerificationPlace"
                    name="VerificationPlace"
                    label="Verification Place"
                    value={vakalathForm.values.VerificationPlace}
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
    )
}

export default WritAppealForm
