import { tabSpace } from "../../../components/templates/elementTypes";

export const WtaSections = (key, formData) => {
  let data = {
    "act-1957": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `W.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
          head: "MEMORANDUM OF APPEAL FILED UNDER SECTION 27(A) OF THE WEALTH TAX ACT 1957",
          para: [
            `${tabSpace(
              1
            )}The address for service of all notices and process on the above named Appellant is that of his counsel ${
              formData?.counsel_address || "«counsel_address»"
            }`,
            `The address for the above purpose of service of notice on the respondent is the same as given above.`,
            `Aggrieved by the order of the Income Tax Appellant Tribunal, Hyderabad Bench ‘A”, Hyderabad) in «OPNO» the appellant begs to submit this special appeal U/s 27(A) of the Wealth-tax Act, 1957, on the following among other grounds.`,
          ],
        },
      ],
      footer: [
        {
          left: [``, ``],
          right: [``],
        },
      ],
    },
    sidePage1: {
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
              `W.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
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
              `M/s ${formData?.counsel_code || " «counsel_code»"}`,
              `Advocate`,
              `Counsel for Appellant`,
            ],
          },
        ],
      },
    },
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)   " },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `W.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner`,
        res: `...Respondent`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${
              formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"
            } and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [
            `${formData?.place || "«place»"}`,
            `${formData?.fdate || "«fdate»"}`,
          ],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    sidePage2: {
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
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `W.T.T.A.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
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
              `M/s ${formData?.counsel_code || " «counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`,
            ],
          },
        ],
      },
    },
    sidePage3: {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true, underline: true },
        subTitle: { text: "CIVIL MISC.PETITION", bold: true },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `W.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],

        betweenSection: {
          pet: `... Petitioner`,
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
            head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
            para: [
              `The Hon’ble Court may be pleased ${
                formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"
              } and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
            ],
          },
        ],

        footer: [
          {
            left: [
              `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
              `REPRESENTED ON:`,
              `FILED ON: ${formData?.fdate || "«fdate»"}`,
            ],
          },
        ],
      },
    },
      "highcourt": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"} ${tabSpace(2)}IN${tabSpace(2)} W.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `AGAINST`,
            `${formData?.OPNO || "«OPNO»"}`,
            
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
          head: "MEMORANDUM OF APPEAL FILED UNDER SECTION 27(A) OF THE WEALTH TAX ACT 1957",
          para: [
            `${tabSpace(
              1
            )}Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C.     (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court  on the         day    ${formData?.myear || "«myear»"}.`,
            `Notice and Interim Stay has/have been granted by order Court      dated the      of     ${formData?.myear || "«myear»"} the affidavit of                              has been filed in support thereof Dated at ${formData?.place || "«place»"} this            day     ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      footer: [
        {
          left: [``, ``],
          right: [`Advocate for Petitioner`],
        },
      ],
    },
    sidePage4: {
    // left:{
    
    // },
    right: {
    mainTitle: { text: "HIGH COURT", bold:true },
    subTitle: { text: "A P P E A L", bold: true },
    headLines: [
      {
        head: { text: `` },
        lines: [
          `W.T.T.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
        ],
      },
      {
        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
        lines: [
        `INCOME TAX APPELLATE TRIBUNAL, BENCH,`,
        `W.T.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
        ],
      }
    ],
    betweenSection: {
      pet: "APPELLANT",
      res: "RESPONDENT",
    },
    headPara: [
      {
        head: { 
          text: `By M/s ${formData?.counsel_code || "«counsel_code»"}`, 
          bold: true 
        },
        para: []
      },
      {
        head: {
          text: ""
        },
        para: [
          ``
        ]
      },
    ],
    footer: [
      {
        left: [
          `Nature of Claim`,
          `Decree passed on`,
          `Appeal Presented on`,
          `Appeal Filed on`,
          `Appeal admitted on`,
          `Appeal Valued at Rupees`,
          `Stamp Duty paid Rupees`,
          `To be heard on`,
        ]
      }
    ]
  }
},


  };

  return data[key];
};
