import { Document, PageBreak } from "docx";
import { createParagraph, paragraphStyles } from "../../../services/templateFunctions";
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable";
import { OfficeUseTable } from "../../../components/templates/officeUseTable";
import { InfoTable } from "../../../components/templates/InfoTable";
import { ChallanTable } from "../../../components/templates/ChallanTable";
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { ABSections } from "./antiBail";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";

export const AntiBailTemplate = (formData) => {

    return new Document({
        sections: [{
            properties: {},
            children: [
                ...combinedSections(ABSections("438", formData), formData),
                createParagraph("Note: Bail to the satisfaction of ______", paragraphStyles.paraText),
                pageBreak(),
                pageTable(ABSections("sidePage1", formData), formData),
                pageBreak(),
                pageTable(ABSections("sidePage2", formData), formData),
                pageBreak(),
                createParagraph(formData?.highcourt || "IN THE HIGH COURT OF ________", paragraphStyles.centerHeading),
                createParagraph(`Crl.P. No. ${formData?.crlpNo || "_________"} OF ${formData?.myear || "_________"}`, paragraphStyles.centerText),
                createParagraph("CHRONOLOGICAL / RUNNING INDEX", paragraphStyles.centerHeading),
                ChronologicalTable(formData),

                createParagraph(formData?.highcourt || "__________", paragraphStyles.centerHeading),
                ...LineSpace(1),
                ...OfficeUseTable(formData),
                ...InfoTable(formData),
                ...ChallanTable(formData),
                ...LowerCourtTable(formData),
                createParagraph("Full Cause Title:", paragraphStyles.leftunderlinedHeading),
                ...BetweenSection(formData, '...Petitioner/Accused', "...Respondent/Complainant"),
                createParagraph("Main Case Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "_________"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
                createParagraph("IA(s) Prayer:", paragraphStyles.leftunderlinedHeading),
                createParagraph(`It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "_________"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`, paragraphStyles.paraText),
            ],
        }],
    });
};
