import { LineSpace, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { formatDate } from "../../../services/templateFunctions";

export const writIaSections = (key,formData = {}) => {
  let data = {
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF WRIT APPEAL" },
      subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
      headLines: [
        {
          head: { text: `${formData.highcourt || "«highcourt»"}` },
          lines: [
            `I.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: formData.pet || `...Petitioner/s`,
        res: formData.res || `...Respondent/s`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "",
          para: [
            `${tabSpace(
              1
            )}For the reasons stated in the affidavit filed in support of the above Writ Petition it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || " «INTERIM_PRAYER»"} pending disposal the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,

          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || " «place»"}`, `DATE:${formatDate(formData?.fdate) || " «fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    "sidePage1": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || " «district»"} :: District` },
            lines: []
          },
          {
            head: { text: `${formData?.highcourt || " «highcourt»"}` },
            lines: [
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
              `IN`,
              `W.P. NO.${tabSpace(3)}OF ${formData?.myear || " «myear»"}`,
            ]
          },
        ],
        middleHeader: { text: "DIRECTION / SUSPENSION PETITION", bold: true, underline: true },
        footer: [{
          left: [`Filed By:`, `M/s ${formData?.counsel_code || " «counsel_code»"}`, `Advocate`, `Counsel for Petitioner`],

        }],
      }
    },
  }

  return data[key]
};
