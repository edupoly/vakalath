import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { CCCASections } from "./cccaData";

export const CCCATemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(CCCASections("order43_rule1", formData), formData),
                    pageBreak(),
                    pageTable(CCCASections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(CCCASections("affidavit_cma", formData), formData),
                    pageBreak(),
                    ...combinedSections(CCCASections("151", formData), formData),
                    pageBreak(),
                    pageTable(CCCASections("sidePage2", formData), formData),
                    pageBreak(),
                    // pageBreak(),
                    pageTable(CCCASections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(CCCASections("sidePage4", formData), formData),
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
                    pageBreak(),
                    h3underlineBoldCenter("BATA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    createSignatureFooter([
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ], [
                        `Counsel for the Petitioner`
                    ]
                    ),
                    ...LineSpace(3),
                    h3underlineBoldCenter("BATA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    createSignatureFooter([
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                        [`Counsel for the Petitioner`]
                    ),
                    pageBreak(),
                    ...combinedSections(CCCASections("notice", formData), formData),
                    pageBreak(),
                    ...combinedSections(CCCASections("cma_notice", formData), formData),
                    pageBreak(),
                    h3BoldCenter(formData?.highcourt || "__________"),
                    h3BoldCenter("Basic Information"),
                    ...OfficeUseTable(formData),
                    ...InfoTable(formData),
                    ...ChallanTable(formData),
                    ...LowerCourtTable(formData),
                    h3UnderlineBoldLeft("Full Cause Title:"),
                    ...BetweenSection(formData),
                    h3UnderlineBoldLeft("Main Case Prayer:"),
                    ...addParagraphs([`   It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([` It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                ],
            },
        ],
    });
};