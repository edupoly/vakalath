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
import { petrespSections } from "./petrespData";

export const PetrespTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(petrespSections("affidavit", formData), formData),
                    pageBreak(),
                    ...combinedSections(petrespSections("151", formData), formData),
                    pageBreak(),
                    pageTable(petrespSections("sidePage1", formData), formData),
                    pageBreak(),
                    pageTable(petrespSections("sidePage2", formData), formData),
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