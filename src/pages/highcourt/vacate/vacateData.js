import { LineSpace, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { formatDate } from "../../../services/templateFunctions";

export const vacateSections =(key,formData)=> {
  let data={
    "counter-affidavit": {
    headLines: [
      {
        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
        lines: [
          `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
        head: "COUNTER AFFIDAVIT FILED BY THE RESPONDENT",
        para: [
          `${tabSpace(
            1
          )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:.`,
          `1.   I am the Respondent No._____ herein in the above Writ Petition and as such I am well acquainted with the facts of the case.`,
          `2.	  I read the petitioner’s affidavit filed in support of writ petition and I submit that it does not disclose any valid or substantial grounds to issue any relief as prayed for. The petitioner is put to strict proof of the allegations which are denied, except to the extent of specifically admitted hereunder. The petitioner has not approached with the clean hands. The writ petition has to be dismissed as the writ petition is not maintainable. The petitioner has to move the appropriate forum.`,
          `3.	I deny that `,
          `${tabSpace(
            1
          )}It is therefore prayed that this Hon’ble Court may be pleased to dismiss the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
           `${tabSpace(
            1
          )}It is therefore prayed that this Hon'ble Court may be pleased  ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
    footer: [
      {
        left: [/*  `last page corrs.`, */"", `Solemnly and sincerely affirm this`,`the day of  ${formatDate(formData?.fdate) || "«fdate»"}`,`and signed his name in my presence.`],
        right: [`Deponent`,``,``,``]
      },
    ],
  },
 "verification-statement": {
    
    headPara: [
      
      {
        head: "VERIFICATION STATEMENT",
        para: [
          `${tabSpace(
            1
          )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the Respondent/ person acquainted with the facts do hereby verify and state that the above said paras are based on records and believed to be correct.`,
        ],
      },
    ],
    footer: [
      {
        left: [`Verified at ${formData?.place || "«place»"} on this `,`the day of  ${formatDate(formData?.fdate) || "«fdate»"}`,``,``],
        right: [``,``,`Deponent`,``]
      },
    ],
    
  },
   "sec-151": {
    mainTitle: { text: "MEMORANDUM OF WRIT VACATE MISC. PETITION" },
    subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
    headLines: [
      {
        head: { text: ` ${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `I.A.No.${tabSpace(3)}OF  ${formData?.myear || "«myear»"}`,
          `IN`,
          `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
        ],
      },
    ],
    betweenSection: {
      pet: `..Petitioner/Respondent`,
      res: `..Respondent/Writ Petitioner`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "",
        para: [
          `${tabSpace(
            1
          )}For the reasons stated in the accompanying counter affidavit it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
    footer: [
      {
        left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
        right: [`Counsel for the Petitioner`]
      },
    ],
  },
   "sidePage1": {
    right: {
      headLines: [
        {
          head: { text: `${formData?.district || "«district»"}:: District` },
          lines: []
        },
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
          lines: [
            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ]
        },

      ],
      middleHeader: { text: "VACATE PETITION", bold: true, underline: true },
      footer: [{
        left: [`Filed By:`, `M/s ${formData?.counsel_code || "«counsel_code»"}`, `Advocate`, `Counsel for Appellant`],
      }],
    }
  },
  }

  return data[key]
};
