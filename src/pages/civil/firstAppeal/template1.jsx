import { Document, Packer, Paragraph, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { paragraphStyles, createParagraph } from "../../../services/templateFunctions";

export const FirstAppealTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("MEMORANDUM OF REGULAR APPEAL", paragraphStyles.headingCenter),
          createParagraph("(UNDER SECTION 96 R/W ORDER 41 RULE 1 OF C.P.C.)", paragraphStyles.center),
          createParagraph("IN THE COURT OF THE _________________________________________", paragraphStyles.center),

          createParagraph("O.S.No. _______ OF 2007", paragraphStyles.startText),

          createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD", paragraphStyles.center),
          createParagraph("A.S.No. _______ OF 2007", paragraphStyles.center),

          createParagraph("BETWEEN:", paragraphStyles.startText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("...APPELLANT", paragraphStyles.endText),

          createParagraph("AND", paragraphStyles.startText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("________________", paragraphStyles.normalText),
          createParagraph("...RESPONDENT", paragraphStyles.endText),

          createParagraph(
            "The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, Hyderabad.",
            paragraphStyles.paragraph
          ),

          createParagraph(
            "The above named Appellant begs to present this Memorandum of Appeal against the Judgment passed in O.S.No. _____ of 2007, Dt.__________, on the file of _________________, __________, to the extent it went against the appellant, for the following grounds among other:",
            paragraphStyles.paragraph
          ),

          createParagraph("G R O U N D S", paragraphStyles.headingCenter),

          createParagraph("1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.", paragraphStyles.item),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("2.", paragraphStyles.item),
          createParagraph("3.", paragraphStyles.item),
          createParagraph("4.", paragraphStyles.item),

          createParagraph("MEMO OF VALUATION", paragraphStyles.headingCenter),

          createParagraph(
            "The value of appeal is Rs.____________ and the Court Fee payable thereon is Rs._____/- and the same is sufficient under the A.P.C.F. and S.V.Act.",
            paragraphStyles.paragraph
          ),

          createParagraph("HYDERABAD", paragraphStyles.leftText),
          createParagraph("DATE: _________", paragraphStyles.leftText),
          createParagraph("COUNSEL FOR THE APPELLANT", paragraphStyles.rightText),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("_________ DISTRICT", paragraphStyles.center),
          createParagraph("HIGH COURT : HYDERABAD", paragraphStyles.center),

          createParagraph("A.S.No. _______ OF 2007", paragraphStyles.center),
          createParagraph("AGAINST", paragraphStyles.center),
          createParagraph("No. _______ OF 2007", paragraphStyles.center),

          createParagraph("ON THE FILE OF THE", paragraphStyles.center),
          createParagraph("__________________________", paragraphStyles.center),
          createParagraph("__________________________", paragraphStyles.center),

          createParagraph("G R O U N D S", paragraphStyles.headingCenter),

          createParagraph("Filed By:", paragraphStyles.startText),
          createParagraph("M/s ### (000)", paragraphStyles.startText),
          createParagraph("ADVOCATE", paragraphStyles.startText),
          createParagraph("COUNSEL FOR THE APPELLANT/", paragraphStyles.startText),
          createParagraph("PETITIONER", paragraphStyles.startText),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH", paragraphStyles.center),
          createParagraph("AT HYDERABAD", paragraphStyles.center),
          createParagraph("A.S.M.P.No. _______ OF 2007", paragraphStyles.center),
          createParagraph("IN", paragraphStyles.center),
          createParagraph("A.S.No. _______ OF 2007", paragraphStyles.center),

          createParagraph("Between:", paragraphStyles.startText),
          createParagraph("_________________", paragraphStyles.startText),
          createParagraph("...PETITIONER", paragraphStyles.endText),

          createParagraph("AND", paragraphStyles.startText),
          createParagraph("_____________________", paragraphStyles.startText),
          createParagraph("...RESPONDENT", paragraphStyles.endText),

          createParagraph("A F F I D A V I T", paragraphStyles.headingCenter),

          createParagraph(
            "I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:",
            paragraphStyles.paragraph
          ),

          createParagraph("1. I am the Petitioner herein and I know the facts of the case.", paragraphStyles.item),
          createParagraph("2.", paragraphStyles.item),
          createParagraph("3.", paragraphStyles.item),
          createParagraph("4.", paragraphStyles.item),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.",
            paragraphStyles.paragraph
          ),

          createParagraph("Last Page Corss....", paragraphStyles.item),
          createParagraph("DEPONENT", paragraphStyles.item),

          createParagraph("Sworn and Signed in my presence", paragraphStyles.item),
          createParagraph("on this day of _________", paragraphStyles.item),
          createParagraph("at Hyderabad.", paragraphStyles.item),

          createParagraph("ADVOCATE :: HYDERABAD", paragraphStyles.startText),
        ],
      },
    ],
  });
};

const generateAndDownloadFirstAppealDocx = (formData) => {
  const doc = FirstAppealTemplate(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "RegularAppeal.docx"));
};

export default generateAndDownloadFirstAppealDocx;
