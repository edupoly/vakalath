import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const FirstAppealFile = () => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={[styles.heading, styles.centerText, { marginBottom: 4 }]}>MEMORANDUM OF REGULAR APPEAL</Text>
                <Text style={[styles.centerText]}>(UNDER SECTION 96 R/W ORDER 41 RULE 1 OF C.P.C.)</Text>
                <Text style={[styles.centerText, { marginTop: 8, marginBottom: 12 }]}>IN THE COURT OF THE _________________________________________</Text>
                <Text style={styles.startText}>O.S.No. _______ OF 2007</Text>
                <Text style={[styles.centerText, { marginTop: 15, marginBottom: 12 }]}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD</Text>
                <Text style={[styles.centerText, { marginBottom: 20 }]}>A.S.No. _______ OF 2007</Text>
                <Text style={styles.startText}>BETWEEN:</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text style={[styles.endText, { marginBottom: 20 }]}>...APPELLANT</Text>
                <Text style={styles.startText}>AND</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text>________________</Text>
                <Text style={[styles.endText, { marginBottom: 20 }]}>...RESPONDENT</Text>
                <Text style={styles.paragraph}>The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, Hyderabad.</Text>
                <Text style={[styles.paragraph, { marginTop: 20 }]}>The above named Appellant begs to present this Memorandum of Appeal against the Judgment passed in O.S.No. _____ of 2007, Dt.__________, on the file of _________________, __________, to the extent it went against the appellant, for the following grounds among other:</Text>
                <Text style={[styles.heading, styles.centerText, { marginTop: 30 }]}>G R O U N D S</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.</Text>
            </View>

            <View style={styles.page} break>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.item}>2.</Text>
                    <Text style={styles.item}>3.</Text>
                    <Text style={styles.item}>4.</Text>
                </View>
                <Text style={[styles.heading, styles.centerText, { marginTop: 40 }]}>MEMO OF VALUATION</Text>
                <Text style={[styles.paragraph, { marginTop: 15 }]}>The value of appeal is Rs.____________ and the Court Fee payable thereon is Rs._____/- and the same is sufficient under the A.P.C.F. and S.V.Act.</Text>
                <View style={[styles.signatureRow, { marginTop: 40 }]}>
                    <View>
                        <Text style={styles.item}>HYDERABAD</Text>
                        <Text style={styles.item}>DATE: _________</Text>
                    </View>
                    <Text style={styles.item}>COUNSEL FOR THE APPELLANT</Text>
                </View>
            </View>

            <View style={styles.page} break>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>_________ DISTRICT</Text>
                <Text style={styles.centerText}>HIGH COURT : HYDERABAD</Text>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.centerText}>A.S.No. _______ OF 2007</Text>
                    <Text style={styles.centerText}>AGAINST</Text>
                    <Text style={styles.centerText}>No. _______ OF 2007</Text>
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

            <View style={styles.page} break>
                <Text style={[styles.centerText, { marginBottom: 6 }]}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>AT HYDERABAD</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>A.S.M.P.No. _______ OF 2007</Text>
                <Text style={[styles.centerText, { marginBottom: 10 }]}>IN</Text>
                <Text style={[styles.centerText, { marginBottom: 20 }]}>A.S.No. _______ OF 2007</Text>
                <Text style={styles.startText}>Between:</Text>
                <Text>_________________</Text>
                <Text style={[styles.endText, { marginBottom: 10 }]}>...PETITIONER</Text>
                <Text style={styles.startText}>AND</Text>
                <Text>_____________________</Text>
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
                    <Text style={styles.item}>Last Page Corss....</Text>
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

export default FirstAppealFile;
