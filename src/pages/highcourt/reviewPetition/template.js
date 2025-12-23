import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { reviewSections } from "./reviewData";
import { h3Center, h3Left, h3Right, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const reviewTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
        ...combinedSections(reviewSections("sec-114", formData), formData),
        pageBreak(),
        pageTable(reviewSections("sidePage1", formData), formData),
        pageBreak(),
        ...combinedSections(reviewSections("affidavit", formData), formData),
        h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
        ...LineSpace(1),
        h3UnderlineCenter("VERIFICATION STATEMENT"),
        ...LineSpace(1),
        h3Left(`${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`),
        ...LineSpace(1),
        h3Right("Deponent"),
        pageBreak(),
        ...combinedSections(reviewSections("sec-151", formData), formData),
        pageBreak(),
        pageTable(reviewSections("sidePage2", formData), formData),
        pageBreak(),
        pageTable(reviewSections("sidePage3", formData), formData),
        pageBreak(),
        pageTable(reviewSections("sidePage4", formData), formData),
        pageBreak(),
         pageTable(reviewSections("sidePage5", formData), formData),
        pageBreak(),
        h3Center(`${formData?.highcourt || "«highcourt»"}`),
        ...LineSpace(1),
        `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
        ...LineSpace(1),
        ChronologicalTable(formData),
        ...LineSpace(1),
        createSignatureFooter([`DATE: ${formData?.fdate || "«fdate»"}`,`${formData?.place || "«place»"}`],
        ["Counsel for the Petitioner"],
         ),
        pageBreak(),
        ...combinedSections(reviewSections("sec-5", formData), formData),
        pageBreak(),
         pageTable(reviewSections("sidePage6", formData), formData),
        pageBreak(),
         pageTable(reviewSections("sidePage7", formData), formData),
        
        ],  
      },
    ],
  });
};
