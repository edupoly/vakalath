import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const FirstAppealFile = () => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={styles.title}>MEMORANDUM OF WRIT APPEAL</Text>
                <Text style={styles.subTitle}>(UNDER CLAUSE 15 OF LETTER PATENT)</Text>
                <Text style={[styles.centeredText, { marginTop: 10 }]}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD</Text>
                <Text style={styles.caseNo}>WRIT APPEAL No.           OF 2007</Text>
                <Text style={styles.against}>AGAINST</Text>
                <Text style={styles.caseNo}>W.P.No.                  OF 2007</Text>
                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>BETWEEN:</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.rightAligned}>...APPELLANT</Text>
                <Text style={[styles.sectionTitle, { marginTop: 30 }]}>AND</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.partyLine}>________________</Text>
                <Text style={styles.rightAligned}>...RESPONDENT</Text>
                <Text style={[styles.paragraph, { marginTop: 30 }]}>The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, Hyderabad.</Text>
                <Text style={[styles.paragraph, { marginTop: 20 }]}>The above named Appellant begs to present this Memorandum of Writ Appeal against the Judgment passed in W.P.No._____ of 2007, Dt.__________, passed by His Lordship Sri ________________, for the following grounds among other:</Text>
                <Text style={[styles.groundsTitle, { marginTop: 30 }]}>G R O U N D S</Text>
                <Text style={styles.groundLine}>1.</Text>
                <Text style={styles.groundLine}>2.</Text>
                <Text style={styles.groundLine}>3.</Text>
                <Text style={styles.groundLine}>4.</Text>
            </View>

            <View style={{ marginTop: 20 }} break>
                <Text style={styles.groundLine}>5.</Text>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>Other grounds would be urged at the time of hearing.</Text>
                <View style={{ height: 100 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                    <Text>HYDERABAD</Text>
                    <Text>DATE:</Text>
                    <Text>COUNSEL FOR THE APPELLANT</Text>
                </View>
            </View>

            <View style={{ paddingTop: 40 }} break>
                <Text style={[styles.startText, { fontSize: 12 }]}>__________ DISTRICT</Text>
                <Text style={[styles.startText, { fontSize: 12 }]}>HIGH COURT : HYDERABAD</Text>
                <Text style={[styles.startText, { fontSize: 12, marginTop: 20 }]}>W.A.No.               OF 2007</Text>
                <Text style={[styles.startText, { fontSize: 12, marginTop: 5 }]}>AGAINST</Text>
                <Text style={[styles.startText, { fontSize: 12, marginTop: 5 }]}>W.P.M.P/W.P.No.            OF 2007</Text>
                <Text style={[styles.startText, { fontSize: 12, marginTop: 20 }]}>ON THE FILE OF THE</Text>
                <Text style={[styles.startText, { fontSize: 12 }]}>__________________________</Text>
                <Text style={[styles.startText, { fontSize: 12 }]}>__________________________</Text>
                <View style={{ height: 200 }} /> {/* Spacer for large blank space */}
                <Text style={[styles.heading, { textDecoration: 'underline' }]}>G R O U N D S</Text>
                <View style={{ height: 150 }} /> {/* Spacer for grounds section */}
                <Text style={[styles.startText, { marginTop: 20 }]}>Filed By:</Text>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>M/s ### (000)</Text>
                <Text style={[styles.paragraph, { marginTop: 5 }]}>ADVOCATE</Text>
                <Text style={[styles.paragraph, { marginTop: 10 }]}>COUNSEL FOR THE APPELLANT/</Text>
                <Text style={[styles.paragraph]}>PETITIONER</Text>
            </View>

            <View style={{ padding: 30 }} break>
                <Text style={styles.heading}>IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH</Text>
                <Text style={styles.heading}>AT  HYDERABAD</Text>
                <Text style={[styles.centerText, { marginTop: 20 }]}>W.A.M.P.No.                OF 2007</Text>
                <Text style={[styles.centerText, { marginTop: 15 }]}>IN</Text>
                <Text style={[styles.centerText, { marginTop: 15 }]}>W.A.No.                OF 2007</Text>
                <Text style={[styles.centerText, { marginTop: 30 }]}>Between:</Text>
                <Text style={[styles.leftText, { marginTop: 20 }]}>_________________</Text>
                <Text style={[styles.rightText, { marginTop: -15, marginBottom: 30 }]}>...PETITIONER</Text>
                <Text style={[styles.centerText, { marginBottom: 30 }]}>AND</Text>
                <Text style={[styles.leftText, { marginBottom: 10 }]}>_____________________</Text>
                <Text style={[styles.rightText, { marginTop: -15, marginBottom: 30 }]}>...RESPONDENT</Text>
                <Text style={[styles.centerText, { textDecoration: 'underline', marginBottom: 15 }]}>A F F I D A V I T</Text>
                <Text style={styles.paragraph}>I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District,temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:</Text>
                <Text style={styles.paragraph}>1.   I am the Petitioner herein and I know the facts of the case.</Text>
                <Text style={styles.paragraph}>2.</Text>
                <Text style={styles.paragraph}>3.</Text>
                <Text style={styles.paragraph}>4.</Text>
                <Text style={[styles.paragraph, { marginTop: 20 }]}>It is therefore prayed that this Hon'ble Court may be Pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.</Text>
                <View style={{ marginTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Last Page Corss....</Text>
                    <Text>DEPONENT</Text>
                </View>
                <Text style={[styles.paragraph, { marginTop: 40 }]}>Sworn and Signed in my presence on this day of _________ at Hyderabad.</Text>
                <Text style={[styles.paragraph, { marginTop: 60 }]}>ADVOCATE :: HYDERABAD</Text>
            </View>
        </Page>
    </Document>
);

export default FirstAppealFile;
