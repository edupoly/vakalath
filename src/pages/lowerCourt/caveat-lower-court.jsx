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
import { headerWith1Numberand1Line, headerWith2Numbers } from "../../components/templates/HeaderSection";
import { listWithColon, listWithNumbers } from "../../components/templates/ListSection";

export const CaveatLowerCourtTemplate = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_name»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_name»" }],
  };

  // List of Document table (bordered)
  const listDocTable = new Table({
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
            children: [createParagraph("Sl.No.", paragraphStyles.leftAlignSmall)],
            width: { size: 10, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Date if any of documents in vernacular in English", paragraphStyles.leftAlignSmall)],
            width: { size: 30, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Parties to the Documents", paragraphStyles.leftAlignSmall)],
            width: { size: 30, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [createParagraph("Description of Documents", paragraphStyles.leftAlignSmall)],
            width: { size: 30, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
      // Add many empty rows to match the original layout (adjust count if needed)
      ...Array.from({ length: 12 }).map((_, i) =>
        new TableRow({
          children: [
            new TableCell({ children: [createParagraph(String(i + 1), paragraphStyles.leftAlignSmall)] }),
            new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
            new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
            new TableCell({ children: [createParagraph("", paragraphStyles.leftAlignSmall)] }),
          ],
        })
      ),
    ],
  });

  // Cover section children (final backsheet)
  const coverChildren = [
    createParagraph("IN THE COURT OF THE", paragraphStyles.centerTextBig),
    createParagraph("«district»", paragraphStyles.centerText),
    createParagraph("", paragraphStyles.emptySpaceSmall),

    createParagraph("CAVEAT .No.                OF «myear»", paragraphStyles.centerTextSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),

     ...BetweenSection(
            fData,
            "...Petitioner/Caveator",
            "...Respondent"
          ),

    createParagraph("", paragraphStyles.emptySpaceBig),

    createParagraph("VAKALAT", paragraphStyles.underlinedHeadingSmall),
    createParagraph("", paragraphStyles.emptySpaceSmall),

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
          // --- Page 1: Affidavit (word-for-word) ---
          createParagraph("IN THE COURT OF THE «district»", {...paragraphStyles.centerTextBig,spacing:{after:100}}),
          createParagraph("CAVEATE PETITION No.               OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("IN", {...paragraphStyles.centerTextSmall,spacing:{after:100,before:100}}),
          createParagraph("No.\t\t\t\tOF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("Against",  {...paragraphStyles.centerTextSmall,spacing:{after:100,before:100}}),

           ...BetweenSection(
            fData,
            "...Petitioner/Caveator",
            "...Respondent"
          ),
          


          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("A F F I D A V I T", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("I, «interim_prayer», do hereby solemnly and sincerely affirm and sincerely state on oath as follows:", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("1. I am the Petitioner herein and as such I am well acquainted with the facts of the case. ", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("2. I submit that ", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("3.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("4. That aggrieved thereby the Respondents may file _______ before this Hon'ble Court and obtain exparte ad interim orders in _____ and IA against _____________.  If any exparte orders are obtained  it will suffer serious and irreparable loss. ", paragraphStyles.paraText),
          createParagraph("", { children: [new PageBreak()] }),
          createParagraph("5. I submit that as required under law the copy of the caveat petition is sent to the respondents through RPAD. The court fee of Rs.10/- is paid under Rule 295(5) of Civil Rules of Practice.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     It is prayed that this Hon'ble Court may be pleased to order notice to be served on our counsel «counsel_address1» before passing any orders on any ______ or IA that may be filed against _____________  and pass such other order or orders may deem fit and proper in the circumstances of the case.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("last page corrs.\t\t\t\t\t\t\t\tDeponent", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Solemnly and sincerely affirmed on                     ", paragraphStyles.leftAlignSmall),
          createParagraph("this the day of «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("and signed his name in my presence.", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("BEFORE ME", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Advocate :: «station»", paragraphStyles.centerTextSmall),

          // Page break
          createParagraph("", { children: [new PageBreak()] }),

          // --- Page 2: Caveat Petition main page (word-for-word) ---
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CAVEATE PETITION No.               OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("No.\t\t\t\tOF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("AGAINST", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("BETWEEN:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«petitioner_address»", paragraphStyles.leftAlignSmall),
          createParagraph("                                                  ...Petitioner", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     AND", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«respondent_address»\u00A0", paragraphStyles.leftAlignSmall),
          createParagraph("				  ...Respondent", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("CAVEAT PETITION FILED UNDER SECTION 148-A C.P.C.", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     For the reasons stated in above this Hon'ble Court may be pleased to order notice to be served on our counsel «counsel_address1» before passing any orders on any OS/OP/EP or IA/EA that may be filed against   \u00A0_____________  and pass such other order or orders may deem fit and proper in the circumstances of the case.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("Date: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("«station» \t\t\t\t\t\tCounsel for Petitioner ", paragraphStyles.leftAlignSmall),

          // Page break
          createParagraph("", { children: [new PageBreak()] }),

          // --- Page 3: Cover / filed by page (word-for-word) ---
          createParagraph("IN THE COURT OF THE ", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Caveate Petition No.                 OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("No.\t                      OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Against", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Between", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("«petitioner_name»", paragraphStyles.leftAlignSmall),
          createParagraph("...Petitioner/Caveator", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     AND ", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«respondent_name»", paragraphStyles.leftAlignSmall),
          createParagraph("…Respondent/s", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("CAVEATE PETITION FILED UNDER SECTION 148-A C.P.C.", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Filed By:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
          createParagraph("Advocate", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Counsel for Petitioner", paragraphStyles.leftAlignSmall),

          // Page break
          createParagraph("", { children: [new PageBreak()] }),

          // --- Page 4: Notice (word-for-word) ---
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CAVEAT No.                OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Between:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«PETITIONER_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("                                                   ..Petitioner", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     and", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«RESPONDENT_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("                                                  ..Respondent", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("NOTICE", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     WHEREAS the above named Petitioner/Plaintiff has made an application to this Court.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("To", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«RESPONDENT_ADDRESS»", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("     You are hereby required to appear in this court in person or by a pleader duly instructed on the _______ day of _______ «myear» at 10-30 AM to show cause of against the Application, failing which the said Application will be heard and determined..", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Given under my hand and seal of Court this ________ day of _____ «myear».", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("SEAL                                                                 By order NAZIR", paragraphStyles.paraText),

          // Page break
          createParagraph("", { children: [new PageBreak()] }),

          // --- Page 5: Form No.7 List of Document (word-for-word) ---
          createParagraph("Form No.7 List of Document [R,9,10 & 62]", paragraphStyles.centerTextSmall),
          createParagraph("(Under order X1 R 71 XIII Code of Civil Procedure)", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("IN THE COURT OF THE «district»", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CAVEATE.No.                of «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Between:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«PETITIONER_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("Petitioner/Plaintiff", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("                                                 AND", paragraphStyles.leftAlignSmall),
          createParagraph("«RESPONDENT_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("Defendant/Respondent", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("List of  Document filed by- Petitioner", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          listDocTable,
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("Date  «fdate»      					«counsel_code1»", paragraphStyles.leftAlignSmall),
          createParagraph("«station»					Advocate for Petitioner/Plaintiff", paragraphStyles.leftAlignSmall),

          // Page break
          createParagraph("", { children: [new PageBreak()] }),

          // --- Page 6: Vakalat and Vakalat accepted (word-for-word) ---
          createParagraph("IN THE COURT OF THE  «district»", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CAVEATE No.                  OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("BETWEEN:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«PETITIONER_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("….  PLAINTIFF", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("        AND", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«respondent_name»", paragraphStyles.leftAlignSmall),
          createParagraph("…..DEFENDANT", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     I, «interim_prayer», do hereby appoint and retain", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«counsel_code1»", paragraphStyles.leftAlignSmall),
          createParagraph("Advocate", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     Advocate/s to appear for me/us in the above Suit/Appeal/Petition/Case and to conduct and prosecute or defend the same and all proceedings that may be taken in respect of any application for execution of any decree or order passed therein. I/We empower my/our Advocate/s to appear in all miscellaneous proceedings in the above suit or matter till all decrees or order are fully satisfied, or adjusted, to compromise and obtain the return of documents and draw any money that might be payable to me/us in the said suit or matter and I/We do further empower my/our Advocate/s to accept on my/our behalf service of notice of all or any appeal or petition filed in any court or appeal Reference or Revision with regard to the said suit or matter before disposal of the same in Honourable Court.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("     I certified that the executant who is well acquainted with English, read this Vakalatnama that the contents of this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant he/she/they being unacquainted with English, who appeared perfectly to understand the same and signed or put his/her/their name or mark in my presence.", paragraphStyles.paraText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("Identified by Sri _______________________________", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("Executed  on «fdate»                                            ADVOCATE", paragraphStyles.leftAlignSmall),
          createParagraph("At «station»", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("IN THE COURT OF THE", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("CAVEATE No.              OF «myear»", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("BETWEEN:", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«PETITIONER_NAME»", paragraphStyles.leftAlignSmall),
          createParagraph("….PLAINTIFF", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("AND", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("«respondent_name»", paragraphStyles.leftAlignSmall),
          createParagraph("DEFENDANT", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("VAKALAT", paragraphStyles.underlinedHeadingSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("ACCEPTED", paragraphStyles.centerText),
          createParagraph("", paragraphStyles.emptySpaceSmall),

          createParagraph("FILED ON: «fdate»", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
          createParagraph("M/s «counsel_address1»", paragraphStyles.leftAlignSmall),
          createParagraph("Advocate", paragraphStyles.leftAlignSmall),
          createParagraph("", paragraphStyles.emptySpaceSmall),
          createParagraph("ADVOCATE FOR PLAINTIFF", paragraphStyles.leftAlignSmall),
        ],
      },
      // Cover section on right margin
      createDocxCoverSection(coverChildren, 7000),
    ],
    
  });
  
};
