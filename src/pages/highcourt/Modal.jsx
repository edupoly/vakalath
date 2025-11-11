import { PDFViewer, pdf } from "@react-pdf/renderer";
import React, { useEffect, useRef, useState } from "react";
import AnticiptoryBailFile from "../criminal/anticiptoryBail/template";
import CriminalBailFile from "../criminal/bail/template";
import CMAFile from "../civil/cma/template";
import HighCourtTemplate from "./template";
import generateAndDownloadDocx, {
  ABTemplate,
} from "../criminal/anticiptoryBail/template1";
import { Packer } from "docx";
import { renderAsync } from "docx-preview";
import { CMATemplate } from "../civil/cma/template1";
import { CRPTemplate } from "../civil/crp/template1";
import { FirstAppealTemplate } from "../civil/firstAppeal/template1";
import { SecondAppealTemplate } from "../civil/secondAppeal/template1";
import { WritAppealTemplate } from "../civil/writAppeal/template1";
import { AffidavitTemplate } from "../civil/writAffidavit/template1";
import { CriminalRevisionTemplate } from "../criminal/revisionCase/template1";
import { CriminalAppealTemplate } from "../criminal/appeal/template1";
import { saveAs } from "file-saver";

function HighCourtModal({ formData, modalRef, type }) {
  const [isMobile, setIsMobile] = useState(false);

  const caseTypeTemplates = {
    cma: CMATemplate,
    crp: CRPTemplate,
    first_appeal: FirstAppealTemplate,
    second_appeal: SecondAppealTemplate,
    writ_appeal: WritAppealTemplate,
    writ_affidavit: AffidavitTemplate,
    anticipatory_bail: ABTemplate,
    bail: CriminalBailFile,
    criminal_appeal: CriminalAppealTemplate,
    criminal_revision_case: CriminalRevisionTemplate,
    highcourt: HighCourtTemplate,
  };
  const SelectedTemplate = caseTypeTemplates[type];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      console.log(
        "type",
        typeof SelectedTemplate,
        caseTypeTemplates[type],
        type
      );

      const doc = SelectedTemplate && SelectedTemplate(formData); // use the named export
      Packer.toBlob(doc).then((blob) => {
        renderAsync(blob, containerRef.current, null, {
          className: "docx-preview",
          style: { width: "100%", height: "500px", border: "1px solid #ccc" },
        });
      });
    }
  }, [formData]);

  // ✅ Added: Correct download function
  const handleDownload = () => {
    if (!SelectedTemplate) return;
    const doc = SelectedTemplate(formData);
    Packer.toBlob(doc).then((blob) => {
      const fileName = `${type?.toUpperCase() || "Document"}.docx`;
      saveAs(blob, fileName);
    });
  };

  return (
    <div
      className="modal fade vh-100"
      id="staticBackdrop"
      ref={modalRef}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered my-0 vh-100">
        <div className={`modal-content ${isMobile ? "vh-50" : "vh-100"}`}>
          <div className="modal-header d-flex justify-content-between align-items-center w-100">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              High Court Template Preview
            </h1>
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-0">
            {/* Preview Container */}
            <div ref={containerRef} />
          </div>
          <div className="modal-footer">
            {/* ✅ Updated download button */}
            <button
              className="btn btn-success p-2"
              onClick={handleDownload}
            >
              Download DOCX
            </button>
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighCourtModal;
