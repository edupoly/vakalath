// import { useSelector } from "react-redux";
import { tabSpace } from "../../../components/templates/elementTypes";

export const CRLASections = (key,formData) => {
  // const formData = useSelector((state) => state.submittedForm.fData);
  let data = {
    "374(2)": {
      // header: [{
      //   left: { text: "qwe", bold: true },
      //   right: { text: "defrt", bold: true }
      // }],
      mainTitle: { text: "MEMORANDUM OF CRIMINAL APPEAL" },
      subTitle: { text: "UNDER SECTION 374(2) OF CRIMINAL PROCEDURE CODE, 1973" },
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `Crl.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `${formData?.OPNO || "«OPNO»"}`
        ]
      }],
      betweenSection: {
        pet: `...Accused/Appellant`,
        res: `...Complainant/Respondent`
      },
      // middleContent: [
      //   { left: ["To"] },
      //   { left: ["The Registrar", "High Court", `${formData?.place || "«place»"}.`] },
      // ],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(1)}The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
            `${tabSpace(1)}The above named Appellant begs to file this Criminal Appeal against the judgment and sentence passed by the learned ${formData?.lowercourt || "«lowercourt»"} in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, for the following grounds among other:`
          ]
        },
        {
          head: "GROUNDS",
          para: [
            "1.   The judgment of the learned ______________ Judge is contrary to law weight of evidence and probabilities of the case.",
            "2.   The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs _________________.",
            "3.   The learned Judge ",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.   The other reasons given by the learned Judge are unsustainable.",
            `9.   Having regard to the facts and circumstances of the case. The sentence is unduly severe.`,
            `     It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ]
        },
      ],
      footer: [{
        left: [
          `DATE:${formData?.fdate || "«fdate»"}`,
          `${formData?.place || "«place»"}`
        ],
        right: [`Counsel For Appellant`]
      }],
    },
    "482": {
      mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
      subTitle: { text: "UNDER SECTION 482 OF CRIMINAL PROCEDURE CODE, 1973" },
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
        ]
      }],
      betweenSection: {
        pet: `...Accused/Appellant`,
        res: `...Complainant/Respondent`
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(1)} It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above criminal appeal and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ]
        },
      ],
      footer: [{
        left: [
          `DATE:${formData?.fdate || "«fdate»"}`,
          `${formData?.place || "«place»"}`
        ],
        right: [`Counsel For Appellant`]
      }],
    },
    "482(1)": {
      mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 482 OF CRIMINAL PROCEDURE CODE)" },
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `CRL.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
        ]
      }],
      betweenSection: {
        pet: `..Petitioner/s`,
        res: `..Respondent/s`
      },
      headPara: [
        {
          head: "DISPENSEWITH PETITION",
          para: [
            `${tabSpace(1)}That the above Criminal Appeal is filed seeking to appeal the order passed in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} and the petitioner did not obtain the certified copies of the said ${formData?.OPNO || "«OPNO»"} and hence filed the photocopy of the same and the same may be dispensed with.`,
            `${tabSpace(1)}For the reasons stated in the accompanying criminal petition, it is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
          ]
        }
      ],
      footer: [{
        left: [
          `${formData?.place || "«place»"}`,
          `DATE: ${formData?.fdate || "«fdate»"}`
        ],
        right: [`Counsel for the Petitioner`]
      }]
    },
    "affidavit": {
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
        ]
      }],
      betweenSection: {
        pet: `...Accused/Appellant`,
        res: `...Complainant/Respondent`
      },
      headPara: [
        {
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
            "",
            `1. I submit that I am the Appellant/Petitioner herein and as such I am well acquainted with the facts of the case.`,
            "",
            `2. I submit that `,
            "",
            `3. `,
            "",
            `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to grant leave to file appeal against the order passed by the ${formData?.lowercourt || "«lowercourt»"} in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ]
        }
      ],
      footer: [{
        left: [
          `last page corrs.`,
          `Solemnly and sincerely affirm this`,
          `the day of ${formData?.fdate || "«fdate»"}`,
          `and signed his name in my presence.`
        ],
        right: [`Deponent`]
      }],
      before: { text: "BEFORE ME" },
      advocate: { text: `ADVOCATE :: ${formData?.place || "«place»"}` }
    },
    "389(1)": {
      mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
      subTitle: { text: "UNDER SECTION 389(1) OF CRIMINAL PROCEDURE CODE, 1973" },
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
        ]
      }],
      betweenSection: {
        pet: `...Accused/Appellant`,
        res: `...Complainant/Respondent`
      },
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(1)} It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ]
        },
      ],
      footer: [{
        left: [
          `DATE:${formData?.fdate || "«fdate»"}`,
          `${formData?.place || "«place»"}`
        ],
        right: [`Counsel For petitioner`]
      }],
      note: {
        head: { text: "Note:", bold: true },
        lines: [
          `Accused in ${formData?.jailname || "___________"} Jail.`,
          `Bail to the satisfaction of the JFCM, ${formData?.jfcmlocation || "_____________"}.`
        ]
      }
    },
    "378(4)": {
      mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
      subTitle: { text: "UNDER SECTION 378 (4) OF CRIMINAL PROCEDURE CODE, 1973" },
      headLines: [{
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
        ]
      }],
      betweenSection: {
        pet: `...Accused/Appellant`,
        res: `...Complainant/Respondent`
      },
      paragraphs: [
        {
          head: "",
          para: [
            `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to grant leave to file appeal against the order passed by the ${formData?.lowercourt || "«lowercourt»"} in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
          ]
        }
      ],
      footer: [{
        left: [
          `DATE: ${formData?.fdate || "«fdate»"}`,
          `${formData?.place || "«place»"}`
        ],
        right: [`Counsel For petitioner`]
      }]
    },
    "sidePage1": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `${formData?.OPNO || "«OPNO»"} \n Dated ${formData?.OPDATE || "«OPDATE»"} \n On the file of the \n ${formData?.lowercourt || "«lowercourt»"}`
            ]
          },
        ],
        middleHeader: { text: "MEMORANDUM OF APPEAL", bold: true, underline: true },
        footer: [{
          left: [
            `Filed By:`,
            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
            `Advocate`,
            `Counsel for Appellant`
          ],
        }],
      }
    },
    "sidePage2": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ]
          }
        ],
        middleHeader: { text: `SUSPENSION PETITION`, bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`
            ]
          }
        ]
      }
    },
    "sidePage3": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ]
          }
        ],
        middleHeader: { text: `BAIL PETITION`, bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`
            ]
          }
        ]
      }
    },
    "sidePage4": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `CRL.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ]
          }
        ],
        middleHeader: { text: `DISPENSEWITH PETITION`, bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`
            ]
          }
        ]
      }
    },
    "sidePage5": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}` },
            lines: [
              `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ]
          }
        ],
        middleHeader: { text: `LEAVE PETITION`, bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner`
            ]
          }
        ]
      }
    },
    "sidePage6": {
      right: {
        headLines: [
          {
            head: { text: `HIGH COURT` },
            lines: []
          },
          {
            head: { text: `CRIMINAL PETITION` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `Crl.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
            ]
          },
          {
            head: { text: `${formData?.district || "«DISTRICT»"} District` },
            lines: []
          }
        ],
        betweenSection: {
          pet: `..Petitioner/s`
        }
      }
    },
  }

  return data[key];
};