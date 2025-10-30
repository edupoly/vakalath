import React, { useState } from 'react'
import { highCourtInitialValues } from '../../../services/functions';
import { useFileCaseMutation } from '../../../services/caseDetailsApi';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import PetitionerDetails from '../../highcourt/PetitionerDetails';
import RespondentDetails from '../../highcourt/RespondentDetails';
import FloatingInput from '../../../components/floatingInput';
import HighCourtModal from '../../highcourt/Modal';

function SecondAppealForm({ caseType, formData, setFormData, modalRef }) {
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
            OSNumber: "",
            OSYear: "",
            ASNumber: "",
            ASYear: "",
            SA_Number: "",
            SA_Year: "",
            AppellantCounselName: "",
            AppellantCounselAddress: "",
            JudgmentDate: "",
            LowerCourtName: "",
            LowerCourtOrderDate: "",
            GroundsOfAppeal: "",
            AppealValue: "",
            CourtFeePaid: "",
            DistrictName: "",
            FilingDate: "",
            AffidavitName: "",
            AffidavitFatherName: "",
            AffidavitAge: "",
            AffidavitOccupation: "",
            AffidavitAddress: "",
            AffidavitDate: ""
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
            SecondAppealForm
            <PetitionerDetails petitioners={petitioners} setPetitioners={setPetitioners} />
            <RespondentDetails respondents={respondents} setRespondents={setRespondents} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">
                <FloatingInput
                    id="CourtName"
                    name="CourtName"
                    label="Court Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="OSNumber"
                    name="OSNumber"
                    label="O.S. Number"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="OSYear"
                    name="OSYear"
                    label="O.S. Year"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="ASNumber"
                    name="ASNumber"
                    label="A.S. Number"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="ASYear"
                    name="ASYear"
                    label="A.S. Year"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="SA_Number"
                    name="SA_Number"
                    label="S.A. Number"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="SA_Year"
                    name="SA_Year"
                    label="S.A. Year"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AppellantCounselName"
                    name="AppellantCounselName"
                    label="Appellant Counsel Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AppellantCounselAddress"
                    name="AppellantCounselAddress"
                    label="Appellant Counsel Address"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="JudgmentDate"
                    name="JudgmentDate"
                    label="Judgment Date"
                    value={""}
                    type="date"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="LowerCourtName"
                    name="LowerCourtName"
                    label="Lower Court Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="LowerCourtOrderDate"
                    name="LowerCourtOrderDate"
                    label="Lower Court Order Date"
                    value={""}
                    type="date"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="GroundsOfAppeal"
                    name="GroundsOfAppeal"
                    label="Grounds of Appeal"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AppealValue"
                    name="AppealValue"
                    label="Appeal Value"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="CourtFeePaid"
                    name="CourtFeePaid"
                    label="Court Fee Paid"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="DistrictName"
                    name="DistrictName"
                    label="District Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="FilingDate"
                    name="FilingDate"
                    label="Filing Date"
                    value={""}
                    type="date"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitName"
                    name="AffidavitName"
                    label="Affidavit Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitFatherName"
                    name="AffidavitFatherName"
                    label="Affidavit Father's Name"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitAge"
                    name="AffidavitAge"
                    label="Affidavit Age"
                    value={""}
                    type="number"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitOccupation"
                    name="AffidavitOccupation"
                    label="Affidavit Occupation"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitAddress"
                    name="AffidavitAddress"
                    label="Affidavit Address"
                    value={""}
                    type="text"
                    onChange={(e) => form.handleChange(e)}
                />
                <FloatingInput
                    id="AffidavitDate"
                    name="AffidavitDate"
                    label="Affidavit Date"
                    value={""}
                    type="date"
                    onChange={(e) => form.handleChange(e)}
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

export default SecondAppealForm
