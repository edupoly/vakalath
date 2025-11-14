import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { vacateSections } from "./vacateData";
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

export const vacateTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...combinedSections(formData, vacateSections["counter-affidavit"]),
          h3Center("BEFORE ME"),
          ...LineSpace(1),
          h3Center("ADVOCATE :: «place»"),
          ...LineSpace(1),
          pageBreak(),
          h3underlineBoldCenter("VERIFICATION STATEMENT"),
          ...LineSpace(1),
          h3Left(
            `${tabSpace(
              1
            )}I, «verification», being the Respondent/ person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`
          ),
          ...createSignatureFooter([
            {
              left: ["Verified at «place» on this ", "the day of «fdate»","",""],
              right: ["","", "Deponent",""],
            },
          ]),
          pageBreak(),
          ...combinedSections(formData, vacateSections["sec-151"]),
          pageBreak(),
          pageTable(vacateSections["sidePage1"]),
          pageBreak(),
          createRightAlignPage([
                  h2BoldCenter("HIGH COURT"),
                  ...LineSpace(1),
                  h3underlineBoldCenter("WRIT PETITION MISC.PETITION"),
                  ...LineSpace(1),
                  h3Center(`I.A.NO.${tabSpace(3)}OF «myear»`,),
                  h3Center(`IN`),
                  h3Center(`W.P. NO.${tabSpace(3)}OF «myear»`,),
                  ...LineSpace(1),
                  h3Center("«DISTRICT»     District"),
                  ...LineSpace(1),
                  h3Left("«RESPONDENT_NAME»"),
                  h3Right("... Petitioner/s"),
                  ...LineSpace(1),
                  h3BoldCenter("By"),
                  h3BoldCenter("M/s «counsel_code»"),
                  ...LineSpace(1),
                  h3UnderlineCenter("NATURE OF APPLICATION"),
                  h3Center("(UNDER SEC. 151 C.P.C.)"),
                  ...LineSpace(1),
                  h3Left("The Hon’ble Court may be pleased «INTERIM_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case."),
                  ...LineSpace(5),
                  h3Left("PRESENTED ON: «fdate»"),
                  ...LineSpace(1),
                  h3Left("REPRESENTED ON:"),
                  ...LineSpace(1),
                  h3Left("FILED ON: «fdate»"),
          
          
                  
                  ])
        ],
      },
    ],
  });
};
