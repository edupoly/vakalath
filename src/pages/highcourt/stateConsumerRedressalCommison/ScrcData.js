import { h3BoldLeft, h3Left, LineSpace, tabSpace } from "../../../components/templates/elementTypes";
import { createSignatureFooter } from "../../../components/templates/FooterSections";

export const stateConsumerRedressalCommissionSections =(key,formData)=> {
  let data={
    "sec-151": {
    mainTitle: { text: "MEMOUNDUM OF APPEAL" },
    subTitle: { text: "( FILED U/S  15 OF THE CONSUMMER PROTECTION ACT 1986)" },
    
    headLines: [
      {
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `F.A.NO:${tabSpace(3)}OF  ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "MEMORANDUM OF APPEAL",
        para: [
          `${tabSpace(
            1
          )}Appeal filed by the Appellant U/S 15 of the Consumer Protection Act 1986 against the Order dated ${formData?.OPDATE || "«OPDATE»"} and made in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.`,
           `${tabSpace(
            1
          )}In this Appeal, address for service of all process, summons, notices, orders etc. on the above named Appellant /O.P.2 is that of their Counsel: ${formData?.counsel_address || "«counsel_address»"}`,
           `${tabSpace(
            1
          )}Addresses for service of all process, summons, notices, orders etc. on the above named Respondents/Opposite Parties is as mentioned above in the cause title.`,
          `1.	It is respectfully submitted that the Appellant herein is the Complainant in  ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District and the District Forum had passed its orders allowing the complaint on «OPDATE»  and prepared the order on ………../${formData?.myear || "«myear»"} and certified copy of the same was delivered by Registered post to the O.P.2 on ………../${formData?.myear || "«myear»"}.`,
          `2. The Hon. District Forum has not taken into cognizance the material produced before them by the Appellant /O.P.2`,
          `3. It is further submitted that the Appellant /O.P. herein are the most affected party because the complaint was allowed vide their orders dated ${formData?.OPNO || "«OPNO»"} and made in  ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District, which is not only contrary to law but also not taken the material evidence on record, probabilities of the case and the written arguments submitted on behalf of the O.P.2 and Appellant  herein.`,
          `4. 	It is further submitted that aggrieved by the above orders the Appellant/ O.P. herein have preferred the First Appeal before this Hon. State Commission, Hyderabad  against the said order of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.`,
           `${tabSpace(
            1
          )}Hence the appeal now.`,
        ],
      },
    ],
  },
   "affidavit": {
    mainTitle: { text: "TELANGANA STATE CONSUMMER REDRESSAL COMISSION AT HYDERABAD", bold:true},
    
    headLines: [
      {
        lines: [
          `F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the «lowercourt», ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "AFFIDAVIT",
        para: [
          ` I, «verification», do hereby solemnly affirm and state on oath as follows:`,
          `1. I am the Appellant/ O.P. 1 & 2  in the above case and as such I am well acquainted with the facts of the case and those stated hereunder:`,
          `2. I submit that Appellant herein has filed the Memorandum of First Appeal, having been aggrieved by the Order dated ${formData?.OPDATE || "«OPDATE»"} and made in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District wherein the learned District Forum had directed the appellant/opposite party to pay a sum of Rs._______/- (Rupees ______________ only) towards the O.D. Claim, Rs._____/- towards mental agony and Rs.______/- towards expenses of the complaint within one month from the date of the order failing which interest shall be paid @9% from the date of their Order.`,
          `3. I respectfully submit that the order was passed on ${formData?.OPDATE || "«OPDATE»"} and the order copy was made ready on ……………….. ${formData?.myear || "«myear»"}and the same was delivered by the office of the District Forum to the opposite parties on ……………${formData?.myear || "«myear»"}.`,
          `4. I submit that we have ample grounds and fair chances of success in the appeal and as such, it is just and necessary to grant to stay of all further proceedings in pursuance of the order in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.`,
          `5. I respectfully submit that it would cause irreparable loss and hardship to us if the Order is complied with.`,
          `6. I respectfully submit that the non-compliance of the Order of ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District, is neither willful nor wanton. No prejudice would be caused to the respondent if the Stay Proceedings are granted by this Hon’ble Commission and on the other hand it would cause irreparable loss and hardship to us if the Stay of further Proceedings is not granted.`,
          ...LineSpace(1),
          h3BoldLeft("PRAYER:"),
          h3Left(tabSpace(1)+`In the circumstance aforesaid, the petitioner humbly prays that this Hon’ble State Commission may be pleased to grant interim Stay in all further proceedings in pursuance of the order in ${formData?.OPNO || "«OPNO»"}, passed by the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District till the final disposal of the First appeal pending before this State Commission in the best interest of justice and pass such other order or orders as the Hon’ble State Commission may deem fit and proper in the circumstances of the case.`),  
        ],
      },
    ],
     footer: [
          {
            left: [
              `Sworn and signed before me on `,
              `this the ……….day ${formData?.fdate || "«fdate»"}`,
              `At Hyderabad.`,
            ],
            right:[`DEPONENT`]
          },
        ],
  },
    "sec-151-cpc": {
    mainTitle: { text: "TELANGANA STATE CONSUMMER REDRESSAL COMISSION AT HYDERABAD",bold:true },
    
    headLines: [
      {
        head: { text: `${formData?.highcourt || "«highcourt»"}` },
        lines: [
          `F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "PETITION FILED ON BEHALF OF APPELANT/OPP.PARTY UNDER SECTION 151 OF C.P.C",
        para: [
          `${tabSpace(
            1
          )}For the facts and reasons stated in the accompanying affidavit, it is therefore prayed that this Hon’ble State Commission may be pleased to grant Stay in all further proceedings in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District in the interest of justice and pass such other order or orders as the Hon’ble State commission may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
     footer: [
          {
            left: [
              `Date:  ${formData?.fdate || "«fdate»"}`,
              `Hyderabad.`,
            ],
            right:[`Counsel for Appellant/OP`]
          },
        ],
  },
   "affidavit2": {
    mainTitle: { text: "TELANGANA STATE CONSUMMER REDRESSAL COMISSION AT HYDERABAD", bold:true},
    
    headLines: [
      {
        lines: [
          `F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "AFFIDAVIT",
        para: [
          ` I, «verification», do hereby solemnly affirm and state on oath as follows:`,
          `1. I am the Appellant/ O.P. 1 & 2  in the above case and as such I am well acquainted with the facts of the case and those stated hereunder:`,
          `2. I submit that Appellant herein has filed the Memorandum of First Appeal, having been aggrieved by the Order dated ${formData?.OPDATE || "«OPDATE»"} and made in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District wherein the learned District Forum had directed the appellant/opposite party to pay a sum of Rs._______/- (Rupees ______________ only) towards the O.D. Claim, Rs._____/- towards mental agony and Rs.______/- towards expenses of the complaint within one month from the date of the order failing which interest shall be paid @9% from the date of their Order.`,
          `3. I respectfully submit that the order was passed on ${formData?.OPDATE || "«OPDATE»"} and the order copy was made ready on ……………….. ${formData?.myear || "«myear»"} and the same was delivered by the office of the District Forum to the opposite parties on ……………${formData?.myear || "«myear»"}.`,
          `4. I further submit that the order was received by our office at Hyderabad on …………. As the competent authority was busy in meetings the delay has caused in giving his decision to prefer this appeal.`,
          `5. I submit that we have ample grounds and fair chances of success in the appeal and as such, it is just and necessary to condone the delay of ……..days in filing this appeal in pursuance of the order in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.`,
          `6. I respectfully submit that it would cause irreparable loss and hardship to us if the Order is complied with.`,
          `7. No prejudice would be caused to the respondent if the delay is condoned by this Hon’ble Commission and on the other hand it would cause irreparable loss and hardship to us if the delay is not condoned.`,
          ...LineSpace(1),
          h3BoldLeft("PRAYER:"),
          h3Left(tabSpace(1)+`In the circumstance aforesaid, the petitioner humbly prays that this Hon’ble State Commission may be pleased to condone the delay of ……days in all further proceedings in pursuance of the order in ${formData?.OPNO || "«OPNO»"}, passed by the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District till the final disposal of the First appeal pending before this State Commission in the best interest of justice and pass such other order or orders as the Hon’ble State Commission may deem fit and proper in the circumstances of the case.`),  
        ],
      },
    ],
     footer: [
          {
            left: [
              `Sworn and signed before me on `,
              `this the ……….day ${formData?.fdate || "«fdate»"}`,
              `At Hyderabad.`,
            ],
            right:[`DEPONENT`]
          },
        ],
  },
   "limitation-act": {
    mainTitle: { text: "TELANGANA STATE CONSUMMER REDRESSAL COMISSION AT HYDERABAD",  bold:true },
    
    headLines: [
      {
        head: { text: `` },
        lines: [
          `F.A.I.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `IN`,
          `F.A.NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "PETITION FILED ON BEHALF OF APPELANT/OPP.PARTY UNDER SECTION 5 OF THE LIMITATION ACT, 1963",
        para: [
          `${tabSpace(
            1
          )}For the facts and reasons stated in the accompanying affidavit, it is therefore prayed that this Hon’ble State Commission may be pleased to condone the delay of ……days in all further proceedings in pursuance of the order in ${formData?.OPNO || "«OPNO»"}, passed by the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District till the final disposal of the First appeal pending before this State Commission in the best interest of justice and pass such other order or orders as the Hon’ble State Commission may deem fit and proper in the circumstances of the case.`,
        ],
      },
    ],
     footer: [
          {
            left: [
              `Date:  ${formData?.fdate || "«fdate»"}`,
              `Hyderabad.`,
            ],
            right:[`Counsel for Appellant/OP`]
          },
        ],
  },
  "memo": {
    mainTitle: { text: "TELANGANA STATE CONSUMMER REDRESSAL COMISSION AT HYDERABAD",  bold:true },
    
    headLines: [
      {
        head: { text: `` },
        lines: [
          `FIRST APPEAL NO:${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
          `Against`,
          `(${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District.)`
        ],
      },
    ],
    betweenSection: {
      pet: `..Appellant/Opposite Party`,
      res: `..Respondent/Complainant`,
    },
    paragraphs: [],
    headPara: [
      {
        head: "MEMO",
        para: [
          `${tabSpace(
            1
          )}In compliance of the Oral Order by the Hon’ble President, ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«district»"} District, A.P. Demand draft  bearing No……………… dated ………  ${formData?.myear || "«myear»"} drawn on HDFC Bank, Hyderabad  for Rs._____/-(Rupees ________________ only) is hereby submitted towards statutory deposit.`,
          `${tabSpace(
            1
          )}Hence this MEMO.`,
        ],
      },
    ],
     footer: [
          {
            left: [
              `Date:  ${formData?.fdate || "«fdate»"}`,
              `Hyderabad.`,
            ],
            right:[`Counsel for Appellant/OP`]
          },
        ],
  },
}
return data[key]
};
