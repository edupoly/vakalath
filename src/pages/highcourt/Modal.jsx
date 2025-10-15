import { PDFViewer } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import HighCourtTemplate from './template'
import { Link } from 'react-router-dom';

function HighCourtModal({ formData, modalRef }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, [window]);

    const handleDownload = async () => {
        const blob = await pdf(<HighCourtTemplate formData={formData} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'high_court.pdf';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="modal fade vh-100" id="staticBackdrop" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered my-0 vh-100">
                <div className={`modal-content ${isMobile ? 'vh-50' : 'vh-100'}`}>
                    <div className="modal-header d-flex justify-content-between align-items-center w-100">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">High Court Template Preview</h1>
                        <Link to={'/'} className=''>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </Link>
                    </div>
                    <div className="modal-body p-0">
                        {
                            isMobile
                                ? <div className="text-center d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                                    <button onClick={handleDownload} className="btn btn-success p-2">
                                        Download High Court Template
                                    </button>
                                </div>
                                : <PDFViewer style={{ width: '100%', height: '88vh' }}>
                                    <HighCourtTemplate formData={formData} />
                                </PDFViewer>
                        }
                    </div>
                    {/* {
              !isMobile && (
                <div className="modal-footer">
                  <button onClick={handleDownload} className="btn btn-success" data-bs-dismiss="modal">Download</button>
                </div>
              )
            } */}
                </div>
            </div>
        </div>
    )
}

export default HighCourtModal