import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3UnderlineBoldLeft, pageBreak, h3underlineBoldCenter, tabSpace, LineSpace } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { fcaSections } from "./fcaData";
import { header, headerWith1Number } from "../../../components/templates/HeaderSection";
import { createParagraph, formatDate, paragraphStyles } from "../../../services/templateFunctions";

export const FCATemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(fcaSections("19", formData), formData),
                    pageBreak(),
                    pageTable(fcaSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(fcaSections("affidavit", formData), formData),
                    pageBreak(),
                    ...combinedSections(fcaSections("151", formData), formData),
                    pageBreak(),
                    pageTable(fcaSections("sidePage2", formData), formData),
                    pageBreak(),
                    pageTable(fcaSections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(fcaSections("sidePage4", formData), formData),
                    pageBreak(),
                    ...headerWith1Number([
                        ` «highcourt»`,
                        `F.C.A.No. OF${tabSpace(3)}«myear»`
                    ]),
                    h3Center("RUNNING INDEX "),
                    ChronologicalTable(formData),
                    createSignatureFooter([
                        `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ], [
                        `Counsel for the Petitioner`
                    ]
                    ),
                    pageBreak(),
                    h3underlineBoldCenter("BATA FORM"),
                    ...formData?.Respondents?.map((res) => [
                        createParagraph(res?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
                        createParagraph(res?.Address, paragraphStyles.leftAlignSmall),
                    ]).flat(),
                    createSignatureFooter([
                        `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
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
                        `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ], [
                        `Counsel for the Petitioner`
                    ]
                    ),
                    pageBreak(),
                    ...combinedSections(fcaSections("151_notice", formData), formData),
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
                    ...addParagraphs([` It is therefore prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([`It is also just and necessary that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
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