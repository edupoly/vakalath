import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { DISPENSESections } from "./dispenseData"
import { pageBreak } from "../../../components/templates/elementTypes"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"


export const DISPENSETemplate = (formData) => {
    return new Document({
        sections:[
            {
                properties:{},
                children:[
                    ...combinedSections(DISPENSESections("482(1)",formData),formData),
                    pageBreak(),
                    pageTable(DISPENSESections("482(2)",formData),formData),
                    pageBreak(),
                    pageTable(DISPENSESections("482(3)",formData),formData)
                ]
            }
        ]
    })
}