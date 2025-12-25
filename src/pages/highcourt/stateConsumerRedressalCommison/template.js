import { Document } from "docx";
import { stateConsumerRedressalCommissionSections } from "./ScrcData";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { h3BoldCenter, h3BoldLeft, h3Center, h3Left, h3Right, h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { formatDate } from "../../../services/templateFunctions";

export const stateConsumerRedressalCommissionTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          ...combinedSections(
            stateConsumerRedressalCommissionSections("sec-151", formData),
            formData
          ),
          h3underlineBoldCenter("GROUNDS OF APPEAL"),
          ...addParagraphs([`1. The Order of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District in allowing the complaint in  ${formData?.OPNO || "«OPNO»"}, is not only contrary to law but also to the material evidence on record, probabilities of the case and the written arguments submitted on behalf of the O.P.2.","2. There is an utter failure while taking into account, appreciating and evaluating the evidence on record by the District Forum and therefore, there is a need to rectify those errors in this Appeal by this State Commission.","3. The learned members in spite of bringing to their knowledge clearly by Exhibit B-2 in which it is mentioned that the complainant had taken the insurance policy after the accident  and hence the claim was repudiated. Thus the complainant has offended the terms and conditions of the Motor Vehicle Insurance policy bearing No.____________ which is part and parcel of the insurance policy.","4. The acts of the Complainant /Respondent as stated above in paragraph No.3 has eroded completely the foundation of uberrima fides i.e. utmost good faith on which the insurance contract rests and shifts the liability of loss from the insured to the insurer.","5. The District Forum in their Order in Paragraph 13 fault with the procedures that are in vogue followed by all the insurance companies in India.","6. It is clear that the O.P.2 had not acted in any way prejudicial to the claim of the Complainant/Respondent.  Thus the District Forum had came to an erroneous   conclusion that the Appellant / O.P.2 is not correct.","7. The learned members of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District failed to appreciate the Fact that there is no deficiency and /or negligence of service on the part of the appellant company and therefore their Order dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"} should be revised.","8. The other grounds may be urged at the time of hearing.`]),
          ...LineSpace(1),
          h3BoldCenter("PRAYER"),
          ...LineSpace(1),
          ...addParagraphs([`The appellant therefore pray that this Hon’ble Commission may be pleased to dismiss the complaint as prayed in the main Written Version and to pass orders in favour of the appellant and against the Respondent:","(a) 	by setting aside the Order of President, ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}","(b) 	for costs through out","(c) 	and such other orders that this Hon’ble State Commission deems fit and proper in the interest of justice and circumstances of the appeal.`]),
          ...createSignatureFooter([{left:[`Date:  ${formatDate(formData?.fdate) || "«fdate»"}`,"Hyderabad"],right:["","Counsel for appellant"]}]),
          ...LineSpace(1),
          h3Right(`${formData?.DISTRICT || "«DISTRICT»"}:: District`),
          pageBreak(),
          createRightAlignPage([
          h3BoldCenter("BEFORE THE TELANGANA STATE CONSUMMER DISPUTES REDRESSAL COMISSION  AT HYDERABAD."),
          h3Center(`F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          h3Center(`IN`,),
          h3Center(`F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          ...LineSpace(1),
          h3Center(`(Appeal filed against the orders of the ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"})`),
          ...LineSpace(1),
          ...BetweenSection(formData,"..Appellant/Opposite Party","..Respondent/Complainant"),
          ...LineSpace(10),
          h3underlineBoldCenter("APPEAL FILED U/S.15 OF C.P.ACT, 1986 GROUNDS OF APPEAL"),
          h3Left(`Nature of Claim : Motor Vehicle Own damage claim with a prayer to dismiss the complaint and to set aside the orders of the  ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`),
          ...LineSpace(1),
          h3Left(`Represented : Appellant`),
          ...LineSpace(1),
          h3Left(`Presented on : ${formatDate(formData?.fdate) || "«fdate»"}`),
          ...LineSpace(1),
          h3Left("R.P.Admitted on:"),
          ...LineSpace(2),
          h3Left("FILED BY:"),
          ...LineSpace(1),
          h3Left(`${formData?.counsel_address || "«counsel_address»"}`),
          ...LineSpace(1),
          h3Left("COUNSEL FOR APPELLANT:"), 
          ]),
           pageBreak(),
           ...combinedSections(
            stateConsumerRedressalCommissionSections("affidavit", formData),
            formData
          ),
          h3Center("Advocate/ Hyderabad"),
          pageBreak(),
          ...combinedSections(
            stateConsumerRedressalCommissionSections("sec-151-cpc", formData),
            formData
          ),
          pageBreak(),
           createRightAlignPage([
          h3Center(`${formData?.DISTRICT || "«DISTRICT»"}:: District`),
          h3BoldCenter("BEFORE THE TELANGANA STATE CONSUMMER DISPUTES REDRESSAL COMISSION  AT HYDERABAD."),
          h3Center(`F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          h3Center(`IN`,),
          h3Center(`F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          ...LineSpace(1),
          h3Center(`(Appeal filed against the orders of the ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"})`),
          ...LineSpace(1),
          ...BetweenSection(formData,"..Appellant/Opposite Party","..Respondent/Complainant"),
          ...LineSpace(10),
          h3underlineBoldCenter("PETITION FILED U/S.151 OF C.P.C FOR GRANT OF STAY "),
          ...LineSpace(1),
          h3Left(`Nature of Claim : Motor Vehicle Own damage claim with a prayer to dismiss the complaint and to set aside the orders of the  ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`),
          ...LineSpace(1),
          h3Left(`Represented : Appellant`),
          ...LineSpace(1),
          h3Left(`Presented on : ${formatDate(formData?.fdate) || "«fdate»"}`),
          ...LineSpace(1),
          h3Left("R.P.Admitted on:"),
          ...LineSpace(2),
          h3Left("FILED BY:"),
          ...LineSpace(1),
          h3Left(`${formData?.counsel_address || "«counsel_address»"}`),
          ...LineSpace(1),
          h3Left("COUNSEL FOR APPELLANT"), 
          ]),
          pageBreak(),
          ...combinedSections(
            stateConsumerRedressalCommissionSections("affidavit2", formData),
            formData
          ),
          h3Center("Advocate/ Hyderabad"),
          pageBreak(),
          ...combinedSections(
            stateConsumerRedressalCommissionSections("limitation-act", formData),
            formData
          ),
          pageBreak(),
          createRightAlignPage([
          h3Center(`${formData?.DISTRICT || "«DISTRICT»"}:: District`),
          h3BoldCenter("BEFORE THE TELANGANA STATE CONSUMMER DISPUTES REDRESSAL COMISSION  AT HYDERABAD."),
          h3Center(`F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          h3Center(`IN`,),
          h3Center(`F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          ...LineSpace(1),
          h3Center(`(Appeal filed against the orders of the ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"})`),
          ...LineSpace(1),
          ...BetweenSection(formData,"..Appellant/Opposite Party","..Respondent/Complainant"),
          ...LineSpace(10),
          h3underlineBoldCenter("PETITION FILED U/S.5 OF LIMITATION ACT, 1963"),
          h3underlineBoldCenter("CONDONE DELAY PETITION"),
          ...LineSpace(1),
          h3Left(`Nature of Claim : Motor Vehicle Own damage claim with a prayer to dismiss the complaint and to set aside the orders of the  ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`),
          ...LineSpace(1),
          h3Left("Represented : Appellant"),
          ...LineSpace(1),
          h3Left(`Presented on : ${formatDate(formData?.fdate) || "«fdate»"}`),
          ...LineSpace(2),
          h3Left("FILED BY:"),
          ...LineSpace(1),
          h3Left(`${formData?.counsel_address || "«counsel_address»"}`),
          ...LineSpace(1),
          h3Left("COUNSEL FOR APPELLANT"), 
          ]),
          pageBreak(),
          ...combinedSections(
            stateConsumerRedressalCommissionSections("memo", formData),
            formData
          ),
           createRightAlignPage([
          h3Center(`${formData?.DISTRICT || "«DISTRICT»"}:: District`),
          h3BoldCenter("BEFORE THE TELANGANA STATE CONSUMMER DISPUTES REDRESSAL COMISSION  AT HYDERABAD."),
          h3Center(`F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          h3Center(`IN`,),
          h3Center(`F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,),
          ...LineSpace(1),
          h3Center(`(Appeal filed against the orders of the ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"})`),
          ...LineSpace(1),
          ...BetweenSection(formData,"..Appellant/Opposite Party","..Respondent/Complainant"),
          ...LineSpace(10),
          h3underlineBoldCenter("STATUTORY DEPOSIT – CHEQUE MEMO "),
          ...LineSpace(1),
          h3Left(`Nature of Claim : Motor Vehicle Own damage claim with a prayer to dismiss the complaint and to set aside the orders of the  ${formData?.lowercourt || "«lowercourt»"} made in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`),
          ...LineSpace(1),
          h3Left("Represented : Appellant"),
          ...LineSpace(1),
          h3Left(`Presented on : ${formatDate(formData?.fdate) || "«fdate»"}`),
          ...LineSpace(2),
          h3Left("FILED BY:"),
          ...LineSpace(1),
          h3Left(`${formData?.counsel_address || "«counsel_address»"}`),
          ...LineSpace(1),
          h3Left("COUNSEL FOR APPELLANT"), 
          ]),
          pageBreak(),

        ],
      },
    ],
  });
};
