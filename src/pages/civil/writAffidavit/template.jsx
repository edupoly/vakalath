import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const FirstAppealFile = () => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={[styles.centerText, { marginBottom: 6 }]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                <Text style={[styles.centerText, { marginBottom: 12 }]}>AT HYDERABAD</Text>
                <Text style={[styles.centerText, { marginBottom: 20 }]}>W.P.No. _______ OF 2007</Text>
                <Text style={styles.startText}>BETWEEN:</Text>
                <Text>____________</Text>
                <Text style={[styles.endText, { marginBottom: 10 }]}>..Petitioner/s</Text>
                <Text style={styles.startText}>AND</Text>
                <Text>_____________</Text>
                <Text style={[styles.endText, { marginBottom: 30 }]}>..Respondent/s</Text>
                <Text style={[styles.heading, styles.centerText, { marginBottom: 20 }]}>AFFIDAVIT</Text>
                <Text style={styles.paragraph}>I, ___________, S/o._________, aged about __ years, Occ:______, R/o.__________ Village, __________ Mandal, __________ District, now having temporarily come down to Hyderabad, do hereby solemnly and sincerely affirm and state as follows:</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.item}>1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.</Text>
                    <Text style={styles.item}>2. I submit that</Text>
                    <Text style={styles.item}>3.</Text>
                    <Text style={styles.item}>4.</Text>
                </View>
                <Text style={[styles.paragraph, { marginTop: 15 }]}>In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to approach this Hon'ble Court under Article 226 of the Constitution of India. The petitioner has not filed any writ petition, suit or other proceedings for the relief or relieves sought herein.</Text>
            </View>

            <View style={styles.page} break>
                <Text style={styles.paragraph}>It is therefore prayed that this Hon'ble Court may be pleased to issue a Writ of Mandamus, or any other appropriate writ, order or direction, declaring the ________________________ and pass such other order or orders as may deem fit and proper in the circumstances of the case.</Text>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>It is also just and necessary that this Hon'ble Court may be pleased to direct / stay _________________________ pending disposal of the above writ petition and pass such other order or orders as may deem fit and proper in the circumstances of the case.</Text>
                <View style={[styles.signatureRow, { marginTop: 60 }]}>
                    <Text>last page corrs.</Text>
                    <Text>Deponent</Text>
                </View>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>Solemnly and sincerely affirm this the day of __________ and signed his name in my presence.</Text>
                <Text style={[styles.paragraph, { marginTop: 30 }]}>BEFORE ME</Text>
                <Text style={[styles.startText, { marginTop: 20 }]}>ADVOCATE :: HYDERABAD</Text>
                <Text style={[styles.heading, { marginTop: 40 }]}>VERIFICATION STATEMENT</Text>
                <Text style={styles.paragraph}>I, ___________________, S/o.___________________ being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of para ( ) ( ) ( ) etc., of the Affidavit filed in support of the Writ Petition are true to my personal knowledge, those of para ( ) ( ) etc., are facts true to my knowledge based on information and those of para ( ) ( ) etc., are true to my knowledge based on records and believed to be correct and those of para ( ) ( ) etc., are based on legal advice believed to be correct.</Text>
                <Text style={[styles.paragraph, { marginTop: 20 }]}>Verified at Hyderabad on this the day of ___________</Text>
                <View style={[styles.signatureRow, { marginTop: 40 }]}>
                    <Text>ADVOCATE</Text>
                    <Text>DEPONENT</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default FirstAppealFile;
