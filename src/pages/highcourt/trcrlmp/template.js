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
import { trcrlmpSections } from "./trcrlmpData";
import { header } from "../../../components/templates/HeaderSection";

export const TRCRLMPTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(trcrlmpSections("affidavit", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT",underline:true }),
                    ...addParagraphs([`I, «verification», being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at «place» on this the day of «fdate»`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(trcrlmpSections("407", formData), formData),
                    pageBreak(),
                    pageTable(trcrlmpSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(trcrlmpSections("407(6)", formData), formData),
                    pageBreak(),
                    pageTable(trcrlmpSections("sidePage2", formData), formData),
                    pageBreak(),
                    // pageBreak(),
                    pageTable(trcrlmpSections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(trcrlmpSections("sidePage4", formData), formData),
                    pageBreak(),
                    // headerWith1NumberBold([
                    //     `IN THE COURT OF THE «district»`,
                    //     `O.S.No. OF${tabSpace(3)}«myear»`
                    // ]),
                    h3Center("CHRONOLOGICAL / RUNNING INDEX "),
                    ChronologicalTable(formData),
                    createSignatureFooter([
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ], [
                        `Counsel for the Petitioner`
                    ]),
                ],
            },
        ],
    });
};