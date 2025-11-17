import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { DELAYREPSections } from "./delayrepData"
import { pageBreak } from "../../../components/templates/elementTypes"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"


export const DELAYREPTemplate = (formData)=>{

    return new Document({
        sections:[
            {
                properties:{},
                children:[
                    ...combinedSections(DELAYREPSections("151(1)",formData),formData),
                    pageBreak(),
                    pageTable(DELAYREPSections("151(2)",formData),formData)
                ]
            }
        ]
    })
}