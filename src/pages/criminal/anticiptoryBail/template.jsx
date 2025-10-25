import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import styles from '../../../assets/templateStyles';

const AnticiptoryBailFile = ({formData}) => (
    <Document>
        <Page size="A4">
            <View style={styles.page}>
                <Text style={[styles.centerText, styles.heading, styles.headingCenter]}>MEMORANDUM OF CRIMINAL PETITION</Text>
                <Text style={styles.centerText}>(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)</Text>
                <Text style={[styles.centerText, styles.heading]}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
                <Text style={styles.centerText}>AT HYDERABAD</Text>
                <Text style={[styles.centerText, { marginTop: 20 }]}>CRL.P.No. <Text style={{textDecoration:"underline"}}>{formData?.CrlpNo}</Text> OF 2007</Text>
                <Text style={[styles.centerText, { marginTop: 20 }]}>BETWEEN:</Text>
                {formData?.Petitioners.map((pet)=>{
                    return <View key={pet?.Name}>
                        <Text style={styles.item}>{pet?.Name}</Text>
                        <Text style={styles.item}>{pet?.Address}</Text>
                    </View>

                })}
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..PETITIONER/ACCUSED</Text>
                <Text style={styles.startText}>AND</Text>
                <Text style={styles.item}>THE STATE OF A.P. REP. BY</Text>
                <Text style={styles.item}>PUBLIC PROSECUTOR</Text>
                <Text style={[styles.endText, { fontWeight: 'bold' }]}>..RESPONDENT/COMPLAINANT</Text>
                <Text style={styles.justifiedText}>The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ###, Advocate, Hyderabad.</Text>
                <Text style={[styles.centerText, styles.heading, styles.headingCenter, { marginTop: 20 }]}>PETITION FOR ANTICIPATORY BAIL</Text>
                <Text style={styles.justifiedText}>The petitioner is accused in Crime No. <Text style={{textDecoration:"underline"}}>{formData?.CrimeNumber}</Text> of 2007 of <Text style={{textDecoration:"underline"}}>{formData?.PoliceStationName}</Text> Police Station. He is alleged to have committed offenses punishable under Sections <Text style={{textDecoration:"underline"}}>{formData?.Sections}</Text>. He is apprehending arrest in the above crime.</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>1. The prosecution case is briefly follows:-</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>2. The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>3. The petitioner submits that</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>4. The petitioner submits that</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>5. The petitioner submits that</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>6. The petitioner submits that</Text>
            </View>

            <View style={styles.page} break>
                <Text style={[styles.item, { marginTop: 10 }]}>7. The petitioner submits that</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>8. The petitioner submits that</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>9. The petitioner submits that he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>10. The petitioner submits that he filed Crl.M.P.No. _________ before the learned Sessions Judge ____________ and the same was dismissed on ________.</Text>
                <Text style={[styles.item, { marginTop: 10 }]}>11. The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose.</Text>
                <Text style={styles.justifiedText}>It is therefore prayed that this Hon'ble Court may be pleased to direct the Station House Officer _______________ Police Station to release the Petitioner on Bail in the event of his arrest in connection with Crime No.______ of 2007 of ____________ Police Station.</Text>
                <View style={[styles.signatureRow, { marginTop: 40 }]}>
                    <Text>HYDERABAD</Text>
                    <Text style={styles.alignRight}>COUNSEL FOR THE PETITIONER</Text>
                </View>
                <Text style={{ marginTop: 10 }}>DATE: ____________</Text>
            </View>

            <View style={[styles.page, styles.end]} break>
                <View style={[styles.rightLane]}>
                    <Text style={styles.coverPage}><Text>{formData?.Place}</Text> DISTRICT</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>HIGH COURT HYDERABAD</Text>
                    <Text style={[styles.centerText, { marginTop: 40 }]}>Crl.P.No. <Text style={{textDecoration:"underline"}}>{formData?.CrlpNo}</Text> OF 2007</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={[styles.centerText, styles.headingCenter, { fontSize: 14 }]}>PETITION FOR ANTICIPATORY BAIL</Text>
                    <View style={{ marginVertical: 100 }} />
                    <Text style={styles.startText}>M/s ### (000)</Text>
                    <Text style={styles.startText}>Advocate</Text>
                    <Text style={[styles.endText, { marginTop: 20 }]}>COUNSEL FOR THE PETITIONER</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default AnticiptoryBailFile;


