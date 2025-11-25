import { Document, Packer, Paragraph, TextRun, AlignmentType, UnderlineType } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, paragraphStyles, SignatureRow, templateProperties } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { bailSections } from "./data";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { h3Center, h3Left, h3underlineBoldCenter, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";

export const BailTemplate = (formData) => {
  console.log("kaka", formData);

  return new Document({
    sections: [
      {
        properties: templateProperties,
        children: [
          ...combinedSections(bailSections("437_439", formData), formData),
          pageBreak(),
          h3UnderlineCenter("VERIFICATION"),
          ...LineSpace(1),
          h3Left(`${tabSpace(1)}I, ${formData?.verification || "«verification»"}, do  hereby  verify  that  I  am  the brother/wife/father of the petitioner/Accused and duly authorized / instructed by Accused   who is now lodged in __________Jail,  relating to ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} to appoint ${formData?.counsel_address || "«counsel_address»"} to act on his/her behalf and to defend them in the above case and no other person has been instructed to appoint any Advocate.`),
          h3Left(`${tabSpace(1)} I also verify that this is the Bail Petition, no similar petition is filed or pending before any court of law, including the Higher courts of law.`),
          ...LineSpace(3),
          createSignatureFooter([`${formData?.place || "«place»"}  `, `Date: ${formData?.fdate || "«fdate»"}`],
            ["Signature of Person Interested"],
          ),
          ...LineSpace(3),
          h3Center("VERIFIED IN MY PRESENCE"),
          ...LineSpace(3),
          h3Center("ADVOCATE"),
          pageBreak(),
          pageTable(bailSections("sidePage1", formData), formData),
          pageBreak(),
          ...combinedSections(bailSections("memo_appearance", formData), formData),
          pageBreak(),
          pageTable(bailSections("sidePage2", formData), formData),
          pageBreak(),
          pageTable(bailSections("sidePage3", formData), formData),
          pageBreak(),
          createParagraph(`${formData?.highcourt || "__________"}`, paragraphStyles.centerText),
          createParagraph(`Crl.P. No. ${formData?.OPNO || "__________"} OF ${formData?.myear || "__________"}`, paragraphStyles.centerText),
          createParagraph("CHRONOLOGICAL / RUNNING INDEX", paragraphStyles.centerHeading),
          ChronologicalTable(formData),
          ...LineSpace(1),
          SignatureRow(formData),
          pageBreak(),
          createParagraph(formData?.highcourt || "__________", paragraphStyles.centerHeading),
          createParagraph("Basic Information", paragraphStyles.centerHeading),
          ...OfficeUseTable(formData),
          ...InfoTable(formData),
          ...LineSpace(1),
          ...ChallanTable(formData),
          ...LowerCourtTable(formData),
          pageBreak(),
          createParagraph("Full Cause Title:", paragraphStyles.leftunderlinedHeading),
          ...BetweenSection(formData,"..Petitioner(s)","..Respondent(s)"),
          pageBreak(),
          createParagraph("Main Case Prayer:", paragraphStyles.leftunderlinedHeading),
          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "__________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph("IA(s) Prayer:", paragraphStyles.leftunderlinedHeading),
          createParagraph(`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "__________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText)
        ],
      },
    ],
  });
};
