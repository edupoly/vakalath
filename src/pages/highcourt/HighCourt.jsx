import React, { useRef, useState, useEffect } from "react";
import HighCourtModal from "./Modal";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ABForm from "../criminal/anticiptoryBail/Form";
import AppealForm from "../criminal/appeal/Form";
import CMAForm from "../civil/cma/Form";
import CRPForm from "../civil/crp/Form";
import FirstAppealForm from "../civil/firstAppeal/Form";
import SecondAppealForm from "../civil/secondAppeal/Form";
import WAPForm from "../civil/writAffidavit/Form";
import WritAppealForm from "../civil/writAppeal/Form";
import BailForm from "../criminal/bail/Form";
import RevisionCaseForm from "../criminal/revisionCase/Form";
import { useLazyGetCaseByIdQuery } from "../../services/caseDetailsApi";
import HighCourtForm from "./HighCourtForm";
import { caseTypeFields } from "../../services/templateFunctions";
import { lowerCaseTypeFields } from "../../services/lowercourt/formFunctions";

function HighCourt({ casedata,title }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const modalRef = useRef(null);
  const [triggerGetCaseById, { data, isLoading }] = useLazyGetCaseByIdQuery();
  const [caseType, setCaseType] = useState("");
  const [courtFields, setCourtFields] = useState(title == "High Court" ? caseTypeFields : lowerCaseTypeFields);
  const caseTypeComponents = {
    cma: CMAForm,
    crp: CRPForm,
    first_appeal: FirstAppealForm,
    second_appeal: SecondAppealForm,
    writ_appeal: WAPForm,
    writ_affidavit: WritAppealForm,
    anticipatory_bail: ABForm,
    bail: BailForm,
    criminal_appeal: AppealForm,
    criminal_revision_case: RevisionCaseForm
  };

  const SelectedForm = caseTypeComponents[caseType];
  useEffect(() => {
    document.title = title
    if (data?.case) {
      setCaseType(data?.case?.CaseType)
    }
    if (id) {
      triggerGetCaseById(id);
    }
    console.log("caseType",caseType);
    
  }, [data, id,caseType])

  return (
    <div className="p-5">
      <div className="form-group my-3">
        <select
          className="form-select"
          id="CaseType"
          name="CaseType"
          value={caseType}
          onChange={(e)=>setCaseType(e.target.value)}
        // required
        >
          <option value="" disabled>
            Select Case Type
          </option>
          {courtFields?.map(({ label, value }) => {
            return <option key={label} value={value}>{label}</option>
          })}
        </select>
        <label htmlFor="CaseType" className="ms-3 form-label">
          Case Type
        </label>
      </div>

      <HighCourtForm title={title} caseType={caseType} formData={formData} data={data} setFormData={setFormData} modalRef={modalRef} />
      {/* {SelectedForm && <SelectedForm caseType={caseType} formData={formData} data={data} setFormData={setFormData} modalRef={modalRef} />} */}
    </div>
  );
}

export default HighCourt;
