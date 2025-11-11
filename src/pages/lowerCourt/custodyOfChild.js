import {
  Document,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { headerWith1Number, headerWith2Numbers } from "../../components/templates/HeaderSection";
import { h3BoldCenter, h3Center, h3Left, h3Right, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../components/templates/elementTypes";
import { BetweenSection } from "../../components/templates/BetweenSection";
import { addParagraphs } from "../../components/templates/paragraphFunctions";
import { create4LineFooter, createSignatureFooter } from "../../components/templates/FooterSections";
import { createRightAlignPage } from "../../components/templates/tableFunctions";


export const custodyOfChild = (formData) => {
  const fData = {
    Petitioners: formData?.Petitioners || [{ Name: "«petitioner_address»" }],
    Respondents: formData?.Respondents || [{ Name: "«respondent_address»" }],
  }; 

  return new Document({
    sections: [
      {
        properties: {},
        children:[
        ...headerWith1Number(["IN THE COURT OF «district»",`O.P No.${tabSpace(3)}Of «myear»`]),
        ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
        h3UnderlineCenter("PLAINT FILED U/s. 25 OF GUARDIANSHIP & WARDS ACTR/w.6 OF HINDU MINIORITY & GUARDIANSHIP ACT."),
        ...LineSpace(1),
        ...addParagraphs(["I. 	Description of the Petitioner:","The address for service of summons, notices and processes of the above named petitioner is that of the same as mentioned in the Cause Title.","II.	Description of the Respondent:","The address for service of summons, notices and processes of the above named respondent is that of the same as mentioned in the Cause Title.","III.	Petitioner above named humbly submits as follows:","a)	Petitioner submits that the petitioner got married with the respondent on _______ at _____________","b)	Petitioner submits that since the respondent and the petitioner are employees as such their marriage is one of convenience and there is no exchange of any amount,, articles, jewellery between both the parties in connection of their marriage  except  some customary gifts of clothes and gold rings and the  marriage expenses are shared by both the parties though initially the expenditure is incurred by the petitioner but the same was reimbursed by the respondent.","c)	Petitioner submits that after the marriage the respondent joined the petitioner in the joint family of petitioner for matrimonial life and their marriage was duly consummated.","d)	Petitioner submits that the petitioner lived with the respondent happily but after some time the respondent at the instigation of her relatives started pestering the petitioner to stay separately and since the petitioner did not concerto her demand the respondent left the company of the petitioner in the month of ___________ and stayed at her ________ house at _______________.","e)	Petitioner submits that after some time there was a mediation held at the house of the petitioner and at the instance of the parents of the petitioner and on the demand of the respondent, petitioner started living with the respondent separately at ___________ and petitioner further submits that in the month of __________ respondent concede and the petitioner has taken all care by providing her good medical care and petitioner also looked after the respondent with love and affection.","f)	Petitioner submits that the respondent somehow is not happy for the reasons best known to her and used to pick up quarrels with the petitioner for silly and petty causes and the respondent also insisted the petitioner to totally abandon petitioner’s parents and seek share in the ancestral property of the petitioner but the petitioner did not yield to the demands of the respondent."]),
        ...addParagraphs(["g)	Petitioner submits that the respondent left with the house of the petitioner on _________  by taking along with ____ tolas of gold and Rs.___________ cash without intimating the petitioner  and the petitioner contacted the respondent  and to come back but the respondent did not show any interest as such the petitioner issued a legal notice to the respondent on _______ which was received by the respondent.","h)	Petitioner submits that after receiving the legal notice respondent’s family members arranged a meeting to resolve the issue and wherein it was agreed by both the parties live happily and as such respondent joined the petitioner in the month of __________ and after the respondent joined the petitioner the petitioner enquired about the cash which was taken away by the respondent immediately the respondent got provoke and abused the petitioner in filthy language and left the house of the petitioner and lodged a complaint against the petitioner U/s.498-A IPC., before WPS., __________ and the same was charge sheeted which is pending before  the Hon’ble _____________, vide CC.No._____________.","i)	Petitioner submits that the respondent gave birth to a male child on _____________  and there was no intimation to the petitioner and petitioner is very much longing to see his first child and in fact he conveyed message both personally and mediators that he is ready to take back the respondent and the child even by loosing the amounts taken by the respondent belonging to the petitioner.","j)	Petitioner submits that the petitioner made all efforts to have glimpse of the child that the petitioner is denied to see his child by the respondent and her family members.  Petitioner further submits that the petitioner is having all rights to see his child and show his love and affection towards the child and the respondent have no right to deny the access of the child for the petitioner.","k)	Petitioner submits that the petitioner is the natural guardian and petitioner is in a position to engage people for proper welfare of the child and petitioner undertakes that the petitioner will make all efforts  for the proper upbringing of the child and the petitioner’s paramount consideration is the welfare of the child.","IV.	Petitioner submits that the Cause of action for filing this application arose in the month of __________ and which month the respondent gave birth of a male child belonging to the petitioner."]),
        ...addParagraphs(["V.	Petitioner submits that the respondent is presently residing at _____________ which falls within the territorial jurisdiction of this Hon’ble Court and as such this Hon’ble Court is vested with powers to try the petition.","VI.	A Fixed Court Fee of Rs. _____ is paid under A.P.C.F.,& Suits and Valuation Act.,"]),
        h3Left(`${tabSpace(1)}`+"Petitioner therefore prays that this Hon’ble Court may be pleased to grant a Decree of Custody of child to the petitioner and the petitioner is a natural guardian of child, on such terms and conditions, as this Hon’ble Court deems fit and proper, in the interest of Justice."),
        ...LineSpace(1),
        createSignatureFooter(["Place: «station»","Date:  «fdate»"],["Petitioner"]),
        ...LineSpace(1),
        h3UnderlineCenter("VERIFICATION"),
        ...LineSpace(1),
         h3Left(`${tabSpace(2)}`+"I «interim_prayer» do hereby declare that the contents of this petition are true and correct to the best of my knowledge, belief and information after being understood and hence verified the same on this    day of  «fdate» at «station»."),
         ...LineSpace(1),
         createSignatureFooter(["Place: «station»","Date:  «fdate»"],["Petitioner"]),
         pageBreak(),
         createRightAlignPage([
          ...headerWith1Number(["IN THE COURT OF «district»",`O.P No.${tabSpace(3)}Of «myear»`]),
          ...LineSpace(1),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          ...LineSpace(3),
          h3UnderlineCenter("PLAINT FILED U/s. 25 OF GUARDIANSHIP & WARDS ACT R/w.6 OF HINDU MINIORITY & GUARDIANSHIP ACT."),
          ...LineSpace(3),
          ...create4LineFooter(["Filed on:  «fdate»","Filed by:","«counsel_address1»","COUNSEL FOR PETITIONER"]),
         ]),
          pageBreak(),
          ...headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)} Of «myear»`]),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          h3UnderlineCenter("AFFIDAVIT"),
          h3Left(`${tabSpace(1)}`+"I, «interim_prayer» do hereby sincerely and solemnly affirm and state on oath as follows:"),
         ...addParagraphs(["1. I am the petitioner herein as such I am well acquainted with the facts of the case.","2.	I stated that the contents of the main OP., may be read as part and parcel of my affidavit in the Interim Application for visiting rights to see my child.","3.","4.","I, therefore prays that this Hon’ble Court may be pleased to grant visiting rights to see my child born on ___________, at the house of the respondent, on such terms and conditions as this Hon’ble Court deems fit and proper, in the interest of Justice."]),
         createSignatureFooter(["Sworn and singed before me on","this the «fdate»","at «station»."],[`${tabSpace(2)}`+"Deponent"]),
         createSignatureFooter([],[`${tabSpace(2)}`+"Advocate :: «station»"]),
         pageBreak(),
         ...  headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
         ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
         h3UnderlineCenter("PETITION FILED U/s.12 of GUARDIANSHIP & WARDS ACT R/W. Sec. 151 of CPC.,"),
         ...LineSpace(1),
         h3Left(`${tabSpace(1)}`+"For the reasons stated in the accompanying affidavit, the petitioner prays that this Hon’ble Court may be pleased to grant the visiting rights to the petitioner to see his child who is in the custody of respondent, on such terms and conditions as this Hon’ble Court deems fit and proper, in the circumstances of the case, in the interest of Justice."),
         ...LineSpace(1),
         createSignatureFooter(["Place: «station»","Date: «fdate»"],["PETITIONER"]),
         createSignatureFooter([],["COUNSEL FOR PETITIONER"]),
         pageBreak(), 
        createRightAlignPage([
         ...headerWith2Numbers(["IN THE COURT OF HON’BLE «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
         ...LineSpace(1),
         ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
         ...LineSpace(3),
          h3UnderlineCenter("PETITION FILED U/s.12 of GUARDIANSHIP & WARDS ACT R/W. Sec. 151 of CPC.,"),
          ...LineSpace(2),
          ...create4LineFooter(["Filed on:  «fdate»","Filed by:","«counsel_address1»","COUNSEL FOR PETITIONER"]),,
        ]),
        pageBreak(),
        ...headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
         ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          h3UnderlineCenter("PETITION FILED UNDER ORDER-VI RULE-15(4) OF CPC."),
          ...LineSpace(1),
          h3Left(tabSpace(1)+"I, «interim_prayer» do hereby sincerely and solemnly affirm and state on oath as follows:"),
          h3Left(tabSpace(1)+"That, I am the petitioner herein and I filed the above OP., for the custody of minor child that the contents mentioned in the main OP., and the Paras 1 to III (a) are true and correct to the best of my knowledge and belief, hence verified."),
          createSignatureFooter(["Place: «station»","Date: «fdate»"],["DEPONENT"]),
          createSignatureFooter([],[tabSpace(1)+"COUNSEL FOR PETITIONER"]),
          pageBreak(),
          createRightAlignPage([
          ...headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          ...LineSpace(3),
          h3UnderlineCenter("PETITION FILED UNDER ORDER-VI RULE-15(4) OF CPC."),
          ...LineSpace(3),
          ...create4LineFooter(["Filed on:  «fdate»","Filed by:","«counsel_address1»","COUNSEL FOR PETITIONER"]),,  
          ]),
          pageBreak(),
          ...headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          h3UnderlineCenter("AFFIDAVIT"),
          ...LineSpace(1),
          ...addParagraphs([tabSpace(3)+"I, «interim_prayer», do hereby sincerely and solemnly affirm and state on oath as follows:-","1.	    I am the petitioner herein as such I am well-acquainted facts of the case.","2.	I state that I am the petitioner in the above-mentioned OP., as such I have no legal knowledge to conduct the case, as such I am intending to take assistance of an Advocate to conduct my case before this Hon’ble Court.","3.	It is therefore prayed that this Hon'ble Court may be pleased to permit me to appointing the counsel M/s «counsel_address1» to defend and represent the above said case and pass such other order or orders as this Hon'ble Court may deem fit and proper in the interest of justice."]),
          ...LineSpace(1),
          ...create4LineFooter(["Sworn and signed before me","On «fdate»","At «station»"],["Deponent"]),
          h3Center("Advocate: : «station»"),
          pageBreak(),
          ...headerWith1Number(["IN THE COURT OF «district»",`O.P No.${tabSpace(3)}Of «myear»`]),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
          h3UnderlineCenter("PETITION FILED UNDER SEC. 13 OF FAMILY COURT ACT R/W.SEC.151 OF CPC"),
          ...LineSpace(1),
          h3Left(tabSpace(1)+"For the reasons stated in the accompanying affidavit, it is prayed that this Hon'ble Court may be pleased to permit the petitioner to appoint advocate M/s «counsel_address1» to defend and represent the above case on behalf of petitioner and pass such other order or orders as this Hon'ble Court may deem fit and proper in the interest of justice."),
          ...LineSpace(1),  
          createSignatureFooter(["Place: «station»","Date: «fdate»"],["Petitioner"]),
          createSignatureFooter([],[tabSpace(1)+"Counsel for Petitioner"]),
          pageBreak(),
          createRightAlignPage([
          ...headerWith2Numbers(["IN THE COURT OF «district»",`I.A.No.${tabSpace(3)}OF «myear»`,"IN",`O.P No.${tabSpace(3)}OF «myear»`]),
          ...BetweenSection(fData,"…PETITIONER","…RESPONDENT"),
           ...LineSpace(3),
          h3UnderlineCenter("PETITION FILED UNDER SEC. 13 OF FAMILY COURT ACT, R/W.SEC.151 OF CPC."),
          ...LineSpace(3),
          ...create4LineFooter(["Filed on:  «fdate»","Filed by:","«counsel_address1»","COUNSEL FOR PETITIONER"]),
          ])
        ]
      },
    ],
  });
};
