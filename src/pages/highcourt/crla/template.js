import { Document } from "docx";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { h3BoldCenter, h3Center, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { headerWith1NumberBold, headerWith2Numbers } from "../../../components/templates/HeaderSection";
import { create3LineFooter, createSignatureFooter } from "../../../components/templates/FooterSections";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { CRLASections } from "./crlaData";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { headerList } from "../../../components/templates/ListSection";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";

export const CRLATemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(CRLASections("374(2)", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLASections("482", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLASections("389(1)", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage3", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLASections("482(1)", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage4", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLASections("affidavit", formData),formData),
                    pageBreak(),
                    ...combinedSections(CRLASections("378(4)", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage5", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage6", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage7", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage8", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage9", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage10", formData), formData),
                    pageBreak(),
                    // headerWith1NumberBold([
                    //     `IN THE COURT OF THE «district»`,
                    //     `O.S.No. OF${tabSpace(3)}«myear»`
                    // ]),
                    h3Center("CHRONOLOGICAL / RUNNING INDEX "),
                    ChronologicalTable(formData),
                    // createSignatureFooter([
                    //     `DATE:${formData?.fdate || "«fdate»"}`,
                    //     `${formData?.place || "«place»"}`
                    // ], [
                    //     `Counsel for the Petitioner`
                    // ]),
                    pageBreak(),
                    ...combinedSections(CRLASections("meoa", formData),formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage11", formData), formData),
                    pageBreak(),
                    pageTable(CRLASections("sidePage12", formData), formData),
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
                    ...addParagraphs(` It is therefore prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs(` It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in «OPNO», dated «OPDATE», of «lowercourt»  and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
                    ...addParagraphs(`It is also just and necessary that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
                    ...addParagraphs(`It is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of «OPNO», dated «OPDATE»  on the file of «lowercourt» before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case. `),
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