import { Document, Packer, PageBreak } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, formatDate, paragraphStyles1, templateProperties } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { WPAFISections } from "./wpafiData";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { ABSections } from "../antibail/antiBail";

export const WPAffidavitTemplate = (formData) => {
    console.log(formData);

    return new Document({
        sections: [
            {
                properties: templateProperties,
                children: [
                    ...combinedSections(WPAFISections("writ_affidavit", formData), formData),
                    ...LineSpace(1),
                    createParagraph("BEFORE ME", paragraphStyles1.centerText),
                    createParagraph(
                        `ADVOCATE :: ${formData?.place || "_________"}`,
                        paragraphStyles1.centerText
                    ),
                    pageBreak(),
                    createParagraph("VERIFICATION STATEMENT", paragraphStyles1.headingCenter),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true, I understood and the contents are correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formatDate(formData?.fdate) || "_________"}.`,
                        paragraphStyles1.paragraph
                    ),
                    createSignatureFooter(["Advocate",], ["Deponent"]),
                    pageBreak(),
                    pageTable(WPAFISections("sidePage1", formData), formData),
                ],
            },
        ],
    });
};

// Example usage (optional):
// const doc = WPAffidavitTemplate(formData);
// Packer.toBlob(doc).then(blob => saveAs(blob, "Affidavit.docx"));
