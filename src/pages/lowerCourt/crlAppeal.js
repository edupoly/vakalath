import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith1Number } from "../../components/templates/HeaderSection";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";

export const crlAppeal = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  }; 

  return new Document({
    sections: [
      {
        properties: {},
        children:[
        ...headerWith1Number(["IN THE COURT OF THE «district»",`Crl.Appeal No.${tabSpace(4)}OF «myear»`]),
        ...BetweenSection(fData,"...Appellants","...Respondent"),
        h3underlineBoldCenter("CRIMINAL APPEAL FILED UNDER SECTION 374 OF Cr.P.C."),
        ...LineSpace(1),
        ...addParagraphs([tabSpace(1)+"Aggrieved by the order Dtd._______ convicted and sentenced the Appellant No.___ under Section 148 of IPC to undergo simple imprisonment for a period of six months and further the Appellant No._____ are sentenced under Sec.147 of IPC to under go simple imprisonment for a period of three months and further appellants are sentenced for the offences under Section 324 R/w.149 of IPC to undergo six months simple imprisonment and to pay fine Rs._____ each passed by :"]),
        h3underlineBoldCenter("ADDL. JUDICIAL FIRST CLASS MAGISTRATE :"),
        ...LineSpace(1),
        ...BetweenSection(fData,"...Complainant","...Accused"),
        ...LineSpace(1),
        h3Center("Upon which this Memorandum of Appeal is filed on the following "),
        ...LineSpace(1),
        h3Left("among other :"),
        pageBreak(),
        h3underlineBoldCenter("GROUNDS"),
        ...LineSpace(1),
        ...addParagraphs(["1.  The order under appeal is bad in law and fit to be set a side.","2. The lower court came into erroneous conclusion without appreciating evidence on record and convicted and sentenced the appellants under section 147, 148, 324 R/w.179 of IPC.","3. The lower court ought to have seen that the","4. The lower court ought to have seen that the","5. The lower court ought to have seen that the"]),
        h3Left(tabSpace(1)+"The other grounds will be urged at the time of hearing."),
        ...LineSpace(1),
       ...addParagraphs([tabSpace(1)+"Therefore it is prayed that this Hon’ble Court may be pleased to allow the appeal by setting aside the order passed by the Judicial First Class Magistrate, ______ in CC.No.____ of «myear», Dtd._________ in the interest of justice and equity."]),
        h3Left("Date: «fdate»"),
        h3Left("Place:«station»"),
        h3Right("Counsel for the Appellants"),
        
    ]
      },
    ],
  });
};
