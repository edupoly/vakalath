import { LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";

export const writPetitionSections = {
  "wp.no": {
    
    betweenSection: {
      pet: `..Petitioner`,
      res: `..Respondent`,
    },
    headPara: [
      {
        head: "AFFIDAVIT",
        para: [
          `${tabSpace(1)}I, «verification», now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
          "1.   I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case.  I am filing this affidavit on behalf of other petitioners as well.",
          "2.	I further submit that since the cause of action of all the petitioners herein is one and the same, we are filing a single writ petition. However, as required under writ rules, separate court fee is paid herewith.",
          "3.	I submit that ",
          `In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to seek the redressal before this Hon'ble Court seeking the indulgence of this Hon’ble Court to exercise the extraordinary original jurisdiction vested in this Hon’ble Court by virtue of Article 226 of the Constitution of India.`,
          `I, «verification», now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
          `It is therefore prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          `It is also just and necessary that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
    footerLeft: [
      `last page corrs.`,
      `Solemnly and sincerely affirm this`,
      `the day of  «fdate»`,
      `and signed his name in my presence.`,
    ],
    footerRight: [`Deponent`],
  },
  "Art-226": {
    mainTitle: `MEMORANDUM OF WRIT PETITION`,
    subTitle: [
      "(SPECIAL ORIGINAL JURISDICTION)",
      "(UNDER ART. 226 OF THE CONSTITUTION OF INDIA)",
    ],
    betweenSection: {
      pet: `..Petitioner/s`,
      res: `..Respondent/s`,
    },
    headPara: [
      {
        head: "",
        para: [
          `The address for service on the above named Petitioners is that of their counsel «counsel_address»`,
          "For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.",
        ],
      },
    ],
    footerLeft: [`«place»`, `DATE: «fdate»`],
    footerRight: [`Counsel for the Petitioner`],
  },
  "sec-151": {
    // mainTitle: `MEMORANDUM OF WRIT PETITION MISC. PETITION`,
    // subTitle: ["(UNDER SEC. 151 OF THE C.P.C.)"],
    // headerLines: [
    //   `«highcourt»`,
    //   `I.A. NO.                         OF «myear»`,
    //   `IN`,
    //   `W.P. NO.               		     OF «myear»`,
    // ],
    betweenSection: {
      pet: `..Petitioner/s`,
      res: `..Respondent/s`,
    },
    headPara: [
      {
        head: "",
        para: [
          `${tabSpace(1)}For the reasons stated in the affidavit filed in support of the above Writ Petition it is hereby prayed that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above writ petition and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`,
        ],
      },
    ],
    footerLeft: ["«place»", "DATE: «fdate»"],
    footerRight: ["Counsel for the Petitioner"],
  },
  
};
