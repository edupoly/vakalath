import { Document, Packer, Paragraph, TextRun, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { paragraphStyles1, createParagraph } from "../../../services/templateFunctions";

export const CMATemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("MEMORANDUM OF CIVIL MISCELLANEOUS APPEAL", paragraphStyles1.headingCenter),
          createParagraph("(UNDER ORDER 43 RULE 1 OF C.P.C.)", paragraphStyles1.center),
          createParagraph("IN THE COURT OF THE _________________________________________", paragraphStyles1.center),
          createParagraph("I.A.No. _______ OF 2007", paragraphStyles1.startText),
          createParagraph("IN", paragraphStyles1.startText),
          createParagraph("O.S.No. _______ OF 2007", paragraphStyles1.startText),

          createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD", paragraphStyles1.center),
          createParagraph("C.M.A.No. _______ OF 2007", paragraphStyles1.center),

          createParagraph("BETWEEN:", paragraphStyles1.startText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("...APPELLANT", paragraphStyles1.endText),

          createParagraph("AND", paragraphStyles1.startText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("________________", paragraphStyles1.normalText),
          createParagraph("...RESPONDENT", paragraphStyles1.endText),

          createParagraph(
            "The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, __________________, Hyderabad.",
            paragraphStyles1.paragraph
          ),

          createParagraph(
            "The above named Appellant begs to present this Memorandum of Civil Miscellaneous Appeal against the Judgment passed in I.A.No._____ of 2007 in O.S.No._____ of 2007, Dt.__________, on the file of _________________, __________, for the following grounds among other:",
            paragraphStyles1.paragraph
          ),

          createParagraph("G R O U N D S", paragraphStyles1.headingCenter),

          createParagraph("1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.", paragraphStyles1.item),
          createParagraph("2.", paragraphStyles1.item),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("3.", paragraphStyles1.item),
          createParagraph("4.", paragraphStyles1.item),
          createParagraph("5.", paragraphStyles1.item),

          createParagraph("MEMO OF VALUATION", paragraphStyles1.headingCenter),

          createParagraph(
            "The value of Appeal is Rs.____________/-, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act.",
            paragraphStyles1.paragraph
          ),

          createParagraph("HYDERABAD", paragraphStyles1.leftText),
          createParagraph("DATE:", paragraphStyles1.leftText),
          createParagraph("COUNSEL FOR THE APPELLANT", paragraphStyles1.rightText),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("_________ DISTRICT", paragraphStyles1.rightLane),
          createParagraph("HIGH COURT : HYDERABAD", paragraphStyles1.center),

          createParagraph("C.M.A.No. _______ OF 2007", paragraphStyles1.center),
          createParagraph("AGAINST", paragraphStyles1.center),
          createParagraph("I.A.No. _______ OF 2007", paragraphStyles1.center),
          createParagraph("IN", paragraphStyles1.center),
          createParagraph("O.S.No. _______ OF 2007", paragraphStyles1.center),

          createParagraph("ON THE FILE OF THE", paragraphStyles1.center),
          createParagraph("__________________________", paragraphStyles1.center),
          createParagraph("__________________________", paragraphStyles1.center),

          createParagraph("G R O U N D S", paragraphStyles1.headingCenter),

          createParagraph("Filed By:", paragraphStyles1.center),
          createParagraph("M/s ###(000)", paragraphStyles1.center),
          createParagraph("ADVOCATE", paragraphStyles1.center),
          createParagraph("COUNSEL FOR THE APPELLANT / PETITIONER", paragraphStyles1.center),

          new Paragraph({ text: "", pageBreakBefore: true }),

          createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH", paragraphStyles1.center),
          createParagraph("AT HYDERABAD", paragraphStyles1.center),
          createParagraph("C.M.A.M.P.No. _______ OF 2007", paragraphStyles1.center),
          createParagraph("IN", paragraphStyles1.center),
          createParagraph("C.M.A.No. _______ OF 2007", paragraphStyles1.center),

          createParagraph("Between:", paragraphStyles1.startText),
          createParagraph("_________________", paragraphStyles1.startText),
          createParagraph("...PETITIONER", paragraphStyles1.endText),
          createParagraph("AND", paragraphStyles1.startText),
          createParagraph("_____________________", paragraphStyles1.startText),
          createParagraph("...RESPONDENT", paragraphStyles1.endText),

          createParagraph("A F F I D A V I T", paragraphStyles1.headingCenter),

          createParagraph(
            "I, _________________, S/o._____________, aged __ years, Occ:___________,R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:",
            paragraphStyles1.paragraph
          ),

          createParagraph("1. I am the Petitioner herein and I know the facts of the case.", paragraphStyles1.item),
          createParagraph("2.", paragraphStyles1.item),
          createParagraph("3.", paragraphStyles1.item),
          createParagraph("4.", paragraphStyles1.item),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to _________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.",
            paragraphStyles1.paragraph
          ),

          createParagraph("Last Page Cross....", paragraphStyles1.item),
          createParagraph("DEPONENT", paragraphStyles1.item),

          createParagraph("Sworn and Signed in my presence", paragraphStyles1.item),
          createParagraph("on this day of _________", paragraphStyles1.item),
          createParagraph("at Hyderabad.", paragraphStyles1.item),

          createParagraph("ADVOCATE :: HYDERABAD", paragraphStyles1.startText),
        ],
      },
    ],
  });
};

const generateAndDownloadCMADocx = (formData) => {
  const doc = CMATemplate(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "CivilMiscAppeal.docx"));
};

export default generateAndDownloadCMADocx;
