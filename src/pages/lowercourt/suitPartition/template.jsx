import { Document, PageBreak } from "docx";
import {
  createParagraph,
  formatDate,
  paragraphStyles,
  templateProperties,
} from "../../../services/templateFunctions";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { SuitPartitionSection } from "./suitPartitionData";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import {
    h3BoldCenter,
  pageBreak,
  tabSpace,
} from "../../../components/templates/elementTypes";
import {
  createSignatureFooter,
  SignatureFooter,
} from "../../../components/templates/FooterSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";

export const SuitPartitionTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: templateProperties,
        children: [
          ...combinedSections(SuitPartitionSection("plaint", formData),formData),
          pageBreak(),
          ...combinedSections(SuitPartitionSection("SUIT SCHEDULED PROPERTY", formData),formData),
          ...addParagraphs([`${tabSpace(1)}I, ${formData?.interim_prayer || "«interim_prayer»"}  do hereby declare that what is stated in the above schedule is true and correct to the best of my knowledge and belief and signed on this ${formData?.fdate || "«fdate»"} at ${formData?.station || "«station»"}.`,]),
          createSignatureFooter([``], [" PLAINTIFF"]),
          createSignatureFooter([`Through:`, ""], [""]),
          createSignatureFooter(
            [`${formData?.counsel_code1 || "«counsel_code1»"}`],
            [""]
          ),
          createSignatureFooter([`Advocate for Petitioner/Plaintiff.`], [""]),
          pageBreak(),
          pageTable(SuitPartitionSection("sidepage1", formData), formData),
          pageBreak(),
          ...combinedSections(
            SuitPartitionSection("Sec-26(2)", formData),
            formData
          ),
          h3BoldCenter("BEFORE ME"),
          h3BoldCenter(`ADVOCATE :: ${formData?.station || "«station»"}`),
          pageBreak(),
          pageTable(SuitPartitionSection("sidepage2", formData), formData),
          pageBreak(),
          ...combinedSections(
            SuitPartitionSection("Rule-15(4)", formData),
            formData
          ),
           h3BoldCenter("BEFORE ME"),
          h3BoldCenter(`ADVOCATE :: ${formData?.station || "«station»"}`),
          pageBreak(),
          ...combinedSections(
            SuitPartitionSection("ORDER 39,RULE-1&2", formData),
            formData
          ),
          pageTable(SuitPartitionSection("sidepage4", formData), formData),
          pageBreak(),
          ...combinedSections(
            SuitPartitionSection("counsel_code1", formData),
            formData
          ),
          pageBreak(),
          pageTable(SuitPartitionSection("sidepage5", formData), formData),


        ],
      },
    ],
  });
};
