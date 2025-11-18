import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { CPSections } from "./cpData"
import { h3Center, h3Left, h3Right, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"
import { addParagraphs } from "../../../components/templates/paragraphFunctions"


export const CPTemplate = (formData) => {

    return new Document({
        sections:[
            {
                properties:{},
                children:[
                    ...combinedSections(CPSections("page1",formData),formData),
                    h3Center(`NOTARY :: ${formData?.place || "«place»"}`),
                    pageBreak(),
                    ...combinedSections(CPSections("page2",formData),formData),
                    pageBreak(),
                    pageTable(CPSections("sidePage1",formData),formData),
                    pageBreak(),
                    ...combinedSections(CPSections("page3",formData),formData),
                    pageBreak(),
                    ...combinedSections(CPSections("page4",formData),formData),
                    ...addParagraphs([`${tabSpace(1)}This summons was taken out by Mr._______________, Advocate for applicant, and will be supported by the affidavit of Mr.____________.`]),
                    // ...LineSpace(1),
                    h3Right("ADVOCATE FOR THE APPLICANT"),
                    pageBreak(),
                    pageTable(CPSections("sidePage2",formData),formData),
                    pageBreak(),
                    pageTable(CPSections("sidePage3",formData),formData)
                ]
            }
        ]
    })
}