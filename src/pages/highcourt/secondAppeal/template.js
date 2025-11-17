import { Document } from "docx";
import {
  h3BoldCenter,
  h3Center,
  h3Left,
  h3Right,
  h3underlineBoldCenter,
  h3UnderlineBoldLeft,
  h3UnderlineCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { secondAppealSections } from "./secondAppealData";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";

export const secondAppealTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          h3Center("MEMORANDUM OF SECOND APPEAL"),
          h3Center("(UNDER SECTION 100 OF C.P.C.)"),
          h3Center("IN THE COURT OF THE _____________________________________"),
          ...LineSpace(1),
          h3Center(`O.S.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          h3Center(`In the Court of the ${formData?.lowercourt || "«lowercourt»"}`),
          ...LineSpace(1),
          h3Center(`${formData?.OPNO || "«OPNO»"}`),
          ...LineSpace(1),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`S.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          ...BetweenSection(formData, "...Appellant", "...Respondent"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              "The address for service of all notices and process on the above named Appellant is that of his counsel «counsel_address»"
          ),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              `The above named Appellant begs to present this Memorandum of Second Appeal against the Judgment passed in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}  on the file of ${formData?.lowercourt || "«lowercourt»"} confirming/reversing the orders passed in O.S.No.______ of Dt._______, on the file of _________________, __________. For the following grounds among other:`
          ),
          ...LineSpace(1),
          h3Left(
            "The following substantial question of law arises in the grounds Nos.___ "
          ),
          ...LineSpace(1),
          h3underlineBoldCenter("G R O U N D S"),
          ...LineSpace(1),
          ...addParagraphs([
            "1.   The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
            "2.",
            "3.",
            "4.",
            "Other grounds would be argued at the time of hearing.",
          ]),
          ...LineSpace(1),
          h3underlineBoldCenter("MEMO OF VALUATION"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              "The value of appeal is Rs.____________ and the Court Fee payable thereon is Rs._____/- and the same is sufficient under the A.P.C.F. and S.V.Act."
          ),
          ...LineSpace(2),
          ...createSignatureFooter([
            {
              left: [`${formData?.place || "«place»"}`, `DATE:${formData?.fdate || "«fdate»"}`],
              right: ["", "Counsel For Appellant"],
            },
          ]),
          pageBreak(),
          pageTable(secondAppealSections("sidepage1", formData), formData),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("affidavit", formData),
            formData
          ),
          h3Center(`${formData?.place || "«place»"}`),
          h3UnderlineCenter("VERIFICATION STATEMENT"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              `I, ${formData?.verification || "«verification»"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  Hence verified at «place» on this the day of ${formData?.fdate || "«fdate»"}`,
          ),
          h3Right("Deponent"),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("sec-151", formData),
            formData
          ),
          pageBreak(),
          pageTable(secondAppealSections("sidepage2", formData), formData),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("sec-5", formData),
            formData
          ),
          pageBreak(),
          pageTable(secondAppealSections("sidepage3", formData), formData),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("sec-151(2)", formData),
            formData
          ),
          pageBreak(),
          pageTable(secondAppealSections("sidepage4", formData), formData),
          pageBreak(),
          pageTable(secondAppealSections("sidepage5", formData), formData),
          pageBreak(),
          pageTable(secondAppealSections("sidepage6", formData), formData),
          pageBreak(),
          pageTable(secondAppealSections("sidepage7", formData), formData),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`S.A. No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          ChronologicalTable(formData),
          ...createSignatureFooter([
            {
              left: [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
              right: ["", "Counsel for the Petitioner"],
            },
          ]),
          pageBreak(),
          h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(1),
          ...createSignatureFooter([
            {
              left: [`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
              right: ["Counsel for the Petitioner(s)."],
            },
          ]),
          ...LineSpace(5),
          h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(1),
          ...createSignatureFooter([
            {
              left: [`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
              right: ["Counsel for the Petitioner(s)."],
            },
          ]),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("highcourt", formData),
            formData
          ),
          pageBreak(),
          ...combinedSections(
            secondAppealSections("highcourt2", formData),
            formData
          ),
          h3Left(
            tabSpace(1) +
              `Interlocutory Application No.________ has been made by the Appellant/Petitioner and execution has been stayed (or other order made) by order, dated the ____________________________ ${
                formData?.myear || "«myear»"
              }`
          ),
          ...LineSpace(1),
          h3Left(
            "The hours of attendance of the office of the Registrar of High Court are from 10-30 AM to 4.15 PM."
          ),
          ...LineSpace(1),
          h3Left(
            "Note: Process server should make an endorsement in his return to the effect that a copy of the notice and a copy of the Memorandum of Appeal have been served. Attention is directed to High Court Circular, Dis.No.781 of 1922."
          ),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          ...BetweenSection(formData, "..Petitioner", "..Respondent"),
          ...LineSpace(1),
          h3underlineBoldCenter("COURT FEE"),
          ...LineSpace(15),
          ...createSignatureFooter([
            {
              left: [
                `DATE: ${formData?.fdate || "«fdate»"}`,
                `${formData?.place || "«place»"}`,
              ],
              right: ["Counsel for the Petitioner"],
            },
          ]),
          pageBreak(),
          pageTable(secondAppealSections("sidepage8", formData), formData),
          pageBreak(),
          h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
          h3BoldCenter(`Basic Information `),
          ...OfficeUseTable(formData),
           ...InfoTable(formData),
          ...ChallanTable(formData),
          ...LowerCourtTable(formData),
          pageBreak(),
          h3UnderlineBoldLeft("Full Cause Title:"),
          ...BetweenSection(formData,"..Petitioner(s)","..Respondent(s)"),
          pageBreak(),
          h3UnderlineBoldLeft("Main Case Prayer :"),
          ...LineSpace(1),
          h3Left(tabSpace(1)+`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
          ...LineSpace(5),
            h3UnderlineBoldLeft("IA(s) Prayer:"),
          ...LineSpace(1),
          h3Left(tabSpace(1)+`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ],
      },
    ],
  });
};
