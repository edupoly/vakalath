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
            )}The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"
            }`,
            `The address for the above purpose of service of notice on the respondent is the same as given above.`,
            `Aggrieved by the order of the Income Tax Appellant Tribunal, Hyderabad Bench ‘A”, Hyderabad) in «OPNO» the appellant begs to submit this special appeal U/s 27(A) of the Wealth-tax Act, 1957, on the following among other grounds.`,
          ],
        },
        {
          head: "GROUNDS",
          para: [
            `(1)	The order of the Appellate Tribunal is contrary to law.`,
            `(2)	The Appellate Tribunal is erred in holding that the valuation has to be discounted by 50% on the ground of uncertainties and hazards of litigation.`,
            `(3)	In such an event, the Appellate Tribunal ought to have directed that 50% of the valuation as ultimately determined by the Hon’ble Supreme Court should be taken as the basis, but not 50% of what Valuation Officer has fixed.  The principle laid down by the A.P.High Court in Amatul Karim’s case was not properly appreciated by the Appellate Tribunal.`,
            `(4)	The Appellate Tribunal is not correct in following the principle laid down in 35 ITD 402 which suffers from series of infirmities and the same is subject-matter of reference before the Hon’ble High Court, including on the ground of perversity.`,
            `(5)		Since each Assessment Year is an independent unit, more so, in the context of valuation, the Appellate Tribunal ought to have adjudicated the question on merits without being guided by its earlier order reported in 35 ITD 402.`,
            `(6)	From the order of the Income Tax Appellate Tribunal, the following question of law arise:`,
            `${tabSpace(1)}(A)	Whether the Appellate Tribunal is justified in directing grant of deduction of an amount equivalent to 50% of the valuation, on the ground of uncertainties and hazards of litigation ?`,
            `${tabSpace(1)}(B)	Whether the findings of the Appellate Tribunal in this behalf are based on material on record ?`,
            `${tabSpace(1)}For the reasons stated above, it is prayed that the Hon’ble Court may be pleased to call for the records relating to ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} and set aside the same to the aforesaid extent`,
          ],
        },
      ],
      footer: [
        {
          left: [
            `DATE:${formData?.fdate || "«fdate»"}`,
            `${formData?.place || "«place»"}`,
          ],
          right: [`Counsel for Appellant`],
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
    "affidavit": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
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
          head: { text: "A F F I D A V I T", bold: true, underline: true },
          para: [
            `${tabSpace(
              1
            )} I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.   I submit that`,
            ` It is therefore prayed that this Hon'ble Court may be Pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ],
        },
      ],
      footer: [
        {
          left: [
            `Last Page Corss...`,
            `Sworn and Signed in my presence`,
            `on this day of ${formData?.fdate || "«fdate»"}`,
            `at ${formData?.place || "«place»"}`,
          ],
          right: [`Deponent`],
        },
      ],
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
            )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"
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
              `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"
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
        mainTitle: { text: "HIGH COURT", bold: true },
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
