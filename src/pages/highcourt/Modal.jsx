import { PDFViewer, pdf } from '@react-pdf/renderer';
import React, { useEffect, useRef, useState } from 'react';
import AnticiptoryBailFile from '../criminal/anticiptoryBail/template';
import CriminalBailFile from '../criminal/bail/template';
import HighCourtTemplate from './template';
import generateAndDownloadDocx, { getDocxDocument } from '../criminal/anticiptoryBail/template1';
import { Packer } from 'docx';
import { renderAsync } from 'docx-preview';

function HighCourtModal({ formData, modalRef, type }) {
  const [isMobile, setIsMobile] = useState(false);

  const caseTypeTemplates = {
    cma: "CMAFile",
    crp: "CRPForm",
    firstappeal: "FirstAppealForm",
    secondappeal: "SecondAppealForm",
    writappeal: "WAPForm",
    writaffidavit: "WritAppealForm",
    anticiptorybail: AnticiptoryBailFile,
    bail: CriminalBailFile,
    criminalappeal: "AppealForm",
    criminalrevisioncase: "RevisionCaseForm",
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

      const doc = getDocxDocument(formData); // use the named export
      Packer.toBlob(doc).then((blob) => {
        renderAsync(blob, containerRef.current, null, {
          className: "docx-preview",
          style: { width: "100%", height: "500px", border: "1px solid #ccc" },
        });
      });
    }
  }, [formData]);

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
        <div className={`modal-content ${isMobile ? 'vh-50' : 'vh-100'}`}>
          <div className="modal-header d-flex justify-content-between align-items-center w-100">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              High Court Template Preview
            </h1>
            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            {/* {isMobile
              ? <div className="text-center d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                <button onClick={handleDownload} className="btn btn-success p-2">
                  Download High Court Template
                </button>
              </div>
              : <PDFViewer style={{ width: '100%', height: '88vh' }}>
                <HighCourtTemplate formData={formData} />
              </PDFViewer>
            } */}
            <div ref={containerRef} />

          </div>
          <div className="modal-footer">
            <button className="btn btn-success p-2" onClick={() => generateAndDownloadDocx(formData)}>
              Download DOCX
            </button>
            <button className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighCourtModal;
