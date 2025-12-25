import { Document, Packer, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, formatDate, paragraphStyles } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const CounterTemplate = (formData) => {
    
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph(`${formData?.highcourt} || «highcourt»`, paragraphStyles.mainHeadingCenter),
          createParagraph(`W.P. NO. ${formData?.WpNo || "                                    "} OF ${formData?.myear} || «myear»`, paragraphStyles.centerText),
          ...BetweenSection(formData, "..Petitioner/s", "..Respondent/s"),

          createParagraph("COUNTER AFFIDAVIT FILED BY THE RESPONDENT", paragraphStyles.centerTextBig),

          createParagraph(`I, ${formData?.verification} || «verification», now having temporarily come down to ${formData?.place} || «place», do hereby solemnly and sincerely affirm and state as follows:`, paragraphStyles.paraText),

          createParagraph("1. I am the Respondent No._____ herein in the above Writ Petition and as such I am well acquainted with the facts of the case.", paragraphStyles.paraText),
          createParagraph("2. I read the petitioner’s affidavit filed in support of writ petition and I submit that it does not disclose any valid or substantial grounds to issue any relief as prayed for. The petitioner is put to strict proof of the allegations which are denied, except to the extent of specifically admitted hereunder. The petitioner has not approached with clean hands. The writ petition has to be dismissed as the writ petition is not maintainable. The petitioner has to move the appropriate forum.", paragraphStyles.paraText),
          createParagraph("3. I deny that", paragraphStyles.paraText),

          createParagraph("It is therefore prayed that this Hon’ble Court may be pleased to dismiss the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.", paragraphStyles.paraText),
          createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased to ${formData?.INTERIM_PRAYER} || «INTERIM_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),

          createParagraph("last page corrs.", paragraphStyles.leftAlignSmall),
          createParagraph("Deponent", paragraphStyles.leftAlignText),

          createParagraph("Solemnly and sincerely affirm this", paragraphStyles.paraText),
          createParagraph(`the day of ${formatDate(formData?.fdate)} || «fdate»`, paragraphStyles.paraText),
          createParagraph("and signed his name in my presence.", paragraphStyles.paraText),
          createParagraph("BEFORE ME", paragraphStyles.centerText),
          createParagraph(`ADVOCATE :: ${formData?.place} || «place»`, paragraphStyles.centerText),

          createParagraph("VERIFICATION STATEMENT", paragraphStyles.centerTextBig),
          createParagraph(`I, ${formData?.verification} || «verification», being the Respondent/person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`, paragraphStyles.paraText),
          createParagraph(`Verified at ${formData?.place} || «place» on this`, paragraphStyles.paraText),
          createParagraph(`the day of ${formatDate(formData?.fdate)} || «fdate»`, paragraphStyles.paraText),
          createParagraph("Deponent", paragraphStyles.leftAlignText),

          createParagraph(`${formData?.DISTRICT} || «DISTRICT» District`, paragraphStyles.centerText),

          createParagraph(`${formData?.highcourt} || «highcourt»`, paragraphStyles.centerText),
          createParagraph(`W.P. NO. ${formData?.WpNo || "____"} OF ${formData?.myear} || «myear»`, paragraphStyles.centerText),
          createParagraph("COUNTER AFFIDAVIT FILED BY THE RESPONDENT", paragraphStyles.centerHeading),
          createParagraph("Filed by:", paragraphStyles.leftAlignText),
          createParagraph(`M/s ${formData?.counsel_code} || «counsel_code»`, paragraphStyles.leftAlignText),
          createParagraph("Advocate", paragraphStyles.leftAlignText),
          createParagraph("Counsel for Respondent", paragraphStyles.rightAlignText),
        ],
      },
    ],
  });
};
