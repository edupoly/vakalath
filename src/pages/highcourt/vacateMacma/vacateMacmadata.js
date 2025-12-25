import {
  LineSpace,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";
import { formatDate } from "../../../services/templateFunctions";

export const vacateMacmaSections = (key, formData) => {
  let data = {
    "counter-affidavit": {
      headLines: [
        {
          head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true, underline: true },
          lines: [
            `I.A.No${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `M.A.C.M.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/s`,
        res: `.Respondent/s`,
      },
      paragraphs: [],
      headPara: [
        {
          head: "COUNTER AFFIDAVIT FILED BY THE RESPONDENT",
          para: [
            `${tabSpace(
              1
            )}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to «place», do hereby solemnly and sincerely affirm and state as follows:`,
            `1.   I am the Respondent No._____ herein in the above MACMA and as such I am well acquainted with the facts of the case.`,

            `2.	I submit that I have gone through the contents of the affidavit filed in support of the above application and I deny all those allegations, averments, and contentions save those that are specifically admitted or traversed hereunder and the petitioner is put to strict proof of the same.`,

            `3.	I submit that at the very out set, I am advised to submit that the appeal as filed by the appellant/respondent no.1 either is not maintainable in law or on the facts and the same is liable to be dismissed in limini. I further submit that the court below rightly allowed ${formData?.OPNO || "«OPNO»"}, dated «OPDATE» and there are no valid grounds to interfere with the order of the court below.`,

            `4.	    I submit that respondents No._____ in the above MACMA filed «OPNO», dated ${formatDate(formData?.OPDATE) || "«OPDATE»"},  on the file of Motor Accident Claims Tribunal -cum- ${formData?.lowercourt || "«lowercourt»"} U/Sec.166 of Motor Vehicle Act claiming compensation of Rs.___________/-. I submit that the court below through its Award and Decree dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} was pleased to award compensation of Rs.________/- together with interest @ ____% P.A. along with proportionate costs and interest. It is also pertinent to submit that the compensation awarded to the share of the respondent No.____ is directed to be deposited in a Nationalized bank until he attains majority.`,

            `5.	I submit that the petitioner herein had preferred the above appeal challenging the said order and decree of the court below contending that the compensation granted by Tribunal is huge by raising frivolous grounds. I submit that it is well-established judicial precedent that the ___________ cannot question the award alleging that the compensation is huge without any proper ground.`,

            `6.	 I submit that the petitioner herein failed to explain any proper reason for seeking stay of all further proceeding. This Hon’ble Court was pleased to grant stay of all further proceedings upon condition that the petitioner deposit the half of the amount awarded against it by the tribunal within six weeks.`,

            `7.	I submit that I am maintaining myself and my minor son herein on the mercy of our well-wishers, friends and relatives and the meager earning earned by me as by doing tailoring at home is not sufficient to meet the expenses as we lost the sole breadwinner of our family in the accident. I submit that because of the interim orders granted by this Hon’ble Court I am not able to withdraw the amount awarded towards my share though it is deposited in the court by the respondent No.__/appellant and if the interim orders granted are not vacated I will suffer gave and irreparable loss and hardship.`,

            `8.	I submit that in view of the facts and circumstances explained above the petitioner as well the appeal as filed is not maintainable either in law or not facts and the same merits its dismissed.`,

            `${tabSpace(
              1
            )}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [
            `last page corrs.`,
            `Solemnly and sincerely affirm this`,
            `the day of  ${formatDate(formData?.fdate) || "«fdate»"}`,
            `and signed his name in my presence.`,
          ],
          right: [`Deponent`],
        },
      ],
    },
    "sec-151": {
      mainTitle: { text: "MEMORANDUM OF MACMA VACATE MISC. PETITION" },
      subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
      headLines: [
        {
          head: { text: `«highcourt»` },
          lines: [
            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            `IN`,
            `M.A.C.M.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
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
            )}For the reasons stated in the accompanying counter affidavit it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"}   and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
          ],
        },
      ],
      footer: [
        {
          left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
          right: [`Counsel for the Petitioner`],
        },
      ],
    },
    "sidePage1": {
      right: {
        headLines: [
          {
            head: { text: `${formData?.district || "«district»"} :: District` },
            lines: [],
          },
          {
            head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
            lines: [
              `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
              `IN`,
              `M.A.C.M.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        middleHeader: { text: "VACATE PETITION", bold: true, underline: true },
        footer: [
          {
            left: [
              `Filed By:`,
              `M/s ${formData?.counsel_code || "«counsel_code»"}`,
              `Advocate`,
              `Counsel for Petitioner/Resp.No.`,
            ],
          },
        ],
      },
    },
  };
  return data[key];
};
