import { PDFViewer, pdf } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import { useConvertPdfToDocxMutation } from '../../services/caseDetailsApi';
import AnticiptoryBailFile from '../criminal/anticiptoryBail/template';
import CriminalBailFile from '../criminal/bail/template';
import HighCourtTemplate from './template';
// import { useConvertPdfToDocxMutation } from '../path-to-fileApi'; // Adjust path

function HighCourtModal({ formData, modalRef, type }) {
  const [isMobile, setIsMobile] = useState(false);
  const [convertPdfToDocx, { isLoading, error }] = useConvertPdfToDocxMutation();

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

  const handleConvertAndDownloadDocx = async () => {
    try {
      // Generate PDF blob from the selected template
      const pdfBlob = await pdf(<SelectedTemplate formData={formData} />).toBlob();

      // Create a File object for uploading
      const pdfFile = new File([pdfBlob], 'generated.pdf', { type: 'application/pdf' });

      // Upload the PDF file to backend and get DOCX blob response
      const docxBlob = await convertPdfToDocx(pdfFile).unwrap();

      // Trigger DOCX download
      const url = window.URL.createObjectURL(docxBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Conversion failed:', err);
      alert('Failed to convert PDF to DOCX');
    }
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
        <div className={`modal-content ${isMobile ? 'vh-50' : 'vh-100'}`}>
          <div className="modal-header d-flex justify-content-between align-items-center w-100">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              High Court Template Preview
            </h1>
            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            {isMobile ? (
              <div className="text-center d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                <button onClick={handleConvertAndDownloadDocx} className="btn btn-success p-2" disabled={isLoading}>
                  {isLoading ? 'Converting...' : 'Download DOCX'}
                </button>
              </div>
            ) : (
              <>
                <PDFViewer style={{ width: '100%', height: '88vh' }}>
                  <SelectedTemplate formData={formData} />
                </PDFViewer>
                <div className="text-center my-2">
                  <button onClick={handleConvertAndDownloadDocx} className="btn btn-success" disabled={isLoading}>
                    {isLoading ? 'Converting...' : 'Download DOCX'}
                  </button>
                  {error && <p className="text-danger mt-2">Conversion failed, please try again.</p>}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighCourtModal;
