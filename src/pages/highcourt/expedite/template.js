import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { EXPEDITESections } from "./expediteData"
import { h3Center, h3Left, h3Right, h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes"
import { addParagraphs } from "../../../components/templates/paragraphFunctions"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"


export const EXPEDITETemplate = (formData) => {
    
    return new Document({
        sections:[
            {
                properties:{},
                children:[
                    ...combinedSections(EXPEDITESections("page1",formData),formData),
                    h3Center("BEFORE ME"),
                    ...LineSpace(1),
                    h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
                    ...LineSpace(1),
                    h3underlineBoldCenter("VERIFICATION STATEMENT"),
                    ...addParagraphs([`${tabSpace(1)}I, ${formData?.verification || "«verification»"}, being the petitioner/ person acquainted with the facts, do hereby verify that the above contents of the paras are true to best of my knowledge and belief. Hence verified.`]),
                    ...LineSpace(1),
                    h3Left(`Verified at ${formData?.place || "«place»"} on this`),
                    h3Left(`the day of ${formData?.fdate || "«fdate»"}`),
                    h3Right("Deponent"),
                    // pageBreak(),
                    ...combinedSections(EXPEDITESections("151(1)",formData),formData),
                    pageBreak(),
                    pageTable(EXPEDITESections("sidePage1",formData),formData),
                    pageBreak(),
                    pageTable(EXPEDITESections("sidePage2",formData),formData)
                ]
            }
        ]
    })
}