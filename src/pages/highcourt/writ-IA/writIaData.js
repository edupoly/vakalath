import { LineSpace, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const writIaSections = {
  "sec-151": {
    mainTitle: { text: "MEMORANDUM OF WRIT APPEAL" },
    subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
    headLines: [
      {
        head: { text: `«highcourt»` },
        lines: [
          `I.A. NO.                        OF «myear»`,
          `IN`,
          `W.P. NO.               		OF «myear»`,
        ],
      },
    ],
    betweenSection: {
      pet: `...Petitioner/s`,
      res: `...Respondent/s`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "",
        para: [
          `${tabSpace(
            1
          )}For the reasons stated in the affidavit filed in support of the above Writ Petition it is therefore prayed that this Hon'ble Court may be pleased  «INTERIM_PRAYER» pending disposal the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
           
        ],
      },
    ],
    footer: [
      {
        left: [`«place»`, `DATE:«fdate»`],
        right: [`Counsel for the Petitioner`],
      },
    ],
  },
   "sidePage1": {
    right: {
      headLines: [
        {
          head: { text: `«district» :: District` },
          lines: []
        },
        {
          head: { text: `«highcourt»` },
          lines: [
            `I.A.NO.${tabSpace(3)}OF «myear»`,
            `IN`,
            `W.P. NO.${tabSpace(3)}OF «myear»`,
          ]
        },

      ],
      middleHeader: { text: "DIRECTION / SUSPENSION PETITION", bold: true, underline: true },
      footer: [{
        left: [`Filed By:`, `M/s «counsel_code»`, `Advocate`, `Counsel for Petitioner`],

      }],
    }
  },

};
