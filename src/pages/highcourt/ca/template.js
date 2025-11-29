import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createParagraph, paragraphStyles, templateProperties } from "../../../services/templateFunctions";
import { header } from "../../../components/templates/HeaderSection";
import { caSections } from "./caData";

export const CATemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: templateProperties,
                children: [
                    ...combinedSections(caSections("form51", formData), formData),
                    ChronologicalTable(formData),
                    ...LineSpace(1),
                    createSignatureFooter([
                        `Date: ${formData?.fdate || "«fdate»"}`,
                        `${formData?.station || "«station»"}`
                    ], [
                        `${formData?.counsel_code || "«counsel_code»"}`,
                        "Advocate for Petitioner/Plaintiff"
                    ]),
                    pageBreak(),
                    pageTable(caSections("sidePage1", formData), formData),

                ],
            },
        ],
    });
};