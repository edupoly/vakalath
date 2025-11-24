import {
  h3BoldLeft,
  h3Left,
  LineSpace,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const secondAppealSections = (key, formData) => {
  let data = {
    sidepage1: {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
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
        betweenSection: {
          pet: `...Accused/Appellant`,
          res: `...Complainant/Respondent`,
        },
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
    affidavit: {
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ` IN`,
            `S.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
            )}I, «verification», now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.	I submit that `,
            `3. `,
            `4. `,
            `${tabSpace(
              1
            )}It is therefore prayed that this Hon'ble Court may be Pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"}  and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [
            `Last Page Corss....`,
            `Sworn and Signed in my presence`,
            `on this day of ${formData?.fdate || "«fdate»"}`,
            `at ${formData?.place || "«place»"}.`,
          ],
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
            `I.A.No${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `S.A.NO.  ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"}  and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${tabSpace(3)}OF ${formData?.place || "«place»"}`, `DATE: ${tabSpace(3)}OF ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    sidepage2: {
      right: {
        headLines: [
          {
            head: { text: `${tabSpace(3)}OF ${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${tabSpace(3)}OF ${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.No.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
              `Counsel for Appellant`,
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
          head: { text: `${tabSpace(3)}OF ${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `S.A.NO.  ${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to condone the delay of (     ) days in filing the above S.A. in ${tabSpace(3)}OF ${formData?.OPNO || "«OPNO»"}, dated ${tabSpace(3)}OF ${formData?.OPDATE || "«OPDATE»"},  on the file of the ${tabSpace(3)}OF ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${tabSpace(3)}OF ${formData?.place || "«place»"}`, `DATE: ${tabSpace(3)}OF ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    sidepage3: {
      right: {
        headLines: [
          {
            head: { text: `${tabSpace(3)}OF ${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${tabSpace(3)}OF ${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.No.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        middleHeader: {
          text: "DELAY PETITION",
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
    "sec-151(2)": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
      headLines: [
        {
          head: { text: `${tabSpace(3)}OF ${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `I.A.No${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `S.A.NO.  ${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to dispense with Xerox  Copy of the judgment and decree dated ${tabSpace(3)}OF ${formData?.OPDATE || "«OPDATE»"}  passed in ${tabSpace(3)}OF ${formData?.OPNO || "«OPNO»"} on the file of  ${tabSpace(3)}OF ${formData?.lowercourt || "«lowercourt»"} in filing the above S.A., otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${tabSpace(3)}OF ${formData?.place || "«place»"}`, `DATE: ${tabSpace(3)}OF ${formData?.fdate || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    sidepage4: {
      right: {
        headLines: [
          {
            head: { text: `${tabSpace(3)}OF ${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${tabSpace(3)}OF ${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.No.${tabSpace(3)}OF ${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        middleHeader: {
          text: "DISPENSEWITH PETITION",
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
    sidepage5: {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true, underline: true },
        subTitle: { text: "CIVIL MISC.PETITION", bold: true },
        headLines: [
          {
            head: { text: `` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],
        betweenSection: {
          pet: `..Petitioner/s`,
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
            head: {
              text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)",
            },
            para: [
              `The Hon'ble Court may be pleased to ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"
              } pending disposal of the above criminal appeal and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
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
    sidepage6: {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true, underline: true },
        subTitle: { text: "CIVIL MISC.PETITION", bold: true },
        headLines: [
          {
            head: { text: `` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],
        betweenSection: {
          pet: `..Petitioner/s`,
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
            head: {
              text: "NATURE OF APPLICATION(UNDER SEC. 151 C.P.C.)",
            },
            para: [
              `The Hon’ble Court may be pleased to condone the delay of (     ) days in filing the above S.A. passed in ${formData?.OPNO || "«OPNO»"
              } , dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"
              } otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
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
    sidepage7: {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true, underline: true },
        subTitle: { text: "CIVIL MISC.PETITION", bold: true },
        headLines: [
          {
            head: { text: `` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],
        betweenSection: {
          pet: `..Petitioner/s`,
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
            head: {
              text: "NATURE OF APPLICATION(UNDER SEC. 151 C.P.C.)",
            },
            para: [
              `The Hon’ble Court may be pleased to    dispense with Xerox  Copy of the judgment and decree dated ${formData?.OPDATE || "«OPDATE»"
              } passed in ${formData?.OPNO || "«OPNO»"} on the file of the  ${formData?.lowercourt || "«lowercourt»"
              } in filing the above S.A. otherwise the petitioner will be suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`,
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
    highcourt: {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `«highcourt»` },
          lines: [
            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}${tabSpace(
              2
            )}IN${tabSpace(2)}S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"
            }`,
            `AGAINST`,
            `${formData?.OPNO || "«OPNO»"
            }`,
            `on the file of ${formData?.lowercourt || "«lowercourt»"}`,
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
            )}Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C.     (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court  on the day ${formData?.myear || "«myear»"
            }.`,
            `${tabSpace(
              1
            )}Notice and Interim Stay has/have been granted by order Court      dated the      of     ${formData?.myear || "«myear»"
            } the affidavit of                              has been filed in support thereof Dated at ${formData?.place || "«place»"
            } this            day     ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      footer: [
        {
          left: [``],
          right: [` Advocate for Petitioner`],
        },
      ],
    },
    "highcourt2": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}` },
          lines: [
            `S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `Second Appeal to revise the order / decree in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`,
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
            )}Take Notice that an appeal/revision /petition from the above decree/order has been presented by the above named appellant/petitioner and registered in this court and that if you intend the same you must enter your appearance in this court and give notice thereof to the appellant or petitioner or his pleader within 30 days after service of the notice on you.`,
            `${tabSpace(
              2
            )}If no appearance is entered on your behalf by yourself, your pleader, or someone by law authorized to act for you in this appeal/revision it will be heard and decided in your absence.`,
            `${tabSpace(
              2
            )}The address for service of the appellant /petitioner is that of his Advocate By ${formData?.counsel_code || "«counsel_code»"}`,
            `${tabSpace(
              3
            )}A copy of the Memorandum of which is annexed hereto-A`,
            `${tabSpace(
              5
            )}By order of the Court`,
          ],
        },
      ],
      footer: [
        {
          left: [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
          right: [` Advocate for Petitioner`],
        },
      ],
    },
    sidepage8: {
      left: {
        left: [
          { "text": "Records called for" },
          { "text": "Hearing baesd for" },
          { "text": "Notice put up on Board" },
          { "text": "Process Fee paid" },
          { "text": "Notice sent to Respondent" },
        ],
        right: [
          { "text": `${formData?.myear || "«myear»"}` },
          { "text": `${formData?.myear || "«myear»"}` },
          { "text": `${formData?.myear || "«myear»"}` },
          { "text": `${formData?.myear || "«myear»"}` },
          { "text": `${formData?.myear || "«myear»"}` },

        ]
      },
      right: {
        mainTitle: { text: "UNDER SECTION 100 OF C.P.C.", bold: false, underline: false },
        subTitle: { text: "HIGH COURT", bold: true },
        headLines: [
          {
            head: { text: `SECOND APPEAL` },
            lines: [
              `S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: [],
          },
        ],
        headPara: [
          {
            head: {
              text: `By ${formData?.counsel_code || "«counsel_code»"}`,
              bold: true,
            },
            para: [
              `Advocate`,
              `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
              `${formData?.OPNO || "«OPNO»"}`,
              `dated ${formData?.OPDATE || "«OPDATE»"}`,
              `In the court of the`,
              `ORIGINAL SUIT No.           OF   ${formData?.myear || "«myear»"}`,
            ],

          },
          {
            head: {
              text: "NATURE OF CLAIM:",
            },
            para: [
              `IN THE COURT OF         Plaint presented`,
              `FIRST INSTANCE	       Decree Passed`,
              `IN THE LOWER              Appeal presented`,
              `APPELLATE COURT      Decree Passed`,
              `IN THE HIGH 	        S.A.Presented`,
              `COURT OF                        S.A. Re-presented`,
              `FIRST INSTANCE	        S.A. Admitted
                                                                   S.A. Filed
`,
            ],
          },
        ],
        footer: [
          {
            left: [
              `Appeal valued at Rupees:`,
              `Stamp Duty paid Rupees:`,
              `To be heard on`,
            ],
          },
        ],
      },
    },
  };
  return data[key];
};
