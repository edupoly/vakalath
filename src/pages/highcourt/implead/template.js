import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { IMPLEADSections } from "./impleadData"
import { h3Center, h3Right, h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes"
import { addParagraphs } from "../../../components/templates/paragraphFunctions"
import { createSignatureFooter } from "../../../components/templates/FooterSections"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"


export const IMPLEADTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(IMPLEADSections("page1", formData), formData),
                    h3Center("BEFORE ME"),
                    ...LineSpace(1),
                    h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
                    ...LineSpace(2),
                    h3underlineBoldCenter("VERIFICATION STATEMENT"),
                    ...LineSpace(1),
                    ...addParagraphs([
                        `${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}.`
                    ]),
                    h3Right("Deponent"),
                    pageBreak(),
                    ...combinedSections(IMPLEADSections("page2",formData),formData),
                    h3Right("Petitioner in WP.No.______/ Respondent"),
                    ...LineSpace(1),
                    ...addParagraphs([`${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} pass orders impleading  Mr.______________ as Respondent No.__ in WP.No.__________ and WPMP.No.______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`]),
                    createSignatureFooter([`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],[`Counsel for the Petitioner`]),
                    pageBreak(),
                    pageTable(IMPLEADSections("sidePage1",formData),formData),
                    pageBreak(),
                    ...combinedSections(IMPLEADSections("page3",formData),formData),
                    pageBreak(),
                    pageTable(IMPLEADSections("sidePage2",formData),formData),
                    pageBreak(),
                    pageTable(IMPLEADSections("sidePage3",formData),formData),
                    pageBreak(),
                    pageTable(IMPLEADSections("sidePage4",formData),formData)
                ]
            }
        ]
    })
}