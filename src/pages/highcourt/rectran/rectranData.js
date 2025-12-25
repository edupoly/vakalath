import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const rectranSections = (key, formData) => {
  let data = {
   "affidavit": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
          lines: [
            `R & T. C.M.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(
              1
            )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.   I submit that`,
            `3.	It is submitted that in view of Sankranthi/Summer/Dasara vacations, the lower Courts are closed and hence this receive and transmit petition.`,
             `${tabSpace(
              1
            )}It is therefore prayed that this Hon’ble Court may be pleased to receive the bundle and pass appropriate interim order and remit to the lower court after reopening the courts ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`,
             `${tabSpace(
              1
            )}It is therefore prayed that this Hon’ble Court may be pleased to ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} in the interest of justice and to pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [/*  `last page corrs.`, */"", `Solemnly and sincerely affirm this`,`the day of ${formatDate(formData?.fdate) || "«fdate»"}`,`and signed his name in my presence.`],
          right: [`Deponent`],
        },
      ],
    },
    "sec-34": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 34 OF THE CIVIL COURTS ACT)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
          lines: [
            `R & T. C.M.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(
              1
            )}The address for service on the above named Petitioners is that of their counsel ${formData?.counsel_address || "«counsel_address»"}`,
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon’ble Court may be pleased to receive the bundle and pass appropriate interim order and remit to the lower court after reopening the courts ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`,`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
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
              `R&T CMP.NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
            ],
          },
        ],
        middleHeader: { text: "RECEIVE AND TRANSMIT PETITION", bold: true, underline: true },
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
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
      subTitle: { text: "(UNDER SEC.151 OF CIVIL PROCEDURE CODE)" },
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
          lines: [
            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `R & T. C.M.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
          head: "AFFIDAVIT",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased to ${tabSpace(3)}OF ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} in the interest of justice and to pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`,`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
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
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `R&T CMP.NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
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
        mainTitle: { text: "HIGH COURT", bold: true,  },
        subTitle: { text: "SPECIAL ORIGINAL JURISDICTION",underline: true  },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `R&T CMP.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
              text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
              bold: true,
            },
            para: [],
          },
          {
            head: { text: "NATURE OF APPLICATION",underline:true },
            para: [
              `(UNDER SEC.34 OF CIVIL COURTS ACT)`,
              `The Hon’ble Court may be pleased to receive the bundle and pass appropriate interim order and remit to the lower court after reopening the courts ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`,
            ],
          },
        ],

        footer: [
          {
            left: [
              `Permitted on: ${formatDate(formData?.fdate) || "«fdate»"}`,
              `Presented on: ${formatDate(formData?.fdate) || "«fdate»"}`,
              `Filed on    : ${formatDate(formData?.fdate) || "«fdate»"}`,
              `R&T CMP.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
      },
    },
     "sidePage4": {
      right: {
        mainTitle: { text: "HIGH COURT", bold: true,  },
        subTitle: { text: "CIVIL MISC. PETITION",bold: true,underline: true  },

        headLines: [
          {
            head: { text: `` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `R&T CMP.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
              text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
              bold: true,
            },
            para: [],
          },
          {
            head: { text: "NATURE OF APPLICATION",underline:true },
            para: [
              `(UNDER SEC.34 OF CIVIL COURTS ACT)`,
              `This Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} in the interest of justice and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`,
            ],
          },
        ],

        footer: [
          {
            left: [
              `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
              `REPRESENTED ON:`,
              `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
            ],
          },
        ],
      },
    },
     "appellate-side": {
      mainTitle: { text: "" },
      subTitle: { text: "" },
      headLines: [
         {
          head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
        },
        {
          head: { text: `ORIGINAL/APPELLATE SIDE`,bold:true },
          lines: [
            `R & T. C.M.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner(s)`,
        res: `.Respondent(s)`,
      },
      paragraphs: [
      `${tabSpace(
              1
            )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, Petitioner in the above Petition do hereby appoint and retain`,
      ],
      headPara: [
        {
          head: `${formData?.counsel_code || "«counsel_code»"}`,
          para: [
            `${tabSpace(
              1
            )}Advocate/s of the High Court to appear for me/us in the above Appeal/Petition and to conduct and prosecute (or defend) the same and all proceedings that may be taken in respect of any application connected with the same or any decree or order passed therein including all applications for return of documents or the receipt of any money that may be payable to me/us in the said Appeal/Petition and also to appear in all applications under Clause-XV of the Letters Pattent and in all applications for review and for leave to the Supreme Court of India and in all applications review of judgment.`,
            `${tabSpace(
              1
            )}I certify that the contents this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant or executants who appeared perfectly to understand the same and made his/her/their signatures or mark in my presence.`,
            `Executed before me this ____________ day of ____________${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      footer: [
        {
          left: [``],
          right: [`ADVOCATE :: ${formData?.place || "«place»"}`],
        },
      ],
    },
     "sidePage5": {
      left: [],
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` ,bold:true},
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || " «highcourt»"}` },
          },
          {
            head: { text: `ORIGINAL/APPELLATE SIDE`,bold:true },
            lines: [
              `R&T CM.P.No.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
            ],
          },
        ],
         headPara: [
        {
          head: `VAKALAT`,
          para:[],
        },
        {
          head: `ACCEPTED`,
          para:[],
        },
        {
          head: `${formData?.counsel_code || "«counsel_code»"}`,
          para:[],
        },
        {
          head: `COUNSEL FOR  PETITIONER`,
          para:[],
        },
      ],
        footer: [
          {
            left: [
              `DATE : ${formatDate(formData?.fdate) || "«fdate»"}`,
              `_____________________________`,
              `Address for Service:`,
              `${formData?.counsel_address || "«counsel_address»"}`,
            ],
          },
        ],
      },
    },
  };

  return data[key];
};
