import { Document, PageBreak } from "docx";
import { createParagraph, paragraphStyles, templateProperties } from "../../../services/templateFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { ABSections } from "./antiBail";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { h3Center, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const AntiBailTemplate = (formData) => {

    return new Document({
        sections: [{
            properties: templateProperties,
            children: [
                ...combinedSections(ABSections("438", formData), formData),
                createParagraph("Note: Bail to the satisfaction of ______", paragraphStyles.paraText),
                pageBreak(),
                pageTable(ABSections("sidePage1", formData), formData),
                pageBreak(),
                pageTable(ABSections("sidePage2", formData), formData),
                pageBreak(),
                h3Center(formData?.highcourt || "IN THE HIGH COURT OF ________"),
                createParagraph(`Crl.P. No. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("CHRONOLOGICAL / RUNNING INDEX", paragraphStyles.centerHeading),
                ChronologicalTable(formData),
                ...LineSpace(1),
                createSignatureFooter(
                    [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
                    ["Counsel For Petitioner/Accused"]
                ),
                pageBreak(),

                createParagraph(formData?.highcourt || "__________", paragraphStyles.centerHeading),
                ...LineSpace(1),
                ...OfficeUseTable(formData),
                ...LineSpace(1),
                ...InfoTable(formData),
                ...LineSpace(1),
                ...ChallanTable(formData),
                ...LineSpace(1),
                ...LowerCourtTable(formData),
                pageBreak(),
                createParagraph("Full Cause Title:", paragraphStyles.leftunderlinedHeading),
                ...BetweenSection(formData, '...Petitioner(s)', "...Respondent(s)"),
                pageBreak(),
                createParagraph("Main Case Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
                createParagraph("IA(s) Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`${tabSpace(1)}It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "_________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
            ],
        }],
    });
};
