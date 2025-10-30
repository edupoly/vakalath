    import React from 'react';
    import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
    import styles from '../../../assets/templateStyles';

    const CriminalRevisionCaseFile = () => (
        <Document>
            <Page size="A4">
                <View style={styles.page}>
                    <Text style={[styles.centerText, styles.heading, styles.headingCenter]}>MEMORANDUM OF CRIMINAL REVISION CASE</Text>
                    <Text style={[styles.centerText]}>UNDER SECTION 397 & 401 OF CRIMINAL PROCEDURE CODE, 1973</Text>
                    <Text style={[styles.centerText, styles.heading, { marginTop: 10 }]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                    <Text style={styles.centerText}>AT HYDERABAD</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.centerText}>Crl.R.C.No. ________ OF 2007</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={styles.centerText}>Crl.A.No. ________ OF 2007</Text>
                        <Text style={styles.centerText}>ON THE FILE OF THE _______________________________</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={styles.centerText}>C.C.No. ________ OF 2007</Text>
                        <Text style={styles.centerText}>ON THE FILE OF THE _______________________________</Text>
                    </View>
                    <Text style={[styles.centerText, { marginTop: 20 }]}>BETWEEN:</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={[styles.endText, { fontWeight: 'bold' }]}>..ACCUSED/PETITIONER</Text>
                    <Text style={styles.startText}>and</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={[styles.endText, { fontWeight: 'bold' }]}>..COMPLAINANT/RESPONDENT</Text>
                    <Text style={styles.justifiedText}>The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ### Advocate, Hyderabad.</Text>
                    <Text style={styles.justifiedText}>The above named Appellant begs to file the revision against the judgment and sentence passed by the learned ____________________, Dt.__________ in Crl.A.No.___ of 2007, for the following grounds among others:</Text>
                    <Text style={[styles.heading, { textDecoration: 'underline' }]}>GROUNDS</Text>
                    <View style={styles.itemGroup}>
                        <Text style={styles.item}>1. The judgment of the learned ______________ Judge is illegal, improper and incorrect.</Text>
                        <Text style={styles.item}>2. The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs ________________.</Text>
                        <Text style={styles.item}>3. The learned Judge should have seen that the ingredients to constitute the said offences are not made out by the prosecution.</Text>
                        <Text style={styles.item}>4. The learned Judge should have seen that the medical evidence does not corroborate with the prosecution case.</Text>
                    </View>
                </View>

                <View style={styles.page}>
                    <View style={styles.itemGroup}>
                        <Text style={styles.item}>5. </Text>
                        <Text style={styles.item}>6. </Text>
                        <Text style={styles.item}>7. </Text>
                        <Text style={styles.item}>8. The other reasons given by the learned Judge are unsustainable.</Text>
                        <Text style={styles.item}>9. Having regard to the facts and circumstances of the case, the sentence is unduly severe.</Text>
                    </View>
                    <View style={[styles.signatureRow, { marginTop: 30 }]}>
                        <Text>HYDERABAD</Text>
                        <Text style={styles.alignRight}>COUNSEL FOR THE PETITIONER</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>DATE: ____________</Text>
                </View>

                <View style={styles.page}>
                    <Text style={styles.coverPage}>_______ DISTRICT</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>HIGH COURT :: HYDERABAD</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>Crl.R.C.No. _______ OF 2007</Text>
                    <Text style={styles.centerText}>IN</Text>
                    <Text style={[styles.centerText]}>Crl.A.No. _______ OF 2007</Text>
                    <Text style={[styles.centerText, { marginTop: 20 }]}>ON THE FILE OF THE</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={[styles.centerText, styles.headingCenter, { fontSize: 14 }]}>MEMORANDUM OF GROUNDS</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={styles.startText}>M/s ### (000)</Text>
                    <Text style={styles.startText}>Advocate</Text>
                    <Text style={[styles.endText, { marginTop: 20 }]}>COUNSEL FOR THE APPELLANT</Text>
                </View>

                <View style={styles.page}>
                    <Text style={[styles.centerText, styles.heading, styles.headingCenter]}>MEMORANDUM OF CRIMINAL MISC. PETITION</Text>
                    <Text style={styles.centerText}>UNDER SECTION 397(1) OF CRIMINAL PROCEDURE CODE, 1973</Text>
                    <Text style={[styles.centerText, styles.heading, { marginTop: 10 }]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                    <Text style={styles.centerText}>AT HYDERABAD</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.centerText}>Crl.M.P.No. _______ OF 2007</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={styles.centerText}>Crl.R.C.No. _______ OF 2007</Text>
                    </View>
                    <Text style={[styles.centerText, { marginTop: 20 }]}>BETWEEN:</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={[styles.endText, { fontWeight: 'bold' }]}>..ACCUSED/PETITIONER</Text>
                    <Text style={styles.startText}>and</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={styles.item}>----------------</Text>
                    <Text style={[styles.endText, { fontWeight: 'bold' }]}>..COMPLAINANT/RESPONDENT</Text>
                    <Text style={styles.justifiedText}>The petitioner is convicted under Sec._____ and sentenced to suffer R.I/S.I., for a period of _________ years. He is also directed to pay a fine of Rs.________/- in default suffer, R.I for ____ months. The petitioner has paid the fine amount. Further he was on bail pending appeal.</Text>
                    <Text style={styles.justifiedText}>It is therefore prayed that this Hon'ble Court may be pleased to release the petitioner on bail pending disposal of the Criminal Revision Case No.________ in this Hon'ble Court.</Text>
                    <View style={[styles.signatureRow, { marginTop: 40 }]}>
                        <Text>HYDERABAD</Text>
                        <Text style={styles.alignRight}>COUNSEL FOR THE PETITIONER</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>DATE: ____________</Text>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.item}>Note: Accused in ___________ Jail.</Text>
                        <Text style={styles.item}>Bail to the satisfaction of the JFCM, _____________.</Text>
                    </View>
                </View>

                <View style={styles.page}>
                    <Text style={styles.coverPage}>_______ DISTRICT</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>HIGH COURT :: HYDERABAD</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>Crl.M.P.No. _______ OF 2007</Text>
                    <Text style={styles.centerText}>IN</Text>
                    <Text style={styles.centerText}>Crl.R.C.No. _______ OF 2007</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={[styles.centerText, styles.headingCenter, { fontSize: 14 }]}>BAIL PETITION</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={styles.startText}>M/s ### (000)</Text>
                    <Text style={styles.startText}>Advocate</Text>
                    <Text style={[styles.endText, { marginTop: 20 }]}>COUNSEL FOR THE PETITIONER</Text>
                </View>
            </Page>
        </Document>
    );

    export default CriminalRevisionCaseFile;
