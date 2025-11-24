import { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, Columns, } from "docx";
import { cell, createParagraph, headerCell, paragraphStyles } from "../../services/templateFunctions";
import { h3BoldCenter } from "./elementTypes";

export const LowerCourtTable = (formData) => {
    return [
        h3BoldCenter("III. Lower Court Details: (for Civil and Criminal Cases Only)"),
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            alignment: AlignmentType.CENTER,
            rows: [
                new TableRow({
                    children: [
                        cell("Case Type"),
                        cell("Case No."),
                        cell("Case Year"),
                        cell("Order Date"),
                        cell("Name of the Lower Court / any other"),
                    ],
                }),
                new TableRow({
                    children: [
                        cell(formData?.OPNO || "«OPNO»", { alignment: AlignmentType.CENTER,colSpan:3 }),
                        cell(formData?.OPDATE || "«OPDATE»", { alignment: AlignmentType.CENTER }),
                        cell(formData?.lowercourt || "«lowercourt»", { alignment: AlignmentType.CENTER }),
                    ],
                }),

            ],
        }),
    ];
};
