import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createParagraph, formatDate, paragraphStyles } from "../../../services/templateFunctions";
import { header } from "../../../components/templates/HeaderSection";
import { quashSections } from "./quashData";

export const QuashTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(quashSections("482", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(quashSections("482-IA", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(quashSections("482-dispense", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage4", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage5", formData), formData),
                    pageBreak(),
                    pageTable(quashSections("sidePage6", formData), formData),
                    pageBreak(),
                    // headerWith1NumberBold([
                    //     `IN THE COURT OF THE «district»`,
                    //     `O.S.No. OF${tabSpace(3)}«myear»`
                    // ]),
                    h3Center("CHRONOLOGICAL / RUNNING INDEX "),
                    ChronologicalTable(formData),
                    createSignatureFooter([
                        `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
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
                    ...addParagraphs([`It is therefore prayed that this Hon'ble Court may be pleased to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, against the Petitioner/Accused and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([`It is just and necessary that this Hon'ble Court may be pleased to grant stay of all further proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} including the appearance of the Accused till the disposal of the Main Quash Petition in the interest of the justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    ...addParagraphs([`It is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}  on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case. `]),
                ],
            },
        ],
    });
};