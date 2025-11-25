import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
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
import { appealSuitSections } from "./asData";

export const AppealSuitTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: templateProperties,
                children: [
                    ...combinedSections(appealSuitSections("96_41", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("affidavit", formData), formData),
                    pageBreak(),
                    h3underlineBoldCenter("VERIFICATION STATEMENT"),
                    ...LineSpace(1),
                    h3Left(`${tabSpace(1)}I, ${formData?.verification || "«verification»"}, being the Respondent/ person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`),
                    createSignatureFooter([`Verified at ${formData?.place || "«place»"} on this `, `the day of ${formData?.fdate || "«fdate»"}`],
                        ["Deponent"],
                    ),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("151", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("5", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage3", formData), formData),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("151(1)", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage4", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage5", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage6", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage7", formData), formData),
                    pageBreak(),
                    pageTable(appealSuitSections("sidePage8", formData), formData),
                    pageBreak(),

                    // ...combinedSections(appealSuitSections("ServiceCertificate", formData), formData),
                    // pageBreak(),
                    // headerWith1NumberBold([
                    //     `IN THE COURT OF THE «district»`,
                    //     `O.S.No. OF${tabSpace(3)}«myear»`
                    // ]),
                    h3Center("CHRONOLOGICAL / RUNNING INDEX "),
                    ChronologicalTable(formData),
                    ...LineSpace(1),
                    createSignatureFooter([
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                        [
                            `Counsel for the Petitioner`
                        ]
                    ),
                    pageBreak(),
                    h3underlineBoldCenter("BATTA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                     createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),


                    ...LineSpace(10),
                    h3underlineBoldCenter("BATTA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("notice", formData), formData),
                    ...addParagraphs([
                        `Interlocutory Application No.________ has been made by the Appellant/Petitioner and execution has been stayed (or other order made) by order, dated the ____________________________ «myear»`,
                        `The hours of attendance of the office of the Registrar of High Court are from 10-30 AM to 4.15 PM.`,
                        `Note: Process server should make an endorsement in his return to the effect that a copy of the notice and a copy of the Memorandum of Appeal have been served. Attention is directed to High Court Circular, Dis.No.781 of 1922.`
                    ]),
                    pageBreak(),
                    ...combinedSections(appealSuitSections("CivilMiscNotice", formData), formData),
                    pageBreak(),
                    h3BoldCenter(formData?.highcourt || "__________"),
                    h3BoldCenter("Basic Information"),
                    ...OfficeUseTable(formData),
                    ...InfoTable(formData),
                    ...ChallanTable(formData),
                    ...LowerCourtTable(formData),
                    pageBreak(),
                    h3UnderlineBoldLeft("Full Cause Title:"),
                    ...BetweenSection(formData, "..Petitioner(s)", "..Respondent(s)"),
                    pageBreak(),
                    h3UnderlineBoldLeft("Main Case Prayer:"),
                    ...addParagraphs([`  It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([` It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                ],
            },
        ],
    });
};