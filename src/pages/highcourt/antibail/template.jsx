import { Document, PageBreak } from "docx";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const AntiBailTemplate = (formData) => {

    return new Document({
        sections: [{
            properties: {},
            children: [
                createParagraph("MEMORANDUM OF CRIMINAL PETITION", paragraphStyles.centerHeading),
                createParagraph("(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)", paragraphStyles.centerText),
                createParagraph(formData?.highcourt || "IN THE HIGH COURT OF ________", paragraphStyles.centerHeading),
                createParagraph(`CRL.P.No. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("IN", paragraphStyles.centerText),
                createParagraph(`${formData?.OPNO || "_________"}, dated ${formData?.OPDATE || "_________"} on the file of the ${formData?.lowercourt || "_________"}`, paragraphStyles.centerText),
                ...BetweenSection(formData,'...Petitioner/Accused',"...Respondent/Complainant"),
                createParagraph(`The address for service of all notices and process on the above named petitioner is that of his counsel ${formData?.counsel_address || "_________"}`, paragraphStyles.paraText),
                createParagraph("Petitioner humbly submit that,", paragraphStyles.paraText),
                createParagraph(`The above named petitioner begs to present this Memorandum of Criminal Petition seeking to release the petitioner on bail in the event of their/his/her arrest in ${formData?.OPNO || "_________"} dated ${formData?.OPDATE || "_________"} of ${formData?.lowercourt || "_________"}. He is alleged to have committed offenses punishable under Sections ${formData?.sections || "_________"}. He is apprehending arrest in the above crime.`, paragraphStyles.paraText),
                createParagraph("1. The prosecution case is briefly follows:-", paragraphStyles.paraText),
                createParagraph("2. The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to", paragraphStyles.paraText),
                createParagraph("The petitioner submits that", paragraphStyles.paraText),
                createParagraph("9. The petitioner submits that he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.", paragraphStyles.paraText),
                createParagraph("10. The petitioner submits that he filed Crl.M.P.No. _________ before the learned Sessions Judge ____________ and the same was dismissed on ________.", paragraphStyles.paraText),
                createParagraph("11. The Police officials are making enquiries to know whereabouts of the petitioner and the petitioner is apprehending arrest and he would be put to third degrees methods if arrested.", paragraphStyles.paraText),
                createParagraph("12. The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose.", paragraphStyles.paraText),
                createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "_________"}, dated ${formData?.OPDATE || "_________"} of ${formData?.lowercourt || "_________"} ${formData?.INTERIM_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
                createParagraph(`${formData?.place || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph("Counsel For Petitioner/Accused", paragraphStyles.rightAlignText),
                createParagraph(`DATE: ${formData?.fdate || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph("", { children: [new PageBreak()] }),
                createParagraph("Note: Bail to the satisfaction of ______", paragraphStyles.paraText),
                createParagraph(`${formData?.district || "_________"} :: District`, paragraphStyles.leftAlignText),
                createParagraph(formData?.highcourt || "HIGH COURT OF ________", paragraphStyles.centerText),
                createParagraph(`Crl.P.No. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("PETITION FOR ANTICIPATORY BAIL", paragraphStyles.underlinedHeading),
                createParagraph("FILED U/SEC.438 OF CrPC", paragraphStyles.underlinedHeading),
                createParagraph("Filed By:", paragraphStyles.paraText),
                createParagraph(`M/s ${formData?.counsel_code || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph("Advocate", paragraphStyles.leftAlignText),
                createParagraph("Counsel for Petitioner/Accused", paragraphStyles.rightAlignText),
                createParagraph("", { children: [new PageBreak()] }),
                createParagraph("HIGH COURT", paragraphStyles.underlinedHeading),
                createParagraph("CRIMINAL PETITION", paragraphStyles.centerHeading),
                createParagraph(`I.A.NO. ${formData?.iaNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("IN", paragraphStyles.centerText),
                createParagraph(`Crl.P.NO. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph(`${formData?.DISTRICT || "_________"} District`, paragraphStyles.rightAlignText),
                createParagraph(formData?.PETITIONER_NAME || "_________", paragraphStyles.paraText),
                createParagraph("... Petitioner/Accused", paragraphStyles.rightAlignText),
                createParagraph(`By ${formData?.counsel_code || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph("NATURE OF APPLICATION", paragraphStyles.centerHeading),
                createParagraph("(UNDER SEC. 438 Cr.P.C.)", paragraphStyles.centerText),
                createParagraph(`The Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "_________"}, dated ${formData?.OPDATE || "_________"} of ${formData?.lowercourt || "_________"} ${formData?.INTERIM_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
                createParagraph(`PRESENTED ON: ${formData?.fdate || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph("REPRESENTED ON:", paragraphStyles.leftAlignText),
                createParagraph(`FILED ON: ${formData?.fdate || "_________"}`, paragraphStyles.leftAlignText),
                createParagraph(formData?.highcourt || "IN THE HIGH COURT OF ________", paragraphStyles.centerHeading),
                createParagraph(`Crl.P. No. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("CHRONOLOGICAL / RUNNING INDEX", paragraphStyles.centerHeading),
                ChronologicalTable(formData),
                
                createParagraph(formData?.highcourt || "__________", paragraphStyles.centerHeading),
                createParagraph("Basic Information", paragraphStyles.centerHeading),
                ...OfficeUseTable(formData),
                ...InfoTable(formData),
                ...ChallanTable(formData),
                ...LowerCourtTable(formData),
                createParagraph("Full Cause Title:", paragraphStyles.leftunderlinedHeading),
                ...BetweenSection(formData,'...Petitioner/Accused',"...Respondent/Complainant"),
                createParagraph("Main Case Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
                createParagraph("IA(s) Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "_________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
            ],
        }],
    });
};
