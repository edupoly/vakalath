import { Document, PageBreak } from "docx";
import { createParagraph, formatDate, paragraphStyles, paragraphStyles1, templateProperties } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { AmendamentSections } from "./amendmentData";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";

export const AmendmentTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: templateProperties,
                children: [
                    ...combinedSections(AmendamentSections("writ_affidavit", formData), formData),
                    createParagraph("BEFORE ME", paragraphStyles1.centerText),
                    createParagraph(
                        `ADVOCATE :: ${formData?.place || "_________"}`,
                        paragraphStyles1.centerText
                    ),
                    pageBreak(),
                    h3UnderlineCenter("VERIFICATION STATEMENT"),
                    createParagraph(
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formatDate(formData?.fdate) || "_________"}.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("Deponent", paragraphStyles1.rightText),
                    pageBreak(),
                    ...combinedSections(AmendamentSections("151", formData), formData),
                    pageBreak(),
                    pageTable(AmendamentSections("sidePage1", formData), formData),
                    pageBreak(),
                    pageTable(AmendamentSections("sidePage2", formData), formData),
                ],
            },
        ],
    });
};
