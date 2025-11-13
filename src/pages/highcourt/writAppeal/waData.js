import { LineSpace, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const writAppealSections = {
  "clause-15": {
    mainTitle: { text: "MEMORANDUM OF WRIT APPEAL" },
    subTitle: { text: "(UNDER CLAUSE 15 OF LETTER PATENT)" },
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `WRIT APPEAL No.                            OF «myear»`,
          `AGAINST`,
          `«OPNO»`,
        ],
      },
    ],
    betweenSection: {
      pet: ` ...Appellant/s`,
      res: `...Respondent/s`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "",
        para: [
          `${tabSpace(
            1
          )} The address for service of all notices and process on the above named Appellant is that of his counsel «counsel_address»`,
           `${tabSpace(
            1
          )} The above named Appellant begs to present this Memorandum of Writ Appeal against the Judgment passed in «OPNO», dated «OPDATE» passed by His Lordship «lowercourt» for the following grounds among other:`,
        ],
      },
    ],
     headPara: [
      {
        head: "G R O U N D S",
        para: [
          "1.   The Order of the learned Single Judge is erroneous, illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
          "2.",
          "3.",
          "4.",
          "Other grounds would be urged at the time of hearing.",
          `${tabSpace(
            1
          )} It is therefore prayed that this Hon’ble Court may be pleased  «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
    footer: [
      {
        left: [`«place»`, `DATE:«fdate»`],
        right: [`Counsel For Appellant`],
      },
    ],
  },
  "affidavit":{
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `I.A.No.                OF «myear»`,
          `IN`,
          `W.A.No.                OF «myear»`,
        ],
      },
    ],
     betweenSection: {
      pet: ` ...Appellant/s`,
      res: `...Respondent/s`,
    },
     headPara: [
      {
        head: "AFFIDAVIT",
        para: [
          `${tabSpace(
            1
          )} I, «verification»,  now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
          "1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.",
          "2.   I submit that",
          "3.",
          "4.",
          `${tabSpace(
            1
          )}It is therefore prayed that this Hon'ble Court may be Pleased «INTERIM_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`,

        ],
        },
    ],
         footer: [
      {
        left: [`Last Page Corss....`,`Sworn and Signed in my presence`,`on this day of «fdate»`,`at «place».`],
        right: [`Deponent`],
      },
      
    ],
      
  },
  "sec-151-1st":{
    mainTitle:["MEMORANDUM OF WRIT APPEAL MISC. PETITION"],
    subTitle:["(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)"],
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `I.A.No.                OF «myear»`,
          `IN`,
          `W.A.No.                OF «myear»`,
        ],
      },
    ],
     betweenSection: {
      pet: ` ..Petitioner/s`,
      res: `...Respondent/s`,
    },
     headPara: [
      {
        head: "AFFIDAVIT",
        para: [
          `${tabSpace(
            1
          )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased «INTERIM_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
        },
    ],
         footer: [
      {
        left: [`«place»`,`DATE: «fdate»`],
        right: [`Counsel for the Petitioner`,``],
      },  
    ],
      
  },
  "sec-151-2nd":{
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `I.A.No.                OF «myear»`,
          `IN`,
          `W.A.No.                OF «myear»`,
        ],
      },
    ],
     betweenSection: {
      pet: `..Petitioner/s`,
      res: `...Respondent/s`,
    },
     headPara: [
      {
        head: "",
        para: [
          `${tabSpace(
            1
          )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be to grant leave to the petitioner to file appeal against the order dated «OPDATE» passed in «OPNO», by the «lowercourt» in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
        },
    ],
         footer: [
      {
        left: [`«place»`,`DATE: «fdate»`],
        right: [`Counsel for the Petitioner`,``],
      },  
    ],
      
  },
  "memo-of-appearance":{
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `W.A.No.                OF «myear»`,
          `IN`,
          `«OPNO»`,
        ],
      },
    ],
     betweenSection: {
      pet: `...Appellant/s`,
      res: `...Respondent/s`,
    },
     headPara: [
      {
        head: "",
        para: [
          `${tabSpace(
            1
          )}I «counsel_address» hereby declare that I have been duly entrusted and engaged by «verification», Person interested to file the present writ appeal on behalf of the Appellant/Petitioner.`,
           `${tabSpace(
            1
          )}Kindly enter my case as Counsel for the Appellant/Petitioner in the above case.`,
        ],
        },
    ],
         footer: [
      {
        left: [`«place»`,`DATE: «fdate»`],
        right: [`Counsel for the Petitioner`,``],
      },  
    ],
  },
};
