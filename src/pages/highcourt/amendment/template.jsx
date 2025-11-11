import { Document, PageBreak } from "docx";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const AmendmentTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles.centerText
                    ),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    ...BetweenSection(formData),
                    // createParagraph("Between:", paragraphStyles.startText),
                    // createParagraph(
                    //     formData?.PETITIONER_ADDRESS || "_________",
                    //     paragraphStyles.justifiedText
                    // ),
                    // createParagraph("..Petitioner", paragraphStyles.endText),
                    // createParagraph("AND", paragraphStyles.startText),
                    // createParagraph(
                    //     formData?.RESPONDENT_ADDRESS || "_________",
                    //     paragraphStyles.justifiedText
                    // ),
                    // createParagraph("..Respondent", paragraphStyles.endText),
                    createParagraph("AFFIDAVIT", paragraphStyles.headingCenter),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, now having temporarily come down to ${formData?.place || "_________"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph(
                        "1. I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.",
                        paragraphStyles.paragraph
                    ),
                    createParagraph(
                        "2. I submit that I am the writ petitioner in the above WP.No.__________. I am filing this affidavit to amend the writ prayer in view of subsequent developments occurred after filing of writ.",
                        paragraphStyles.paragraph
                    ),
                    createParagraph("3. I submit that", paragraphStyles.paragraph),
                    createParagraph(
                        "It is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer as follows:",
                        paragraphStyles.paragraph
                    ),
                    createParagraph(
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph("", { children: [new PageBreak()] }),
                    createParagraph("last page corrs.", paragraphStyles.leftText),
                    createParagraph("Deponent", paragraphStyles.rightText),
                    createParagraph(
                        `Solemnly and sincerely affirm this the day of ${formData?.fdate || "_________"} and signed his name in my presence.`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph("BEFORE ME", paragraphStyles.centerText),
                    createParagraph(
                        `ADVOCATE :: ${formData?.place || "_________"}`,
                        paragraphStyles.centerText
                    ),
                    createParagraph("VERIFICATION STATEMENT", paragraphStyles.headingCenter),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formData?.fdate || "_________"}.`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph("Deponent", paragraphStyles.rightText),
                    createParagraph(
                        "MEMORANDUM OF WRIT PETITION MISC. PETITION",
                        paragraphStyles.headingCenter
                    ),
                    createParagraph("(UNDER SEC. 151 OF THE C.P.C.)", paragraphStyles.center),
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles.headingCenter
                    ),
                    createParagraph(
                        `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph("IN", paragraphStyles.centerText),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph("BETWEEN:", paragraphStyles.startText),
                    createParagraph(
                        formData?.PETITIONER_ADDRESS || "_________",
                        paragraphStyles.justifiedText
                    ),
                    createParagraph("..Petitioner/s", paragraphStyles.endText),
                    createParagraph("AND", paragraphStyles.centerText),
                    createParagraph(
                        formData?.RESPONDENT_ADDRESS || "_________",
                        paragraphStyles.justifiedText
                    ),
                    createParagraph("..Respondent/s", paragraphStyles.endText),
                    createParagraph(
                        "For the reasons stated in the accompanying affidavit it is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer in WP.No.___________ as follows:",
                        paragraphStyles.paragraph
                    ),
                    createParagraph(
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph(`${formData?.place || "_________"}`, paragraphStyles.leftText),
                    createParagraph("Counsel for the Petitioner", paragraphStyles.rightText),
                    createParagraph(`DATE: ${formData?.fdate || "_________"}`, paragraphStyles.leftText),
                    createParagraph(
                        `${formData?.DISTRICT || "_________"} District`,
                        paragraphStyles.rightLane
                    ),
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles.headingCenter
                    ),
                    createParagraph(
                        `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph("IN", paragraphStyles.centerText),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph("AMENDMENT PETITION", paragraphStyles.headingCenter),
                    createParagraph("Filed by:", paragraphStyles.paragraph),
                    createParagraph(
                        `M/s ${formData?.counsel_code || "_________"}`,
                        paragraphStyles.leftText
                    ),
                    createParagraph("Advocate", paragraphStyles.leftText),
                    createParagraph("Counsel for Petitioner", paragraphStyles.rightText),
                    createParagraph("HIGH COURT", paragraphStyles.headingCenter),
                    createParagraph("WRIT PETITION MISC.PETITION", paragraphStyles.headingCenter),
                    createParagraph(
                        `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph("IN", paragraphStyles.centerText),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles.caseNo
                    ),
                    createParagraph(`${formData?.DISTRICT || "_________"} District`, paragraphStyles.rightLane),
                    createParagraph(formData?.PETITIONER_NAME || "_________", paragraphStyles.justifiedText),
                    createParagraph("... Petitioner/s", paragraphStyles.endText),
                    createParagraph("By", paragraphStyles.paragraph),
                    createParagraph(`M/s ${formData?.counsel_code || "_________"}`, paragraphStyles.leftText),
                    createParagraph("NATURE OF APPLICATION", paragraphStyles.headingCenter),
                    createParagraph("(UNDER SEC. 151 C.P.C.)", paragraphStyles.center),
                    createParagraph(
                        "This Hon’ble Court may be pleased to permit the petitioner to amend the prayer in WP.No.___________ as follows:",
                        paragraphStyles.paragraph
                    ),
                    createParagraph(
                        `this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles.paragraph
                    ),
                    createParagraph(`PRESENTED ON: ${formData?.fdate || "_________"}`, paragraphStyles.leftText),
                    createParagraph("REPRESENTED ON:", paragraphStyles.leftText),
                    createParagraph(`FILED ON: ${formData?.fdate || "_________"}`, paragraphStyles.leftText),
                ],
            },
        ],
    });
};
