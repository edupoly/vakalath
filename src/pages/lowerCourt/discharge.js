import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import {
  headerWith1NumberUnderline,
  headerWith2NumbersUnderline,
} from "../../components/templates/HeaderSection";
import {
  h3Left,
  h3UnderlineCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";
import { create4LineFooter, createSignatureFooter } from "../../components/templates/FooterSections";
import { createRightAlignPage } from "../../components/templates/tableFunctions";

export const discharge = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  };

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...headerWith2NumbersUnderline([
            "IN THE COURT OF THE  «district»",
            `Crl.M.P.No.${tabSpace(3)}of   «myear»`,
            "IN",
            `C.C. No.${tabSpace(4)}of   «myear»`,
          ]),
          ...BetweenSection(
            fData,
            "…. Petitioner/Accused",
            "…Respondents/Complainant"
          ),
          ...LineSpace(1),
          h3UnderlineCenter("PETITION FILED FOR DISCHARGE OF ACCUSED."),
          ...LineSpace(1),
          h3Left(tabSpace(1) + "Petitioner humbly submits as follows:"),
          ...LineSpace(1),
          ...addParagraphs([
            "1.	Petitioner/Accused submits that the above-mentioned matter is instituted for offence U/s. 138 of Negotiable Instrument Act., against the petitioner/accused.",
            "2.	Petitioner submits that the above is posted for questioning the accused about the substance of offence on _________. Petitioner further submits that there is no prima facie case against the accused made out the complainant in his complaint and as such the complaint is liable to be dismissed.",
            "3.	Petitioner submits that the complainant failed to fulfill all the statutory requirements as envisaged U/s.142 of Negotiable Instrument Act.   Before filing this complaint and as such complaint is not maintainable.",
            "4.	Petitioner submits that the averments in the complaint did not make out that the complainant is financially competent to lend such huge financial amounts to the petitioner/accused and as such the complainant failed to discharge the initial burden that the complainant lend such huge amounts to the accused as alleged by the complainant.",
            "5.	Petitioner submits that the complainant did not satisfy the ingredients U/s.138-B as there is no constructive service of notice to the accused since the accused company and the accused shifted from the addresses mentioned on the cover which fact was also known to the complainant.",
            "6.	Petitioner submits that there are sufficient funds in the account of the accused account and the cheques in question are not issued by the accused in discharge of any debt or liability and in fact these cheques along with some other cheques were taken away by the complainant without the knowledge of accused for the purpose of filing false cases and as such accused issued stop payment letter to the banker.",
            "7.	Petitioner submits that since the complainant failed to fulfill all necessary ingredients to prosecute the accused U/s138 of Negotiable Instrument Act., and continuing the proceedings against the accused is nothing but abuse of process of law.",
          ]),
          h3Left(
            tabSpace(1) +
              "Petitioner therefore prays that this Hon’ble Court may be pleased to discharge the Accused for offences U/s.138 of Negotiable Instrument Act and dismiss the complaint, in the interest of Justice."
          ),
          ...LineSpace(1),
          createSignatureFooter(
            ["Date: «fdate»", "«station»"],
            ["", "Counsel for Petitioner/Accused."]
          ),
          pageBreak(),
          createRightAlignPage([
            ...headerWith2NumbersUnderline([
              "IN THE COURT OF THE «district»",
              `Crl.MP.No.${tabSpace(3)}OF «myear»`,
              "IN",
              `C.C.No.${tabSpace(3)}OF «myear»`,
            ]),
            ...LineSpace(1),
            ...BetweenSection(
              fData,
              "…. Petitioner/Accused",
              "…Respondents/Complainant"
            ),
            ...LineSpace(3),
            h3UnderlineCenter("PETITION FILED FOR DISCHARGE OF ACCUSED."),
            ...LineSpace(3),
            ...create4LineFooter(["FILED ON: «fdate»","FILED BY:","M/s «counsel_address1»","COUNSEL FOR PETITIONER/ACCUSED"])
          ]),
        ],
      },
    ],
  });
};
