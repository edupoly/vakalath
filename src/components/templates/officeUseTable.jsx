import { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, Columns, } from "docx";
import { cell, headerCell } from "../../services/templateFunctions";
import officeUseTableData from "../../assets/officeUseTableData.json"

export const OfficeUseTable = (formData) => {
    return [
        new Table({
            width: { size: 75, type: WidthType.PERCENTAGE },
            alignment: AlignmentType.CENTER,
            rows: [
                new TableRow({
                    children: [
                        headerCell("FOR OFFICE USE ONLY", { colSpan: 3 }),
                    ],
                }),
                new TableRow({
                    children: [
                        headerCell(""),
                        headerCell("No."),
                        headerCell("Year"),
                    ],
                }),
                new TableRow({
                    children: [
                        headerCell("Filing No. (Unregistered)"),
                        console.log(officeUseTableData[formData?.CaseType], formData?.CaseType),

                        headerCell(officeUseTableData[formData?.CaseType], { alignment: AlignmentType.LEFT }),
                        headerCell(formData?.myear || "«myear»"),
                    ],
                }),
                new TableRow({
                    children: [
                        headerCell("Main No. (Registered)"),
                        headerCell(officeUseTableData[formData?.CaseType], { alignment: AlignmentType.LEFT }),
                        headerCell(formData?.myear || "«myear»"),
                    ],
                }),
            ],
        }),
    ];
};
