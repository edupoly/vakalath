import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { pageTable } from "../../../components/highcourt/rightSideCommonSections";
import { h3BoldCenter, h3Center, h3underlineBoldCenter, h3UnderlineBoldLeft, LineSpace, pageBreak } from "../../../components/templates/elementTypes";
import { memohcSections } from "./memohcData";

export const MemoHCTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(memohcSections("memohc", formData), formData),
                    pageBreak(),
                    pageTable(memohcSections("sidePage", formData), formData),
                ],
            },
        ],
    });
};