import { Document, Packer, PageBreak } from "docx";
import { saveAs } from "file-saver";
import { createParagraph, paragraphStyles1 } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const WPAffidavitTemplate = (formData) => {
    console.log(formData);
    
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles1.centerText
                    ),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles1.centerText
                    ),
                    ...BetweenSection(formData,"..Petitioner","..Respondent"),
                    createParagraph("AFFIDAVIT", paragraphStyles1.centerText),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, now having temporarily come down to ${formData?.place || "_________"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        "1. I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.",
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        "2. I further submit that since the cause of action of all the petitioners herein is one and the same, we are filing a single writ petition. However, as required under writ rules, separate court fee is paid herewith.",
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        "3. I submit that",
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        "In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to seek the redressal before this Hon'ble Court seeking the indulgence of this Hon’ble Court to exercise the extraordinary original jurisdiction vested in this Hon’ble Court by virtue of Article 226 of the Constitution of India.",
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        "The petitioner has not filed any writ petition, suit or other proceedings for the relief or relieves sought herein.",
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `It is therefore prayed that this Hon'ble Court may be pleased to issue a Writ, Order or direction more particularly one in the nature of Writ of Mandamus declaring ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "_________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("", { children: [new PageBreak()] }),
                    createParagraph("last page corrs.", paragraphStyles1.leftText),
                    createParagraph("Deponent", paragraphStyles1.rightzText),
                    createParagraph(
                        `Solemnly and sincerely affirm this the day of ${formData?.fdate || "_________"} and signed his name in my presence.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("BEFORE ME", paragraphStyles1.centerText),
                    createParagraph(
                        `ADVOCATE :: ${formData?.place || "_________"}`,
                        paragraphStyles1.centerText
                    ),
                    createParagraph("VERIFICATION STATEMENT", paragraphStyles1.headingCenter),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true, I understood and the contents are correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formData?.fdate || "_________"}.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("Advocate", paragraphStyles1.leftText),
                    createParagraph("Deponent", paragraphStyles1.rightText),
                ],
            },
        ],
    });
};

// Example usage (optional):
// const doc = WPAffidavitTemplate(formData);
// Packer.toBlob(doc).then(blob => saveAs(blob, "Affidavit.docx"));
