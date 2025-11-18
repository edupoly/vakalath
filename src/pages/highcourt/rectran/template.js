import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { rectranSections } from "./rectranData";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3UnderlineBoldLeft, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";


export const rectranTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
        ...combinedSections(rectranSections("affidavit", formData), formData),
        h3Center("BEFORE ME"),
        ...LineSpace(1),
        h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
        ...LineSpace(1),
        h3UnderlineCenter("VERIFICATION STATEMENT"),
        ...LineSpace(1),
        h3Left(`${tabSpace(1)}I, «verification», being the petitioner/ person acquainted with the facts, do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  They are read over to me and explained in vernacular language. Hence verified at «place» on this the day of «fdate»`),
        h3Right("Deponent"),
        pageBreak(),
        pageTable(rectranSections("sidePage1", formData), formData),
        pageBreak(),
        ...combinedSections(rectranSections("sec-151", formData), formData),
        pageBreak(),
        pageTable(rectranSections("sidePage2", formData), formData),
        pageBreak(),
        h3Center(`${formData?.highcourt || "«highcourt»"}`),
        ...LineSpace(1),
        h3Center(`R & T. C.M.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
        ...LineSpace(1),
        h3UnderlineCenter("RUNNING INDEX "),
        ...LineSpace(1),
        ChronologicalTable(formData),
        createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
              ["Counsel for the Petitioner"],
        ),
        pageBreak(),
        createSignatureFooter([``],
              [`SINGLE / BENCH`, `SERVICE/NON-SERVICE`,`DEPT:_______________`,`Category Code  and`,`Sub Category Code`,`Admission Court:`],
        ),
        ...LineSpace(1),
        pageTable(rectranSections("sidePage3", formData), formData),
        pageBreak(),
        pageTable(rectranSections("sidePage4", formData), formData),
        pageBreak(),
        ...combinedSections(rectranSections("appellate-side", formData), formData),
        pageBreak(),
        pageTable(rectranSections("sidePage5", formData), formData),
        pageBreak(),
        h3BoldCenter(`${formData?.highcourt || "«highcourt»"}`),
        ...LineSpace(1),
        h3BoldCenter(`Basic Information`), 
        ...OfficeUseTable(formData),
         ...InfoTable(formData),
         ...ChallanTable(formData),
         ...LowerCourtTable(formData),
        pageBreak(),
        h3UnderlineBoldLeft(`Full Cause Title:`),
        BetweenSection(formData,"..Petitioner(s)","..Respondent(s)"),
        pageBreak(),
         h3UnderlineBoldLeft(`Main Case Prayer :`),
         h3Left(`${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ...LineSpace(5),
         h3UnderlineBoldLeft(`IA(s) Prayer:`),
         h3Left(`${tabSpace(1)}It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
        ],  
      },
      
    ],
  });
};
