import { Table, TableCell, TableRow, WidthType } from "docx";
import { header, headerWithNumbers } from "../templates/HeaderSection";
import { createSignatureFooter } from "../templates/FooterSections";
import { h3Left, LineSpace } from "../templates/elementTypes";
import { BetweenSection } from "../templates/BetweenSection";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";
import { addParagraphs } from "../templates/paragraphFunctions";

const rightCell = (data, formData) => {
    return [
        header(data?.mainTitle),
        ...LineSpace(1),
        header(data?.subTitle),
        ...LineSpace(1),
        ...headerWithNumbers(data?.headLines),
        ...(data?.betweenSection?.pet ? [
            createParagraph(formData?.Petitioners[0]?.Name, { ...paragraphStyles.leftAlignSmall, spacing: { before: 150 }, size: 22, font: "Tahoma" }),
            ...LineSpace(1), createParagraph(data?.betweenSection?.pet, { ...paragraphStyles.rightAlignSmall, size: 22, font: "Tahoma" }), ...LineSpace(1)]
            : LineSpace(1)),

        ...(data?.headPara
            ? data.headPara.map((set) => {
                return [
                    header(set?.head),
                    ...addParagraphs(set?.para)
                ]
            }).flat()
            : LineSpace(8)),
        data?.middleHeader && header(data?.middleHeader),
        ...LineSpace(10),
        ...(data?.footer || []).flatMap((foot) => [
            ...(foot?.left || []).map((text) => h3Left(text)),
            ...LineSpace(1)
        ]),
        ...LineSpace(1),
    ]
}

export const pageTable = ({ left, right },formData) => {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: left || [],
            width: { size: 60, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: rightCell(right,formData),
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
