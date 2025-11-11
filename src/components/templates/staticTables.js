import { Table, TableCell, TableRow, WidthType } from "docx";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";
import { h3Center, h3Left, h3Right, paragraph } from "./elementTypes";

export const IndianSuccession = (lines) =>{
return [
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { size: 1 ,color:"000000"},
        bottom: { size: 1,color:"000000" },
        left: { size: 1 ,color:"000000"},
        right: { size: 1 ,color:"000000"},
        insideHorizontal: { size: 1 ,color:"000000"},
        insideVertical: { size: 1 ,color:"000000"},
      },
      rows: lines.map((line, i) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: 4, type: WidthType.PERCENTAGE }, // narrow number column
              margins: { left: 0, right: 50, top: 0, bottom: 0 },
              children: [h3Center("a)")],
            }),
            new TableCell({
              width: { size: 48, type: WidthType.PERCENTAGE },
              margins: { left: 0, right: 0, top: 0, bottom: 0 },
              children: [h3Left(line.leftText)],
            }),
         
            new TableCell({
              width: { size: 48, type: WidthType.PERCENTAGE },
              margins: { left: 0, right: 0, top: 0, bottom: 0 },
              children: [h3Left(line.rightText)],
            }),
          ],
        })
      ),
    }),
  ];
}