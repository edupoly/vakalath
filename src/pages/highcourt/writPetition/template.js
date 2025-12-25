import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import {
  h1BoldCenter,
  h2BoldCenter,
  h2Center,
  h2UnderlineBoldCenter,
  h3BoldCenter,
  h3Center,
  h3Left,
  h3Right,
  h3underlineBoldCenter,
  h3UnderlineBoldLeft,
  h3UnderlineCenter,
  h4UnderlineBoldCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../../components/templates/elementTypes";
import {
  create3LineFooter,
  create4LineFooter,
  createSignatureFooter,
} from "../../../components/templates/FooterSections";
import {
  headerWith1Number,
  headerWith2Numbers,
} from "../../../components/templates/HeaderSection";
import {
  createRightAlignPage,
  TableWithBorder,
} from "../../../components/templates/tableFunctions";
import { writPetitionSections } from "./wpData";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { formatDate } from "../../../services/templateFunctions";

export const writPetitionTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`W.P. NO.${tabSpace(3)}OF${formData?.myear || "«myear»"}`),
          ...combinedSections(
            writPetitionSections("wp.no", formData),
            formData
          ),
          ...LineSpace(1),
          h3Center("BEFORE ME"),
          ...LineSpace(1),
          h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
          pageBreak(),
          h3UnderlineCenter("VERIFICATION STATEMENT"),
          ...LineSpace(1),
          h3Left(
            tabSpace(3) +
            `I, ${formData?.verification || "«verification»"
            }, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language.   Hence verified at ${formData?.place || "«place»"
            } on this the day of ${formatDate(formData?.fdate) || "«fdate»"}`
          ),
          ...LineSpace(1),
          createSignatureFooter(["Advocate"],
            ["Deponent"],
          ),

          pageBreak(),
          h3BoldCenter("MEMORANDUM OF WRIT PETITION"),
          h3BoldCenter("(SPECIAL ORIGINAL JURISDICTION)"),
          h3BoldCenter("(UNDER ART. 226 OF THE CONSTITUTION OF INDIA)"),
          ...LineSpace(1),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...combinedSections(
            writPetitionSections("Art-226", formData),
            formData
          ),
          pageBreak(),
          createRightAlignPage([
            h3Center(`${formData?.district || "«district»"} x:: District`),
            ...LineSpace(1),
            ...headerWith2Numbers([
              "«highcourt»",
              `W.P. NO. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
            ]),
            ...LineSpace(1),
            ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
            ...LineSpace(15),
            h3underlineBoldCenter("WRIT PETITION"),
            ...LineSpace(15),
            ...create4LineFooter([
              "Filed By:",
              `M/s ${formData?.counsel_address1 || "«counsel_address1»"}`,
              "Advocate",
              "Counsel for Petitioner",
            ]),
          ]),
          pageBreak(),
          h3BoldCenter("MEMORANDUM OF WRIT PETITION MISC. PETITION"),
          h3BoldCenter("(UNDER SEC. 151 OF THE C.P.C.)"),
          ...LineSpace(1),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`I.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          h3Center("IN"),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...combinedSections(
            writPetitionSections("sec-151", formData),
            formData
          ),
          pageBreak(),
          createRightAlignPage([
            h3Center(`${formData?.district || "«district»"} x:: District`),
            ...LineSpace(1),
            h3Center("«highcourt»"),
            ...LineSpace(1),
            ...headerWith2Numbers([
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ]),
            ...LineSpace(15),
            h3underlineBoldCenter(
              "DIRECTION / SUSPENSION / SET ASIDE  / STAY   PETITION"
            ),
            ...LineSpace(15),
            ...create4LineFooter([
              "Filed By:",
              `M/s ${formData?.counsel_address1 || "«counsel_address1»"}`,
              "Advocate",
              "Counsel for Petitioner",
            ]),
          ]),
          pageBreak(),
          createRightAlignPage([
            h3Left("SINGLE / BENCH"),
            h3Left("SERVICE/NON-SERVICE"),
            h3Left("DEPT:_______________"),
            h3Left("Category Code  and"),
            h3Left("Sub Category Code"),
            h3Left("Admission Court:"),
            ...LineSpace(1),
            h2BoldCenter("HIGH COURT"),
            h3UnderlineCenter("SPECIAL ORIGINAL JURISDICTION"),
            ...LineSpace(1),
            h3UnderlineCenter(
              `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ),
            h3Center(`${formData?.DISTRICT || "«DISTRICT»"}    District`),
            ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
            h3BoldCenter("By"),
            h3BoldCenter(`M/s ${formData?.counsel_code || "«counsel_code»"}`),
            ...LineSpace(1),
            h3Center("COUNSEL FOR PETITIONER"),
            ...LineSpace(1),
            h3UnderlineCenter("NATURE OF APPLICATION"),
            h3Center("(Under Art. 226 of Constitution of India)"),
            h3Left(
              `The Hon’ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"
              } «MAIN_PRAYER» and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`
            ),
            ...LineSpace(1),
            h3Left(`Permitted on  : ${formatDate(formData?.fdate) || "«fdate»"}`),
            h3Left(`Presented on  : ${formatDate(formData?.fdate) || "«fdate»"}`),
            h3Left(`Filed on      : ${formatDate(formData?.fdate) || "«fdate»"}`),
            ...LineSpace(1),
            h3Left(`I.A..No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ]),
          pageBreak(),
          createRightAlignPage([
            h2BoldCenter("HIGH COURT"),
            h3BoldCenter("WRIT PETITION MISC.PETITION"),
            h3Center(`I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            h3Center("IN"),
            h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            h3Center(`${formData?.DISTRICT || "«DISTRICT»"}     District`),
            ...BetweenSection(formData, "Petitioner/s"),
            h3BoldCenter("By"),
            h3BoldCenter(`M/s ${formData?.counsel_code || "«counsel_code»"}`),
            h3UnderlineCenter("NATURE OF APPLICATION"),
            h3Center("(UNDER SEC. 151 C.P.C.)"),
            ...LineSpace(1),
            h3Left(
              `This Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER» "} pending disposal of the above writ petition and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`
            ),
            ...LineSpace(5),
            h3Left(`PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`),
            h3Left("REPRESENTED ON:"),
            h3Left(`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`),
          ]),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          h3UnderlineCenter("CHECK LIST FOR WRIT PETITION"),
          // TableWithBorder()
          h3UnderlineBoldLeft("ORIGINAL SET"),
          h3Left("1) 	Proof of Service             1"),
          h3Left("2) 	Court Fee Rs.   /-           2"),
          h3Left("3) 	Writ Petition                3"),
          h3Left("4) 	Annexures I & II             4"),
          h3Left("5) 	Affidavit                        5 to"),
          h3Left("     a) 	Averment regarding     previous proceedings"),
          h3Left(tabSpace(2) + "(mention Page No.       Para No.          )"),
          h3Left("     b) 	Averment regarding   alternative relief"),
          h3Left("6) 	Verification Statement"),
          h3Left("7) 	Enclosure"),
          h3Left("8) 	Material Papers"),
          h3Left(tabSpace(2) + "(Duly Indexed  P.Series)          t"),
          h3Left("9)  a)	Vakalath Rs.      /-"),
          h3Left(tabSpace(2) + "Power of Attorney/Resolution Authorising"),
          h3Left(tabSpace(2) + "to sue if petition is filed in rep.capacity"),
          h3Left("10)	Sheet containing  Respondents' Addresses"),
          h3Left(
            "_________________________________________________________________________"
          ),
          h3UnderlineBoldLeft("DUPLICATE SET"),
          h3Left("11) 	Writ Petition              3"),
          h3Left("12) 	Annexures I & II           4"),
          h3Left("13) 	Affidavit                  5  to"),
          h3Left("14) 	Material Papers               to"),
          h3Left(
            "_________________________________________________________________________"
          ),
          h3UnderlineBoldLeft("MISCELLANEOUS SET"),
          h3Left("15) 	Batta Rs."),
          h3Left("16) 	Rule Nisi Forms"),
          h3Left("17) 	Covers with Postal Addresses & Ack.Forms"),
          h3Left("18) 	Copies of Petition and Affidavits"),
          h3Left(tabSpace(1) + "(As many as the No.of the Respondents + 2)"),
          h3Left(
            "_________________________________________________________________________"
          ),
          h3UnderlineBoldLeft("19. WRIT PETITION MISC. PETITION"),
          h3Left(tabSpace(1) + "(Filed for)"),
          h3Left(tabSpace(1) + "Petition"),
          h3Left(tabSpace(1) + "Court Fee Rs."),
          h3Left(tabSpace(1) + "Batta        Rs."),
          h3Left(
            tabSpace(1) +
            "Notice Papers, Covers with Postal Addresses and Ack.Forms"
          ),
          h3Left(tabSpace(1) + " Proforma Draft Interim Order"),
          ...LineSpace(1),
          createSignatureFooter(["Signature of the", "Scrutiny Officer"],
            ["Signature of the Advocate", `Name: ${formData?.counsel_code || "«counsel_code»"}`],
          ),

          ...LineSpace(1),
          createSignatureFooter([
            "FOR OFFICE USE ONLY",
            "Respondent Vakalat filed by",
            "Counter Filed for Respt.No.",
            "Other Miscellaneous Petitions filed",
          ],
            ["", " for Respt.No", "", ""],
          ),

          pageBreak(),
          h3underlineBoldCenter("BATTA FORM"),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
            ["Counsel for the Petitioner(s)."],
          ),

          ...LineSpace(10),
          h3underlineBoldCenter("BATTA FORM"),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
            ["Counsel for the Petitioner(s)."],
          ),

          pageBreak(),
          h3UnderlineBoldLeft("RESPONDENTS ADDRESSES:"),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          pageBreak(),
          h4UnderlineBoldCenter(
            "Respondents address for sticking on covers and acknowledgments"
          ),
          ...LineSpace(5),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(10),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          pageBreak(),
          h2UnderlineBoldCenter("SERVICE CERTIFICATE"),
          ...LineSpace(5),
          h3UnderlineCenter("(PROOF OF SERVICE)"),
          ...LineSpace(5),
          h3Left(
            tabSpace(1) +
            "We have served the copies of Writ Petition, Affidavit, Writ Petition Miscellaneous Petition(s) and Material Papers on the other side Counsel/Government Pleader."
          ),
          ...LineSpace(5),
          createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
            ["Counsel for the Petitioner"],
          ),

          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Left(
            `I.A.NO.${tabSpace(2)}OF ${formData?.myear || "«myear»"} ${tabSpace(2)} IN ${tabSpace(
              2
            )}  W.P. NO.${tabSpace(2)}OF ${formData?.myear || "«myear»"}`
          ),
          ...LineSpace(1),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          h3Left(
            tabSpace(1) +
            `Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that  Under Section 151 of C.P.C.     (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court  on the      day     ${formData?.myear || "«myear»"}.`
          ),
          h3Left(
            tabSpace(2) +
            `Notice and Interim Stay has/have been granted by order Court      dated the      of        ${formData?.myear || "«myear»"} the affidavit of                                 has been filed in support thereof Dated at «place» this            day     ${formData?.myear || "«myear»"}`
          ),
          ...LineSpace(1),
          h3Right("Advocate for Petitioner"),
          pageBreak(),
          h3Center(
            "(Writ of Court Orders-Order List (To Produce and or to appear))"
          ),
          h3Center("«highcourt»"),
          h3Center("(Special Original Jurisdiction)"),
          h3Center("day the          of two thousand"),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          h3Left(
            tabSpace(1) +
            `Mr. ${formData?.counsel_code || "«counsel_code»"} upon motion this day made in to this Court by bring of opinion that the record to and touching upon all the matter and contentions raised in the memorandum of representation petition, a copy of which is annexed hereto, together with the decision therein should be called for and pursued: IT IS HEREBY COMMANDED.`
          ),
          h3Left(
            tabSpace(1) +
            `(1) That you, the aforesaid Respondent No.         do sent, of our use in High Court of Judicature Andhra Pradesh all and singular the said record and other with all the things touching the same as fully and perfectly as they have been made by you and now remain in your custody or power together with this, Rule Nisi before the day of         ${formData?.myear || "«myear»"}   and`
          ),
          h3Left(
            tabSpace(1) +
            `That you intend to oppose the petition you the aforesaid Respondent No.             do appear personally OR by Advocate on the         day of               ${formData?.myear || "«myear»"} at 10-30 A.M. before the court show cause why this petition should not be complied with and that we may cause further to be done there on what of right and according to law we shall see fit to be done.`
          ),
          h3Left(
            `WITNESS  the Hon'ble Chief Justice of High Court of Judicature, Andhra Pradesh at ${formData?.place || "«place»"}, this the year two thousand eleven`
          ),
          h3Left("Hearing Date:"),
          h3Left("Assistant registrar"),
          h3Left(
            tabSpace(1) + "RETURN OF THE WRIT OF CERTIORARI ORDER  :  NISI"
          ),
          h3Left(tabSpace(2) + " (To be endorsed on Writ to appear)"),
          h3Left(
            tabSpace(1) +
            "The Process of the Writ of Certiorari where of mention is which made was served on respondent This                           day of                    two thousand eleven"
          ),
          h3Left(
            tabSpace(1) +
            "This should be served urgently on the Respondent  No.               and  returned to the High Court"
          ),
          h3Left(tabSpace(1) + "writ and rule nise"),
          h3Left("-------------------------------"),
          h3Left(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          h3Left(
            tabSpace(1) +
            "Certified that the required conveyance charges and the process for the service of the Process have been collected it is requested that English Translation of the Process Service, Report, it is in Vernacular, my be sent along with the Rule-Nise returned.I"
          ),
          h3Left("FORM: 8"),
          h3Left(tabSpace(2) + "RETURN OF THE WRIT OF CERTIORARI ORDER NISI "),
          h3Left(tabSpace(3) + "(TO BE ENDORSED ON WRIT TO PRODUCE)"),
          h3Left(
            tabSpace(1) +
            "The process of the Writ of certiorari where of mention is within made with all things touching the same in the several papers hereto annexed as within commanded."
          ),
          h3Left("The Answer of"),
          h3Left("The                                   respondent here"),
          h3Left(
            tabSpace(2) +
            `Date                     day of                 ${formData?.myear || "«myear»"}`
          ),
          h3Center("(Sd)"),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(2),
          h3UnderlineCenter("CHRONOLOGICAL / RUNNING INDEX"),
          ...LineSpace(2),
          ChronologicalTable(formData),
          pageBreak(),
          h3Center("«highcourt»"),
          ...LineSpace(1),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          ...LineSpace(1),
          h3UnderlineCenter("LIST OF EVENTS"),
          h3UnderlineCenter("Annexure – I"),
          //Anexure Table
          h3UnderlineCenter("LIST OF EVENTS"),
          ...LineSpace(3),
          h3UnderlineCenter("Annexure – I"),
          ...LineSpace(3),
          createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
            ["Counsel for Petitioner/s"],
          ),

          pageBreak(),
          h3Center("«highcourt»"),
          ...LineSpace(1),
          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          ...LineSpace(1),
          h3underlineBoldCenter("COURT FEE"),
          ...LineSpace(20),
          createSignatureFooter([`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`, "«place»"],
            ["", "Counsel for the Petitioner"],
          ),

          pageBreak(),
          h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3BoldCenter("ORIGINAL/APPELLATE SIDE"),

          h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
            `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, petitioner in the above Petition do hereby appoint and retain`
          ),
          ...LineSpace(1),
          h3BoldCenter(`${formData?.counsel_code || "«counsel_code»"}`),
          h3Center("Advocate"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
            "Advocate/s of the High Court to appear for me/us in the above Appeal/Petition and to conduct and prosecute (or defend) the same and all proceedings that may be taken in respect of any application connected with the same or any decree or order passed therein including all applications for return of documents or the receipt of any money that may be payable to me/us in the said Appeal/Petition and also to appear in all applications under Clause-XV of the Letters Pattent and in all applications for review and for leave to the Supreme Court of India and in all applications review of judgment."
          ),
          ...LineSpace(10),
          h3Left(
            tabSpace(2) +
            "I certify that the contents this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant or executants who appeared perfectly to understand the same and made his/her/their signatures or mark in my presence."
          ),
          ...LineSpace(1),
          h3Left(
            "Executed before me this ____________ day of ____________ «myear»"
          ),
          h3Right(`ADVOCATE :: ${formData?.place || "«place»"}`),
          pageBreak(),
          createRightAlignPage([
            h3Left("S.R.No."),
            h3BoldCenter(` ${formData?.district || "«district»"} District`),
            ...LineSpace(1),
            h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
            ...LineSpace(1),
            h3BoldCenter("ORIGINAL/APPELLATE SIDE"),
            ...LineSpace(1),
            h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            ...LineSpace(15),
            h1BoldCenter("VAKALAT"),
            h2BoldCenter("ACCEPTED"),
            ...LineSpace(10),
            h3Center(`${formData?.counsel_code || "«counsel_code»"}`),
            h3Center("COUNSEL FOR  PETITIONER"),
            ...LineSpace(3),
            h3Left(`DATE :   ${formatDate(formData?.fdate) || "«fdate»"}`),
            h3Left("_____________________________"),
            h3Left("Address for Service:"),
            h3Left(`${formData?.counsel_address || "«counsel_address»"}`),
          ]),
          pageBreak(),
          h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3BoldCenter("Basic Information"),
          ...OfficeUseTable("wp"),
          ...LineSpace(1),
          ...InfoTable(formData),
          ...LineSpace(1),
          h3Left("II. Fee paid by : Challan / Stamps				 Challan Date: "),
          ...ChallanTable(formData),
          ...LineSpace(1),
          ...LowerCourtTable(formData),
          pageBreak(),
          h3UnderlineBoldLeft("Full Cause Title:"),
          ...LineSpace(1),
          ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
          pageBreak(),
          h3UnderlineBoldLeft("Main Case Prayer :"),
          h3Left(
            tabSpace(2) +
            `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ),
          ...LineSpace(3),
          h3UnderlineBoldLeft("IA(s) Prayer:"),
          h3Left(
            tabSpace(2) +
            `It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ),
        ],
      },
    ],
  });
};
