import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import {
  createParagraph,
  createDocxCoverSection,
  paragraphStyles,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const CopyApplicationTemplate = (formData) => {
  const fData = {
    Petitioners: [{ Name: "«PETITIONER_NAME»" }],
    Respondents: [{ Name: "«RESPONDENT_NAME»" }],
  };

  // Top header: Form No.51 | Rule 128(C.R.P)
  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { size: 0 },
      bottom: { size: 0 },
      left: { size: 0 },
      right: { size: 0 },
      insideHorizontal: { size: 0 },
      insideVertical: { size: 0 },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [createParagraph("Form No.51", paragraphStyles.leftAlignBold)],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Rule 128 (C.R.P)", paragraphStyles. rightAlignBold)],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
    ],
  });

  // Main bordered table for copy application details
  const copiesTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { size: 1, color: "000000" },
      bottom: { size: 1, color: "000000" },
      left: { size: 1, color: "000000" },
      right: { size: 1, color: "000000" },
      insideHorizontal: { size: 1, color: "000000" },
      insideVertical: { size: 1, color: "000000" },
    },
    rows: [
      // Header Row
      new TableRow({
        children: [
          new TableCell({
            children: [createParagraph("S.No", paragraphStyles.leftAlignSmall)],
            width: { size: 10, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Date of filing Document", paragraphStyles.leftAlignSmall)],
            width: { size: 22, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Date of Document", paragraphStyles.leftAlignSmall)],
            width: { size: 22, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Description of Document", paragraphStyles.leftAlignSmall)],
            width: { size: 26, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Order if any under which application is made", paragraphStyles.leftAlignSmall)],
            width: { size: 20, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
      // Empty Rows 1–5
      ...[1, 2, 3, 4, 5].map(
        (num) =>
          new TableRow({
            children: [
              new TableCell({ children: [createParagraph(String(num), paragraphStyles.leftAlignSmall)] }),
              new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
              new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
              new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
              new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
            ],
          })
      ),
    ],
  });


  const petitionerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
     borders: {
      top: { size: 0 },
      bottom: { size: 0 },
      left: { size: 0 },
      right: { size: 0 },
      insideHorizontal: { size: 0 },
      insideVertical: { size: 0 },
    },
    rows:[
     new TableRow({
    children:[
    new TableCell({
            children: [createParagraph("Date  «fdate» ", paragraphStyles.leftAlignSmall),createParagraph("«station»	", paragraphStyles.leftAlignSmall)],
            width: { size: 50, type: WidthType.PERCENTAGE },

          }),
          new TableCell({
            children: [createParagraph("«counsel_code1» ", paragraphStyles.leftAlignSmall),createParagraph("Advocate for Petitioner/Plaintiff", paragraphStyles.leftAlignSmall)],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
    ]
     })
    ]
  })
  

  // Cover page
  const coverChildren = [
    createParagraph("IN THE COURT OF THE", paragraphStyles.centerTextBig),
    createParagraph("«district»", paragraphStyles.centerText),
    createParagraph("", paragraphStyles.emptySpaceSmall),
    createParagraph("O.S.No.              OF «myear»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),

    createParagraph("BETWEEN:", paragraphStyles.leftAlignSmall),
    createParagraph("«PETITIONER_NAME»", paragraphStyles.leftAlignSmall),
    createParagraph("….Plaintiff", paragraphStyles.leftAlignSmall),
    createParagraph("AND", paragraphStyles.centerTextSmall),
    createParagraph("«respondent_name»", paragraphStyles.leftAlignSmall),
    createParagraph("..Defendant", paragraphStyles.leftAlignSmall),
    createParagraph("", paragraphStyles.emptySpaceBig),

    createParagraph("COPY APPLICATION", paragraphStyles.underlinedHeading),
    createParagraph("", paragraphStyles.emptySpaceBig),
    createParagraph("FILED ON: «fdate»", paragraphStyles.leftAlignSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),
    createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
    createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
    createParagraph("Advocate", paragraphStyles.leftAlignSmall),
    createParagraph("ADVOCATE FOR PLAINTIFF", paragraphStyles.leftAlignSmall),
  ];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          headerTable, // the top Form No.51 | Rule 128(C.R.P)
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("APPLICATION FOR CERTIFIED COPIES", paragraphStyles.centerTextBold),
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerTextBold),
          createParagraph("O.S.No.                             of «myear»", {...paragraphStyles.centerTextSmall,spacing:{before:100}}),
          ...BetweenSection(fData, "Petitioner/Plaintiff", "Defendant/Respondent"),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph(
            "It is requested that the Certified Copies for the Documents under mentioned may be furnished to Plaintiff _________________________________",
            paragraphStyles.paraText
          ),
          createParagraph(
            "Defendant ________________________________________________________",
            paragraphStyles.paraText
          ),
          createParagraph(
            "The copies are urgently required for ____________________________________",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          copiesTable,
          createParagraph("", paragraphStyles.emptySpaceSmall),

          petitionerTable,

          createParagraph("", { children: [new PageBreak()] }),
        ],
      },
      createDocxCoverSection(coverChildren, 7000),
    ],
  });
};
