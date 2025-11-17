import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { EXTENSIONSections } from "./extensionData"
import { pageBreak } from "../../../components/templates/elementTypes"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"


export const EXTENSIONTemplate = (formData) => {

    return new Document({
        sections:[
            {
                properties:{},
                children:[
                    ...combinedSections(EXTENSIONSections("482(1)",formData),formData),
                    pageBreak(),
                    pageTable(EXTENSIONSections("sidePage1",formData),formData),
                    pageBreak(),
                    pageTable(EXTENSIONSections("sidePage2",formData),formData)
                ]
            }
        ]
    })
}