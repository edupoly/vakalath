import { Table, TableCell, TableRow, WidthType } from "docx";
import { header, headerWithNumbers,leftHeader } from "../templates/HeaderSection";
import { createSignatureFooter } from "../templates/FooterSections";
import { h3Left, LineSpace } from "../templates/elementTypes";
import { BetweenSection } from "../templates/BetweenSection";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";
import { addParagraphs } from "../templates/paragraphFunctions";

const rightCell = (data, formData) => {
    return [
    ...(data?.mainTitle ? [header(data.mainTitle), ...LineSpace(1)] : []),
    ...(data?.subTitle ? [header(data.subTitle), ...LineSpace(1)] : []),
    ...(data?.headLines ? headerWithNumbers(data.headLines) : []),
    ...(data?.betweenSection?.pet ? [
        createParagraph(formData?.Petitioners?.[0]?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
        ...LineSpace(1),
        createParagraph(data.betweenSection.pet, { ...paragraphStyles.rightAlignSmall, size: 22, font: "Tahoma" }),
        ...LineSpace(1)
    ] : []),
    ...(data?.betweenSection?.res ? [
        createParagraph(formData?.Respondents?.[0]?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
        ...LineSpace(1),
        createParagraph(data.betweenSection.res, { ...paragraphStyles.rightAlignSmall, size: 22, font: "Tahoma" }),
        ...LineSpace(1)
    ] : []),
    ...(data?.headPara ? data.headPara.flatMap((set) => [
        ...(set?.head ? [header(set.head)] : []),
        ...(set?.para ? addParagraphs(set.para) : [])
    ]) : LineSpace(8)),
    ...(data?.middleHeader ? [header(data.middleHeader)] : []),
    ...LineSpace(10),
    ...(data?.footer ? data.footer.flatMap((foot) => [
        ...(foot?.left ? foot.left.map((text) => h3Left(text)) : []),
        ...LineSpace(1)
    ]) : []),
    ...LineSpace(1)
]
}

const leftCell = (data, formData) => {
    return new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: data?.left?.flatMap((li)=>leftHeader(li)) || [],
                        width: { size: 80, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: data?.right?.flatMap((li)=>leftHeader(li)) || [],
                        width: { size: 20, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
        ],
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { size: 1 },
            bottom: { size: 1 },
            left: { size: 1 },
            right: { size: 1 },
            insideHorizontal: { size: 1 },
            insideVertical: { size: 1 },
        },
    });
}

export const pageTable = (data, formData) => {
    return new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [leftCell(data?.left, formData)],
                        width: { size: 60, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: rightCell(data?.right, formData),
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
