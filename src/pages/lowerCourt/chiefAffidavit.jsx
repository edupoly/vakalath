import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith1NumberBold } from "../../components/templates/HeaderSection";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { h3BoldCenter, h3underlineBoldCenter, paragraph } from "../../components/templates/elementTypes";
import { addParagraphs, centeredPara, HeaderParagraph } from "../../components/templates/paragraphFunctions";
import { TableWithBorder } from "../../components/templates/tableFunctions";
import { listWith4Columns } from "../../components/templates/ListSection";
import { IndianSuccession } from "../../components/templates/staticTables";

export const ChiefAffidavitTemplate = (formData) => {
   const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  };


  return new Document({
    sections: [
      {
        properties: {},
        children: [
        
      ],  
    },

    ],
  });
};
