import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
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
import { caveatSections } from "./caveatData";

export const CaveatTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(caveatSections("affidavit", formData), formData),
                    h3Center("BEFORE ME"),
                    ...LineSpace(1),
                    h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
                    ...LineSpace(1),
                    pageBreak(),
                    h3UnderlineCenter("VERIFICATION STATEMENT"),
                    ...LineSpace(1),
                    h3Left(
                        `${tabSpace(
                            1
                        )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the Respondent/ person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`
                    ),
                    ...LineSpace(1),
                    createSignatureFooter([`Verified at ${formData?.place || "«place»"} on this `, `the day of ${formData?.fdate || "«fdate»"}`],
                        ["Deponent"],
                    ),
                    pageBreak(),
                    ...combinedSections(caveatSections("148A", formData), formData),
                    pageBreak(),
                    pageTable(caveatSections("sidePage1", formData), formData),

                ],
            },
        ],
    });
};