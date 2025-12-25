import { Document, Packer, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, formatDate, paragraphStyles } from "../../../services/templateFunctions";

export const ContemptAffidavitTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph(`${formData?.highcourt || "«highcourt»"}`, paragraphStyles.mainHeadingCenter),
          createParagraph(`CONTEMPT CASE No.                            OF ${formData?.myear || "«myear»"}`, paragraphStyles.centerText),

          createParagraph("IN", paragraphStyles.centerText),
          createParagraph(`${formData?.OPNO || "«OPNO»"}`, paragraphStyles.centerText),

          createParagraph("BETWEEN:", paragraphStyles.leftAlignText),
          createParagraph(``, paragraphStyles.leftAlignText),
          createParagraph("..Petitioner/s", paragraphStyles.rightAlignText),

          createParagraph("AND", paragraphStyles.leftAlignText),
          createParagraph(``, paragraphStyles.leftAlignText),
          createParagraph("..Respondent/s", paragraphStyles.rightAlignText),

          createParagraph("A F F I D A V I T", paragraphStyles.centerTextBig),

          createParagraph(`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`, paragraphStyles.paraText),

          createParagraph("1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.", paragraphStyles.paraText),

          createParagraph("2. I submit that", paragraphStyles.paraText),
          createParagraph("3.", paragraphStyles.paraText),
          createParagraph("4.", paragraphStyles.paraText),

          createParagraph(`The first respondent willfully and wantonly is not implementing orders of the Hon'ble High Court passed in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} by His Lordship’s ${formData?.lowercourt || "«lowercourt»"}, and deliberately avoiding, and the action of the 1st respondent amounts to punishment under Sec.10 to 12 of the Contempt of Courts Act.`, paragraphStyles.paraText),
          createParagraph("", paragraphStyles.centerText), // Empty line for spacing
          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased to ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph("", paragraphStyles.centerText), // Empty line for spacing

          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased to ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
          createParagraph("", paragraphStyles.centerText), // Empty line for spacing

          // Closing section
          createParagraph("last page corrs.", paragraphStyles.leftAlignSmall),
          createParagraph("Deponent", paragraphStyles.leftAlignText),
          createParagraph("", paragraphStyles.centerText), // Empty line for spacing
          createParagraph("Solemnly and sincerely affirmed on", paragraphStyles.paraText),
          createParagraph(`this the day of ${formatDate(formData?.fdate) || "«fdate»"}`, paragraphStyles.paraText),
          createParagraph("and signed his name in my presence.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.centerText), // Empty line for spacing
          createParagraph("BEFORE ME", paragraphStyles.centerText),

          createParagraph("", paragraphStyles.centerText), // Empty line for spacing
          createParagraph(`ADVOCATE :: ${formData?.place || "«place»"}`, paragraphStyles.centerText),

          createParagraph("", paragraphStyles.centerText), // Empty line for spacing

          // Verification section
          createParagraph("VERIFICATION STATEMENT", paragraphStyles.centerTextBig),
          createParagraph(`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.`, paragraphStyles.paraText),
          createParagraph(`Hence verified at ${formData?.place || "«place»"} on this the day of ${formatDate(formData?.fdate) || "«fdate»"}`, paragraphStyles.paraText),

          createParagraph("", paragraphStyles.centerText), // Empty line for spacing
          createParagraph("Deponent", paragraphStyles.leftAlignText),
        ],
      },
    ],
  });
};