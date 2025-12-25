import { Document } from "docx";
import { taxAppellateTribunalSections } from "./taxAppellateData";
import { combinedSections } from "../../../components/highcourt/combineSections";
import {
  h2BoldCenter,
  h2UnderlineBoldCenter,
  h3BoldCenter,
  h3BoldLeft,
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
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { formatDate } from "../../../services/templateFunctions";

export const taxAppellateTribunalTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...combinedSections(
            taxAppellateTribunalSections("sec-260A", formData),
            formData
          ),
          h3underlineBoldCenter("GROUNDS"),
          ...LineSpace(1),
          ...addParagraphs([
            "1).	The Order of the Appellate Tribunal is contrary to law.",
            "2)	(a) The Appellate Tribunal erred in holding that poultry shed should be treated as plant for the purpose of grant of depreciation.",
            "(b) The Appellate Tribunal ought to have held that since the assessee carries on business in the poultry shed but not with poultry shed, the same is liable to be treated as building but not as plant for the purpose of depreciation.",
            "3)	Merely because the structure is designed to accommodate hatchery or poultry having regard to the exigencies, it cannot be described as plant.",
            "4)	The question whether structure used for the purpose of hatchery or poultry can be treated as plant for the purpose of grant of depreciation is pending consideration before the Hon’ble Court.",
            "From the order of the Income Tax Appellate Tribunal, the following question of law arises:",
            "“Whether the Appellate Tribunal is justified in holding that the ________?”",
            tabSpace(1) +
              `For the reasons stated above, it is prayed that the Hon’ble Court may be pleased to call for the records relating to ${formData?.OPNO || "«OPNO»"}, dated  ${formatDate(formData?.OPDATE) || "«OPDATE»"} and set aside the same to the aforesaid extent.`,
          ]),
          ...LineSpace(1),
          ...createSignatureFooter([
            {
              left: [`DATE:${formatDate(formData?.fdate) || "«fdate»"}`, `${formData?.place || "«place»"}`],
              right: ["", "Counsel for Appellant "],
            },
          ]),
          pageBreak(),
          pageTable(
            taxAppellateTribunalSections("sidePage1", formData),
            formData
          ),
          pageBreak(),
          ...combinedSections(
            taxAppellateTribunalSections("affidavit", formData),
            formData
          ),
          h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
          ...LineSpace(1),
          h3UnderlineCenter("VERIFICATION STATEMENT"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  Hence verified at ${formData?.place || "«place»"} on this the day of ${formatDate(formData?.fdate) || "«fdate»"}`
          ),
          h3Right("Deponent"),
          pageBreak(),
          ...combinedSections(
            taxAppellateTribunalSections("sec-151", formData),
            formData
          ),
          pageBreak(),
          pageTable(
            taxAppellateTribunalSections("sidePage2", formData),
            formData
          ),
          pageBreak(),
          createRightAlignPage([
            h2UnderlineBoldCenter("HIGH COURT"),
            ...LineSpace(1),
            h3BoldCenter("CIVIL MISC.PETITION"),
            ...LineSpace(1),
            h3Center(`I.A.No${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            h3Center(`IN`),
            h3Center(`I.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            ...LineSpace(1),
            h3Center(`${formData?.DISTRICT || "«DISTRICT»"}    District`),
            ...LineSpace(1),
            h3Left(``),
            h3Right("... Petitioner"),
            ...LineSpace(1),
            h3BoldCenter(`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`),
            ...LineSpace(1),
            h3Center("NATURE OF APPLICATION"),
            h3Center("(UNDER SEC. 151 C.P.C.)"),
            ...LineSpace(1),
            h3Left(
              `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
            ),
            ...LineSpace(2),
            h3Left(`PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`),
            ...LineSpace(1),
            h3Left("REPRESENTED ON:"),
            ...LineSpace(1),
            h3Left(`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`),
          ]),
          pageBreak(),
          h3Center(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3Center(`I.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          h3Center("CHRONOLOGICAL / RUNNING INDEX"),
          ...LineSpace(1),
          ChronologicalTable(formData),
          pageBreak(),
          h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(2),
          ...createSignatureFooter([
            {
              left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
              right: ["Counsel for the Petitioner(s)."],
            },
          ]),
          ...LineSpace(15),
          h3underlineBoldCenter("BATA FORM"),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
          ...LineSpace(2),
          ...createSignatureFooter([
            {
              left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
              right: ["Counsel for the Petitioner(s)."],
            },
          ]),
          pageBreak(),
          ...combinedSections(
            taxAppellateTribunalSections("I.I.T.A.NO", formData),
            formData
          ),
          pageBreak(),
          h3underlineBoldCenter("SERVICE CERTIFICATE"),
          ...LineSpace(1),
          h3UnderlineCenter("(PROOF OF SERVICE)"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              "We have served the copies of I.T.T.A Grounds, Affidavit, Miscellaneous Petition(s) and Material Papers on the  other side Counsel/Government Pleader."
          ),
          ...LineSpace(1),
          createRightAlignPage([
            h2BoldCenter("HIGH COURT"),
            h2BoldCenter("A P P E A L"),
            ...LineSpace(1),
            h3Center(`I.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
            ...LineSpace(1),
            h3Center(`District:  ${formData?.DISTRICT || "«DISTRICT»"}`),
            ...LineSpace(1),
            h3Center("INCOME TAX APPELLATE TRIBUNAL,"),
            h3Center("BENCH,"),
            h3Center(`${formData?.OPNO || "«OPNO»"}`),
            ...LineSpace(1),
            ...BetweenSection(formData, "APPELLANT", "RESPONDENT"),
            ...LineSpace(1),
            h3BoldCenter(`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`),
            ...LineSpace(1),
            h3Left("Nature of Claim"),
            h3Left("Decree passed on"),
            h3Left("Appeal Presented on"),
            h3Left("Appeal Filed on"),
            h3Left("Appeal admitted on"),
            h3Left("Appeal Valued at Rupees"),
            h3Left("Stamp Duty paid Rupees"),
            h3Left("To be heard on"),
          ]),
          pageBreak(),
          h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
          ...LineSpace(1),
          h3BoldCenter("Basic Information"),
           ...OfficeUseTable("taxAppellateTribunal"),
            ...InfoTable(formData),
            ...ChallanTable(formData),
             ...LowerCourtTable(formData),
          pageBreak(),
          h3UnderlineBoldLeft("Full Cause Title:"),
          ...BetweenSection(formData, "..Petitioner(s)", "..Respondent(s)"),
          pageBreak(),
          h3UnderlineBoldLeft("Main Case Prayer :"),
          h3Left(tabSpace(1)+`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
            ...LineSpace(1),
          h3UnderlineBoldLeft("IA(s) Prayer:"),
          h3Left(tabSpace(1)+`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ],
      },
    ],
  });
};
