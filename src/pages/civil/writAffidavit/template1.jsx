import { Document, Packer, Paragraph, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { paragraphStyles, createParagraph } from "../../../services/templateFunctions";

export const AffidavitTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH", paragraphStyles.center),
          createParagraph("AT HYDERABAD", paragraphStyles.center),
          createParagraph("W.P.No. _______ OF 2007", paragraphStyles.center),

          createParagraph("BETWEEN:", paragraphStyles.startText),
          createParagraph("____________", paragraphStyles.normalText),
          createParagraph("..Petitioner/s", paragraphStyles.endText),

          createParagraph("AND", paragraphStyles.startText),
          createParagraph("_____________", paragraphStyles.normalText),
          createParagraph("..Respondent/s", paragraphStyles.endText),

          createParagraph("AFFIDAVIT", paragraphStyles.headingCenter),

          createParagraph(
            "I, ___________, S/o._________, aged about __ years, Occ:______, R/o.__________ Village, __________ Mandal, __________ District, now having temporarily come down to Hyderabad, do hereby solemnly and sincerely affirm and state as follows:",
            paragraphStyles.paragraph
          ),

          createParagraph("1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.", paragraphStyles.item),
          createParagraph("2. I submit that", paragraphStyles.item),
          createParagraph("3.", paragraphStyles.item),
          createParagraph("4.", paragraphStyles.item),

          createParagraph(
            "In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to approach this Hon'ble Court under Article 226 of the Constitution of India. The petitioner has not filed any writ petition, suit or other proceedings for the relief or relieves sought herein.",
            paragraphStyles.paragraph
          ),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to issue a Writ of Mandamus, or any other appropriate writ, order or direction, declaring the ________________________ and pass such other order or orders as may deem fit and proper in the circumstances of the case.",
            paragraphStyles.paragraph
          ),

          createParagraph(
            "It is also just and necessary that this Hon'ble Court may be pleased to direct / stay _________________________ pending disposal of the above writ petition and pass such other order or orders as may deem fit and proper in the circumstances of the case.",
            paragraphStyles.paragraph
          ),

          createParagraph("last page corrs.", paragraphStyles.item),
          createParagraph("Deponent", paragraphStyles.item),

          createParagraph(
            "Solemnly and sincerely affirm this the day of __________ and signed his name in my presence.",
            paragraphStyles.paragraph
          ),

          createParagraph("BEFORE ME", paragraphStyles.paragraph),

          createParagraph("ADVOCATE :: HYDERABAD", paragraphStyles.startText),

          createParagraph("VERIFICATION STATEMENT", paragraphStyles.heading),

          createParagraph(
            "I, ___________________, S/o.___________________ being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of para ( ) ( ) ( ) etc., of the Affidavit filed in support of the Writ Petition are true to my personal knowledge, those of para ( ) ( ) etc., are facts true to my knowledge based on information and those of para ( ) ( ) etc., are true to my knowledge based on records and believed to be correct and those of para ( ) ( ) etc., are based on legal advice believed to be correct.",
            paragraphStyles.paragraph
          ),

          createParagraph(
            "Verified at Hyderabad on this the day of ___________",
            paragraphStyles.paragraph
          ),

          createParagraph("ADVOCATE", paragraphStyles.item),
          createParagraph("DEPONENT", paragraphStyles.item),
        ],
      },
    ],
  });
};

const generateAndDownloadAffidavitDocx = (formData) => {
  const doc = AffidavitTemplate(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "Affidavit.docx"));
};

export default generateAndDownloadAffidavitDocx;
