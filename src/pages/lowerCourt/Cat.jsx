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
} from "../../services/templateFunctions";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { BetweenSectionAddress } from "../../components/templates/BetweenSectionAddress";


export const CentralAdministrativeTribunalTemplate = (formData) => {
  // fallback structure if formData missing
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  };

  // Chronological Events table (5 rows)
  const chronologicalTable = new Table({
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
      // Header row
      new TableRow({
        children: [
          new TableCell({
            children: [createParagraph("S.No", paragraphStyles.leftAlignSmall)],
            width: { size: 10, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("DATE", paragraphStyles.leftAlignSmall)],
            width: { size: 30, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("PARTICULARS", paragraphStyles.leftAlignSmall)],
            width: { size: 40, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("PAGE No.", paragraphStyles.leftAlignSmall)],
            width: { size: 20, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
      // empty rows 1..5
      ...[1,2,3,4,5].map(num => new TableRow({
        children: [
          new TableCell({ children: [createParagraph(String(num), paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
        ],
      }))
    ],
  });

  // Material Paper Index table (prefill first row)
  const materialIndexTable = new Table({
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
      // Header row
      new TableRow({
        children: [
          new TableCell({
            children: [createParagraph("S.No", paragraphStyles.leftAlignSmall)],
            width: { size: 10, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("PARTICULARS", paragraphStyles.leftAlignSmall)],
            width: { size: 70, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("PAGE No.", paragraphStyles.leftAlignSmall)],
            width: { size: 20, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
      // Rows (1: Original Application prefilled, others empty)
      new TableRow({
        children: [
          new TableCell({ children: [createParagraph("1.", paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("Original Application", paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("01-", paragraphStyles.leftAlignSmall)] }),
        ],
      }),
      // 2..5 empty rows
      ...[2,3,4,5].map(n => new TableRow({
        children: [
          new TableCell({ children: [createParagraph(String(n), paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
          new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
        ],
      }))
    ],
  });

  // Cover / backsheet children (right-margin cover)
  const coverChildren = [
      createParagraph("IN THE CENTRAL ADMINISTRATIVE TRIBUNAL: HYDERABAD BENCH: AT HYDERABAD", paragraphStyles.centerHeading),
      createParagraph("", paragraphStyles.emptySpaceSmall),
    createParagraph("O.A. No.        of «myear»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),
    createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
    createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
    createParagraph("Counsel for the Applicant", paragraphStyles.rightAlignSmall),
  ];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          // Title
          createParagraph("IN THE CENTRAL ADMINISTRATIVE TRIBUNAL: HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("BENCH: AT HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("Original Application No. \t of «myear»", paragraphStyles.centerTextSmall),

          // Between / Parties
          createParagraph("", paragraphStyles.emptySpaceSmall),
          // Use BetweenSection to list petitioner/respondent addresses consistently
          ...BetweenSectionAddress(fData, "...Applicant", "...Respondents","(The Address for service of summons and other correspondence in relation to the applicant is that of his Counsel, M/s «counsel_address1»","(The address for service of all notices and processes on the above named Respondents is same as shown in the cause title)"),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          // Address for service lines (kept as paragraphs)
          
         
          // DETAILS OF THE APPLICATION
          createParagraph("DETAILS OF THE APPLICATION   (Filed U/s.19 of AT Act 1985)", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 1. Particulars of Order
          createParagraph("1. PARTICULARS OF THE ORDER AGAINST WHICH THE APPLICATION IS MADE:", paragraphStyles.leftAlignBold),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Order No.     : ", paragraphStyles.paraText),
          createParagraph("dated            : ", paragraphStyles.paraText),
          createParagraph("of                  : ", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Subject in Brief: The Applicant is ____________________", paragraphStyles.paraText),
          createParagraph("Hence this Original Application.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 2. Jurisdiction
          createParagraph("2. JURISDICTION:", paragraphStyles.leftAlignBold),
          createParagraph("The Applicant declares that the subject matter against which the Original Application is instituted is within the jurisdiction of the Hon'ble Tribunal under Section 14 of the Administrative Tribunals’ Act, 1985.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 3. Limitation
          createParagraph("3. LIMITATION:", paragraphStyles.leftAlignBold),
          createParagraph("The Applicant further declares that the application is made within the period of limitation as prescribed under Section 21 of the Administrative Tribunals’ Act, 1985", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
            createParagraph("", { children: [new PageBreak()] }),
          // 4. Facts
          createParagraph("4. FACTS OF THE CASE:", paragraphStyles.leftAlignBold),
          createParagraph("a) The Applicant submits that", paragraphStyles.paraText),
          createParagraph("b) The impugned action of not calling the Applicant for assessment and order rejecting the representation cannot be sustained and is liable to be interfered by this Hon'ble Tribunal.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 5. Legal Grounds
          createParagraph("5. LEGAL GROUNDS FOR THE RELIEF PRAYED:", paragraphStyles.leftAlignBold),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 6. Matters not filed or pending
          createParagraph("6. MATTERS NOT FILED OR PENDING:", paragraphStyles.leftAlignBold),
          createParagraph("The Applicant declares that he has not filed any other representation; Original Application; suit or Writ Petition before any authority, this Hon'ble Tribunal; Hon'ble Court nor is any such representation; Original Application; suit or Writ Petition pending before any authority; Tribunal or Court for the relief(s) prayed for herein.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 7. Alternative remedy
          createParagraph("7. ALTERNATIVE REMEDY:", paragraphStyles.leftAlignBold),
          createParagraph("The Applicant further declares that in view of the circumstances stated supra, she has no other effective and efficacious alternative remedy than invoking the jurisdiction of this Hon’ble Tribunal.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 8. Main relief
          createParagraph("8. MAIN RELIEF:", paragraphStyles.leftAlignBold),
          createParagraph("Hence, it is prayed that this Hon'ble Tribunal in the interests of justice be pleased to", paragraphStyles.paraText),
          createParagraph("a)________", paragraphStyles.paraText),
          createParagraph("b)________", paragraphStyles.paraText),
          createParagraph("c)Direct the Respondents to promote the Applicant as Scientist ‘F’ if found suitable and release all the benefits that flow from out of such a direction", paragraphStyles.paraText),
          createParagraph("and pass such other and further order or orders as are deemed fit and proper by this Hon'ble Tribunal in the circumstances of the case.", paragraphStyles.paraText),
           createParagraph("", { children: [new PageBreak()] }),
          // 9. Interim relief
          createParagraph("9. INTERIM RELIEF:", paragraphStyles.leftAlignBold),
          createParagraph("Pending disposal of the above Original Application it is prayed that this Hon'ble Tribunal in the interests of justice be pleased to _________ on such terms and conditions as this Hon'ble Tribunal may deem it fit in the circumstances of the case and pass such other and further order or orders as are deemed fit and proper in the circumstances of the case", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 10. Postal order particulars
          createParagraph("10. PARTICULARS OF THE POSTAL ORDER:", paragraphStyles.leftAlignBold),
          createParagraph("(i)  Name of the Post Office    :", paragraphStyles.paraText),
          createParagraph("(ii) Postal Order No.                :", paragraphStyles.paraText),
          createParagraph("(iii) Dated                                :", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // 11. Enclosures
          createParagraph("11. ENCLOSURES:", paragraphStyles.leftAlignBold),
          createParagraph("Vakalat; Annexures; Covers and Acknowledgements.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          // VERIFICATION
          createParagraph("VERIFICATION", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("I, «interim_prayer» do hereby verify that the contents of paras ……01….. to ……04….are true to our personal knowledge and paras……05…… to ……11…. believed to be true on legal advice and that we have not suppressed any material fact.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("DATE: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("Place : Hyderabad", paragraphStyles.leftAlignSmall),
          createParagraph("Signature of the Applicant", paragraphStyles.rightAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Counsel for the Applicant", paragraphStyles.leftAlignSmall),
          createParagraph("«counsel_code1»", paragraphStyles.leftAlignSmall),

          // Page break -> Chronological events
          createParagraph("", { children: [new PageBreak()] }),

          // Chronological Events title
          createParagraph("IN THE CENTRAL ADMINISTRATIVE TRIBUNAL: HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("BENCH : AT HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("O.A. No.           of «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CHRONOLOGICAL EVENTS", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          chronologicalTable,
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Date: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("Hyderabad", paragraphStyles.leftAlignSmall),
          createParagraph("Counsel for the Applicant", paragraphStyles.rightAlignSmall),
          createParagraph("«counsel_code1»", paragraphStyles.rightAlignSmall),

          // Page break -> Material Paper Index
          createParagraph("", { children: [new PageBreak()] }),

          createParagraph("IN THE CENTRAL ADMINISTRATIVE TRIBUNAL: HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("BENCH : AT HYDERABAD", paragraphStyles.centerHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("O.A. No.           of «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("MATERIAL PAPER INDEX", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          materialIndexTable,
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Date: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("Hyderabad", paragraphStyles.leftAlignSmall),
          createParagraph("Counsel for the Applicant", paragraphStyles.rightAlignSmall),
          createParagraph("«counsel_code1»", paragraphStyles.rightAlignSmall),

          // final page break then cover section
          createParagraph("", { children: [new PageBreak()] }),
        ],
      },
    ],
  });
};
