import { tabSpace } from "../../../components/templates/elementTypes";
import {
  advocateDetails,
  formatDate,
} from "../../../services/templateFunctions";

export const SuitPartitionSection = (key, formData) => {
  console.log("formDataformData", formData);

  let data = {
    plaint: {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [
            `O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Plaintiff/s`,
        res: `..Defendant/s`,
      },
      headPara: [
        {
          head: {
            text: `SUIT FOR ${formData?.main_prayer || "«main_prayer»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          para: [
          ],
        },
        {
          head: {
            text: `PLAINT FILED UNDER SEC.26 & ORDER-7, RULE-1 OF C.P.C.`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          para: [],
        },

        {
          head: {
            text: `I. DESCRIPTION OF THE PLAINTIFF :`,
            bold: true,
            align:"left"
          },
          para: [
            `«petitioner_address»`,
            `The address of the Plaintiff for the purpose of service of all notices, summons and process etc., is that of their counsel M/s ${formData?.counsel_address1 || "«counsel_address1»"}.`,
          ],
        },

        {
          head: {
            text: `II. DESCRIPTION OF THE DEFENDANT :`,
            bold: true,
            align:"left"
          },
          para: [
            `«respondent_address»`,
            `The address of the defendant for the purpose of service of all notices, summons and process etc., is the same as mentioned above.`,
          ],
        },

        {
          head: {
            text: `III. BRIEF FACTS OF THE CASE :`,
            bold: true,
            align:"left"
          },
          para: [
            `The Plaintiff submit that (Type Facts of the case).`,
            `If Defendants are not restrained the plaintiff will be put to irreparable loss, injury and hardship.`,
            `It is submitted that the suit schedule property is in joint possession of the plaintiff along with Defendants and they are jointly enjoying the suit schedule property and till date are in the physical possession of the suit schedule property.`,
            `There is no suit pending against the same relief before any court between the plaintiff and defendants.`,
          ],
        },

        {
          head: {
            text: `IV. CAUSE OF ACTION :`,
            bold: true,
            align:"left"
          },
          para: [
            `The cause of action for the suit arose when the plaintiff for the first time in the month of _____ requested the Defendants for partition of the ancestral property and to put the plaintiff in separate possession of his 1/4th share along with Defendant No._____ in the suit schedule property and when the plaintiff along with Defendant No.__ got issued a legal notice on ______ to the defendants and on all subsequent dates and days when the plaintiff requested the Defendants No._____ and the cause of action is still subsisting.`,
          ],
        },

        {
          head: {
            text: `V. JURISDICTION :`,
            bold: true,
            align:"left"
          },
          para: [
            `This Hon'ble Court has jurisdiction to try the suit, as the suit schedule lands are situated in ______ Village, ______ (M), _____ District, which is within the territorial and pecuniary jurisdiction of this Hon'ble Court.`,
          ],
        },

        {
          head: {
            text: `VI. LIMITATION :`,
            bold: true,
            align:"left"
          },
          para: [
            `The Plaintiff submit that the suit is filed within limitation.`,
          ],
        },

        {
          head: {
            text: `VII. DECLARATION :`,
            bold: true,
            align:"left"
          },
          para: [
            `The Plaintiff submit that they have not filed any other suit and no other proceedings are pending between the parties for similar relief in respect of the subject matter of the suit.`,
          ],
        },

        {
          head: {
            text: `VIII. VALUATION :`,
            bold: true,
            align:"left"
          },
          para: [
            `The suit is valued at Rs. _________/- per acre and the total valuation comes to Rs._____________.`,
            `The 1/4th share of the plaintiff comes to Rs.________ and the 3/4th share comes to Rs._________.`,
            `Since the plaintiff is in joint possession, the suit is valued under Sec.34(2) of A.P. Court Fees and Suits Valuation Act and a court fee of Rs._______ is paid, which is sufficient.`,
          ],
        },

        {
          head: {
            text: `PRAYER :`,
            bold: true,
            align:"left"
          },
          para: [
            `The plaintiff most humbly prays that this Hon’ble Court may be pleased to decree the suit with costs:`,
            `i) To pass a preliminary decree for partition and separate possession in favour of the plaintiff for his 1/4th share in the suit schedule property by fixing metes and bounds and allot 3/4th share to the Defendants No._____.`,
            `ii) To appoint a Commissioner to divide the suit schedule property into four equal shares and deliver separate possession of 1/4th share to the plaintiff.`,
            `iii) To pass a final decree in terms of the preliminary decree in respect of the plaintiff’s 1/4th share and Defendants’ 3/4th share.`,
            `iv) To award costs of the suit.`,
            `v) To grant such other relief or reliefs as this Hon’ble Court deems fit and proper in the interest of justice.`,
          ],
        },
      ],

      footer: [
        {
          left: [
            `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`,
            `${formData?.station || "«station»"}`,
          ],
          right: [
            `PLAINTIFF`,
          ],
        },
      ],
    },
    "SUIT SCHEDULED PROPERTY": {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
        },
      ],
      betweenSection: {
        pet: ` ..Petitioner/Plaintiff`,
        res: `..Respondent/Defendant`,
      },
      headPara: [
        {
          head: {
            text: "SUIT SCHEDULED PROPERTY",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            ` All that part and parcel of land bearing Survey No.__, admeasuring ______ out of the total extent of Ac._____ gts in ________ Village, __________ District bounded by:`,
            `${tabSpace(1)}NORTH     :`,
            `${tabSpace(1)}SOUTH     :`,
            `${tabSpace(1)}EAST      :`,
            `${tabSpace(1)}WEST      :`,
          ],
        },
      ],

      footer: [
        {
          left: [
            `${formData?.place || "«place»"}`,
            `${formatDate(formData?.station) || "«station»"}`,
          ],
          right: ["PLAINTIFF"],
        },
      ],
    },
    sidepage1: {
      right: {
        headLines: [
          {
            head: {
              text: `In the Court of the ${formData?.district || "«district»"
                } :: District`,
            },
            lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
          },
        ],
        betweenSection: {
          pet: `...Plaintiff`,
          res: `..Defendant/s`,
        },
        middleHeader: {
          text: `SUIT FOR ${formData?.main_prayer || "«main_prayer»"} PLAINT FILED UNDER SEC.26 &  ORDER-7, RULE-1 OF C.P.C.`,
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`],
          },
          {
            left: [
              `Filed By:`,
              ...advocateDetails(formData?.userDetails),
              `COUNSEL FOR PLAINTIFF`,
            ],
          },
        ],
      },
    },
    "Sec-26(2)": {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/Plaintiff`,
        res: `..Respondent/Defendant`,
      },
      headPara: [
        {
          head: {
            text: "AFFIDAVIT FILED UNDER SEC.26(2) OF C.P.C.",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            `I, ${formData?.interim_prayer || "«interim_prayer»"}, do hereby solemnly and sincerely affirm and sincerely state on oath as follows:`,
            `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
            `2.I submit that`,
            `${tabSpace(
              1
            )}Hence, it is prayed that this Hon'ble Court may be pleased to pass a decree and judgment in my favour and against the defendants and such other reliefs as this Hon’ble Court may deem fit and proper in the circumstances of the suit.`,
          ],
        },
      ],

      footer: [
        {
          left: [
            // `last page corrs.`,
            `Solemnly and sincerely affirm this`,
            `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
            `and signed his name in my presence.`,
          ],
          right: ["Deponent"],
        },
      ],
    },
    sidepage2: {
      right: {
        headLines: [
          {
            head: {
              text: `In the Court of the ${formData?.district || "«district»"
                } :: District`,
            },
            lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
          },
        ],
        betweenSection: {
          pet: `..Plaintiff`,
          res: `..Defendant/s`,
        },
        middleHeader: {
          text: `AFFIDAVIT FILED UNDER SEC.26(2) OF C.P.C.`,
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`],
          },
          {
            left: [
              `Filed By:`,
              ...advocateDetails(formData?.userDetails),
              `COUNSEL FOR PETITIONER`,
            ],
          },
        ],
      },
    },
    "Rule-15(4)": {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/Plaintiff`,
        res: ` ..Respondent/Defendant`,
      },
      headPara: [
        {
          head: {
            text: "AFFIDAVIT FILED UNDER ORDER VI, RULE-15(4) OF C.P.C.",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            `I, ${formData?.interim_prayer || "«interim_prayer»"
            }, do hereby solemnly and sincerely affirm and sincerely state on oath as follows:`,
            `1. I am the petitioner/plaintiff in the above suit and as such I am well acquainted with the facts of the case and depose as under and file this affidavit as under:`,
            `2. I submit that I have filed the suit ${formData?.main_prayer || "«main_prayer»"} against the defendants herein.`,
            `3. I submit the contents of the plaint, averments made therein are true, correct and genuine one. I also filed the documents along with the plaint.`,
            `${tabSpace(
              1
            )}Hence, I pray this Hon’ble Court to Decree the above suit as prayed for`,
          ],
        },
      ],

      footer: [
        {
          left: [
            // `last page corrs.`,
            `Solemnly and sincerely affirm this`,
            `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
            `and signed his name in my presence.`,
          ],
          right: ["Deponent"],
        },
      ],
    },
    sidepage3: {
      right: {
        headLines: [
          {
            head: {
              text: `In the Court of the ${formData?.district || "«district»"
                } :: District`,
            },
            lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
          },
        ],
        betweenSection: {
          pet: `..Plaintiff`,
          res: `..Defendant/s`,
        },
        middleHeader: {
          text: `AFFIDAVIT FILED UNDER ORDER-VI, RULE-15(4) OF C.P.C.`,
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`],
          },
          {
            left: [
              `Filed By:`,
              ...advocateDetails(formData?.userDetails),
              `COUNSEL FOR PETITIONER`,
            ],
          },
        ],
      },
    },
    "ORDER 39,RULE-1&2": {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [
            `I.A.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
            `O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
          ],
        },
      ],
      betweenSection: {
        pet: `..Petitioner/Plaintiff`,
        res: ` ..Respondent/Defendant`,
      },
      headPara: [
        {
          head: {
            text: "PETITION FILED UNDER ORDER 39, RULE-1&2, R/W.SEC.151 OF C.P.C.",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            `For the reasons stated in the accompanying affidavit, the petitioner/ plaintiff herein pray that this Hon’ble Court may be pleased to grant AD INTERIM INJUNCTION restraining the respondents/defendants, their associates, henchmen or any other person or persons working on their behalf from alienating, transferring, encumbrance or otherwise creating any charge in favour of the third parties in respect of petition schedule land during the pendency of the main suit and pass such other order or orders as this Hon’ble Court deems fit and proper in the interest of justice.`,
          ],
        },
        {
          head: {
            text: "SCHEDULE OF PROPERTY",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            ` All that part and parcel of land bearing Survey No.__, admeasuring ______ out of the total extent of Ac._____ gts in ________ Village, __________ District bounded by:`,
            `${tabSpace(1)}NORTH     :`,
            `${tabSpace(1)}SOUTH     :`,
            `${tabSpace(1)}EAST      :`,
            `${tabSpace(1)}WEST      :`,
          ],
        },
      ],

      footer: [
        {
          left: [
            `Date: ${formatDate(formData?.fdate) || "«fdate»"}`,
            `${formData?.station || "«station»"}`,
          ],
          right: ["", "Counsel for Petitioner"],
        },
      ],
    },
    sidepage4: {
      right: {
        headLines: [
          {
            head: {
              text: `In the Court of the ${formData?.district || "«district»"
                } :: District`,
            },
            lines: [
              `I.A.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
              `O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        betweenSection: {
          pet: `..Plaintiff`,
          res: `..Defendant/s`,
        },
        middleHeader: {
          text: `PETITION FILED UNDER ORDER-39,RULE 1 & 2 R/W.SEC.151 CPC`,
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`],
          },
          {
            left: [
              `Filed By:`,
              ...advocateDetails(formData?.userDetails),
              `COUNSEL FOR PETITIONER`,
            ],
          },
        ],
      },
    },
    counsel_code1: {
      headLines: [
        {
          head: {
            text: `IN THE COURT OF THE ${formData?.district || "«district»"}`,
            allCaps: true,
            bold: true,
            size: 14,
          },
          lines: [`O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`],
        },
      ],
      betweenSection: {
        pet: `… PLAINTIFF`,
        res: `…..DEFENDANT`,
      },
      headPara: [
        {
          head: {
            text: "",
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [
            ` I, ${formData?.interim_prayer || "«interim_prayer»"
            }, do hereby appoint and retain`,
          ],
        },
        {
          head: {
            text: `${formData?.counsel_code1 || "«counsel_code1»"}`,
            allCaps: true,
            bold: true,
            size: 14,
            underline: true,
          },
          para: [],
        },
        {
          head: {
            text: `Advocate`,
            allCaps: true,
            bold: true,
            size: 12,
            underline: true,
          },
          para: [
            `Advocate/s to appear for me/us in the above Suit/Appeal/Petition/Case and to conduct and prosecute or defend the same and all proceedings that may be taken in respect of any application for execution of any decree or order passed therein. I/We empower my/our Advocate/s to appear in all miscellaneous proceedings in the above suit or matter till all decrees or order are fully satisfied, or adjusted, to compromise and obtain the return of documents and draw any money that might be payable to me/us in the said suit or matter and I/We do further empower my/our Advocate/s to accept on my/our behalf service of notice of all or any appeal or petition filed in any court or appeal Reference or Revision with regard to the said suit or matter before disposal of the same in Honourable Court.`,
            `I certified that the executant who is well acquainted with English, read this Vakalatnama that the contents of this Vakalatnama were read out and explained in Urdu/Hindi/Telugu to the executant he/she/they being unacquainted with English, who appeared perfectly to understand the same and signed or put his/her/their name or mark in my presence.`,
            `Identified by Sri _______________________________`,
          ],
        },
      ],

      footer: [
        {
          left: [
            `Executed  on  ${formatDate(formData?.fdate) || "«fdate»"}`,
            `At ${formData?.station || "«station»"}`,
          ],
          right: ["ADVOCATE"],
        },
      ],
    },
    sidepage5: {
      right: {
        headLines: [
          {
            head: {
              text: `In the Court of the ${formData?.district || "«district»"
                } :: District`,
            },
            lines: [
              `O.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
            ],
          },
        ],
        betweenSection: {
          pet: `….PLAINTIFF`,
          res: `DEFENDANT`,
        },
        middleHeader: {
          text: `VAKALAT ACCEPTED`,
          bold: true,
          underline: true,
        },
        footer: [
          {
            left: [`FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`],
          },
          {
            left: [
              `Filed By:`,
              ...advocateDetails(formData?.userDetails),
              `Advocate`,
              `ADVOCATE FOR PLAINTIFF`,
            ],
          },
        ],
      },
    },
  };

  return data[key];
};
