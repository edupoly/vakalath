import { Table, TableCell, TableRow, WidthType } from "docx";
import { header, headerWithNumbers } from "../templates/HeaderSection";
import { createSignatureFooter } from "../templates/FooterSections";
import { h3Left, LineSpace } from "../templates/elementTypes";
import { BetweenSection } from "../templates/BetweenSection";

const rightCell = (data) => {
    return [
        ...headerWithNumbers(data?.headLines),
        // data?.betweenSection ? [...BetweenSection(
        //     "formData",
        //     data?.betweenSection?.pet,
        //     data?.betweenSection?.res
        // )]
        ...LineSpace(10),
        header(data?.middleHeader),
        ...LineSpace(10),
        ...data?.footer.map((foot) => {
            return foot?.left?.map((text) => h3Left(text))
        }).flat()
    ]
}

export const pageTable = ({ left, right }) => {
    return new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: left || [],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: rightCell(right),
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { size: 0 },
            bottom: { size: 0 },
            left: { size: 0 },
            right: { size: 0 },
            insideHorizontal: { size: 0 },
            insideVertical: { size: 0 },
        },
    });
};
