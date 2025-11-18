import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { WtaSections } from "./wtaData";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
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
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const WtaTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...combinedSections(WtaSections("act-1957", formData), formData),
          h3underlineBoldCenter("GROUNDS"),
          ...addParagraphs([
            `(1)	The order of the Appellate Tribunal is contrary to law.`,
            `(2)	The Appellate Tribunal is erred in holding that the valuation has to be discounted by 50% on the ground of uncertainties and hazards of litigation.`,
            `(3)	In such an event, the Appellate Tribunal ought to have directed that 50% of the valuation as ultimately determined by the Hon’ble Supreme Court should be taken as the basis, but not 50% of what Valuation Officer has fixed.  The principle laid down by the A.P.High Court in Amatul Karim’s case was not properly appreciated by the Appellate Tribunal.`,
            `(4)	The Appellate Tribunal is not correct in following the principle laid down in 35 ITD 402 which suffers from series of infirmities and the same is subject-matter of reference before the Hon’ble High Court, including on the ground of perversity.`,
            `(5)		Since each Assessment Year is an independent unit, more so, in the context of valuation, the Appellate Tribunal ought to have adjudicated the question on merits without being guided by its earlier order reported in 35 ITD 402.`,
            `(6)	From the order of the Income Tax Appellate Tribunal, the following question of law arise:`,
            `${tabSpace(
              1
            )}(A)	Whether the Appellate Tribunal is justified in directing grant of deduction of an amount equivalent to 50% of the valuation, on the ground of uncertainties and hazards of litigation ?`,
            `${tabSpace(
              1
            )}(B)	Whether the findings of the Appellate Tribunal in this behalf are based on material on record ?`,
            `${tabSpace(
              1
            )}For the reasons stated above, it is prayed that the Hon’ble Court may be pleased to call for the records relating to ${
              formData?.OPNO || "«OPNO»"
            }, dated ${
              formData?.OPDATE || "«OPDATE»"
            } and set aside the same to the aforesaid extent`,
          ]),
          createSignatureFooter(
            [
              `DATE:${formData?.fdate || "«fdate»"}`,
              `${formData?.place || "«place»"}`,
            ],
            [`Counsel for Appellant`]
          ),
          pageBreak(),
          pageTable(WtaSections("sidePage1", formData), formData),
          pageBreak(),
          ...combinedSections(WtaSections("affidavit", formData), formData),
          h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
          pageBreak(),
          h3UnderlineCenter("VERIFICATION STATEMENT"),
          h3Left(`${tabSpace(1)}I, ${formData?.verification || "«verification»"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`),
          h3Right("Deponent"),
          pageBreak(),
          ...combinedSections(WtaSections("sec-151", formData), formData),
          pageBreak(),
          pageTable(WtaSections("sidePage2", formData), formData),
          pageBreak(),
          pageTable(WtaSections("sidePage3", formData), formData),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          h3Center(`W.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`),
          h3Center(`CHRONOLOGICAL / RUNNING INDEX`),
          ChronologicalTable(formData),
          createSignatureFooter([`DATE: ${formData?.fdate || "«fdate»"}`,`${formData?.place || "«place»"}`],
          [``,`Counsel for the Petitioner`],
          ),
          pageBreak(),
          h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(2),
          createSignatureFooter([`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],
          [`Counsel for the Petitioner(s).`],
          ),
          ...LineSpace(10),
           h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(2),
         createSignatureFooter(
            [`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],
            [`Counsel for the Petitioner(s).`]
            ),
          pageBreak(),
          ...combinedSections(WtaSections("highcourt", formData), formData),
          pageBreak(),
          h3underlineBoldCenter("SERVICE CERTIFICATE"),
          ...LineSpace(1),
          h3UnderlineCenter("(PROOF OF SERVICE)"),
          ...LineSpace(1),
          h3Left(`${tabSpace(1)}We have served the copies of W.T.T.A Grounds, Affidavit, Miscellaneous Petition(s) and Material Papers on the  other side Counsel/Government Pleader.`),
          ...LineSpace(1),
           createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
              ["Counsel for the Petitioner(s)."],
            ),
          pageTable(WtaSections("sidePage4", formData), formData),
          pageBreak(),
          h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
          h3BoldCenter("Basic Information"),
           ...OfficeUseTable(formData),
            ...InfoTable(formData),
            ...ChallanTable(formData),
            ...LowerCourtTable(formData),
          pageBreak(),
          h3UnderlineBoldLeft("Full Cause Title:"),
          ...LineSpace(1),
          BetweenSection(formData,"..Petitioner(s)","..Respondent(s)"),
          pageBreak(),
           h3UnderlineBoldLeft("Main Case Prayer :"),
          ...LineSpace(1),
          h3Left(`${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
          ...LineSpace(5),
           h3UnderlineBoldLeft("IA(s) Prayer:"),
          ...LineSpace(1),
          h3Left(`${tabSpace(1)}It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ],  
      },
    ],
  });
};
