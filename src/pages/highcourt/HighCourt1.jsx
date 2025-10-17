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

function HighCourt1({ casedata }) {
  const { id } = useParams();
  const modalRef = useRef(null);
  const [caseType, setCaseType] = useState("");
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
    document.title = "HighCourt"
    console.log("caseType", caseType);

  }, [caseType])

  return (
    <div>
      <div className="form-group col m-5 my-3">
        <select
          className="form-select"
          id="CaseType"
          name="CaseType"
          value={caseType}
          onChange={(event) => setCaseType(event.target.value)}
        // required
        >
          <option value="" disabled>
            Select Case Type
          </option>
          <option value="cma">CMA</option>
          <option value="crp">CRP</option>
          <option value="first_appeal">FIRST APPEAL</option>
          <option value="second_appeal">SECOND APPEAL</option>
          <option value="writ_appeal">WA</option>
          <option value="writ_affidavit">Writ</option>
          <option value="anticipatory_bail">AB</option>
          <option value="bail">BAIL</option>
          <option value="criminal_appeal">CRLA</option>
          <option value="criminal_revision_case">CRLRC</option>
        </select>
        <label htmlFor="CaseType" className="ms-3 form-label">
          Case Type
        </label>
      </div>
      {SelectedForm && <SelectedForm />}
    </div>
  );
}

export default HighCourt1;
