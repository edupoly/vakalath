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
import { osaSections } from "./osaData";

export const OSATemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(osaSections("483", formData), formData),
                    pageBreak(),
                    pageTable(osaSections("sidePage1", formData), formData),
                    ...combinedSections(osaSections("affidavit", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT", underline: true }),
                    ...addParagraphs([`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at ${formData?.place || "«place»"} on this the day of ${formatDate(formData?.fdate) || "«fdate»"}`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    pageBreak(),
                    ...combinedSections(osaSections("151", formData), formData),
                    pageBreak(),
                    pageTable(osaSections("sidePage2", formData), formData),
                    pageBreak(),
                    pageTable(osaSections("sidePage3", formData), formData),
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
                    ], [
                        `Counsel for the Petitioner`
                    ]),
                    pageBreak(),
                    pageTable(osaSections("sidePage4", formData), formData),
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
                    ...addParagraphs(` It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs(` It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`)
                ],
            },
        ],
    });
};