import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith2NumbersUnderline } from "../../components/templates/HeaderSection";
import { h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";
import { create4LineFooter, createSignatureFooter } from "../../components/templates/FooterSections";
import { createRightAlignPage } from "../../components/templates/tableFunctions";

export const counterdvc = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  }; 

  return new Document({
    sections: [
      {
        properties: {},
        children:[
        ...headerWith2NumbersUnderline(["IN THE COURT OF THE  «district»",`Crl.M.P.No.${tabSpace(3)}of   «myear»`,"IN",`D.V.C. No.${tabSpace(4)}of   «myear»`]),
        ...BetweenSection(fData,"…. Petitioner/Respondent","…Respondent/Petitioner"),
        h3UnderlineCenter("COUNTER AFFIDAVIT FILED BY THE RESPONDENT"),
        ...LineSpace(1),
        h3Center("I, «interim_prayer», do hereby solemnly affirm and state on oath as"),
        h3Left("under:-"),
        ...LineSpace(1),
        ...addParagraphs(["1.	That I am the deponent herein and respondent in the above case as such well acquainted with the facts of the case.","2.	I submit that the petitioner No.1 filed the above petition for maintenance to her who is his wife and the petitioner No.2 and 3 for Rs.________/- each who are the daughter and son. I submit that, the petitioner No.1 filed main D.V.C.along  with the several applications against me including present petition which is niehter maintainable in law nor on facts of the case.","3.	I submit that, this Hon’ble court on _______ passed exparate interim maintenance to petitioner No.1 Rs._______/- and petitioners No.2 and 3 each Rs._______/- total sum of Rs._______/- per month and it should be paid on or before every 5th of the month. I submit that, petitioner No.1 filed the above petition though she is working as _______ at ___________ and she suppressed the same and mentioned in the petition that she is a housewife. I  submit that, I got attendance register of the petitioner No.1 showing that she is attending her job and also I am having salary register showing that she is drawing monthly salary.  Though she is drawing Rs._______/- Per month, the salary register shows that she is drawing Rs.____/- per month. I am herewith enclosing the Photostat copies of the attendance register and also the salary records of the petitioner no.1 for the kind perusal of this Hon’ble court."]),
        // pageBreak(),
        ...addParagraphs(["4.	I submit that, after marriage, my wife continued her studies and completed her B.A. Degree and also M.A. Thereafter she joined as a ______________ and even now she is working.","5.	I submit that, the petitioner No.2 is studying only upper primary school and the petitioner no.3 is still in L.K.G, and the maintenance granted by this Hon’ble court is abnormal.","6.	I submit that, in view of the facts mentioned above, I request the Hon’ble court to set aside the exparte order passed by this Hon’ble court on ______, by granting maintenance to the petitioner No.1, Rs.___/- and Rs. _____/- to each of the petitioners no.2 and 3.","7.	I submit that, facts mentioned by me above are true and correct to the best of my kinwledge and belief.",tabSpace(1)+"I therefore, pray that this Hon’ble court may please to set aside the exparte orders passed on _________ in M.P.No._____ interim maintenance to the petitioners, in the interest of Justice."]),
        createSignatureFooter(["Sworn and singed before me on","this the «fdate»","at «station»."],["Deponent","Advocate :: «station»"]),
        pageBreak(),
        createRightAlignPage([
        ...headerWith2NumbersUnderline(["IN THE COURT OF THE  «district»",`Crl.M.P.No.${tabSpace(3)}of   «myear»`,"IN",`D.V.C. No.${tabSpace(3)}of   «myear»`]),
        ...LineSpace(1),
        ...BetweenSection(fData,"…. Petitioner/Respondent","…Respondent/Petitioner"),
        ...LineSpace(3),
        h3underlineBoldCenter("COUNTER AFFIDAVIT FILED BY THE RESPONDENT"),
        ...LineSpace(3),
        ...create4LineFooter(["FILED ON: «fdate»","FILED BY:","M/s «counsel_address1»","COUNSEL FOR PETITIONER/RESPONDENT"])
        ]),
        pageBreak(),
        ...headerWith2NumbersUnderline(["IN THE COURT OF THE  «district»",`Crl.M.P.No.${tabSpace(3)}of   «myear»`,"IN",`D.V.C. No.${tabSpace(4)}of   «myear»`]),
         ...BetweenSection(fData,"…. Petitioner/Respondent","…Respondent/Petitioner"),
         h3UnderlineCenter("PETITION FILED U/Sec.                      of PROTECTION OF WOMEN FROM  DOMESTIC VIOLENCE ACT 2005 R/w"),
         ...LineSpace(1),
         ...addParagraphs([tabSpace(1)+"For the reasons stated in the accompanying counter affidavit, it is therefore prayed that this Hon’ble court to set aside the exparte orders passed on _________ in M.P.No._____ interim maintenance to the petitioners and pass such other order or orders as this Hon’ble court deems fit and proper in the circumstances of the case and in the interest of Justice."]),
         h3Left("Date: «fdate»"),
         h3Left("«station»"),
         h3Right("Counsel for Petitioner/Respondent"),
         pageBreak(),
          createRightAlignPage([
        ...headerWith2NumbersUnderline(["IN THE COURT OF THE  «district»",`Crl.M.P.No.${tabSpace(3)}of   «myear»`,"IN",`D.V.C. No.${tabSpace(3)}of   «myear»`]),
        ...LineSpace(1),
        ...BetweenSection(fData,"…. Petitioner/Respondent","…Respondent/Petitioner"),
        ...LineSpace(3),
        h3underlineBoldCenter("PETITION FILED U/Sec.of PROTECTION OF WOMEN FROM  DOMESTIC VIOLENCE ACT 2005 R/w"),
        ...LineSpace(3),
        ...create4LineFooter(["FILED ON: «fdate»","FILED BY:","M/s «counsel_address1»","COUNSEL FOR PETITIONER/RESPONDENT"])
        ]),
    ]
      },
    ],
  });
};
