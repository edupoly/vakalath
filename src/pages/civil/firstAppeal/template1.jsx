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
  PetitionerAddress,
  petitionerTable,
  appellantTable,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const FirstAppealTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          // === Heading Section ===
          createParagraph("MEMORANDUM OF REGULAR APPEAL", paragraphStyles.centerTextSmall),
          createParagraph(
            "(UNDER SECTION 96 R/W ORDER 41 RULE 1 OF C.P.C.)",
            paragraphStyles.centerTextSmall
          ),

          createParagraph(
            "IN THE COURT OF THE _________________________________________",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph("O.S.No. _______ OF 2007", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("A.S.No. _______ OF 2007", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          // === Parties Section ===
          
          ...BetweenSection(formData),


          createParagraph(
            "The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, Hyderabad.",
            {...paragraphStyles.paraText,spacing:{after:500}}
          ),

          createParagraph(
            "The above named Appellant begs to present this Memorandum of Appeal against the Judgment passed in O.S.No._____ of 2007, Dt.__________, on the file of _________________, __________, to the extent it went against the Appellant, for the following grounds among other:",
            {...paragraphStyles.paraText,spacing:{after:500}}
          ),

          createParagraph("G R O U N D S", {...paragraphStyles.underlinedHeading,spacing:{after:1000,before:1000}}),

          createParagraph(
            "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
            paragraphStyles.paraText
          ),
          createParagraph("", { children: [new PageBreak()] }),
          createParagraph("2.",  {...paragraphStyles.paraText,spacing:{after:500}}),
          createParagraph("3.",  {...paragraphStyles.paraText,spacing:{after:500}}),


          createParagraph("4.", paragraphStyles.paraText),

          // === Valuation Section ===
          createParagraph("MEMO OF VALUATION", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph(
            "The value of Appeal is Rs.__________ and the Court Fee payable thereon is Rs._____/- and the same is sufficient under the A.P.C.F. and S.V.Act.",
            paragraphStyles.paraText
          ),

          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          appellantTable(),

          createParagraph("", { children: [new PageBreak()] }),

          // === Court Heading Section ===
          createParagraph("_______ DISTRICT", paragraphStyles.rightAlignTight),
          createParagraph("HIGH COURT : HYDERABAD", paragraphStyles.rightAlignTight),
          createParagraph("A.S.No. _______ OF 2007", paragraphStyles.rightAlignTight),
          createParagraph("AGAINST", paragraphStyles.rightAlignTight),
          createParagraph("O.S.No. _______ OF 2007", paragraphStyles.rightAlignTight),
          createParagraph("ON THE FILE OF THE", paragraphStyles.rightAlignTight),
          createParagraph("__________________________", paragraphStyles.rightAlignTight),
          createParagraph("__________________________", paragraphStyles.rightAlignTight),

          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("G R O U N D S", paragraphStyles.rightAlignText),

          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("", paragraphStyles.emptySpace),
          createParagraph("Filed By:", paragraphStyles.rightAlignTight),
          createParagraph("M/s ### (000)", paragraphStyles.rightAlignTight),
          createParagraph("ADVOCATE", paragraphStyles.rightAlignTight),
          createParagraph(
            "COUNSEL FOR THE APPELLANT / PETITIONER",
            paragraphStyles.rightAlignTight
          ),

          createParagraph("", { children: [new PageBreak()] }),

          // === Affidavit Section ===
          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("AT HYDERABAD", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("A.S.M.P.No. _______ OF 2007", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("IN", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("A.S.No. _______ OF 2007", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),

          ...PetitionerAddress(),

          createParagraph("A F F I D A V I T", {...paragraphStyles.underlinedHeading,spacing:{after:500,before:500}}),

          createParagraph(
            "I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:",
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
            "It is therefore prayed that this Hon'ble Court may be pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.",
             {
            ...paragraphStyles.paraText,
            spacing: { after: 500,before:500 },
          }
          ),

          // === Table for Signature Section ===
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
          createParagraph("Sworn and Signed in my presence", {
            ...paragraphStyles.paraText,
            spacing: { before: 200 },
          }),
          createParagraph("on this day of _________", paragraphStyles.paraText),
          createParagraph("at Hyderabad.", paragraphStyles.paraText),
          createParagraph("ADVOCATE :: HYDERABAD", {
            ...paragraphStyles.centerTextSmall,
            spacing: { before: 100 },
          }),
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
