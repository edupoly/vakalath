import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3UnderlineBoldLeft, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { CRLRCMacmaSections } from "./data";

export const CRLRCMacmaTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(CRLRCMacmaSections("173", formData),formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLRCMacmaSections("affidavit", formData),formData),
                    pageBreak(),
                    ...combinedSections(CRLRCMacmaSections("151", formData),formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLRCMacmaSections("5", formData),formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage3", formData), formData),
                    pageBreak(),
                    ...combinedSections(CRLRCMacmaSections("notice", formData),formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage4", formData), formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage5", formData), formData),
                    pageBreak(),
                    pageTable(CRLRCMacmaSections("sidePage6", formData), formData),
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
                        ],
                        [
                            `Counsel for the Petitioner`
                        ]
                    ),
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
                    ...addParagraphs([`It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in «OPNO», dated «OPDATE», of «lowercourt» «INTERIM_PRAYER»  and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    ...addParagraphs([`It is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of «OPNO», dated «OPDATE»  on the file of «lowercourt» before this Hon’ble Court pending disposal of the main Crl. RC and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`]),
                ],
            },
        ],
    });
};