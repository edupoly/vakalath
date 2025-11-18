import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { header } from "../../../components/templates/HeaderSection";
import { ceaSections } from "./ceaData";

export const CEATemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(ceaSections("35G", formData), formData),
                    pageBreak(),
                    pageTable(ceaSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(ceaSections("affidavit", formData), formData),
                    pageBreak(),
                    ...combinedSections(ceaSections("151", formData), formData),
                    pageBreak(),
                    pageTable(ceaSections("sidePage2", formData), formData),
                    pageBreak(),
                    pageTable(ceaSections("sidePage3", formData), formData),
                    pageBreak(),
                    ...combinedSections(ceaSections("notice", formData), formData),
                    pageBreak(),
                    ...combinedSections(ceaSections("ServiceCertificate", formData), formData),
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
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
                    createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),

                    ...LineSpace(10),
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left(`${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`),
                    createSignatureFooter([`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                        ["Counsel for the Petitioner(s)."],
                    ),

                    pageBreak(),
                    h3BoldCenter(formData?.highcourt || "__________"),
                    h3BoldCenter("Basic Information"),
                    ...OfficeUseTable(formData),
                    ...InfoTable(formData),
                    ...ChallanTable(formData),
                    ...LowerCourtTable(formData),
                    h3UnderlineBoldLeft("Full Cause Title:"),
                    ...BetweenSection(formData, "..Petitioner(s)", "..Respondent(s)"),
                    h3UnderlineBoldLeft("Main Case Prayer:"),
                    ...addParagraphs([`  It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([` It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                ],
            },
        ],
    });
};