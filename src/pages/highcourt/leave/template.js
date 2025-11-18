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
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { header } from "../../../components/templates/HeaderSection";
import { leaveSections } from "./leaveData";

export const LeaveTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(leaveSections("affidavit", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: `ADVOCATE :: `, underline: true }),
                    pageBreak(),
                    ...combinedSections(leaveSections("378(4)", formData), formData),
                    pageBreak(),
                    pageTable(leaveSections("sidePage1", formData), formData),
                    pageBreak(),
                    pageTable(leaveSections("sidePage2", formData), formData),
                ],
            },
        ],
    });
};