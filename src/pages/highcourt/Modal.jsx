import { PDFViewer, pdf } from "@react-pdf/renderer";
import React, { useEffect, useRef, useState } from "react";
import { Packer } from "docx";
import { renderAsync } from "docx-preview";
import { caseTypeTemplates, generateAndDownloadDocx } from "../../services/templateFunctions";
function HighCourtModal({ formData, modalRef, type }) {
  const [isMobile, setIsMobile] = useState(false);
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
      if(doc) Packer.toBlob(doc).then((blob) => {
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
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable my-0 vh-100">
        <div className={`modal-content ${isMobile ? 'vh-50' : 'vh-100'}`}>
          <div className="modal-header d-flex justify-content-between align-items-center w-100 py-2">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">
              High Court Template Preview
            </h5>
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
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
          <div className="modal-footer p-1">
            <button
              className="btn btn-success"
              onClick={() => generateAndDownloadDocx(formData)}
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
