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

export const BailLowerCourtTemplate = (formData) => {
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

  const signatureTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: { size: 0 }, bottom: { size: 0 }, left: { size: 0 }, right: { size: 0 } },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              createParagraph("Signature of the Person Interested in Accused", paragraphStyles.leftAlignSmall),
            ],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [
              createParagraph("Counsel for Petitioner", paragraphStyles.rightAlignSmall),
            ],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
    ],
  });

  const tableRows = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(`Place: «station»`, paragraphStyles.leftAlignSmall),
            createParagraph(`Date: «fdate»`, paragraphStyles.leftAlignSmall),
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
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
      ],
    }),
  ];

  const coverChildren = [
    createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
    createParagraph("Crl.M.P. NO.             OF «myear»", paragraphStyles.centerTextSmall),
    createParagraph("IN", paragraphStyles.centerTextSmall),
    createParagraph("Crime No.____", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceBig),
    createParagraph("BAIL PETITION FILED U/Sec. 439 OF Cr.P.C.", paragraphStyles.underlinedHeading),
    createParagraph("OFFENCE UNDER SECTION : «main_prayer»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceBig),
    createParagraph("FILED ON : «fdate»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),
    createParagraph("Filed By:", paragraphStyles.centerTextSmall),
    createParagraph("M/s «counsel_address1»", paragraphStyles.centerTextSmall),
    createParagraph("COUNSEL FOR PETITIONER", paragraphStyles.centerTextSmall),
  ];
  const coverChildren2 = [
    createParagraph("IN THE COURT OF THE  «district»", paragraphStyles.centerTextBig),
    createParagraph("Crl.P. NO.            OF «myear»", paragraphStyles.centerText),
    createParagraph("IN", paragraphStyles.centerTextSmall),
    createParagraph("Crime No.____", paragraphStyles.centerTextSmall),
        createParagraph("", paragraphStyles.emptySpaceBig),
   
    createParagraph("MEMO OF APPEARANCE", paragraphStyles.underlinedHeading),
        createParagraph("", paragraphStyles.emptySpaceBig),
    createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
    createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
    createParagraph("COUNSEL FOR PETITIONER", paragraphStyles.rightAlignSmall),
  ];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          // --- MAIN BAIL PETITION ---
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
          createParagraph("CRL.M.P. NO.           OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("(CRIME.No._______, __________ Police Station)", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          ...BetweenSection(
            fData,
            "...Petitioner/Accused",
            "...Respondent/Complainant"
          ),

          createParagraph("", paragraphStyles.emptySpaceSmall),
new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  borders: { top: { size: 0 }, bottom: { size: 0 }, left: { size: 0 }, right: { size: 0 } },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph("Date of Offence:", paragraphStyles.leftAlignSmall),
          ],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
          children: [
            createParagraph("Date of Arrest:", paragraphStyles.rightAlignSmall),
          ],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
      ],
    }),
  ],
}),


          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("BAIL PETITION FILED UNDER SECTION 439 OF Cr.P.C. OFFENCE UNDER SECTION: «main_prayer»", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("May it please your Honour,", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("1. That the Police, ______ has falsely implicated the petitioner/Accused in the above Crime No._____ for the offence under Section _______ and arrested the petitioner/accused and produced them before the _________ on ______, in turn the Hon’ble JFCM ______ was pleased to remand the petitioner/accused to Judicial custody on _________.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("2. The case of the prosecution that", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("3. The petitioner / accused is innocent of the alleged offence and they do not plead guilty of the alleged offence and the same is foisted by the defacto complainant. The prosecution had registered the crime against the petitioner / accused for statistical purpose in the alleged offence.", paragraphStyles.paraText),
         createParagraph("", { children: [new PageBreak()] }),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("4. That the defacto complainant had falsely implicated the petitioner / accused at the instance of the prosecution and the petitioner / accused have never committed the alleged offence. Further, the content of the complaint does not attract the ingredients of the section as alleged. Thus, the contents of the complaint are contrary to the offence leveled by the prosecution to register the alleged case against the petitioner / accused.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("5. The petitioner / accused submit that the prosecution had falsely implicated them in the alleged offence without ascertaining the facts for statistical purposes.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("6. That the petitioner / accused hails from a respectable family in the society owning substantial movables and immovable properties and will abide by the terms and conditions imposed by the Hon’ble Court in order to secure his presence for investigation if any.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("7. That the petitioner/accused is ready to furnish sufficient sureties to the satisfaction of this Hon’ble Court and also abide by any terms & conditions imposed by this Hon’ble Court.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("8. This is the first bail application filed on behalf of the petitioner/accused herein and no other bail petition is pending before any court including the Hon’ble High Court of A.P.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("9. That the petitioner/accused herein is the male member and earner of the family, and the absence of the petitioner/accused may shock the family. Thus, it is just and necessary to release the petitioner/accused on bail in the interest of justice and for the family welfare of the petitioner/accused.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("10. The other grounds will be urged at the time of hearing.", paragraphStyles.paraText),
            createParagraph("", { children: [new PageBreak()] }),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("It is therefore prayed that this Hon’ble Court may be pleased to enlarge the petitioner on bail in Crime No._____ dated _________ of __________ SHO, ________  and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createDocxFooterTable(tableRows),

          createParagraph("", { children: [new PageBreak()] }),

          // --- VERIFICATION SECTION ---
          createParagraph("VERIFICATION", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("I, «interim_prayer», do hereby verify that I am the brother/wife/father of the petitioner/Accused and duly authorised/instructed by the Accused who is now lodged in __________ Jail, relating to Crime.No._______, Dtd.________, _________ PS to appoint «counsel_address1» to act on his behalf and defend them in the above case and no other person has been instructed to appoint any Advocate.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("I also verify that this is the Bail Petition, and no similar petition is filed or pending before any court of law, including the Higher Courts.", paragraphStyles.paraText),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«station»", paragraphStyles.leftAlignSmall),
          createParagraph("Signature of Person Interested", paragraphStyles.rightAlignSmall),
          createParagraph("DATE: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("VERIFIED IN MY PRESENCE", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Advocate :: «station»", paragraphStyles.centerTextBig),
          createParagraph("", { children: [new PageBreak()] }),
        ],
      },
      createDocxCoverSection(coverChildren, 7000),
      {
        properties: {},
        children: [
          createParagraph("MEMO OF APPEARANCE", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpace),

          createParagraph("IN THE COURT OF THE  «district»", paragraphStyles.centerTextBig),
          createParagraph("CRL.MP.No.                         OF   «myear»", paragraphStyles.centerText),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("(CRIME.No._______, Dt.______ of _________ Police Station)", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          ...BetweenSection(
            fData,
            "...Petitioner/Accused",
            "...Respondent/Complainant"
          ),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "I  «counsel_address1» hereby declare that I have been duly entrusted and engaged by Mr.___________, Person interested in accused to file the present bail application on behalf of the accused.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph(
            "Kindly enter my case as Counsel for the Petitioner/Accused in the above case.",
            paragraphStyles.paraText
          ),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          signatureTable,
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("Address of the Person Interested in Accused:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("«station»", paragraphStyles.leftAlignSmall),
          createParagraph("DATE:«fdate»", paragraphStyles.leftAlignSmall),

          createParagraph("", { children: [new PageBreak()] }),
        ],
      },
       createDocxCoverSection(coverChildren2, 7000),
    ],
  });
};
