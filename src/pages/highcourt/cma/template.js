import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3underlineBoldCenter, h3UnderlineBoldLeft, h3UnderlineCenter, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { CMASections } from "./cmaData";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";

export const CMATemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(CMASections("order43_rule1", formData), formData),
                    pageBreak(),
                    pageTable(CMASections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(CMASections("affidavit_cma", formData), formData),
                    pageBreak(),
                    h3UnderlineCenter("VERIFICATION STATEMENT"),
                    ...addParagraphs([`I, ${formData?.verification || "_________"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true, I understood and the contents are correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language. Hence verified at ${formData?.place || "_________"} on this the day of ${formData?.fdate || "_________"}.`]),
                    createSignatureFooter([], ["Deponent"]),
                    pageBreak(),
                    ...combinedSections(CMASections("151", formData), formData),
                    pageBreak(),
                    pageTable(CMASections("sidePage2", formData), formData),
                    pageBreak(),
                    // pageBreak(),
                    pageTable(CMASections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(CMASections("sidePage4", formData), formData),
                    pageBreak(),
                    // headerWith1NumberBold([
                    //     `IN THE COURT OF THE «district»`,
                    //     `O.S.No. OF${tabSpace(3)}«myear»`
                    // ]),
                    h3Center("CHRONOLOGICAL / RUNNING INDEX "),
                    ChronologicalTable(formData),
                    // createSignatureFooter([{
                    //     left: [
                    //         `DATE:${formData?.fdate || "«fdate»"}`,
                    //         `${formData?.place || "«place»"}`
                    //     ],
                    //     right: [
                    //         `Counsel for the Petitioner`
                    //     ]
                    // }]),
                    pageBreak(),
                    h3underlineBoldCenter("BATA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    // createSignatureFooter([{
                    //     left: [
                    //         `DATE:${formData?.fdate || "«fdate»"}`,
                    //         `${formData?.place || "«place»"}`
                    //     ],
                    //     right: [
                    //         `Counsel for the Petitioner`
                    //     ]
                    // }]),
                    ...LineSpace(3),
                    h3underlineBoldCenter("BATA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    // createSignatureFooter([{
                    //     left: [
                    //         `DATE:${formData?.fdate || "«fdate»"}`,
                    //         `${formData?.place || "«place»"}`
                    //     ],
                    //     right: [
                    //         `Counsel for the Petitioner`
                    //     ]
                    // }]),
                    pageBreak(),
                    ...combinedSections(CMASections("notice", formData), formData),
                    pageBreak(),
                    ...combinedSections(CMASections("cma_notice", formData), formData),
                    pageBreak(),
                    h3BoldCenter(formData?.highcourt || "__________"),
                    h3BoldCenter("Basic Information"),
                    ...OfficeUseTable(formData),
                    ...InfoTable(formData),
                    ...LineSpace(1),
                    ...ChallanTable(formData),
                    ...LowerCourtTable(formData),
                    h3UnderlineBoldLeft("Full Cause Title:"),
                    ...BetweenSection(formData),
                    h3UnderlineBoldLeft("Main Case Prayer:"),
                    ...addParagraphs([`   It is therefore prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([` It is also just and necessary that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                ],
            },
        ],
    });

    //    ...combinedSections(RLASections["374(2)"]),
    //     pageBreak(),
    //     createRightAlignPage([
    //         h3Center("«district» :: District"),
    //         ...headerWith2Numbers([
    //             "IN THE COURT OF THE «district»",
    //             `I.A.No. ${tabSpace(3)} OF <<myear>>`,
    //             "IN",
    //             `«OPNO» \nDated «OPDATE»  \nOn the file of the  \n«lowercourt»`
    //         ]),
    //         ...LineSpace(10),
    //         h3underlineBoldCenter("MEMORANDUM OF APPEAL"),
    //         ...LineSpace(10),
    //         ...create3LineFooter([
    //             "Filed By:",
    //             "M/s <<counsel_address1>>",
    //             "Counsel for Petitioner"
    //         ])
    //     ]),
    //     pageBreak(),
    //    ...combinedSections(RLASections["482"]),
    //     pageBreak(),
    //     createRightAlignPage([
    //         h3Center("«district» :: District"),
    //         ...headerWith2Numbers([
    //             "IN THE COURT OF THE <<highcourt>>",
    //             `I.A.No. ${tabSpace(3)} OF <<myear>>`,
    //             "IN",
    //             `Crl.A.No.${tabSpace(3)}OF «myear»`
    //         ]),
    //         ...LineSpace(10),
    //         h3underlineBoldCenter("SUSPENSION PETITION"),
    //         ...LineSpace(10),
    //         ...create3LineFooter([
    //             "Filed By:",
    //             "M/s <<counsel_address1>> Advocate",
    //             "Counsel for Petitioner"
    //         ])
    //     ]),
    //     pageBreak(),


};