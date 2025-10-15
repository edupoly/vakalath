import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const CRPFile = () => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={[styles.heading, styles.centerText, { marginBottom: 4 }]}>MEMORANDUM OF CIVIL REVISION PETITION</Text>
                <Text style={[styles.centerText]}> (UNDER SECTION 115 OF C.P.C.) </Text>
                <Text style={[styles.centerText]}>(UNDER ART.227 OF CONSTITUTION OF INDIA)</Text>
                <Text style={styles.centerText}>IN THE COURT OF THE _________________________________________</Text>
                <View style={styles.centerText}>
                    <Text style={{  }}>I.A.No. _______ OF 2007</Text>
                    <Text>IN</Text>
                    <Text>O.S.No. _______ OF 2007</Text>
                </View>
                <Text style={[styles.centerText]}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD</Text>
                <Text style={[styles.centerText]}>C.R.P.No. _______ OF 2007</Text>
                <View style={{ }}>
                    <Text style={styles.startText}>BETWEEN:</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text style={[styles.endText]}>...PETITIONER</Text>
                    <Text style={[styles.startText]}>AND</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text>________________</Text>
                    <Text style={[styles.endText, { marginTop: 10 }]}>...RESPONDENT</Text>
                </View>
                <Text style={[styles.paragraph, { marginTop: 15 }]}>The address for service of all notices and process on the above named Appellant is that of his counsel M/s ####, Advocate, Hyderabad.</Text>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>The above named Petitioner begs to present this Memorandum of Civil Revision Petition against the Judgment passed in I.A.No._____ of 2007 in O.S.No._____ of 2007, Dt.__________, on the file of _________________, __________, for the following grounds among other:</Text>
                <Text style={[styles.heading, styles.centerText, { marginTop: 20 }]}>G R O U N D S</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.item}>1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.</Text>
                    <Text style={styles.item}>2.</Text>
                    <Text style={styles.item}>3.</Text>
                </View>
            </View>

            <View style={styles.page} break>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.item}>4.</Text>
                    <Text style={styles.item}>5.</Text>
                </View>
                <Text style={[styles.heading, styles.centerText, { marginTop: 30 }]}>MEMO OF VALUATION</Text>
                <Text style={[styles.paragraph, { marginTop: 15 }]}>The value of Revision is more than One Thousand, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act.</Text>
                <View style={[styles.signatureRow, { marginTop: 40 }]}>
                    <View>
                        <Text style={styles.item}>HYDERABAD</Text>
                        <Text style={styles.item}>DATE:</Text>
                    </View>
                    <Text style={styles.item}>COUNSEL FOR THE PETITIONER</Text>
                </View>
            </View>

            <View style={[styles.page, styles.end]} break>
                <View style={[styles.rightLane]}>
                    <Text style={[styles.centerText, { marginBottom: 10 }]}>_______ DISTRICT</Text>
                    <Text style={styles.centerText}>HIGH COURT : HYDERABAD</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.centerText}>C.R.P.No. _______ OF 2007</Text>
                        <Text style={styles.centerText}>AGAINST</Text>
                        <Text style={styles.centerText}>I.A.No. _______ OF 2007</Text>
                        <Text style={styles.centerText}>IN</Text>
                        <Text style={styles.centerText}>O.S.No. _______ OF 2007</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.centerText}>ON THE FILE OF THE</Text>
                        <Text style={styles.centerText}>__________________________</Text>
                        <Text style={styles.centerText}>__________________________</Text>
                    </View>
                    <Text style={[styles.heading, styles.centerText, { marginTop: 100 }]}>G R O U N D S</Text>
                    <View style={{ marginTop: 100 }}>
                        <Text style={styles.startText}>Filed By:</Text>
                        <Text style={styles.startText}>M/s ### (000)</Text>
                        <Text style={styles.startText}>ADVOCATE</Text>
                        <Text style={styles.startText}>COUNSEL FOR THE APPELLANT/</Text>
                        <Text style={styles.startText}>PETITIONER</Text>
                    </View>
                </View>
            </View>

            <View style={styles.page} break>
                <Text style={[styles.centerText, { marginBottom: 6 }]}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>AT HYDERABAD</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>CRP.M.P.No. _______ OF 2007</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>IN</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>C.R.P.No. _______ OF 2007</Text>
                <Text style={[styles.startText, { marginTop: 20 }]}>Between:</Text>
                <Text style={styles.startText}>_________________</Text>
                <Text style={[styles.endText, { marginBottom: 10 }]}>...PETITIONER</Text>
                <Text style={styles.startText}>AND</Text>
                <Text style={styles.startText}>_____________________</Text>
                <Text style={[styles.endText, { marginBottom: 20 }]}>...RESPONDENT</Text>
                <Text style={[styles.heading, styles.centerText, { marginBottom: 20 }]}>A F F I D A V I T</Text>
                <Text style={styles.paragraph}>I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.item}>1. I am the Petitioner herein and I know the facts of the case.</Text>
                    <Text style={styles.item}>2.</Text>
                    <Text style={styles.item}>3.</Text>
                    <Text style={styles.item}>4.</Text>
                </View>
                <Text style={[styles.paragraph, { marginTop: 15 }]}>It is therefore prayed that this Hon'ble Court may be pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.</Text>
                <View style={[styles.signatureRow, { marginTop: 50 }]}>
                    <Text style={styles.item}>Last Page Cross....</Text>
                    <Text style={styles.item}>DEPONENT</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.item}>Sworn and Signed in my presence</Text>
                    <Text style={styles.item}>on this day of _________</Text>
                    <Text style={styles.item}>at Hyderabad.</Text>
                </View>
                <Text style={[styles.startText, { marginTop: 20 }]}>ADVOCATE :: HYDERABAD</Text>
            </View>
        </Page>
    </Document>
);

export default CRPFile;
