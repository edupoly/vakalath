import { tabSpace } from "../../../components/templates/elementTypes";

export const reviewSections = (key, formData) => {
  let data = {
      "sec-114": {
      mainTitle: { text: "REVIEW PETITION" },
      subTitle: { text: "(UNDER SECTION 114 OF CIVIL PROCEDURE CODE)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `REVIEW PETITION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `AGAINST`,
            `${formData?.OPNO || "«OPNO»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `...Review Petitioner/Petitioner`,
        res: `...Respondents/Respondents`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}The address for service of all notices and process on the above named Review Petitioner is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
            `${tabSpace(
              1
            )}The above named Review Petitioner begs to present this Memorandum of Review Petition aggrieved by the orders passed by this Hon’ble Court passed in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} passed by His Lordship ${formData?.lowercourt || "«lowercourt»"} for the following grounds among other:`,
          ],
        },
        {
          head: "GROUNDS",
          para: [
            `1.   The Hon’ble High Court ought to have been seen that`,
            `2.`,
            `3.`,
            `Other grounds would be urged at the time of hearing.`,
            `${tabSpace(
              1
            )}It is therefore prayed that this Hon’ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for Review Petitioner`],
        },
      ],
    },
     "sidePage1": {
      left: [],
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || " «highcourt»"}` },
            lines: [
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `AGAINST`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
        ],
        middleHeader: { text: "G R O U N D S", bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || " «counsel_code»"}`,
              `Advocate`,
              `Counsel for Review Petitioner`,
            ],
          },
        ],
      },
    },
    "affidavit": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`, 
            `IN`,
            `${formData?.OPNO || "«OPNO»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/s`,
        res: `...Respondent/s`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(
              1
            )} I, ${formData?.verification || "«verification»"},  now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.   I submit that`,
            `3.`,
            `4.`,
            `${tabSpace(
              1
            )} It is therefore prayed that this Hon'ble Court may be Pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`Last Page Corss....`,`Sworn and Signed in my presence`,`on this day of ${formData?.fdate || "«fdate»"}`,`at ${formData?.place || "«place»"}.`],
          right: [`Deponent`],
        },
      ],
    },
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `${formData?.OPNO || "«OPNO»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/s`,
        res: `..Respondent/s`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
      "sidePage2": {
      left: [],
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || " «highcourt»"}` },
            lines: [
              `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
        ],
        middleHeader: { text: "DIRECTION PETITION", bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || " «counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`,
            ],
          },
        ],
      },
    },
     "sidePage3": {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true,underline: true},
        subTitle: { text: "REVIEW PETITION",bold: true  },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `Review Petition No. ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],

        betweenSection: {
          pet: `...Petitioner`,
        },

        headPara: [
          {
            head: {
              text: `By ${formData?.counsel_code || "«counsel_code»"}`,
              bold: true,
            },
            para: [],
          },
          {
            head: { text: "NATURE OF APPLICATION" },
            para: [],
          },
           {
            head: { text: "(UNDER SEC. 151 C.P.C.)" },
            para: [
              `The Hon’ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
            ],
          },
        ],
        footer: [
          {
            left: [
              `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
              `REPRESENTED ON:`,
              `FILED ON   : ${formData?.fdate || "«fdate»"}`,
            ],
          },
        ],
      },
    },
    "sidePage4": {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true,underline: true},
        subTitle: { text: "REVIEW MISC.PETITION",bold: true  },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],

        betweenSection: {
          pet: `...Petitioner`,
        },

        headPara: [
          {
            head: {
              text: `By ${formData?.counsel_code || "«counsel_code»"}`,
              bold: true,
            },
            para: [],
          },
          {
            head: { text: "NATURE OF APPLICATION" },
            para: [],
          },
           {
            head: { text: "(UNDER SEC. 151 C.P.C.)" },
            para: [
              `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
            ],
          },
        ],
        footer: [
          {
            left: [
              `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
              `REPRESENTED ON:`,
              `FILED ON   : ${formData?.fdate || "«fdate»"}`,
            ],
          },
        ],
      },
    },
     "sidePage5": {
      right: {
        mainTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} DISTRICT`},
        subTitle: { text: "HIGH COURT",bold: true,underline: true},

        headLines: [
          {
            head: { text: `REVIEW PETITION` },
            lines: [
              `(Under Sec.114 of Civil Procedure Code)`,
            ],
          },
          {
            head: { text: `` },
            lines: [
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `AGAINST`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
        ],

        betweenSection: {
          pet: `…Review Petitioner`,
        },

        headPara: [
          {
            head: {
              text: `By ${formData?.counsel_code || "«counsel_code»"}`,
              bold: true,
            },
            para: [],
          },
        ],
        footer: [
          {
            left: [
              `Date of Order : ${formData?.OPDATE || "«OPDATE»"}`,
              `Presented on:`,
              `Re-presented on :`,
              `Filed:`,
              `Admitted:`,
              `Judge: The Hon’ble Mr.Justice`,
              `${formData?.lowercourt || "«lowercourt»"}`,
              `To be heard on:`,
              `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
      },
    },
    "sec-5": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 5 OF LIMITATION ACT)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/s`,
        res: `..Respondent/s`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to condone the delay of     (_____) days in filing the above Review Petition in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`,`DATE: ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
     "sidePage6": {
      left: [],
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || " «highcourt»"}` },
            lines: [
              `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
        ],
        middleHeader: { text: "CONDONE DELAY PETITION", bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || " «counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`,
            ],
          },
        ],
      },
    },
     "sidePage7": {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true,underline: true},
        subTitle: { text: "REVIEW MISC. PETITION",bold: true  },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `Review I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Review Petition No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],

        betweenSection: {
          pet: `...Petitioner`,
        },

        headPara: [
          {
            head: {
              text: `By ${formData?.counsel_code || "«counsel_code»"}`,
              bold: true,
            },
            para: [],
          },
          {
            head: { text: "NATURE OF APPLICATION" },
            para: [],
          },
           {
            head: { text: "(UNDER SEC. 151 C.P.C.)" },
            para: [
              `The Hon’ble Court may be pleased to condone the delay of     (_____) days in filing the above Review Petition in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
            ],
          },
        ],
        footer: [
          {
            left: [
              `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
              `REPRESENTED ON:`,
              `FILED ON   : ${formData?.fdate || "«fdate»"}`,
            ],
          },
        ],
      },
    },
  };

  return data[key];
};
