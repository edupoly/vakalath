import { Document } from "docx";
import { h2BoldCenter, h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { writIaSections } from "./writIaData";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";

export const WIATemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
        ...combinedSections(writIaSections("sec-151",formData),formData),
        pageBreak(),
        pageTable(writIaSections("sidePage1",formData),formData),
        pageBreak(),
        createRightAlignPage([
        h2BoldCenter("HIGH COURT"),
        ...LineSpace(1),
        h3underlineBoldCenter("WRIT PETITION MISC.PETITION"),
        ...LineSpace(1),
        h3Center(`I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
        h3Center(`IN`),
        h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
        ...LineSpace(1),
        h3Center(`${formData?.DISTRICT || "«DISTRICT»"}    District`),
        ...LineSpace(1),
        h3Left(`${formData?.PETITIONER_NAME || "«PETITIONER_NAME»"}`),
        h3Right("... Petitioner/s"),
        ...LineSpace(1),
        h3BoldCenter("By"),
        h3BoldCenter(`M/s ${formData?.counsel_code || " «counsel_code»"}`),
        ...LineSpace(1),
        h3UnderlineCenter("NATURE OF APPLICATION"),
        h3Center("(UNDER SEC. 151 C.P.C.)"),
        ...LineSpace(1),
        h3Left(`The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ...LineSpace(5),
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
