import { Table, TableRow, TableCell, Paragraph, WidthType } from "docx";

export const xobjTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [
    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The Lower Court granted land compensation for the land acquired per acre is at")] }),
        new TableCell({ children: [new Paragraph("Rs.")] })
      ]
    }),

    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The extent of land of the Cross Objector acquired is")] }),
        new TableCell({ children: [new Paragraph("Ac.")] })
      ]
    }),

    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The claim made by the Cross Objector per acre is at")] }),
        new TableCell({ children: [new Paragraph("Rs.")] })
      ]
    }),

    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The further enhancement of land compensation that is claiming by the Cross Objector to the extent of their extent at Ac. _________ which comes to")] }),
        new TableCell({ children: [new Paragraph("Rs.")] })
      ]
    }),

    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The difference of land compensation claiming by the Cross Objector is")] }),
        new TableCell({ children: [new Paragraph("Rs.")] })
      ]
    }),

    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph("The Court fee paid thereon as per Sec. _____ of the A.P.Court Fee and Suits Valuation Act is")] }),
        new TableCell({ children: [new Paragraph("Rs.")] })
      ]
    }),
  ]
});
