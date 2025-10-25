import React, { useRef, useEffect } from "react";
import { Packer } from "docx";
import { renderAsync } from "docx-preview";
import { getDocxDocument } from "../criminal/anticiptoryBail/template1"; // named import
import generateAndDownloadDocx from "../criminal/anticiptoryBail/template1"; // default import

function HighCourtModal({ formData, isOpen, onClose }) {
  const containerRef = useRef();

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.innerHTML = "";

      const doc = getDocxDocument(formData); // use the named export
      Packer.toBlob(doc).then((blob) => {
        renderAsync(blob, containerRef.current, null, {
          className: "docx-preview",
          style: { width: "100%", height: "500px", border: "1px solid #ccc" },
        });
      });
    }
  }, [isOpen, formData]);

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050, height: "100vh", overflow: "hidden" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">High Court Template Preview</h5>
            
          </div>
          <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto", background: "#fff" }}>
            <div ref={containerRef} />
            
          </div>
          <div className="modal-footer">
            <button className="btn btn-success p-2" onClick={() => generateAndDownloadDocx(formData)}>
                Download DOCX
              </button>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighCourtModal;
