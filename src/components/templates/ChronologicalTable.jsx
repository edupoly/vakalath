import { AlignmentType, Table, TableRow, WidthType } from "docx";
import { cell, formatDate, headerCell } from "../../services/templateFunctions";
import chronologicalTableData from "../../assets/chronologicalTableData.json";

export const ChronologicalTable = (formData) => {
  const interpolate = (template, data) => {
    if (typeof template !== "string") return template;
    try {
      return new Function(...Object.keys(data), `return \`${template}\`;`)(
        ...Object.values(data)
      );
    } catch {
      return template;
    }
  };
  console.log("qqq", formData);

  const caseData = chronologicalTableData[formData?.CaseType] || {};

  return new Table({
    rows: [
      new TableRow({
        children:
          caseData?.header?.map((header) =>
            headerCell(header, { headerbold: chronologicalTableData[formData?.CaseType]?.headerbold || false })
          ) || [],
      }),
      ...(caseData?.rows?.map(
        (item) =>
          new TableRow({
            children: Object.keys(item).map((key) =>
              cell(interpolate(item[key] || "", {...formData,formatDate}))
            ),
          })
      ) || []),
    ],
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    alignment: AlignmentType.CENTER,

  });
};
