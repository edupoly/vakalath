import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith2NumbersBold, headerWith2NumbersBoldUnderline, headerWith2NumbersUnderline } from "../../components/templates/HeaderSection";
import { h3Center, h3Left, h3underlineBoldCenter, h3UnderlineCenter, h3UnderlineLeft, LineSpace, pageBreak, tabSpace } from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";
import { create4LineFooter, createSignatureFooter } from "../../components/templates/FooterSections";
import { createRightAlignPage } from "../../components/templates/tableFunctions";


export const compromiseNiAct138 = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  }; 

  return new Document({
    sections: [
      {
        properties: {},
        children:[
        ...headerWith2NumbersBold(["IN THE COURT OF THE HON’BLE «district»",`Crl.M.P.No.${tabSpace(4)}OF «myear»`,"IN",`Crl.A.No.${tabSpace(5)}OF «myear»`]),
        h3Center("AGAINST"),
        h3Center(`C.C.No.${tabSpace(5)}OF «myear»`),
        h3Center("On the file of the ___________________________________"),
        ...LineSpace(1),
        ...BetweenSection(fData,"..Appellant/Accused","..Respondent/Complainant"),
        h3UnderlineCenter("PETITION FILED UNDER SEC.147 OF NEGOTIABLE INSTRUMENTS ACT, 1881"),
        ...LineSpace(1),
        h3Left("May it please  your honour,"),
        ...LineSpace(1),
        ...addParagraphs([tabSpace(1)+"It is to submit that, the matter has been compromised between the Appellant/Accused and the Respondent/Complaint amicably out side the court in the presence of the friends and elders and Respondent/Complainant has received the cheque/awarded amount of Rs._______/- by way of demand draft bearing No._________, dated __________ drawn on _________ Bank ________ Branch, __________ towards  full and final settlement. The Complainant has no claim hereafter.",tabSpace(1)+"It is therefore prayed that this Hon’ble Court may be pleased to acquit the Appellant/Accused in Crl.A.No._______ by setting aside the judgment passed in CC.No.______ on the file of the _________________ in view of the compromise between the both the parties as full and final settlement amount received by the respondent/Complainant and pass such other order in the interest of justice."]),
        createSignatureFooter(["Date: «fdate»","«station»"],["Counsel for Appellant/Accused"]),
        pageBreak(),
        createRightAlignPage([
        ...headerWith2NumbersUnderline(["IN THE COURT OF THE HON’BLE «district»",`Crl.M.P.No.${tabSpace(2)}OF «myear»`,"IN",`Crl.A.No.${tabSpace(3)}OF «myear»`]),
        h3Center("AGAINST"),
        h3Center(`C.C.No.${tabSpace(3)}OF «myear»`),
        h3Center("On the file of the _____________"),
        ...LineSpace(1),
        ...BetweenSection(fData,"..Appellant/Accused","..Respondent/Complainant"),
        ...LineSpace(2),
        h3underlineBoldCenter("PETITION FILED UNDER SECTION 147 OF NEGOTIABLE INSTRUMENTS ACT"),
        ...LineSpace(2),
        ...create4LineFooter(["FILED ON: «fdate»","FILED BY:","M/s «counsel_address1»","COUNSEL FOR APPELLANT/ACCUSED"])
    ])        
    ]
      },
    ],
  });
};
