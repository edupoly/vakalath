import { Document, Packer, PageBreak, AlignmentType, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";
import {
  createDocxCoverSection,
  createDocxFooterTable,
  createParagraph,
  // getPetitionersParagraphs,
  // getRespondentsParagraphs,
  paragraphStyles,
} from "../../../services/templateFunctions";
// import { getDocxDocument } from "../bail/template1";

export const CP256Template = (formData) => {
  // const petitionersParagraphs = getPetitionersParagraphs(formData?.Petitioners);
  // const respondentsParagraphs = getRespondentsParagraphs(formData?.Respondents);

  const coverChildren = [
    createParagraph(
      `IN THE COURT OF THE`,
      paragraphStyles.centerText
    ),
    createParagraph(`<District>`, paragraphStyles.centerHeading),
    createParagraph(
      `CRL.M.P.No. <CrlmpNo> OF <myyear>`,
      paragraphStyles.centerText
    ),
    createParagraph('IN', paragraphStyles.centerTextSmall),
    createParagraph(
      `C.C.No. <CCNo>> OF <myyear>`,
      paragraphStyles.centerText
    ),
    createParagraph("", paragraphStyles.emptySpaceBig),
    createParagraph(
      "PETITION FILED UNDER",
      paragraphStyles.underlinedHeadingSmall
    ),
    createParagraph("SECTION 256 Crl.P.C.", paragraphStyles.underlinedHeadingSmall),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph(`FILED ON: <fDate>>`, paragraphStyles.centerText),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("FILED BY:", paragraphStyles.centerTextSmall),
    createParagraph(`M/s <counsel_Address>`, paragraphStyles.centerTextSmall)
  ];

  const tableRows = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(`Place: <place>`, paragraphStyles.leftAlignSmall),
            createParagraph(`DATE: <fDate>`, paragraphStyles.leftAlignSmall),
          ],
          width: {
            size: 50,
            type: WidthType.PERCENTAGE,
          },
        }),
        new TableCell({
          children: [
            createParagraph(
              "COUNSEL FOR PETITIONER",
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
  ]


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
            `CRL.M.P.No. <CrlmpNo> OF <myyear>`,
            paragraphStyles.centerTextSmall
          ),
          createParagraph('IN', paragraphStyles.centerTextSmall),
          createParagraph(
            `C.C.No. <CCNo> OF <myyear>`,
            paragraphStyles.centerTextSmall
          ),
          createParagraph("BETWEEN:", paragraphStyles.leftAlignText),
          createParagraph('Petitioner Name', paragraphStyles.leftAlignSmall),
          createParagraph('Petitioner Address', paragraphStyles.leftAlignSmall),
          createParagraph("..PETITIONER", paragraphStyles.rightAlignText),
          createParagraph("AND", paragraphStyles.leftAlignText),
          createParagraph('Respondent Name', paragraphStyles.leftAlignSmall),
          createParagraph('Respondent Address', paragraphStyles.leftAlignSmall),
          createParagraph('...Respondent', paragraphStyles.rightAlignText),
          createParagraph(
            "PETITION FILED UNDER SECTION 256 CRIMINAL PROCEDURE CODE",
            paragraphStyles.underlinedHeading
          ),
          createParagraph('MAY IT PLEASE YOUR HONOUR,', paragraphStyles.leftAlignText),
          createParagraph("     That the petitioner is the Complainant in the above case and the case is posted today for his evidence but due to perform his Son marriage, he was held up in another City, the petitioner is unable to attend this Hon'ble Court today.",
            paragraphStyles.paraText
          ),
          createParagraph('', paragraphStyles.emptySpaceSmall),
          createParagraph('     That the non appearance today is neither willful nor collaborate but purely due to the above said reasons.',
            paragraphStyles.paraText
          ),
          createParagraph('THEREFORE IT IS PRAYED', paragraphStyles.leftAlignText),
          createParagraph("That this Hon'ble Court may be pleased to dispense with the personal attendance of the petitioner for today in the interest of justice.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createDocxFooterTable(tableRows)
        ]
      },
      createDocxCoverSection(coverChildren, 6780),
    ],
  });
};
