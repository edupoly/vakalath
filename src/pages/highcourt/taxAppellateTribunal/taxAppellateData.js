import {
  LineSpace,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const taxAppellateTribunalSections = (key, formData) => {
  let data = {
    "sec-260A": {
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `AGAINST`,
            `${formData?.OPNO || "«OPNO»"}`,
            `(Assessment Year ___________ )`,
            `(On the file of Income Tax Appellate Tribunal, Hyderabad Bench ‘B’, Hyderabad)`,
          ],
        },
      ],
      betweenSection: {
        pet: `...Appellant`,
        res: `...Respondent`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "MEMORANDUM OF APPEAL FILED UNDER SECTION 260A OF THE INCOME TAX ACT, 1961",
          para: [
            `${tabSpace(
              1
            )}The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
            `The address for the above purpose of service of notice on the respondent is the same as given above.`,
            `Aggrieved by the order of the Income Tax Appellant Tribunal, Hyderabad Bench ‘A”, Hyderabad) in «OPNO» the appellant begs to submit this special appeal U/s 260(A) of the Income Tax Act, 1961.`,
          ],
        },
      ],
    },
    "sidePage1": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"}:: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `ITTA.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `AGAINST`,
              `${formData?.OPNO || "«OPNO»"}`,
              `(Assessment Year ___________ )`,
              `(On the file of Income Tax Appellate Tribunal, Hyderabad Bench ‘B’, Hyderabad)`,
            ],
          },
        ],
        middleHeader: { text: "G R O U N D S", bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Appellant`,
            ],
          },
        ],
      },
    },
    "affidavit": {
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ` IN`,
            `I.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `...Petitioner`,
        res: `...Respondent`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(
              1
            )}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.	I submit that `,
            `${tabSpace(
              1
            )}I, ${formData?.verification || "«verification»"}, now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
          ],
        },
      ],
      footer: [
        {
          left: [
            `Last Page Corss....`,
            `Sworn and Signed in my presence`,
            `on this day of «fdate»`,
            `at ${formData?.place || "«place»"}.`,
          ],
          right: [`Deponent`],
        },
      ],
    },
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION " },
      subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `I.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner`,
        res: `..Respondent`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"}  and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    "sidePage2": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"}:: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.No${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `I.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        middleHeader: {
          text: "DIRECTION PETITION",
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`,
            ],
          },
        ],
      },
    },
    "I.I.T.A.NO": {
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `I.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `AGAINST`,
            `«OPNO»`,
          ],
        },
      ],
      betweenSection: {
        pet: `...Petitioner`,
        res: `...Respondent`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C.     (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court  on the         day    ${formData?.myear || "«myear»"}.`,
            `${tabSpace(
              1
            )}Notice and Interim Stay has/have been granted by order Court      dated the      of     ${formData?.myear || "«myear»"} the affidavit of                              has been filed in support thereof Dated at «place» this            day     ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      footer: [
        {
          left: [``],
          right: [`Advocate for Petitioner`],
        },
      ],
    },
    "sidePage4": {
      left: {
        left: [
          { "text": "Records called for" },
          { "text": "Hearing fixed for" },
          { "text": "Notice put up on Board" },
          { "text": "Process for paid" },
          { "text": "Notice sent to Respondent" },
          { "text": "BHI for Deposit sent" },
          { "text": "Deposit paid" },
        ],
        right: [
          { "text": "«myear»" },
          { "text": "«myear»" },
          { "text": "«myear»" },
          { "text": "«myear»" },
          { "text": "«myear»" },
          { "text": "«myear»" },
          { "text": "«myear»" },
        ]
      },
      right: {
        headLines: [
          {
            head: { text: "HIGH COURT" },
            lines: []
          },
          {
            head: { text: "A P P E A L" },
            lines: []
          },
          {
            head: {
              text: `I.T.T.A.NO.                  of ${formData?.myear || "«myear»"}`
            },
            lines: []
          },
          {
            head: {
              text: `District:  ${formData?.DISTRICT || "«DISTRICT»"}`
            },
            lines: []
          },
          {
            head: { text: "INCOME TAX APPELLATE TRIBUNAL, BENCH," },
            lines: [
              `${formData?.OPNO || "«OPNO»"}`
            ]
          },
          {
            head: { text: `` },
            lines: ["APPELLANT"]
          },
          {
            head: { text: "Versus" },
            lines: []
          },
          {
            head: { text: `${formData?.respondent_name || "«respondent_name»"}` },
            lines: ["RESPONDENT"]
          },
          {
            head: { text: `By ${formData?.counsel_code || "«counsel_code»"}` },
            lines: []
          }
        ],

        middleHeader: {
          text: "",
          bold: false,
          underline: false
        },

        footer: [
          {
            left: [
              "Nature of Claim",
              "Decree passed on",
              "Appeal Presented on",
              "Appeal Filed on",
              "Appeal admitted on",
              "Appeal Valued at Rupees",
              "Stamp Duty paid Rupees",
              "To be heard on"
            ]
          }
        ]
      }
    },
  };
  return data[key];
};
