import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import styles from '../../assets/templateStyles';

const CauseTitle = ({ formData }) => (
    <View>
        <Text>Between:</Text>
        {formData?.petitioners?.map((petitioner, index) => (
            <View key={index}>
                <Text>{index + 1}. {petitioner.name} - {petitioner.age}</Text>
                <Text>{petitioner.address}</Text>
            </View>
        ))}


        <View style={styles.end}>
            <Text>..Petitioner</Text>
        </View>
        <Text>AND</Text>
        {formData?.respondents?.map((respondent, index) => (
            <View key={index}>
                <Text>{index + 1}. {respondent.name} - {respondent.age}</Text>
                <Text>{respondent.address}</Text>
            </View>
        ))}

        <View style={styles.end}>
            <Text>..Respondent</Text>
        </View>
    </View>
);

const BattaForm = ({ formData }) => (
    <View>
        <Text style={{ fontWeight: "bold", textDecoration: "underline", textAlign: "center" }}>BATTA FORM</Text>
        <Text>{formData?.RespondentName1}</Text>
        <Text>{formData?.RespondentAddress1}</Text>
        <Text>{formData?.RespondentName2}</Text>
        <Text>{formData?.RespondentAddress2}</Text>
        <Text>{formData?.RespondentName3}</Text>
        <Text>{formData?.RespondentAddress3}</Text>
        <View style={styles.battaRow}>
            <Text>Hyderabad</Text>
            <Text style={{ textAlign: "right" }}>Counsel for the Petitioner(s).</Text>
        </View>

        <Text style={styles.dateLine}>DATE: {new Date(formData?.Date)
            .toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })
            .replace(/\//g, '-')}</Text>

    </View>
)
const TableHeader = () => (
    <View style={styles.tableRow} wrap={false}>
        <Text style={styles.tableColHeader}>S.No.</Text>
        <Text style={styles.tableColHeader}>Item No.</Text>
        <Text style={styles.tableColHeader}>Description</Text>
        <Text style={styles.tableColHeader}>Page No.</Text>
        <Text style={styles.tableColHeader}>Checking Officer's Signature</Text>
        <Text style={styles.tableColHeader}>Remarks</Text>
    </View>
);

// Certificate Component
const HighCourtTemplate = ({ formData }) => {
    const formatted = new Date(formData?.Date)
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        .replace(/\//g, '-');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={[styles.heading, { fontSize: 12, textAlign: 'center' }]}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <View style={[styles.evenly, { marginBottom: '30px' }]}>
                        <Text >W.P. NO.</Text>
                        <Text >OF 2025</Text>
                    </View>
                    <CauseTitle formData={formData} />
                </View>
                <View>
                    <Text style={[styles.headingCenter, { fontWeight: 600, marginBottom: 20, textAlign: 'center' }]}>AFFIDAVIT</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>I, {formData?.RespondentName1}, {formData?.RespondentAddress1}, now having temporarily come down to Hyderabad, do hereby solemnly and sincerely affirm and state as follows:</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>1. I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>2. I further submit that since the cause of action of all the petitioners herein is one and the same, we are filing a single writ petition. However, as required under writ rules, separate court fee is paid herewith.</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>3. I submit that</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to seek the redressal before this Hon'ble Court seeking the indulgence of this Hon'ble Court to exercise the extraordinary original jurisdiction vested in this Hon'ble Court by virtue of Article 226 of the Constitution of India.</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>The petitioner has not filed any writ petition, suit or other proceedings for the relief or relieves sought herein.</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>It is therefore prayed that this Hon'ble Court may be pleased and pass such other order or orders may deem fit and proper in the circumstances of the case.</Text>
                    <Text style={[styles.paragraph, { fontSize: 14 }]}>It is also just and necessary that this Hon'ble Court may be pleased pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.</Text>
                </View>
                <View style={styles.between}>
                    <View style={[styles.paragraph, { marginTop: 20 }]}>
                        <Text>last page corrs.</Text>
                        <Text>Solemnly and sincerely affirmed this</Text>
                        <Text>the day of {formatted}</Text>
                        <Text>and signed his name in my presence.</Text>
                    </View>
                    <Text style={[styles.paragraph, { textAlign: 'right', marginTop: 40 }]}>Deponent</Text>
                </View>
                <Text style={[styles.center, { marginTop: 20 }]}>BEFORE ME</Text>
                <Text style={[styles.center, { marginTop: 20 }]}>ADVOCATE :: Hyderabad</Text>
                <View style={styles.paragraph}>
                    <Text style={[styles.headingCenter, { marginTop: 20, marginBottom: 20 }]}>VERIFICATION STATEMENT</Text>
                    <Text>I, {formData?.RespondentName1}, {formData?.RespondentAddress1}, being the petitioner/person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at Hyderabad on this the day of {formatted}.</Text>
                </View>
                <View style={[styles.paragraph, styles.between, { marginTop: 30 }]}>
                    <Text>Advocate</Text>
                    <Text>Deponent</Text>
                </View>
                <View style={styles.paragraph} break>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 10 }}>Memorandum of Writ Petition</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>(Special Original Jurisdiction)</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>(Under Art. 226 of the Constitution of India)</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>W.P. NO. _____________ OF 2025</Text>
                    <CauseTitle formData={formData} />
                    <Text style={{ marginBottom: 12 }}>The address for service on the above named Petitioners is that of their counsel K.V.R.PRASAD (9377), Advocate, Flat.No.301, HSR Elite Apartments, Cell: 8008005689.</Text>
                    <Text style={{ marginBottom: 12 }}>For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased and to pass such other order or orders as this Hon'ble Court may deems fit just and proper in the circumstances of the case.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <Text>Hyderabad</Text>
                        <Text>Counsel for the Petitioner</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>DATE: {formatted}</Text>
                </View>
                <View style={[styles.coverPage, { flexDirection: "row", justifyContent: "flex-end" }]} break>
                    <View style={{ width: "53 %" }}>
                        <Text style={styles.centerText}>District</Text>
                        <Text style={[styles.endText]} break>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                        <Text style={styles.centerText}>W.P. NO. _____________ OF 2025</Text>
                        <Text style={[styles.startText, { marginTop: 20 }]}>{formData?.petitioners[0]?.name}</Text>
                        <Text style={[styles.endText, { marginTop: 20 }]}>...Petitioner</Text>
                        <Text style={styles.startText}>AND</Text>
                        <Text style={styles.startText}>{formData?.respondents[0]?.name}</Text>
                        <Text style={styles.endText}>...Respondent</Text>
                        <Text style={[styles.centerText, { marginTop: 40, textDecoration: 'underline' }]}>WRIT PETITION</Text>
                        <Text style={[styles.centerText, { marginTop: 60 }]}>Filed By:</Text>
                        <Text style={styles.centerText}>M/s K.V.R.PRASAD (9377)</Text>
                        <Text style={styles.centerText}>Advocate</Text>
                        <Text style={styles.centerText}>Counsel for Petitioner</Text>
                    </View>
                </View>

                <View style={styles.paragraph} break>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 10 }}>MEMORANDUM OF WRIT PETITION MISC. PETITION</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>(UNDER SEC. 151 OF THE C.P.C.)</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>I.A. NO. _____________ OF 2025</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 5 }}>IN</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 20 }}>W.P. NO. _____________ OF 2025</Text>
                    <CauseTitle formData={formData} />
                    <Text style={{ marginTop: 20 }}>For the reasons stated in the affidavit filed in support of the above Writ Petition, it is hereby prayed that this Hon'ble Court may be pleased pending disposal of the above writ petition and to pass such other order or orders as this Hon'ble Court may deem fit, just, and proper in the circumstances of the case.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <Text>Hyderabad</Text>
                        <Text>Counsel for the Petitioner</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>DATE: {formatted}</Text>
                </View>
                <View style={[styles.coverPage, { flexDirection: "row", justifyContent: "flex-end" }]} break>
                    <View style={{ width: "53%" }}>
                        <Text style={styles.centerText}>{formData?.RespondentAddress1}</Text>
                        <Text style={styles.centerText}>District</Text>
                        <Text style={[styles.centerText, { marginTop: 20 }]}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                        <Text style={[styles.centerText, { marginTop: 20 }]}>I.A. NO. _____________ OF 2025</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={[styles.centerText, { marginBottom: 40 }]}>W.P. NO. _____________ OF 2025</Text>
                        <Text style={[styles.startText, { fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline', marginBottom: 60 }]}>Direction / Suspension / Set Aside / Stay Petition</Text>
                        <Text style={styles.startText}>Filed by:</Text>
                        <Text style={styles.startText}>M/s K.V.R.PRASAD (9377)</Text>
                        <Text style={styles.startText}>Advocate</Text>
                        <Text style={styles.startText}>Counsel for Petitioner</Text>
                    </View>
                </View>

                <View style={[styles.coverPage, { flexDirection: "row", justifyContent: "flex-end" }]} break>
                    <View style={{ width: "53%" }}>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>SINGLE / BENCH</Text>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>SERVICE / NON-SERVICE</Text>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>DEPT: _______________</Text>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>Category Code and</Text>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>Sub Category Code</Text>
                        <Text style={[styles.startText, { fontSize: "10px" }]}>Admission Court:</Text>
                        <Text style={[styles.centerText, { fontWeight: "bold", fontSize: "" }]}>HIGH COURT</Text>
                        <Text style={styles.centerText}>SPECIAL ORIGINAL JURISDICTION</Text>
                        <Text style={[styles.centerText, { marginTop: 20 }]}>W.P. NO. _____________ OF 2025</Text>
                        <Text style={[styles.centerText, { marginTop: 10 }]}>District</Text>
                        <Text style={[styles.startText, { marginTop: 20 }]}>{formData?.petitioners[0]?.name}</Text>
                        <Text style={[styles.endText, { marginTop: 20 }]}>...Petitioner/s</Text>
                        <Text style={[styles.centerText, { fontWeight: "bold" }]}>By</Text>
                        <Text style={[styles.centerText, { fontWeight: "bold" }]}>M/s K.V.R.PRASAD (9377)</Text>
                        <Text style={styles.centerText}>COUNSEL FOR PETITIONER</Text>
                        <Text style={[styles.centerText, { marginTop: 30, textDecoration: "underline", fontWeight: "bold", textTransform: "uppercase" }]}>NATURE OF APPLICATION</Text>
                        <Text style={styles.centerText}>(Under Art. 226 of Constitution of India)</Text>
                        <Text style={{ marginTop: 20, textAlign: "justify" }}>The Hon'ble Court may be pleased and to pass such other order or orders as thisHon'ble Court may deem fit, just and proper in the circumstances of the case.</Text>
                        <View style={[styles.startText, { marginTop: 30, flexDirection: "column", gap: 6 }]}>
                            <Text>Permitted on : {formatted}</Text>
                            <Text>Presented on : {formatted}</Text>
                            <Text>Filed on        : {formatted}</Text>
                            <Text>I.A. No. _____________ OF 2025</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.coverPage, { flexDirection: "row", justifyContent: "flex-end" }]} break>
                    <View style={{ width: "53%" }}>
                        <Text style={styles.centerText}>HIGH COURT</Text>
                        <Text style={[styles.headingCenter, { fontWeight: 600 }]}>WRIT PETITION MISC. PETITION</Text>
                        <Text style={[styles.centerText, { marginTop: 20 }]}>I.A. NO. _____________ OF 2025</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={[styles.centerText, { marginBottom: 30 }]}>W.P. NO. _____________ OF 2025</Text>
                        <Text style={styles.startText}>{formData?.State}</Text>
                        <Text style={styles.centerText}>District</Text>
                        <Text style={[styles.startText, { marginTop: 20 }]}>{formData?.petitioners[0]?.name}</Text>
                        <Text style={[styles.endText, { marginTop: 20 }]}>... Petitioner/s</Text>
                        <Text style={styles.centerText}>By</Text>
                        <Text style={styles.centerText}>M/s K.V.R.PRASAD (9377)</Text>
                        <Text style={[styles.centerText, { textDecoration: "underline" }]}>NATURE OF APPLICATION</Text>
                        <Text style={styles.centerText}>(UNDER SEC. 151 C.P.C.)</Text>
                        <Text style={{ marginTop: 20, textAlign: "justify" }}>This Hon'ble Court may be pleased, pending disposal of the above writ petition, and topass such other order or orders as this Hon'ble Court may deem fit, just and proper in thecircumstances of the case.</Text>
                        <View style={[styles.startText, { marginTop: 40, flexDirection: "column", gap: 7 }]}>
                            <Text>PRESENTED ON:{formatted}</Text>
                            <Text>REPRESENTED ON:</Text>
                            <Text>FILED ON:{formatted}</Text>
                        </View>
                    </View>
                </View>

                <View break>
                    <Text style={[styles.heading, { fontSize: 12 }]}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <View style={[styles.evenly, { marginBottom: '10px' }]}>
                        <Text >W.P. NO.</Text>
                        <Text >OF 2025</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: '10px' }}>Between:</Text>
                        <Text style={{ fontSize: '10px' }}>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                        <Text style={styles.end}>..Petitioner</Text>
                        <Text style={{ fontSize: '10px' }}>AND</Text>
                        <Text style={{ fontSize: '10px' }}>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                        <Text style={styles.end}>..Respondent</Text>
                    </View>
                    <Text style={{ fontWeight: "bold", textDecoration: "underline", textAlign: "center" }}>CHECK LIST FOR WRIT PETITION</Text>
                    <View style={styles.table}>
                        <TableHeader />
                        {/* {pageItems.map((item, idx) => (
                        <View style={styles.tableRow} wrap={false} key={idx}>
                            <Text style={styles.tableCol}>{item.description}</Text>
                            <Text style={styles.tableCol}>{item.qty}</Text>
                            <Text style={styles.tableCol}>${item.unitPrice.toFixed(2)}</Text>
                            <Text style={styles.tableCol}>${(item.qty * item.unitPrice).toFixed(2)}</Text>
                        </View>
                    ))} */}
                    </View>
                    <Text style={{ fontWeight: "bold", textDecoration: "underline" }}>ORIGINAL SET</Text>
                    <View style={styles.section}>
                        <Text style={styles.subItem}>1. Proof of Service — Page 1</Text>
                        <Text style={styles.subItem}>2. Court Fee Rs. ___ /- — Page 2</Text>
                        <Text style={styles.subItem}>3. Writ Petition — Page 3</Text>
                        <Text style={styles.subItem}>4. Annexures I & II — Page 4</Text>
                        <Text style={styles.subItem}>5. Affidavit — Page 5 to ___</Text>
                        <View style={styles.indent}>
                            <Text style={styles.subItem}>a) Averment regarding previous proceedings</Text>
                            <View style={styles.subIndent}>
                                <Text style={styles.subItem}>(mention Page No., Para No.)</Text>
                            </View>
                            <Text style={styles.subItem}>b) Averment regarding alternative relief</Text>
                            <View style={styles.subIndent}>
                                <Text style={styles.subItem}>(mention Page No., Para No.)</Text>
                            </View>
                        </View>
                        <Text style={styles.subItem}>6. Verification Statement</Text>
                        <Text style={styles.subItem}>7. Enclosure</Text>
                        <Text style={styles.subItem}>8. Material Papers (Duly Indexed – P. Series) — Page ___ to ___</Text>
                        <Text style={styles.subItem}>9. a) Vakalath Rs. ___ /-</Text>
                        <View style={styles.indent}>
                            <Text style={styles.subItem}>b) Power of Attorney / Resolution authorising to sue</Text>
                            <View style={styles.subIndent}>
                                <Text style={styles.subItem}>(if petition is filed in representative capacity)</Text>
                            </View>
                        </View>
                        <Text style={styles.subItem}>10. Sheet containing Respondents' Addresses</Text>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.itemGroup}>
                        <Text style={{ fontWeight: "bold", fontSize: 10, textDecoration: "underline" }}>DUPLICATE SET</Text>
                        <Text style={styles.item}>11. Writ Petition — Page 3</Text>
                        <Text style={styles.item}>12. Annexures I & II — Page 4</Text>
                        <Text style={styles.item}>13. Affidavit — Page 5 to ___</Text>
                        <Text style={styles.item}>14. Material Papers — Page ___ to ___</Text>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.itemGroup}>
                        <Text style={{ fontWeight: "bold", fontSize: 10, textDecoration: "underline" }}>MISCELLANEOUS SET</Text>
                        <Text style={styles.item}>15. Batta Rs.</Text>
                        <Text style={styles.item}>16. Rule Nisi Forms</Text>
                        <Text style={styles.item}>17. Covers with Postal Addresses & Ack. Forms</Text>
                        <Text style={styles.item}>18. Copies of Petition and Affidavits (As many as the No. of the Respondents + 2)</Text>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.itemGroup}>
                        <Text style={{ fontWeight: "bold", fontSize: 10, textDecoration: "underline" }}>WRIT PETITION MISC. PETITION</Text>
                        <Text style={styles.item}>19. WRIT PETITION MISC. PETITION</Text>
                        <Text style={styles.subItem}>(Filed for)</Text>
                        <View style={styles.subItemGroup}>
                            <Text style={styles.subItem}>- Petition</Text>
                            <Text style={styles.subItem}>- Court Fee Rs.</Text>
                            <Text style={styles.subItem}>- Batta Rs.</Text>
                            <Text style={styles.subItem}>- Notice Papers, Covers with Postal Addresses and Ack. Forms</Text>
                            <Text style={styles.subItem}>- Proforma Draft Interim Order</Text>
                        </View>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.signatureRow}>
                        <View style={styles.signatureBox}>
                            <Text>Signature of the</Text>
                            <Text>Scrutiny Officer</Text>
                        </View>

                        <View style={styles.signatureBox}>
                            <Text style={styles.alignRight}>Signature of the Advocate</Text>
                            <Text style={styles.alignRight}>Name: K.V.R.PRASAD (9377)</Text>
                        </View>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.officeUseBlock}>
                        <Text>FOR OFFICE USE ONLY</Text>
                        <Text>Respondent Vakalat filed by _________________ for Respt.No. ___________</Text>
                        <Text>Counter Filed for Respt.No. ____________________________</Text>
                        <Text>Other Miscellaneous Petitions filed ____________________</Text>
                    </View>
                </View>

                <View >
                    <BattaForm formData={formData} />
                    <View style={{ marginTop: 200 }}>
                        <BattaForm formData={formData} />
                    </View>
                </View>

                <View break>
                    <Text style={{ fontWeight: "bold", textDecoration: "underline" }}>RESPONDENTS ADDRESSES:</Text>
                    <Text>{formData?.RespondentName1}</Text>
                    <Text>{formData?.RespondentAddress1}</Text>
                    <Text>{formData?.RespondentName2}</Text>
                    <Text>{formData?.RespondentAddress2}</Text>
                    <Text>{formData?.RespondentName3}</Text>
                    <Text>{formData?.RespondentAddress3}</Text>
                </View>

                <View break>
                    <Text style={{ textDecoration: "underline" }}>Respondents address for sticking on covers and acknowledgments</Text>
                    <Text>{formData?.RespondentName1}</Text>
                    <Text>{formData?.RespondentAddress1}</Text>
                    <Text>{formData?.RespondentName2}</Text>
                    <Text>{formData?.RespondentAddress2}</Text>
                    <Text>{formData?.RespondentName3}</Text>
                    <Text>{formData?.RespondentAddress3}</Text>
                </View>

                <View break>
                    <Text style={{ fontWeight: "bold", textDecoration: "underline", textAlign: "center" }}>SERVICE CERTIFICATE</Text>
                    <Text style={{ marginTop: 20, marginBottom: 40, textDecoration: "underline", textAlign: "center" }}>(PROOF OF SERVICE)</Text>
                    <Text style={{ marginBottom: 100 }}> We have served the copies of Writ Petition, Affidavit, Writ Petition Miscellaneous Petition(s) and Material Papers on the other side Counsel/Government Pleader.</Text>
                    <View style={styles.battaRow}>
                        <Text>Hyderabad</Text>
                        <Text style={{ textAlign: "right" }}>Counsel for the Petitioner(s).</Text>
                    </View>
                    <Text style={styles.dateLine}>DATE: {formatted}</Text>
                </View>

                <View break>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <Text style={{ marginTop: 20, fontSize: 10, textAlign: "center" }}>I.A. No. __________ OF 2025   IN   W.P. No. __________ OF 2025</Text>
                    <View style={{ marginVertical: 20 }}>
                        <Text>Between:</Text>
                        <Text>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                        <Text style={styles.end}>..Petitioner</Text>
                        <Text>AND</Text>
                        <Text>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                        <Text style={styles.end}>..Respondent</Text>
                        <Text>To</Text>
                        <Text>1. {formData?.RespondentName1} - {formData?.RespondentAge1}</Text>
                        <Text>{formData?.RespondentAddress1}</Text>
                        <Text>2. {formData?.RespondentName2} - {formData?.RespondentAge2}</Text>
                        <Text>{formData?.RespondentAddress2}</Text>
                        <Text>3. {formData?.RespondentName3} - {formData?.RespondentAge3}</Text>
                        <Text>{formData?.RespondentAddress3}</Text>
                    </View>
                    <Text style={[styles.paragraph, { marginVertical: 10 }]}>
                        Take Notice that the Appellant / Petitioner (Respondent) has/have presented a petition to the Court praying that under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED), and that the same will be heard by the Court on the ______ day ______ 2025.
                    </Text>

                    <Text style={styles.paragraph}>Notice and Interim Stay has/have been granted by order of Court dated the ______ of ______ 2025. The affidavit of ___________________________ has been filed in support thereof. Dated at Hyderabad this ______ day ______ 2025.</Text>

                    <Text style={{ textAlign: "right" }}>Advocate for Petitioner</Text>

                </View>

                <View style={[styles.section, {}]} break>
                    <View style={{ flexDirection: "column", gap: 10, alignItems: "center" }}>
                        <Text>(Writ of Court Orders – Order List (To Produce and or to appear))</Text>

                        <Text>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>

                        <Text>(Special Original Jurisdiction)</Text>

                        <Text>Day the ______ of Two Thousand</Text>

                        <Text>Writ Petition No. __________ of 2025</Text>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text>Between:</Text>
                        <Text>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                        <Text style={styles.end}>..Petitioner</Text>
                        <Text>AND</Text>
                        <Text>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                        <Text style={styles.end}>..Respondent</Text>
                        <Text>To</Text>
                        <Text>1. {formData?.RespondentName1} - {formData?.RespondentAge1}</Text>
                        <Text>{formData?.RespondentAddress1}</Text>
                        <Text>2. {formData?.RespondentName2} - {formData?.RespondentAge2}</Text>
                        <Text>{formData?.RespondentAddress2}</Text>
                        <Text>3. {formData?.RespondentName3} - {formData?.RespondentAge3}</Text>
                        <Text>{formData?.RespondentAddress3}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[styles.endText, { fontSize: 10 }]}>Respondent No.</Text>
                        <Text style={[styles.paragraph, { fontSize: 10 }]}>Mr. K.V.R.PRASAD (9377) upon motion this day made into this Court bybringing of opinion that the record to and touching upon all the matter and contentionsraised in the memorandum of representation petition, a copy of which is annexed hereto,together with the decision therein should be called for and pursued: IT IS HEREBYCOMMANDED.</Text>
                        <Text style={[styles.paragraph, { fontSize: 10 }]}>(1) That you, the aforesaid Respondent No. ______ do send, for our use in High Court ofJudicature Andhra Pradesh all and singular the said record and other with all the thingstouching the same as fully and perfectly as they have been made by you and now remain inyour custody or power together with this, Rule Nisi before the day of ______ 2025; and</Text>
                        <Text style={[styles.paragraph, { fontSize: 10 }]}>That you intend to oppose the petition you the aforesaid Respondent No. ______ do appearpersonally OR by Advocate on the ______ day of ______ 2025 at 10:30 A.M. before the courtto show cause why this petition should not be complied with and that we may cause furthermvyto be done thereon what of right and according to law we shall see fit to be done.</Text>

                        <Text style={[styles.paragraph, { fontSize: 10 }]}>WITNESS the Hon'ble Chief Justice of High Court of Judicature, Andhra Pradesh at Hyderabad,this the year two thousand eleven.</Text>

                        <Text style={{ fontSize: 10 }}>Hearing Date:</Text>
                        <Text style={{ fontSize: 10 }}>Assistant Registrar</Text>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ textAlign: "center", fontSize: 10 }}>RETURN OF THE WRIT OF CERTIORARI ORDER : NISI</Text>
                            <Text style={{ textAlign: "center", fontSize: 10 }}>(To be endorsed on Writ to appear)</Text>
                        </View>
                        <Text style={{ fontSize: 10 }}>The Process of the Writ of Certiorari whereof mention is which made was served on respondent This _______ day of _______________, two thousand eleven.</Text>
                        <Text style={{ marginTop: 10, fontSize: 10 }}>This should be served urgently on the Respondent No. _________ and returned to the High Court</Text>
                        <Text style={{ textAlign: "center", fontSize: 10 }}>(Sd)</Text>
                        <Text style={[styles.centered, { fontSize: 10 }]}>writ and rule nise</Text>
                        <Text style={{ fontSize: 10 }}>W.P. No. __________ of 2025</Text>
                        <Text style={{ marginTop: 20, fontSize: 10 }}>Certified that the required conveyance charges and the process for the service of the Process have been collected. It is requested that English Translation of the Process Service Report, it is in Vernacular, may be sent along with the Rule-Nise returned.</Text>
                        <Text style={{ fontSize: 10 }}>FORM: 8</Text>
                        <Text style={{ fontSize: 10 }}>RETURN OF THE WRIT OF CERTIORARI ORDER NISI</Text>
                        <Text style={{ fontSize: 10 }}>(TO BE ENDORSED ON WRIT TO PRODUCE)</Text>
                        <Text style={{ fontSize: 10, marginTop: 10 }}>The process of the Writ of certiorari whereof mention is within made with all things touching the same in the several papers hereto annexed as within commanded.</Text>
                        <Text style={{ fontSize: 10, marginTop: 10 }}>The Answer of {'\n'}The __________________________ respondent here</Text>
                        <Text style={{ fontSize: 10 }}>Date ________ day of ________________ 2025</Text>

                        <Text style={{ fontSize: 10, textAlign: "center" }}>(Sd)</Text>
                    </View>
                </View>

                <View style={{ margin: 10, padding: 10 }} break>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>

                    <Text style={{ fontSize: 12, textAlign: 'center', marginBottom: 20 }}>W.P. No. ___________ OF 2025</Text>

                    <Text style={{ fontSize: 12, textAlign: 'center', textDecoration: 'underline' }}>CHRONOLOGICAL / RUNNING INDEX</Text>
                    <View style={styles.table}>
                        {/* Header Row */}
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableColHeader, styles.col1]}>Sl. No.</Text>
                            <Text style={[styles.tableColHeader, styles.col2]}>Exhibit</Text>
                            <Text style={[styles.tableColHeader, styles.col3]}>Description of Document</Text>
                            <Text style={[styles.tableColHeader, styles.col4]}>Date of Document</Text>
                            <Text style={[styles.tableColHeader, styles.col5]}>Date of filing of Document</Text>
                            <Text style={[styles.tableColHeader, styles.col6]}>Pg no</Text>
                        </View>

                        {/* Data Rows */}
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>1.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Service Certificate</Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}>1</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>2.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Court fee</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}>2</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>3.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Writ Petition</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}>2</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>4.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Annexure</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>5.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Affidavit</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>6.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Verification</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}></Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Material Papers</Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>7.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P1</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>8.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P2</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>9.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P3</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>10.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P4</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>11.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P5</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>12.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P6</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>13.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P7</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>14.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P8</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>15.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P9</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>16.</Text>
                            <Text style={[styles.tableCol, styles.col2]}>P10</Text>
                            <Text style={[styles.tableCol, styles.col3]}></Text>
                            <Text style={[styles.tableCol, styles.col4]}></Text>
                            <Text style={[styles.tableCol, styles.col5]}></Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>17.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Vakalath</Text>
                            <Text style={[styles.tableCol, styles.col4]}>{formatted}</Text>
                            <Text style={[styles.tableCol, styles.col5]}>{formatted}</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.col1]}>18.</Text>
                            <Text style={[styles.tableCol, styles.col2]}></Text>
                            <Text style={[styles.tableCol, styles.col3]}>Respondents Addresses</Text>
                            <Text style={[styles.tableCol, styles.col4]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col5]}>-do-</Text>
                            <Text style={[styles.tableCol, styles.col6]}></Text>

                        </View>


                    </View>
                    <Text style={{ marginTop: 10 }}>DATE: {formatted}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Hyderabad</Text>
                        <Text>Counsel for the Petitioner</Text>
                    </View>


                </View>

                <View break>
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 12 }}>W.P.NO. ________________________ of 2025</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text>Between:</Text>
                        <Text>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                        <Text style={styles.end}>..Petitioner</Text>
                        <Text>AND</Text>
                        <Text>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                        <Text style={styles.end}>..Respondent</Text>
                    </View>
                    <Text style={{ marginTop: 30, textAlign: 'center', fontSize: 12, fontWeight: 'bold', textDecoration: 'underline' }}>LIST OF EVENTS</Text>
                    <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', textDecoration: 'underline' }}>Annexure – I</Text>
                    <View style={[styles.table, { marginTop: 10 }]}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, styles.annexurecol1]}>S.No</Text>
                            <Text style={[styles.tableCol, styles.annexurecol2]}>Date</Text>
                            <Text style={[styles.tableCol, styles.annexurecol3]}>Description of the Events</Text>
                            <Text style={[styles.tableCol, styles.annexurecol4]}>Page Nos in Affidavit</Text>
                            <Text style={[styles.tableCol, styles.annexurecol5]}>Para No. in Affidavit</Text>
                        </View>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <View key={num} style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.annexurecol1]}>{num}</Text>
                                <Text style={[styles.tableCol, styles.annexurecol2]}></Text>
                                <Text style={[styles.tableCol, styles.annexurecol3]}></Text>
                                <Text style={[styles.tableCol, styles.annexurecol4]}></Text>
                                <Text style={[styles.tableCol, styles.annexurecol5]}></Text>
                            </View>
                        ))}
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center', marginTop: 30 }}>ANNEXURE – II</Text>
                    <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 20 }}>Under Article 226 of Constitution of India.</Text>
                    <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 40 }}>Hyderabad</Text>
                    <Text style={{ fontSize: 12, textAlign: 'right', }}>Counsel for Petitioner/s</Text>
                    <Text style={{ fontSize: 12, }}>DATE: {formatted}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }} break>
                    <View>
                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                        <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 12 }}>W.P.NO. ________________________ of 2025</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text>Between:</Text>
                            <Text>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                            <Text style={styles.end}>..Petitioner</Text>
                            <Text>AND</Text>
                            <Text>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                            <Text style={styles.end}>..Respondent</Text>
                        </View>
                        <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', textDecoration: 'underline' }}>COURT FEE</Text>
                    </View>
                    <View style={{ height: '30%' }}>
                        <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 40 }}>Hyderabad</Text>
                        <Text style={{ fontSize: 12, textAlign: 'right', }}>Counsel for Petitioner/s</Text>
                        <Text style={{ fontSize: 12, }}>DATE: {formatted}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                        <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 10, fontWeight: 'bold' }}>ORIGINAL/APPELLATE SIDE</Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, marginVertical: 20 }}>W.P.No.                  		OF 2025</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text>Between:</Text>
                            <Text>1. {formData?.petitioners[0]?.name} - {formData?.petitioners[0]?.age}</Text>
                            <Text style={styles.end}>..Petitioner</Text>
                            <Text>AND</Text>
                            <Text>1. {formData?.respondents[0]?.name} - {formData?.respondents[0]?.age}</Text>
                            <Text style={styles.end}>..Respondent</Text>
                        </View>
                        <Text style={{ fontSize: 11, lineHeight: 1.4, marginTop: 10 }}>I, {formData?.PetitionerName1}, {formData?.PetitionerAddress1}, petitioner in the above Petition do hereby appoint and retain</Text>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14, fontWeight: 'bold' }}>K.V.R.PRASAD (9377)</Text>
                        <Text style={{ textAlign: 'center', fontSize: 11, marginBottom: 15 }}>Advocate</Text>
                        <Text style={{ fontSize: 11, lineHeight: 1.4 }}>Advocate/s of the High Court to appear for me/us in the above Appeal/Petition and to conduct and prosecute (or defend) the same and all proceedings that may be taken in respect of any application connected with the same or any decree or order passed therein including all applications for return of documents or the receipt of any money that may be payable to me/us in the said Appeal/Petition and also to appear in all applications under Clause-XV of the Letters Pattent and in all applications for review and for leave to the Supreme Court of India and in all applications review of judgment.</Text>
                    </View>
                    <View style={{ height: '40%' }}>
                        <Text style={{ fontSize: 11 }}>I certify that the contents this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant or executants who appeared perfectly to understand the same and made his/her/their signatures or mark in my presence.</Text>
                        <Text style={{ fontSize: 11 }}>Executed before me this ____________ day of ____________ 2025</Text>
                        <Text style={{ fontSize: 11 }}>ADVOCATE :: Hyderabad</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <View style={{ width: '40%', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <View style={{ height: '60%' }}>
                            <Text style={{ fontSize: 11 }}>S.R.No.</Text>
                            <Text style={{ fontSize: 11 }}>District</Text>
                            <Text style={{ fontSize: 11, marginTop: 10, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                            <Text style={{ fontSize: 11, textAlign: 'center', marginTop: 5 }}>ORIGINAL/APPELLATE SIDE</Text>
                            <Text style={{ fontSize: 11, textAlign: 'center', marginTop: 5 }}>W.P.No.                       OF 2025</Text>
                        </View>
                        <View style={{ height: '40%' }}>
                            <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 50, fontWeight: 'semibold' }}>VAKALAT</Text>
                            <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 5 }}>ACCEPTED</Text>
                            <Text style={{ fontSize: 11, marginTop: 20 }}>K.V.R.PRASAD (9377)</Text>
                            <Text style={{ fontSize: 11 }}>COUNSEL FOR PETITIONER</Text>
                            <Text style={{ fontSize: 11, marginTop: 20 }}>DATE : {formatted}</Text>
                            <Text style={{ fontSize: 11 }}>_____________________________</Text>
                            <Text style={{ fontSize: 11, marginTop: 20 }}>Address for Service:</Text>
                            <Text style={{ fontSize: 11 }}>K.V.R.PRASAD (9377), Advocate, Flat.No.301, HSR Elite Apartments, Cell:8008005689.</Text>
                        </View>
                    </View>
                </View>

                <View break>
                    <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>IN THE HIGH COURT FOR THE STATE OF TELANGANA AT HYDERABAD</Text>
                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Basic Information</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '100%', fontWeight: 'bold', fontSize: 10, textAlign: "center" }]}>FOR OFFICE USE ONLY</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '34%', fontSize: 10, textAlign: "center" }]}></Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10, textAlign: "center" }]}>No.</Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10, textAlign: "center" }]}>Year</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '34%', fontSize: 10, textAlign: "center" }]}>Filing No. (Unregistered)</Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10 }]}>W.P.No.</Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10, textAlign: "center" }]}>2025</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '34%', fontSize: 10, textAlign: "center" }]}>Main No. (Registered)</Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10 }]}>W.P.No.</Text>
                            <Text style={[styles.tableCol, { width: '33%', fontSize: 10, textAlign: "center" }]}>2025</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 11, fontWeight: 'bold', marginTop: 10, marginLeft: 100 }}>I.</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Name of the first petitioner:</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>{formData?.petitioners[0]?.name}</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Age:</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>{formData?.petitioners[0]?.age}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Name of the first Respondent:</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>{formData?.respondents[0]?.name}</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Age:</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>{formData?.respondents[0]?.age}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>District Name:</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>{formData?.State}</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Bar Council Enrollment No.: TS/139/2002</Text>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>TS/139/2002</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '25%', fontSize: 10 }]}>Name of the Counsel & Code:</Text>
                            <Text style={[styles.tableCol, { width: '75%', fontWeight: "bold", fontSize: 10 }]}>K.V.R.PRASAD (9377)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 10 }}>II. Fee paid by : Challan / Stamps</Text>
                        <Text style={{ fontWeight: "bold", width: "30%", fontSize: 10 }}>Challan Date:</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={[styles.table, { width: '60%' }]}>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Court Fee</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Carbon Copy</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.15/-</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Vakalath</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.5/-</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Welfare Fund</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.100/-</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Batta in Main Case (Process Fees)</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>IA (MPs) Court Fee</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Batta in IA (MPs) (Process Fees)</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>IA (MPs) Court Fee</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Batta in IA (MPs) (Process Fees)</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>IA (MPs) Court Fee</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }]}>Batta in IA (MPs) (Process Fees)</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                            <View style={[styles.tableRow]}>
                                <Text style={[styles.tableCol, styles.colLeft, { fontSize: 10 }, { fontWeight: 'bold' }]}>Total</Text>
                                <Text style={[styles.tableCol, styles.colRight, { fontSize: 10 }]}>Rs.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", textDecoration: "underline" }}>III. Lower Court Details:</Text>
                        <Text style={{ fontWeight: "bold", }}>(for Civil and Criminal Cases Only)</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '15%' }]}>Case Type</Text>
                            <Text style={[styles.tableCol, { width: '15%' }]}>Case No.</Text>
                            <Text style={[styles.tableCol, { width: '15%' }]}>Case Year</Text>
                            <Text style={[styles.tableCol, { width: '27%' }]}>Order Date</Text>
                            <Text style={[styles.tableCol, { width: '38%' }]}>Name of the Lower Court / any other</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCol, { width: '15%' }]}> </Text>
                            <Text style={[styles.tableCol, { width: '15%' }]}> </Text>
                            <Text style={[styles.tableCol, { width: '15%' }]}> </Text>
                            <Text style={[styles.tableCol, { width: '27%' }]}> </Text>2
                            <Text style={[styles.tableCol, { width: '38%' }]}> </Text>
                        </View>
                    </View>
                </View>

                <View break>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', textDecoration: 'underline' }}>Full Cause Title:</Text>
                    <CauseTitle formData={formData} />
                </View>

                <View break>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Main Case Prayer :</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>It is therefore prayed that this Hon'ble Court may be pleased and pass such other order or orders may deem fit and proper in the circumstances of the case.</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>IA(s) Prayer:</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>It is also just and necessary that this Hon'ble Court may be pleased pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.</Text>
                </View>
            </Page>
        </Document >
    );
};

export default HighCourtTemplate;