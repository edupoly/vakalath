import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { vacateMacmaSections } from "./vacateMacmadata";
import {
    h2BoldCenter,
    h3BoldCenter,
  h3Center,
  h3Left,
  h3Right,
  h3underlineBoldCenter,
  h3UnderlineCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";

export const vacateMacmaTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...combinedSections(
            vacateMacmaSections("counter-affidavit", formData),
            formData
          ),
          ...LineSpace(1),
          h3Center("BEFORE ME"),
          ...LineSpace(1),
          h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
          ...LineSpace(1),
          h3underlineBoldCenter("VERIFICATION STATEMENT"),
          ...LineSpace(1),
          h3Left(
            tabSpace(1) +
              `I, ${formData?.verification || "«verification»"}, being the Respondent/ person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`
          ),
          ...LineSpace(1),
          ...createSignatureFooter([
            {
              left: [
                `Verified at ${formData?.place || "«place»"} on this`,
                `the day of ${formData?.fdate || "«fdate»"}`,
                "",
                "",
              ],
              right: ["", "", "Deponent", ""],
            },
          ]),
          pageBreak(),
          ...combinedSections(
            vacateMacmaSections("sec-151", formData),formData),
          pageBreak(),
          pageTable(vacateMacmaSections("sidePage1", formData), formData),
          pageBreak(),
          createRightAlignPage([
          h2BoldCenter("HIGH COURT"),
          h3underlineBoldCenter("WRIT PETITION MISC.PETITION"),
          ...LineSpace(1),
          h3Center(`I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          h3Center("IN"),
          h3Center(`I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          h3Center("IN"),
          h3Center(`M.A.C.M.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
          ...LineSpace(1),
          h3Center(`${formData?.DISTRICT || "«DISTRICT»"} District`),
          ...LineSpace(1),
          h3Left(`${formData?.RESPONDENT_NAME || "«RESPONDENT_NAME»"}`),
          h3Right("... Petitioner"),
          ...LineSpace(1),
          h3BoldCenter("By"),
          h3BoldCenter(`M/s ${formData?.counsel_code || "«counsel_code»"}`),
          ...LineSpace(1),
          h3UnderlineCenter("NATURE OF APPLICATION"),
          h3Center("(UNDER SEC. 151 C.P.C.)"),
          ...LineSpace(1),
          h3Left(`The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
          ...LineSpace(3),
          h3Left(`PRESENTED ON: ${formData?.fdate || "«fdate»"}`),
          ...LineSpace(1),
          h3Left("REPRESENTED ON:"),
          ...LineSpace(1),
          h3Left(`FILED ON: ${formData?.fdate || "«fdate»"}`),
          
        ])
        ],
      },
    ],
  });
};
