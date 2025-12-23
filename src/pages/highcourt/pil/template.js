import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3BoldLeft, h3BoldRight, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
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
import { pilSections } from "./pilData";
import { pilTable } from "./pilTable";
import { pilCheckList } from "./pilCheckList";

export const PILTemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(pilSections("affidavit", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT", underline: true }),
                    ...addParagraphs([`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(pilSections("affidavit_rule5", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT", underline: true }),
                    ...addParagraphs([`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(pilSections("declaration_rule6", formData), formData),
                    pageBreak(),
                    ...combinedSections(pilSections("affidavit_rule7A", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT", underline: true }),
                    ...addParagraphs([`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(pilSections("declaration_rule8", formData), formData),
                    pageBreak(),
                    ...combinedSections(pilSections("affidavit_rule10", formData), formData),
                    header({ text: "BEFORE ME" }),
                    header({ text: "VERIFICATION STATEMENT", underline: true }),
                    ...addParagraphs([`I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner / person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(pilSections("rule5_ab", formData), formData),
                    h3underlineBoldCenter("Personal Details of the Petitioner"),
                    pilTable(formData),
                    h3BoldRight("Petitioner Signature"),
                    pageBreak(),
                    ...combinedSections(pilSections("226", formData), formData),
                    pageBreak(),
                    pageTable(pilSections("sidePage1", formData), formData),
                    pageBreak(),
                    ...combinedSections(pilSections("151", formData), formData),
                    pageBreak(),
                    pageTable(pilSections("sidePage2", formData), formData),
                    pageBreak(),
                    pageTable(pilSections("sidePage3", formData), formData),
                    pageBreak(),
                    pageTable(pilSections("sidePage4", formData), formData),
                    pageBreak(),
                    ...pilCheckList(formData),
                    pageBreak(),
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left("«RESPONDENT_ADDRESS»"),
                    createSignatureFooter(["«place»", "DATE: «fdate»"],
                        ["Counsel for the Petitioner(s)."]
                    ),
                    ...LineSpace(5),
                    h3underlineBoldCenter("BATTA FORM"),
                    h3Left("«RESPONDENT_ADDRESS»"),
                    createSignatureFooter(["«place»", "DATE: «fdate»"],
                        ["Counsel for the Petitioner(s)."]
                    ),
                    pageBreak(),
                    h3UnderlineBoldLeft("RESPONDENTS ADDRESSES"),
                    h3Center(formData?.Respondents[0]?.Address || "«RESPONDENT_ADDRESS»"),
                    pageBreak(),
                    ...combinedSections(pilSections("service_certificate", formData), formData),
                    pageBreak(),
                    ...combinedSections(pilSections("ia_notice", formData), formData),
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
                    ], [
                        `Counsel for the Petitioner`
                    ]),
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
                    ...addParagraphs([` It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in «OPNO», dated «OPDATE», of «lowercourt»  and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    ...addParagraphs([`It is also just and necessary that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    ...addParagraphs([`It is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of «OPNO», dated «OPDATE»  on the file of «lowercourt» before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case. `]),
                ],
            },
        ],
    });
};