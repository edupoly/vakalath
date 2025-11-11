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
  createDocxCoverSection,
  createDocxFooterTable,
  createParagraph,
  paragraphStyles,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
// import { getDocxDocument } from "../bail/template1";

export const AdvocateCommrTemplate = (formData) => {
  let fData = {};
  fData.Petitioners = [
    {
      Name: "Petitioner One",
      Address: "123 First Street, Springfield",
    },
    {
      Name: "Petitioner Two",
      Address: "456 Second Avenue, Shelbyville",
    },
    {
      Name: "Petitioner Three",
      Address: "789 Third Boulevard, Capital City",
    },
  ];
  fData.Respondents = [
    {
      Name: "Respondent One",
      Address: "123 First Street, Springfield",
    },
    {
      Name: "Respondent Two",
      Address: "456 Second Avenue, Shelbyville",
    },
    {
      Name: "Respondent Three",
      Address: "789 Third Boulevard, Capital City",
    },
  ];

  const coverChildren = [
    createParagraph(`IN THE COURT OF THE`, paragraphStyles.underlinedTextSmall),
    createParagraph(`<District>`, paragraphStyles.underlinedText),
    createParagraph(
      `I.A.No.                 OF <myyear>`,
      paragraphStyles.centerTextSmall
    ),
    createParagraph("IN", paragraphStyles.centerTextSmall),
    createParagraph(
      `O.S.No.                 OF <myyear>`,
      paragraphStyles.centerTextSmall
    ),
    createParagraph("", paragraphStyles.emptySpaceSmall),
    ...BetweenSection(
      fData,
      "...Petitioner/Plantiff",
      "...Respondent/Defendant"
    ),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph(
      "PETITION FILED UNDER",
      paragraphStyles.underlinedHeadingSmall
    ),
    createParagraph(
      "OORDER XXVI, RULE-9,",
      paragraphStyles.underlinedHeadingSmall
    ),
    createParagraph(
      "R/W.SEC.151 OF C.P.C.",
      paragraphStyles.underlinedHeadingSmall
    ),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph(`FILED ON: <fDate>>`, paragraphStyles.centerText),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
    createParagraph(`M/s <counsel_Address>`, paragraphStyles.leftAlignSmall),
    createParagraph("COUNSEL FOR PETITIONER", paragraphStyles.rightAlignSmall),
  ];

  const tableRows1 = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(`last page corrs.`, paragraphStyles.leftAlignSmall),
            createParagraph(
              `Solemnly and sincerely affirm this`,
              paragraphStyles.leftAlignSmall
            ),
            createParagraph(
              `the day of  «fdate»`,
              paragraphStyles.leftAlignSmall
            ),
            createParagraph(
              `and signed his name in my presence.`,
              paragraphStyles.leftAlignSmall
            ),
          ],
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
        }),
        new TableCell({
          children: [
            createParagraph("Deponent", paragraphStyles.rightAlignText),
          ],
          width: {
            size: 50,
            type: WidthType.AUTO,
          },
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
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
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
        }),
        new TableCell({
          children: [
            createParagraph(
              "Counsel for Petitioner",
              paragraphStyles.rightAlignText
            ),
          ],
          width: {
            size: 50,
            type: WidthType.AUTO,
          },
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    }),
  ];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph(
            `IN THE COURT OF THE <district>`,
            paragraphStyles.centerText
          ),
          createParagraph(
            `O.S.No.                 OF <myyear>`,
            paragraphStyles.centerTextSmall
          ),
          ...BetweenSection(fData, "...Petitioner", "...Respondent"),
          createParagraph("AFFIDAVIT", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "     I, «interim_prayer», do hereby solemnly and sincerely affirm and sincerely state on oath as follows:",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "1.   I am the Petitioner herein and Plaintiff in the main suit and as such I am well acquainted with the facts of the case. ",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "2. 	I submit that the above suit is coming for trial. The plaintiff filed suit along with a petition for temporary injunction which is numbered as IA No._____. The said IA is coming for enquiry, due to the non-cooperation of the respondent. Taking the advantage of the non-passing of order in said IA, the respondent trying to raise the constructions illegally in the suit schedule property. If they succeeded in their attempts, we shall be put in heavy and irreparable loss. Further, they may plea that already the constructions are in existence. As per plaintiff contention the suit schedule property is a open land. To prove the claim note down the physical features of suit schedule property is necessary.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "3.	Hence, an advocate commissioner may be appointed to note down the physical features of suit schedule property. If the advocate commissioner is not appointed to note down the physical features of the suit schedule property, the purpose of the filing of suit is frustrated. If an advocate commissioner appointed no prejudice will be cause to the respondent.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpace),
          createParagraph(
            "       It is therefore prayed that this Hon'ble Court may be pleased to appoint an Advocate Commissioner to note down the physical features of the suit schedule property and pass such other order or orders as this Hon’ble Court deems fit and proper in the circumstances of the suit.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpace),
          createDocxFooterTable(tableRows1),
          createParagraph("BEFORE ME", paragraphStyles.centerTextBig),
          createParagraph(`ADVOCATE :: «station»`, paragraphStyles.centerText),
          createParagraph("", { children: [new PageBreak()] }),
          createParagraph(
            `IN THE COURT OF THE <district>`,
            paragraphStyles.centerText
          ),
          createParagraph(
            `I.A.No.                 OF <myyear>`,
            paragraphStyles.centerTextSmall
          ),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph(
            `O.S.No.                 OF <myyear>`,
            paragraphStyles.centerTextSmall
          ),
          ...BetweenSection(fData, "...Petitioner", "...Respondent"),
          createParagraph(
            "PETITION FILED UNDER ORDER XXVI, RULE-9,",
            paragraphStyles.underlinedHeadingSmall
          ),
          createParagraph(
            "R/W.SEC.151 OF C.P.C.",
            paragraphStyles.underlinedHeadingSmall
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "       For the reasons stated in the accompanying affidavit, it is prayed that this Hon'ble Court may be pleased to appoint an Advocate Commissioner to note down the physical features of the suit schedule property and pass such other order or orders as this Hon’ble Court deems fit and proper in the circumstances of the suit.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createDocxFooterTable(tableRows2),
        ],
      },
      createDocxCoverSection(coverChildren, 6780),
    ],
  });
};
