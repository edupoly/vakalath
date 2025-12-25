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
import { createSignatureFooter, SignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createParagraph, formatDate, paragraphStyles } from "../../../services/templateFunctions";
import { header } from "../../../components/templates/HeaderSection";
import { xobjSections } from "./xobjData";
import { xobjTable } from "./table";

export const XOBJTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(xobjSections("41-22", formData), formData),
                    xobjTable(),
                    createSignatureFooter([
                            `${formData?.place || "«place»"}`,
                            `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                        ],
                        [`Counsel For Cross Objector`]
                    ),
                    pageBreak(),
                    pageTable(xobjSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(xobjSections("affidavit", formData), formData),
                    pageBreak(),
                    ...combinedSections(xobjSections("151", formData), formData),
                    pageBreak(),
                    pageTable(xobjSections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(xobjSections("5", formData), formData),
                    pageBreak(),
                    pageTable(xobjSections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(xobjSections("sidePage4", formData), formData),
                    pageBreak(),
                    pageTable(xobjSections("sidePage5", formData), formData),
                    pageBreak(),
                    // // ...combinedSections(xobjSections("ServiceCertificate", formData), formData),
                    // // pageBreak(),
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
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
                    createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),

                    ...LineSpace(10),
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
                    createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),
                    pageBreak(),
                    h3Center("«highcourt»"),
                    ...LineSpace(1),
                    h3Center(`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`),
                    ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
                    ...LineSpace(1),
                    h3underlineBoldCenter("COURT FEE"),
                    ...LineSpace(20),
                    createSignatureFooter([`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`, "«place»"],
                        ["", "Counsel for the Petitioner"],
                    ),

                    pageBreak(),
                    pageTable(xobjSections("sidePage6", formData), formData),
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