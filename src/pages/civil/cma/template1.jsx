import {
  Document,
  Packer,
  PageBreak,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import {
  paragraphStyles,
  createParagraph,
  Appellantaddress,
  PetitionerAddress,
} from "../../../services/templateFunctions";
import { appellantTable } from "../../../services/templateFunctions";
export const CMATemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph(
            "MEMORANDUM OF CIVIL MISCELLANEOUS APPEAL",
            paragraphStyles.centerTextSmall
          ),
          createParagraph(
            "(UNDER ORDER 43 RULE 1 OF C.P.C.)",
            paragraphStyles.centerTextSmall
          ),
          createParagraph(
            "IN THE COURT OF THE _________________________________________",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),

          createParagraph(
            "I.A.No. _______ OF 2007",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),

          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph(
            "O.S.No. _______ OF 2007",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          
          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),

          createParagraph(
            "C.M.A.No. _______ OF 2007",
            paragraphStyles.centerTextSmall
          ),

          ...Appellantaddress(),

          // createParagraph("BETWEEN:", paragraphStyles.leftAlignText),

          // createParagraph("...APPELLANT", paragraphStyles.rightAlignText),

          // createParagraph("AND", paragraphStyles.leftAlignText),

          // createParagraph("...RESPONDENT", paragraphStyles.rightAlignText),

          createParagraph(
            "The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, __________________, Hyderabad.",
            paragraphStyles.paraText
          ),

          createParagraph(
            "The above named Appellant begs to present this Memorandum of Civil Miscellaneous Appeal against the Judgment passed in I.A.No._____ of 2007 in O.S.No._____ of 2007, Dt.__________, on the file of _________________, __________, for the following grounds among other:",
            paragraphStyles.paraText
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),

          createParagraph("G R O U N D S", paragraphStyles. underlinedHeading),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          createParagraph("",paragraphStyles.emptySpaceMedium),

          createParagraph(
            "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
            paragraphStyles.paraText
          ),
          createParagraph("2.", paragraphStyles.paraText),
           createParagraph("", { children: [new PageBreak()] }),
          createParagraph("3.", paragraphStyles.paraText),
          createParagraph("4.", paragraphStyles.paraText),
          createParagraph("5.", paragraphStyles.paraText),

          createParagraph(
            "MEMO OF VALUATION",
            paragraphStyles.underlinedHeading
          ),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          
          createParagraph(
            "The value of Appeal is Rs.____________/-, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act.",
            paragraphStyles.paraText
          ),

          // createParagraph("HYDERABAD", paragraphStyles.leftAlignText),
          // createParagraph("DATE:", paragraphStyles.leftAlignText),
          // createParagraph("COUNSEL FOR THE APPELLANT", paragraphStyles.rightAlignText),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          createParagraph("",paragraphStyles.emptySpaceMedium),
          appellantTable(),
           createParagraph("", { children: [new PageBreak()] }),
          createParagraph("DISTRICT", paragraphStyles.rightAlignTight),
          createParagraph("HIGH COURT : HYDERABAD", paragraphStyles.rightAlignTight),
          createParagraph("C.M.A.No. OF 2007", paragraphStyles.rightAlignTight),
          createParagraph("AGAINST", paragraphStyles.rightAlignTight),
          createParagraph("I.A.No.OF 2007", paragraphStyles.rightAlignTight),
          createParagraph("IN", paragraphStyles.rightAlignTight),
          createParagraph("O.S.No.OF 2007", paragraphStyles.rightAlignTight),
          createParagraph("ON THE FILE OF THE", paragraphStyles.rightAlignTight),

    
          createParagraph("",paragraphStyles.emptySpace),
          createParagraph("",paragraphStyles.emptySpace),
          createParagraph("",paragraphStyles.emptySpace),
          createParagraph("G R O U N D S", paragraphStyles.underlinedHeading),
          createParagraph("",paragraphStyles.emptySpace),
          createParagraph("",paragraphStyles.emptySpace),
          createParagraph("",paragraphStyles.emptySpace), 

          createParagraph("Filed By:", paragraphStyles.rightAlignTight),
          createParagraph("M/s ###(000)", paragraphStyles.rightAlignTight),
          createParagraph("ADVOCATE", paragraphStyles.rightAlignTight),
          createParagraph(
            "COUNSEL FOR THE APPELLANT / PETITIONER",
            paragraphStyles.rightAlignTight
          ),
          createParagraph("", { children: [new PageBreak()] }),
          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("AT HYDERABAD", paragraphStyles.centerTextSmall),
          createParagraph(
            "C.M.A.M.P.No. _______ OF 2007",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph(
            "C.M.A.No. _______ OF 2007",
            paragraphStyles.centerTextSmall
          ),

          // createParagraph("Between:", paragraphStyles.leftAlignText),
          // createParagraph("_________________", paragraphStyles.leftAlignText),
          // createParagraph("...PETITIONER", paragraphStyles.rightAlignText),
          // createParagraph("AND", paragraphStyles.leftAlignText),
          // createParagraph(
          //   "_____________________",
          //   paragraphStyles.leftAlignText
          // ),
          // createParagraph("...RESPONDENT", paragraphStyles.rightAlignText),

          ...PetitionerAddress(),

          createParagraph(
            "A F F I D A V I T",
            paragraphStyles.underlinedHeading
          ),

          createParagraph(
            "I, _________________, S/o._____________, aged __ years, Occ:___________,R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:",
            paragraphStyles.paraText
          ),

          createParagraph(
            "1. I am the Petitioner herein and I know the facts of the case.",
            paragraphStyles.bulletPointmd
          ),
          createParagraph("2.", paragraphStyles.bulletPointsm),
          createParagraph("3.", paragraphStyles.bulletPointsm),
          createParagraph("4.", paragraphStyles.bulletPointsm),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to _________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.",
            paragraphStyles.bulletPointsm
          ),

          // createParagraph("Last Page Cross....", paragraphStyles.paraText),
          // createParagraph("DEPONENT", paragraphStyles.paraText),
          new Table({
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph("Last Page Cross....", paragraphStyles.paraText),
          ],
          width: {
            size: 100,
            type: WidthType.PERCENTAGE,
          },
          borders: {
            top: { size: 0, style: "none" },
            left: { size: 0, style: "none" },
            right: { size: 0, style: "none" },
            bottom: { size: 0, style: "none" },
          },
        }),
        new TableCell({
          children: [
            createParagraph("DEPONENT", paragraphStyles.paraText),
          ],
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
          borders: {
            top: { size: 0, style: "none" },
            left: { size: 0, style: "none" },
            right: { size: 0, style: "none" },
            bottom: { size: 0, style: "none" },
          },
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    }),
  ],
  width: {
    size: 8835,
    type: WidthType.DXA,
  },
  borders: {
    top: { size: 0 },
    bottom: { size: 0 },
    left: { size: 0 },
    right: { size: 0 },
    insideHorizontal: { size: 0 },
    insideVertical: { size: 0 },
  },
}),
createParagraph("",paragraphStyles.emptySpaceMedium),
          createParagraph(
            "Sworn and Signed in my presence",
            paragraphStyles.paraText
          ),
          createParagraph("on this day of _________", paragraphStyles.paraText),
          createParagraph("at Hyderabad.", paragraphStyles.paraText),

          createParagraph(
            "ADVOCATE :: HYDERABAD",
            paragraphStyles.centerTextSmall
          ),
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
