import React from 'react';
import './AnticipatoryBailFile.css'; // Assuming you move styles to a CSS file

const AnticipatoryBailFile = ({ formData }) => {
    return (
        <div className="document">
            {/* Page 1 */}
            <div className="page">
                <h2 className="center heading heading-center">MEMORANDUM OF CRIMINAL PETITION</h2>
                <p className="center">(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)</p>
                <h3 className="center heading">IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</h3>
                <p className="center">AT HYDERABAD</p>

                <p className="center mt-20">
                    CRL.P.No. <span className="underline">{formData?.CrlpNo}</span> OF 2007
                </p>

                <p className="center mt-20">BETWEEN:</p>

                {formData?.Petitioners?.map((pet) => (
                    <div key={pet?.Name}>
                        <p className="item">{pet?.Name}</p>
                        <p className="item">{pet?.Address}</p>
                    </div>
                ))}

                <p className="end bold">..PETITIONER/ACCUSED</p>
                <p className="start">AND</p>
                <p className="item">THE STATE OF A.P. REP. BY</p>
                <p className="item">PUBLIC PROSECUTOR</p>
                <p className="end bold">..RESPONDENT/COMPLAINANT</p>

                <p className="justified">
                    The address for service of all notices and process on the above named Petitioner is that of his
                    counsel M/s ###, Advocate, Hyderabad.
                </p>

                <h2 className="center heading heading-center mt-20">PETITION FOR ANTICIPATORY BAIL</h2>

                <p className="justified">
                    The petitioner is accused in Crime No. <span className="underline">{formData?.CrimeNumber}</span>{' '}
                    of 2007 of <span className="underline">{formData?.PoliceStationName}</span> Police Station. He is
                    alleged to have committed offenses punishable under Sections{' '}
                    <span className="underline">{formData?.Sections}</span>. He is apprehending arrest in the above
                    crime.
                </p>

                {[...Array(6)].map((_, i) => (
                    <p className="item mt-10" key={i}>
                        {i + 1}. The petitioner submits that
                    </p>
                ))}
            </div>

            {/* Page 2 */}
            <div className="page">
                {[...Array(2)].map((_, i) => (
                    <p className="item mt-10" key={`second-${i}`}>
                        {i + 7}. The petitioner submits that
                    </p>
                ))}
                <p className="item mt-10">
                    9. The petitioner submits that he is a permanent resident of ______________________ having fixed
                    abode and landed property and there is no question of absconding.
                </p>
                <p className="item mt-10">
                    10. The petitioner submits that he filed Crl.M.P.No. _________ before the learned Sessions Judge
                    ____________ and the same was dismissed on ________.
                </p>
                <p className="item mt-10">
                    11. The Petitioner submits that he is willing to furnish suitable security and abide by any
                    conditions which this Hon'ble Court may deem fit to impose.
                </p>
                <p className="justified mt-10">
                    It is therefore prayed that this Hon'ble Court may be pleased to direct the Station House Officer
                    _______________ Police Station to release the Petitioner on Bail in the event of his arrest in
                    connection with Crime No.______ of 2007 of ____________ Police Station.
                </p>

                <div className="signature-row mt-40">
                    <span>HYDERABAD</span>
                    <span className="align-right">COUNSEL FOR THE PETITIONER</span>
                </div>
                <p className="mt-10">DATE: ____________</p>
            </div>

            {/* Page 3 */}
            <div className="page">
                <div className="right-lane">
                    <p className="cover-page">{formData?.Place} DISTRICT</p>
                    <p className="center mt-40">HIGH COURT HYDERABAD</p>
                    <p className="center mt-40">
                        Crl.P.No. <span className="underline">{formData?.CrlpNo}</span> OF 2007
                    </p>

                    <div style={{ margin: '100px 0' }} />

                    <h3 className="center heading-center" style={{ fontSize: 14 }}>
                        PETITION FOR ANTICIPATORY BAIL
                    </h3>

                    <div style={{ margin: '100px 0' }} />

                    <p className="start">M/s ### (000)</p>
                    <p className="start">Advocate</p>
                    <p className="end mt-20">COUNSEL FOR THE PETITIONER</p>
                </div>
            </div>
        </div>
    );
};

export default AnticipatoryBailFile;
