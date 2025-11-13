import { Table, TableRow, WidthType } from "docx";
import { cell, headerCell } from "../../services/templateFunctions";
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
            headerCell(header, { headerbold: true })
          ) || [],
      }),
      ...(caseData?.rows?.map(
        (item) =>
          new TableRow({
            children: Object.keys(item).map((key) =>
              cell(interpolate(item[key] || "", formData))
            ),
          })
      ) || []),
    ],
    width: {
      size: 8500,
      type: WidthType.DXA,
    },
  });
};
