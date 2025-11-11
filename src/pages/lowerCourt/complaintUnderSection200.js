import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import {
  headerWith1Number,
  headerWith1NumberUnderline,
} from "../../components/templates/HeaderSection";
import { BetweenSection } from "../../components/templates/BetweenSection";
import {
  h3BoldCenter,
  h3Center,
  h3Left,
  h3underlineBoldCenter,
  h3UnderlineBoldLeft,
  h3UnderlineCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../components/templates/elementTypes";
import { listWith4Columns } from "../../components/templates/ListSection";
import {
  addParagraphs,
  centeredPara,
  HeaderParagraph,
} from "../../components/templates/paragraphFunctions";
import { paragraphStyles } from "../../services/templateFunctions";
import {
  create4LineFooter,
  create5LineFooter,
  createSignatureFooter,
} from "../../components/templates/FooterSections";
import {
  createRightAlignPage,
  TableWithBorder,
} from "../../components/templates/tableFunctions";

export const complaintUnderSection200 = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  };

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...headerWith1Number([
            "IN THE COURT OF THE «district»",
            `C.C. NO.${tabSpace(4)}OF «myear»`,
          ]),
          ...BetweenSection(fData, "... Complainant", "... Accused"),
          h3underlineBoldCenter("COMPLAINT UNDER SECTION 200 OF Cr.P.C."),
          ...LineSpace(1),
          ...listWith4Columns([
            { key: " Nature of Offence ", value: "Under Sec." },
            { key: " Place of Offence  ", value: "" },
            { key: " Jurisdiction of  Police Station ", value: "" },
            { key: " Date of Offence ", value: "" },
            { key: " List of Witnesses ", value: "1.Complainant" },
          ]),
          ...LineSpace(1),
          h3Center(
            "The Complainant humbly begs to state and submit as follows:-"
          ),
          ...LineSpace(1),
          ...addParagraphs([
            tabSpace(2) +
              "The address of the parties are correctly set out in the foregoing cause title.  The Complainant may also be served through its counsels, M/s «counsel_address1» for the purpose of Court Summons, Notices etc., from this Hon'ble Court.",
          ]),
          ...addParagraphs([
            "1.   The Complainant respectfully submit that this is a case of cheating in which the complainant was put a wrongful loss by accused.",
            "2.   The facts are that the Accused",
            "3.   The Complainant further submits that he approached the Accused But acused failed. The accused evaded the issue on one pretext or other by telling the complainant all sweet stories. The Complainant issued legal notices on _______. All the legal notices were received and acknowledged by Accused but failed to give any reply. On _______, the complainant here is lodged a police complaint against the Accused at ________ Police Station. But the Police of _________does not register any case against Accused.",
            "4.   The complainant further submit to this Hon'ble Court that the Accused have intentionally cheat the public at large and unfortunately complainant is one amongst them and he was made a scape goat. The accused cheated the complainant.",
            "5.   The Complainant submits that the accused has dishonestly and fraudulently induced the complainant to come and join as a member and misappropriated funds paid by the complainant and also avoided the payments to the complainant only in order to cheat the complainant and to cause wrongful loss to the complainant and wrongful gain to him by adopting fraudulent means thereby the accused has committed offence U/sec.420 of IPC and 406 IPC.",
          ]),
          HeaderParagraph(
            "JURISDICTION:",
            "The office of the accused is in ________ it falls under _________ Police Station and this Hon'ble Court is having ample and territorial jurisdiction to try the case."
          ),
          ...LineSpace(1),
          h3UnderlineBoldLeft("PRAYER:"),
          ...addParagraphs([
            tabSpace(1) +
              "It is therefore prayed that this Hon'ble Court may be pleased to refer U/sec.156(3) CrPC to the P.S._______ for requesting a FIR under Sec.420 and 406 of IPC against the accused and initiate prosecution against accused and to pass such other order or orders as may deem fit and proper in the circumstances of the case as otherwise, the complainant would be put to severe hardship and irreparable loss.",
          ]),
          createSignatureFooter(
            ["Dated: «fdate»", "Place: «station»"],
            ["Complainant"]
          ),
          ...LineSpace(1),
          createSignatureFooter(
            ["IDENTIFIED BY", "«counsel_code1»", "Advocate"],
            ["ATTESTED BY:", "Advocate:: «station»"]
          ),
          ...LineSpace(1),
          h3underlineBoldCenter("V E R I F I C A T I O N"),
          ...addParagraphs([
            tabSpace(1) +
              "I, «interim_prayer»do hereby state and verify that this is my name and signature and the facts stated hereinabove are true and correct to the best of my knowledge, information and belief.",
          ]),
          createSignatureFooter(
            ["Place:«station»", "DATE :«fdate»"],
            ["COMPLAINANT"]
          ),
          pageBreak(),
          h3underlineBoldCenter("LIST OF DOCUMENTS"),
          ...LineSpace(1),
          TableWithBorder({
            headers: [
              "Sno",
              "Date",
              "Parties to the Document",
              "Particulars of the Document",
            ],
            nrows: 7,
            num: true,
          }),
          ...LineSpace(1),
          createSignatureFooter(
            ["COUNSEL FOR COMPLAINANT", "«station»", "Date: «fdate»"],
            ["COMPLAINANT"]
          ),
          pageBreak(),
          createRightAlignPage([
            ...headerWith1Number([
              "IN THE COURT OF THE «district»",
              `C.C. NO.${tabSpace(3)}OF «myear»`,
            ]),
            ...BetweenSection(fData, "... Complainant", "... Accused"),
            ...LineSpace(3),
            h3BoldCenter("COMPLAINT U/S.200 CR.PC."),
            ...LineSpace(3),
            ...create5LineFooter([
              "Filed on:  «fdate»",
              "Filed by: «counsel_code1»",
              "Counsel for Complainant.",
              "Address for Service:",
              "M/s «counsel_address1»",
            ]),
          ]),
          pageBreak(),
          ...headerWith1Number([
            "IN THE COURT OF THE «district»",
            `C.C. NO.${tabSpace(3)}OF «myear»`,
          ]),
          ...BetweenSection(fData, "... Complainant", "... Accused"),
          h3UnderlineCenter("VERIFIED AFFIDAVIT"),
          ...LineSpace(1),
          ...addParagraphs([
            tabSpace(1) +
              "I, «interim_prayer», do hereby solemnly and sincerely affirm and sincerely state on oath as follows:",
            "1. 	I am the Complainant in the above case and as such I am well acquainted with the facts of the case and depose as under and file this affidavit as under:",
            "2. 	I submit that I have filed the above case against the Accused herein.",
            "3. 	I submit the contents of the complaint, averments made therein are true, correct and genuine one. I also filed the documents along with this complaint.",
            "It is therefore prayed that this Hon'ble Court may be pleased to refer the case as prayed for.",
          ]),
          createSignatureFooter(
            [
              "last page corrs",
              "Solemnly and sincerely affirm this",
              "the day of  «fdate»",
              "and signed his name in my presence.",
            ],
            ["Deponent"]
          ),
          h3Center("BEFORE ME"),
          ...LineSpace(1),
          h3Center("ADVOCATE :: «station»"),
          pageBreak(),
          createRightAlignPage([
            ...headerWith1Number([
              "IN THE COURT OF THE «district»",
              "C.C. NO.                    OF «myear»",
            ]),
            ...BetweenSection(fData, "... Complainant", "... Accused"),
            ...LineSpace(3),
            h3UnderlineCenter("VERIFIED AFFIDAVIT"),
            ...LineSpace(3),
            ...create4LineFooter([
              "Filed on:  «fdate»",
              "Filed by:",
              "M/s «counsel_address1»",
              "COUNSEL FOR COMPLAINANT",
            ]),
          ]),
          pageBreak(),
          ...headerWith1Number([
            "IN THE COURT OF THE «district»",
            `C.C. NO.${tabSpace(3)}OF «myear»`,
          ]),
          ...BetweenSection(fData, "... Complainant", "... Accused"),
          h3UnderlineCenter("AFFIDAVIT"),
          ...addParagraphs([
            tabSpace(1) +
              "I, «interim_prayer», do hereby solemnly and sincerely affirm and sincerely state on oath as follows:",
            "1. 	I am the Complainant in the above case and as such I am well acquainted with the facts of the case and depose as under and file this affidavit as under:",
            "2. 	I submit that I have filed the above case against the Accused herein.",
            "3. 	I submit the contents of the complaint, averments made therein are true, correct, genuine one and there is no false statement. I hereby undertake, if this Hon’ble Court found false statement made by me, I am ready to face consequences.",
          ]),
          createSignatureFooter(
            [
              "last page corrs",
              "Solemnly and sincerely affirm this",
              "the day of  «fdate»",
              "and signed his name in my presence.",
            ],
            ["Deponent"]
          ),
          pageBreak(),
          createRightAlignPage([
            ...headerWith1Number([
              "IN THE COURT OF THE «district»",
              "C.C. NO.                    OF «myear»",
            ]),
            ...BetweenSection(fData, "... Complainant", "... Accused"),
            ...LineSpace(3),
            h3UnderlineCenter("AFFIDAVIT"),
            ...LineSpace(3),
            ...create4LineFooter([
              "Filed on:  «fdate»",
              "Filed by:",
              "M/s «counsel_address1»",
              "COUNSEL FOR COMPLAINANT",
            ]),
          ]),
          pageBreak(),
          ...headerWith1Number([
            "IN THE COURT OF THE «district»",
            "C.C. NO.                    OF «myear»",
          ]),
          ...BetweenSection(fData, "... Complainant", "... Accused"),
          ...addParagraphs([
            "I, «interim_prayer», do hereby appoint and retain",
          ]),
          h3BoldCenter("«counsel_code1»"),
          h3Center("Advocate"),
          ...LineSpace(1),
          ...addParagraphs([
            tabSpace(1) +
              "Advocate/s to appear for me/us in the above Suit/Appeal/Petition/Case and to conduct and prosecute or defend the same and all proceedings that may be taken in respect of any application for execution of any decree or order passed therein. I/We empower my/our Advocate/s to appear in all miscellaneous proceedings in the above suit or matter till all decrees or order are fully satisfied, or adjusted, to compromise and obtain the return of documents and draw any money that might be payable to me/us in the said suit or matter and I/We do further empower my/our Advocate/s to accept on my/our behalf service of notice of all or any appeal or petition filed in any court or appeal Reference or Revision with regard to the said suit or matter before disposal of the same in Honourable Court.",
          ]),
          ...LineSpace(2),
          ...addParagraphs([
            tabSpace(1) +
              "I certified that the executant who is well acquainted with English, read this Vakalatnama that the contents of this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant he/she/they being unacquainted with English, who appeared perfectly to understand the same and signed or put his/her/their name or mark in my presence.",
          ]),
          h3Left("Identified by Sri _______________________________"),
          createSignatureFooter(["Executed  on «fdate»"], ["ADVOCATE"]),
          pageBreak(),
          createRightAlignPage([
            ...headerWith1Number([
              "IN THE COURT OF THE «district»",
              `C.C. NO.${tabSpace(3)}OF «myear»`,
            ]),
            ...BetweenSection(fData, "... Complainant", "... Accused"),
            ...LineSpace(3),
            h3UnderlineCenter("VAKALAT ACCEPTED"),
            ...LineSpace(3),
            ...create5LineFooter([
              "Filed on:  «fdate»",
              "Filed by: «counsel_code1»",
              "Counsel for Complainant.",
              "Address for Service:",
              "M/s «counsel_address1»",
            ]),
          ]),
          pageBreak(),
          h3Center("FORM No.7"),
          h3Center("LIST OF DOCUMENTS"),
          h3Center("(Rule 16,17 and 102 of Civil Rules of Practice 1983)"),
          h3Center(
            "(Order VII Rule-14 or Order XIII Rule-1 of the Code of Civil Procedure 1908)"
          ),
          ...LineSpace(1),
          ...headerWith1Number([
            "IN THE COURT OF THE «district»",
            `C.C. NO.${tabSpace(3)}OF «myear»`,
          ]),
          ...BetweenSection(fData, "... Complainant", "... Accused"),
          h3underlineBoldCenter("List of Document filed by Complainant"),
          ...LineSpace(1),
          TableWithBorder({
            headers: [
              "Sno",
              "Date",
              "Parties to the Document",
              "Particulars of the Document",
            ],
            nrows: 7,
            styles: { underlineHead: true },
            num: true,
          }),
          ...LineSpace(1),
          createSignatureFooter(
            ["Date: «fdate»", "«station»"],
            ["Advocate for Complainant"]
          ),
          pageBreak(),
          createRightAlignPage([
            ...headerWith1NumberUnderline([
              "IN THE COURT OF THE «district»",
              `C.C. NO.${tabSpace(3)}OF «myear»`,
            ]),
            ...LineSpace(1),
            ...BetweenSection(fData, "... Complainant", "... Accused"),
            ...LineSpace(3),
            h3BoldCenter("LIST OF DOCUMENTS"),
            ...LineSpace(3),
            ...create4LineFooter([
              "FILED ON: «fdate»",
              "FILED BY:",
              "M/s «counsel_address1»",
              "COUNSEL FOR PETITIONER",
            ]),
          ]),
        ],
      },
    ],
  });
};
