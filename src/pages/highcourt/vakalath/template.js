import { Document } from "docx";
import { h2BoldCenter, h3BoldCenter, h3Center, h3Left, h3Right, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { vakalathSections } from "./vakalathData";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";

export const vakalathTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
        h3BoldCenter("«highcourt»"),
        ...LineSpace(1),
        h2BoldCenter("ORIGINAL/APPELLATE SIDE"),
        ...LineSpace(1),
        h3Left(`W.P.No.${tabSpace(3)}OF «myear»`),
        ...BetweenSection(formData,"..Petitioner","...Respondent"),
        h3Left(`${tabSpace(1)}I, «verification», Petitioner in the above Petition do hereby appoint and retain`),
        ...LineSpace(1),
        h3BoldCenter("«counsel_code»"),
        h3Center("Advocate"),
        ...LineSpace(1),
        h3Left(`${tabSpace(1)}Advocate/s of the High Court to appear for me/us in the above Appeal/Petition and to conduct and prosecute (or defend) the same and all proceedings that may be taken in respect of any application connected with the same or any decree or order passed therein including all applications for return of documents or the receipt of any money that may be payable to me/us in the said Appeal/Petition and also to appear in all applications under Clause-XV of the Letters Pattent and in all applications for review and for leave to the Supreme Court of India and in all applications review of judgment.`),
        ...LineSpace(10),
        h3Left(`${tabSpace(2)}I certify that the contents this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant or executants who appeared perfectly to understand the same and made his/her/their signatures or mark in my presence.`),
        ...LineSpace(3),
        h3Left("Executed before me this ____________ day of ____________«myear»"),
        ...LineSpace(1),
        h3Center("ADVOCATE :: «place»"),
        pageBreak(),
        createRightAlignPage([
        h3Left("S.R.No."),
        h3BoldCenter("«district» District"),
        ...LineSpace(1),
        h3BoldCenter("«highcourt»"),
        ...LineSpace(1),
        h3BoldCenter("ORIGINAL/APPELLATE SIDE"),
        ...LineSpace(1),
        h3Center(`W.P.No.${tabSpace(3)}OF «myear»`),
        ...LineSpace(15),
        h2BoldCenter("VAKALAT ACCEPTED"),
        ...LineSpace(5),
        h3Right("COUNSEL FOR  PETITIONER/"),
        h3Right("APPELLANT/"),
        h3Right("RESPONDENT"),
        ...LineSpace(5),
        h3Left("DATE :   «fdate»"),
        ...LineSpace(1),
        h3Right("COUNSEL FOR  PETITIONER/"),
        h3Right("APPELLANT/"),
        h3Right("RESPONDENT"),
        h3Center("_____________________________"),
        ...LineSpace(1),
        h3Left("Address for Service:"),
        ...LineSpace(1),
        h3Left("«counsel_address»"),

         
    ])
],
      },
    ],
  });
};
