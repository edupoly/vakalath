import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith1Number } from "../../components/templates/HeaderSection";
import { h3Center, h3UnderlineCenter, LineSpace, tabSpace } from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";


export const divorceCruelty = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  };

  return new Document({
    sections: [
      {
        properties: {},
        children: [
        ...headerWith1Number(["IN THE COURT OF THE  «district»",`O.P.NO.${tabSpace(3)}OF  «myear»`]),
        ...LineSpace(1),
        ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
        h3UnderlineCenter("PETITION FILED UNDER SECTION 13 (1) (1a) of HINDU MARRIAGE ACT."),
        ...LineSpace(1),
        ...addParagraphs(["I.	Description of the Petitioner:",tabSpace(1)+"The name and description of the petitioner is clearly stated in the Cause title for the purpose of all notices, processes and summons:","II.	Description of the Respondent:",tabSpace(1)+"The name and description of the respondent is clearly stated in the Cause title for the purpose of all notices, processes and summons:","III.	The above named petitioner submits as under:","1)		Petitioner submits that the petitioner got married with the Respondent on __________ at ______________.  Petitioner further submits that the marriage between both parties took place in the presence of elders of the petitioner in accordance with Hindu Marriage Rights and Customs and marriage between petitioner was an arranged marriage.","2)         Petitioner further submits that, the petitioner joined the company of the respondent at his native place and by seeing the respondent’s house the petitioner was astonished as the respondent is living in a basti. The petitioner decided to adjust in their house but the respondent started harassing the petitioner to get additional dowry after 2nd day of their marriage and thereby the respondent within 2 days of her marital life caused lot of mental agony to the petitioner and on the 4th day of her marital life the petitioner’s was suffering with severe throat problem and requested the respondent to take her to the doctor then the respondent beat her and on the next day took her to her parents house and left the petitioner and went away."])
        ],
      },
    ],
  });
};
