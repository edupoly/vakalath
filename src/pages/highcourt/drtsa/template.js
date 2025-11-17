import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { DRTSASections } from "./drtsaData"
import { h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, LineSpace, pageBreak } from "../../../components/templates/elementTypes"
import { createSignatureFooter } from "../../../components/templates/FooterSections"
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable"


export const DRTSATemplate = (formData) => {

    return new Document({
        sections :[
            {
                properties:{},
                children: [
                    ...combinedSections(DRTSASections("page1",formData),formData),
                    ...LineSpace(1),
                    h3Center("MATERIAL PAPER INDEX"),

                    // createSignatureFooter(["PLACE : HYDERABAD",`DATE : ${formData?.fdate || "«fdate»"}`],["COUNSEL FOR APPLICANT"]),
                    pageBreak(),
                    ...combinedSections(DRTSASections("page2",formData),formData),
                    pageBreak(),
                    ...combinedSections(DRTSASections("page3",formData),formData),
                    ...LineSpace(4),
                    h3Center(`Filed on   .…${formData?.fdate || "«fdate»"}`),
                    h3Center(`Filed by :  COUNSEL FOR APPLICANTS`),
                    ...LineSpace(3),
                    h3Center("___________________________________________________"),
                    ...LineSpace(1),
                    h3BoldCenter(`${formData?.counsel_address || "«counsel_address»"}`),
                    pageBreak(),
                    h3underlineBoldCenter("MEMORANDUM OF APPLICATION U/s. 17 OF SECURITISATION ACT, 2002"),
                    h3underlineBoldCenter("For use in Tribunal Office"),
                    h3Left("Date of Filing:…………………….."),
                    h3Left("Date of Receipt by Post:…………….."),
                    h3Left("Registration Number:"),
                    h3Right("Signature of the Registrar"),
                    ...combinedSections(DRTSASections("page4",formData),formData),
                    pageBreak(),
                    ...combinedSections(DRTSASections("page1",formData),formData),
                    h3underlineBoldCenter("RUNNING INDEX"),
                    ChronologicalTable(formData),
                    ...LineSpace(2),
                    // createSignatureFooter(["Hyderabad",`Date  : ${formData?.fdate || "«fdate»"}`],["COUNSEL FOR APPLICANTS"]),
                    pageBreak(),
                    ...combinedSections(DRTSASections("page6",formData),formData),
                    ...LineSpace(3),
                    h3Center(`FILED ON :  ${formData?.fdate || "«fdate»"}`),
                    ...LineSpace(2),
                    h3Center("FILED BY  :"),
                    h3Center(`M/s ${formData?.counsel_address || "«counsel_address»"}`),
                    ...LineSpace(1),
                    h3Center("Counsels for the Applicant"),
                ]
            }
        ]
    })
}