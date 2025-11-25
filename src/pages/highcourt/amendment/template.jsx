import { Document, PageBreak } from "docx";
import { createParagraph, paragraphStyles, paragraphStyles1, templateProperties } from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";

export const AmendmentTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: templateProperties,
                children: [
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles1.centerText
                    ),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles1.centerText
                    ),
                    ...BetweenSection(formData, "..Petitioner", "..Respondent"),
                    // createParagraph("Between:", paragraphStyles1.startText),
                    // createParagraph(
                    //     formData?.PETITIONER_ADDRESS || "_________",
                    //     paragraphStyles1.justifiedText
                    // ),
                    // createParagraph("..Petitioner", paragraphStyles1.endText),
                    // createParagraph("AND", paragraphStyles1.startText),
                    // createParagraph(
                    //     formData?.RESPONDENT_ADDRESS || "_________",
                    //     paragraphStyles1.justifiedText
                    // ),
                    // createParagraph("..Respondent", paragraphStyles1.endText),
                    createParagraph("AFFIDAVIT", paragraphStyles1.headingCenter),
                    createParagraph(
                        `${tabSpace(1)}I, ${formData?.verification || "_________"}, now having temporarily come down to ${formData?.place || "_________"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `1.${tabSpace(1)}I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `2.${tabSpace(1)}I submit that I am the writ petitioner in the above WP.No.__________. I am filing this affidavit to amend the writ prayer in view of subsequent developments occurred after filing of writ.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("3. I submit that", paragraphStyles1.paragraph),
                    createParagraph(
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer as follows:`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("last page corrs.", paragraphStyles1.leftText),
                    createParagraph("Deponent", paragraphStyles1.rightText),
                    createParagraph(
                        `Solemnly and sincerely affirm this the day of ${formData?.fdate || "_________"} and signed his name in my presence.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("BEFORE ME", paragraphStyles1.centerText),
                    createParagraph(
                        `ADVOCATE :: ${formData?.place || "_________"}`,
                        paragraphStyles1.centerText
                    ),
                    pageBreak(),
                    h3UnderlineCenter("VERIFICATION STATEMENT"),
                    createParagraph(
                        `I, ${formData?.verification || "_________"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formData?.fdate || "_________"}.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph("Deponent", paragraphStyles1.rightText),
                    pageBreak(),
                    createParagraph(
                        "MEMORANDUM OF WRIT PETITION MISC. PETITION",
                        paragraphStyles1.centerText
                    ),
                    createParagraph("(UNDER SEC. 151 OF THE C.P.C.)", paragraphStyles1.center),
                    createParagraph(
                        formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                        paragraphStyles1.centerText
                    ),
                    createParagraph(
                        `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles1.centerText
                    ),
                    createParagraph("IN", paragraphStyles1.centerText),
                    createParagraph(
                        `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                        paragraphStyles1.centerText
                    ),
                    ...BetweenSection(formData, "..Petitioner/s", "..Respondent/s"),
                    createParagraph(
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit it is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer in WP.No.___________ as follows:`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        paragraphStyles1.paragraph
                    ),
                    createParagraph(`${formData?.place || "_________"}`, paragraphStyles1.leftText),
                    createParagraph("Counsel for the Petitioner", paragraphStyles1.rightText),
                    createParagraph(`DATE: ${formData?.fdate || "_________"}`, paragraphStyles1.leftText),
                    pageBreak(),
                    createRightAlignPage([
                        createParagraph(
                            `${formData?.district || "_________"} District`,
                            paragraphStyles1.rightLane
                        ),
                        createParagraph(
                            formData?.highcourt || "IN THE HIGH COURT OF JUDICATURE AT _______",
                            paragraphStyles1.centerText
                        ),
                        createParagraph(
                            `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                            paragraphStyles1.centerText
                        ),
                        createParagraph("IN", paragraphStyles1.centerText),
                        createParagraph(
                            `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                            paragraphStyles1.centerText
                        ),
                        ...LineSpace(10),
                        createParagraph("AMENDMENT PETITION", paragraphStyles1.headingCenter),
                        ...LineSpace(10),
                        createParagraph("Filed by:", paragraphStyles1.paragraph),
                        createParagraph(
                            `M/s ${formData?.counsel_code || "_________"}`,
                            paragraphStyles1.leftText
                        ),
                        createParagraph("Advocate", paragraphStyles1.leftText),
                        createParagraph("Counsel for Petitioner", paragraphStyles1.rightText),
                    ]),
                    pageBreak(),
                    createRightAlignPage([
                        createParagraph("HIGH COURT", paragraphStyles1.headingCenter),
                        createParagraph("WRIT PETITION MISC.PETITION", paragraphStyles1.headingCenter),
                        createParagraph(
                            `I.A.NO. ${formData?.iaNo || "_______"} OF ${formData?.myear || "_______"}`,
                            paragraphStyles1.centerText
                        ),
                        createParagraph("IN", paragraphStyles1.centerText),
                        createParagraph(
                            `W.P. NO. ${formData?.wpNo || "_______"} OF ${formData?.myear || "_______"}`,
                            paragraphStyles1.centerText
                        ),
                        createParagraph(`${formData?.district || "_________"} District`, paragraphStyles1.rightLane),
                        createParagraph(formData?.Petitioners?.[0]?.Name || "_________", paragraphStyles1.justifiedText),
                        createParagraph("... Petitioner/s", paragraphStyles1.endText),
                        createParagraph("By", paragraphStyles.centerHeading),
                        createParagraph(`M/s ${formData?.counsel_code || "_________"}`, paragraphStyles.centerHeading),
                        createParagraph("NATURE OF APPLICATION", paragraphStyles.underlinedTextSmall),
                        createParagraph("(UNDER SEC. 151 C.P.C.)", paragraphStyles1.center),
                        createParagraph(
                            "This Hon’ble Court may be pleased to permit the petitioner to amend the prayer in WP.No.___________ as follows:",
                            paragraphStyles1.paragraph
                        ),
                        createParagraph(
                            `this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                            paragraphStyles1.paragraph
                        ),
                        ...LineSpace(3),
                        createParagraph(`PRESENTED ON: ${formData?.fdate || "_________"}`, paragraphStyles1.leftText),
                        createParagraph("REPRESENTED ON:", paragraphStyles1.leftText),
                        createParagraph(`FILED ON: ${formData?.fdate || "_________"}`, paragraphStyles1.leftText),
                    ]),
                ],
            },
        ],
    });
};
