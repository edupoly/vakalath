import { Document, Packer, Paragraph, TextRun, AlignmentType, UnderlineType } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, paragraphStyles, SignatureRow } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";

export const BailTemplate = (formData) => {
  console.log("kaka", formData);

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("MEMORANDUM OF CRIMINAL PETITION", paragraphStyles.centerHeading),
          createParagraph("(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)", paragraphStyles.centerText),
          createParagraph(`${formData?.highcourt || "__________"}`, paragraphStyles.centerText),
          createParagraph(`CRL.P.No. ${formData?.OPNO || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph("IN", paragraphStyles.centerText),
          createParagraph(`${formData?.OPNO || "__________"}, dated ${formData?.OPDATE || "__________"} on the file of the ${formData?.lowercourt || "__________"}`, paragraphStyles.centerText),
          ...BetweenSection(formData, 'Petitioner/Accused', 'Respondent/Complainant'),
          createParagraph(`The address for service of all notices and process on the above named petitioner is that of his counsel ${formData?.counsel_address || "__________"}`, paragraphStyles.paraText),
          createParagraph("Petitioner humbly submits that,", paragraphStyles.centerText),
          createParagraph(`The above named petitioner begs to present this Memorandum of Criminal Petition seeking to release the petitioner on bail in the event of his arrest in ${formData?.OPNO || "__________"} dated ${formData?.OPDATE || "__________"} of ${formData?.lowercourt || "__________"}. He is alleged to have committed offenses punishable under Sections ${formData?.offence_section || "__________"}. He is apprehending arrest in the above crime.`, paragraphStyles.paraText),
          createParagraph("1. The prosecution case is briefly as follows:-", paragraphStyles.paraText),
          createParagraph("2. The Petitioner submits that he is innocent of the offenses alleged against him and has been falsely implicated due to", paragraphStyles.paraText),
          createParagraph("The petitioner submits that", paragraphStyles.paraText),
          createParagraph("9. The petitioner submits that he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.", paragraphStyles.paraText),
          createParagraph(`10. The petitioner submits that he filed Crl.M.P.No. ${formData?.prev_crlmp_no || "__________"} before the learned Sessions Judge ${formData?.prev_court || "__________"} and the same was dismissed on ${formData?.prev_order_date || "__________"}.`, paragraphStyles.paraText),
          createParagraph("11. The Police officials are making enquiries to know the whereabouts of the petitioner and the petitioner is apprehending arrest and he would be put to third degree methods if arrested.", paragraphStyles.paraText),
          createParagraph("12. The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose.", paragraphStyles.paraText),
          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "__________"}, dated ${formData?.OPDATE || "__________"} of ${formData?.lowercourt || "__________"} ${formData?.INTERIM_PRAYER || "__________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph(`${formData?.place || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph("Counsel For Petitioner/Accused", paragraphStyles.rightAlignText),
          createParagraph("DATE: " + (formData?.fdate || "__________"), paragraphStyles.paraText),
          createParagraph("Note: Bail to the satisfaction of ______", paragraphStyles.paraText),
          createParagraph(`${formData?.district || "__________"}`, paragraphStyles.centerText),
          createParagraph(`${formData?.highcourt || "__________"}`, paragraphStyles.centerText),
          createParagraph(`CRL.P.No. ${formData?.OPNO || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph("PETITION FOR ANTICIPATORY BAIL", paragraphStyles.centerHeading),
          createParagraph("FILED U/SEC.438 OF CrPC", paragraphStyles.centerText),
          createParagraph("Filed By:", paragraphStyles.leftAlignText),
          createParagraph(`M/s ${formData?.counsel_code || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph("Advocate", paragraphStyles.leftAlignText),
          createParagraph("Counsel for Petitioner/Accused", paragraphStyles.rightAlignText),
          createParagraph(`${formData?.highcourt || "__________"}`, paragraphStyles.centerText),
          createParagraph("CRIMINAL PETITION", paragraphStyles.centerHeading),
          createParagraph(`I.A.NO. ${formData?.IAnumber || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph("IN", paragraphStyles.centerText),
          createParagraph(`Crl.P.NO. ${formData?.OPNO || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph(`${formData?.district || "__________"} District`, paragraphStyles.centerText),
          createParagraph(`${formData?.Petitioners?.[0]?.Name || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph("... Petitioner/Accused", paragraphStyles.leftAlignText),
          createParagraph(`By ${formData?.counsel_code || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph("NATURE OF APPLICATION", paragraphStyles.centerText),
          createParagraph("(UNDER SEC. 438 Cr.P.C.)", paragraphStyles.centerText),
          createParagraph(`The Hon’ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "__________"}, dated ${formData?.OPDATE || "__________"} of ${formData?.lowercourt || "__________"} ${formData?.INTERIM_PRAYER || "__________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph(`PRESENTED ON: ${formData?.fdate || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph(`REPRESENTED ON: ${formData?.fdate || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph(`FILED ON: ${formData?.fdate || "__________"}`, paragraphStyles.leftAlignText),
          createParagraph(`${formData?.highcourt || "__________"}`, paragraphStyles.centerText),
          createParagraph(`Crl.P. No. ${formData?.OPNO || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph("CHRONOLOGICAL / RUNNING INDEX", paragraphStyles.centerHeading),
          ChronologicalTable(formData),
          SignatureRow(formData),
          createParagraph(formData?.highcourt || "__________", paragraphStyles.centerHeading),
          createParagraph("Basic Information", paragraphStyles.centerHeading),
          ...OfficeUseTable("pil", formData),
          ...InfoTable(formData),
          ...ChallanTable(formData),
          ...LowerCourtTable(formData),
          createParagraph("Full Cause Title:", paragraphStyles.leftunderlinedHeading),
          ...BetweenSection(formData),
          createParagraph("Main Case Prayer:", paragraphStyles.leftunderlinedHeading),
          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "__________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph("IA(s) Prayer:", paragraphStyles.leftunderlinedHeading),
          createParagraph(`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "__________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText)
        ],
      },
    ],
  });
};
