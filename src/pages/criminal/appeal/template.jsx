import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const CriminalAppealFile = () => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={[styles.centerText, styles.heading, styles.headingCenter]}>MEMORANDUM OF CRIMINAL APPEAL</Text>
                <Text style={[styles.centerText]}>UNDER SECTION 374(2) OF CRIMINAL PROCEDURE CODE, 1973</Text>
                <Text style={[styles.centerText, styles.heading]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                <Text style={styles.centerText}>AT HYDERABAD</Text>
                <Text style={styles.centerText}>Crl.A.No. _______ OF 2007</Text>
                <Text style={styles.centerText}>IN</Text>
                <Text style={styles.centerText}>S.C.No. ______ OF 2007</Text>
                <Text style={styles.justifiedText}>ON THE FILE OF THE _____________________________________</Text>
                <Text style={[styles.centerText, { marginTop: 20 }]}>BETWEEN:</Text>
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..ACCUSED/APPELLANT</Text>
                <Text style={styles.startText}>and</Text>
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..COMPLAINANT/RESPONDENT</Text>
                <Text style={styles.justifiedText}>The address for service of all notices and process on the above named Appellant is that of his counsel M/s ### Advocate, Hyderabad.</Text>
                <Text style={styles.justifiedText}>The above named Appellant begs to file the appeal against the judgment and sentence passed by the learned ____________________, Dt.__________ in S.C.No.___ of 2007, for the following grounds among other:</Text>
                <Text style={[styles.heading, { textDecoration: 'underline' }]}>GROUNDS</Text>
                <View style={styles.itemGroup}>
                    <Text style={styles.item}>1. The judgment of the learned ______________ Judge is contrary to law, weight of evidence and probabilities of the case.</Text>
                    <Text style={styles.item}>2. The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs ________________.</Text>
                    <Text style={styles.item}>3. The learned Judge</Text>
                    <Text style={styles.item}>4.</Text>
                    <Text style={styles.item}>5.</Text>
                    <Text style={styles.item}>6.</Text>
                    <Text style={styles.item}>7.</Text>
                    <Text style={styles.item}>8. The other reasons given by the learned Judge are unsustainable.</Text>
                    <Text style={styles.item}>9. Having regard to the facts and circumstances of the case, the sentence is unduly severe.</Text>
                </View>
                <View style={styles.signatureRow}>
                    <Text>HYDERABAD</Text>
                    <Text style={styles.alignRight}>COUNSEL FOR THE APPELLANT</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>DATE: ____________</Text>
                </View>
            </View>

            <View style={styles.page} break>
                <Text style={styles.coverPage}>_______ DISTRICT</Text>
                <Text style={[styles.centerText, { marginTop: 40 }]}>HIGH COURT :: HYDERABAD</Text>
                <Text style={[styles.centerText, { marginTop: 40 }]}>Crl.A.No. _______ OF 2007</Text>
                <Text style={[styles.centerText, { marginTop: 30 }]}>ON THE FILE OF THE</Text>
                <Text style={styles.centerText}>__________________________</Text>
                <Text style={styles.centerText}>__________________________</Text>
                <View style={{ marginVertical: 100 }} />
                <Text style={[styles.centerText, styles.headingCenter, { fontSize: 14 }]}>MEMORANDUM OF APPEAL</Text>
                <View style={{ marginVertical: 100 }} />
                <Text style={styles.startText}>M/s ### (000)</Text>
                <Text style={styles.startText}>Advocate</Text>
                <Text style={[styles.endText, { marginTop: 20 }]}>COUNSEL FOR THE APPELLANT</Text>
            </View>

            <View style={styles.page}>
                <Text style={[styles.centerText, styles.heading, styles.headingCenter]}>MEMORANDUM OF CRIMINAL MISC. PETITION</Text>
                <Text style={[styles.centerText]}>UNDER SECTION 389(1) OF CRIMINAL PROCEDURE CODE, 1973</Text>
                <Text style={[styles.centerText, styles.heading]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                <Text style={styles.centerText}>AT HYDERABAD</Text>
                <View style={[styles.centerText, { marginTop: 20 }]}>
                    <Text>Crl.M.P.No. ________ OF 2007</Text>
                    <Text>IN</Text>
                    <Text>Crl.A.No. ________ OF 2007</Text>
                </View>
                <Text style={[styles.centerText, { marginTop: 20 }]}>BETWEEN:</Text>
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..ACCUSED/APPELLANT</Text>
                <Text style={styles.startText}>and</Text>
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..COMPLAINANT/RESPONDENT</Text>
                <Text style={styles.justifiedText}>The petitioner is convicted under Sec._____ and sentenced to suffer R.I/S.I., for a period of _________ years. He is also directed to pay a fine of Rs.________/- in default suffer, R.I for ____ months. The petitioner has paid the fine amount. Further he was on bail pending trial.</Text>
                <Text style={styles.justifiedText}>It is therefore prayed that this Hon'ble Court may be pleased to release the petitioner on bail pending disposal of the Criminal Appeal No.________ in this Hon'ble Court.</Text>
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

            <View style={styles.page} break>
                <Text style={styles.coverPage}>_______ DISTRICT</Text>
                <Text style={[styles.centerText, { marginTop: 40 }]}>HIGH COURT :: HYDERABAD</Text>
                <Text style={[styles.centerText, { marginTop: 40 }]}>Crl.M.P.No. _______ OF 2007</Text>
                <Text style={styles.centerText}>IN</Text>
                <Text style={[styles.centerText]}>Crl.A.No. _______ OF 2007</Text>
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

export default CriminalAppealFile;
