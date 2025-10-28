import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';

function WAPForm() {
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
            WPNumber: "",
            WPYear: "",
            PetitionerName: "",
            PetitionerFatherName: "",
            PetitionerAge: "",
            PetitionerOccupation: "",
            PetitionerVillage: "",
            PetitionerMandal: "",
            PetitionerDistrict: "",
            PetitionDate: "",
            SubjectMatter: "",
            PrayerOrderDetails: "",
            StayOrderDetails: "",
            AffidavitDate: "",
            VerificationParaNumbers: [], // e.g. array of paragraph numbers for verification
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
        <form onSubmit={vakalathForm.handleSubmit} className=" ">
            WAPForm
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput
                    id="WPNumber"
                    name="WPNumber"
                    label="W.P. Number"
                    value={vakalathForm.values.WPNumber}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="WPYear"
                    name="WPYear"
                    label="W.P. Year"
                    value={vakalathForm.values.WPYear}
                    type="number"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerName"
                    name="PetitionerName"
                    label="Petitioner Name"
                    value={vakalathForm.values.PetitionerName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerFatherName"
                    name="PetitionerFatherName"
                    label="Petitioner Father's Name"
                    value={vakalathForm.values.PetitionerFatherName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerAge"
                    name="PetitionerAge"
                    label="Petitioner Age"
                    value={vakalathForm.values.PetitionerAge}
                    type="number"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerOccupation"
                    name="PetitionerOccupation"
                    label="Petitioner Occupation"
                    value={vakalathForm.values.PetitionerOccupation}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerVillage"
                    name="PetitionerVillage"
                    label="Petitioner Village"
                    value={vakalathForm.values.PetitionerVillage}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerMandal"
                    name="PetitionerMandal"
                    label="Petitioner Mandal"
                    value={vakalathForm.values.PetitionerMandal}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionerDistrict"
                    name="PetitionerDistrict"
                    label="Petitioner District"
                    value={vakalathForm.values.PetitionerDistrict}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PetitionDate"
                    name="PetitionDate"
                    label="Petition Date"
                    value={vakalathForm.values.PetitionDate}
                    type="date"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="SubjectMatter"
                    name="SubjectMatter"
                    label="Subject Matter"
                    value={vakalathForm.values.SubjectMatter}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="PrayerOrderDetails"
                    name="PrayerOrderDetails"
                    label="Prayer Order Details"
                    value={vakalathForm.values.PrayerOrderDetails}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="StayOrderDetails"
                    name="StayOrderDetails"
                    label="Stay Order Details"
                    value={vakalathForm.values.StayOrderDetails}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="AffidavitDate"
                    name="AffidavitDate"
                    label="Affidavit Date"
                    value={vakalathForm.values.AffidavitDate}
                    type="date"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="VerificationParaNumbers"
                    name="VerificationParaNumbers"
                    label="Verification Paragraph Numbers (comma separated)"
                    value={vakalathForm.values.VerificationParaNumbers}
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
                    id="AdvocateName"
                    name="AdvocateName"
                    label="Advocate Name"
                    value={vakalathForm.values.AdvocateName}
                    type="text"
                    onChange={vakalathForm.handleChange}
                />
                <FloatingInput
                    id="DeponentName"
                    name="DeponentName"
                    label="Deponent Name"
                    value={vakalathForm.values.DeponentName}
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

export default WAPForm
