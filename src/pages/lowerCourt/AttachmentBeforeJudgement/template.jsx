import {
  Document,
  Packer,
  Paragraph,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
} from "docx";
import { saveAs } from "file-saver";
import {
  addresses,
  createParagraph,
  createDocxFooterTable,
  createDocxCoverSection,
  paragraphStyles,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const AttachmentBeforeJudgmentTemplate = (formData) => {
  let fData = {};
  fData.Petitioners = [
    {
      Name: "Petitioner One",
      Address: "123 First Street, Springfield",
    },
  ];
  fData.Respondents = [
    {
      Name: "Respondent One",
      Address: "789 Third Boulevard, Capital City",
    },
  ];

  const tableRows1 = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(`Date: «fdate»`, paragraphStyles.leftAlignSmall),
            createParagraph(``, paragraphStyles.leftAlignSmall),
          ],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
          children: [
            createParagraph("DEPONENT", paragraphStyles.rightAlignText),
          ],
          width: { size: 50, type: WidthType.AUTO },
        }),
      ],
    }),
  ];

  const tableRows2 = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(`Date: «fdate»`, paragraphStyles.leftAlignSmall),
            createParagraph(`«station»`, paragraphStyles.leftAlignSmall),
          ],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
          children: [
            createParagraph(
              "Counsel for Petitioner",
              paragraphStyles.rightAlignText
            ),
          ],
          width: { size: 50, type: WidthType.AUTO },
        }),
      ],
    }),
  ];

  const coverChildren = [
    createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
    createParagraph("I.A.No.                 OF «myear»", paragraphStyles.centerTextSmall),
    createParagraph("IN", paragraphStyles.centerTextSmall),
    createParagraph("O.S.No.                 OF «myear»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),
     ...BetweenSection( fData,
      "...Petitioner/Plantiff",
      "...Respondent/Defendant"),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("PETITION FILED UNDER ORDER 38, RULE-5 OF C.P.C.", paragraphStyles.underlinedHeadingSmall),
    createParagraph("APPLICATION FOR ATTACHMENT BEFORE JUDGMENT", paragraphStyles.underlinedHeadingSmall),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("FILED ON: «fdate»", paragraphStyles.centerText),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
    createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
    createParagraph("COUNSEL FOR PETITIONER", paragraphStyles.rightAlignSmall),
  ];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          // --- AFFIDAVIT SECTION ---
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
          createParagraph("I.A.No.                 OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("O.S.No.                 OF «myear»", paragraphStyles.centerTextSmall),
           ...BetweenSection( fData,
      "...Petitioner/Plantiff",
      "...Respondent/Defendant"),
          createParagraph("AFFIDAVIT", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     I, «interim_prayer», do hereby solemnly and sincerely affirm and sincerely state on oath as follows:", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("1.   I am the Petitioner herein and Plaintiff in the main suit and as such I am well acquainted with the facts of the case.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("2.I submit that", paragraphStyles.leftAlignText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     It is therefore prayed that this Hon'ble Court may be pleased to pass orders for attachment of moveables shown in the schedule attached to the application before judgment and pass such other order or orders as this Hon’ble Court deems fit and proper in the circumstances of the suit.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createDocxFooterTable(tableRows1),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Solemnly affirmed and sworn before me that the contents of the affidavit are true and correct to the best of my knowledge and belief, hence verified on this the «fdate» at «station».", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("IDENTIFIED BY         «counsel_code1»", paragraphStyles.leftAlignSmall),
          createParagraph("Advocate", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Advocate :: «station»", paragraphStyles.centerTextBig),
          createParagraph("", { children: [new PageBreak()] }),

          // --- PETITION SECTION ---
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.underlinedHeading),
          createParagraph("I.A.No.                 OF   «myear»", paragraphStyles.centerTextSmall),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("O.S.No.                 OF   «myear»", paragraphStyles.centerTextSmall),
          ...BetweenSection( fData,
      "...Petitioner/Plantiff",
      "...Respondent/Defendant"),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("PETITION FILED UNDER ORDER 38, RULE-5 OF C.P.C.", paragraphStyles.underlinedHeadingSmall),
          createParagraph("APPLICATION FOR ATTACHMENT BEFORE JUDGMENT", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("For the reasons stated in the accompanying affidavit, the petitioner prays that this Hon’ble Court may be pleased to issue orders for attachment before judgment of moveables belonging to the Respondent shown in the schedule attached herewith situated at _________ and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the suit.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // --- SCHEDULE OF PROPERTY ---
          createParagraph("SCHEDULE OF PROPERTY", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("All that part and parcel of land bearing Survey No.__, admeasuring ______ out of the total extent of Ac._____ gts in ________ Village, __________ District bounded by:", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("NORTH     :", paragraphStyles.leftAlignSmall),
          createParagraph("SOUTH     :", paragraphStyles.leftAlignSmall),
          createParagraph("EAST      :", paragraphStyles.leftAlignSmall),
          createParagraph("WEST      :", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createDocxFooterTable(tableRows2),
          createParagraph("", { children: [new PageBreak()] }),

          // --- COVER PAGE SECTION ---
        ],
      },
      createDocxCoverSection(coverChildren, 7000),
    ],
  });
};
