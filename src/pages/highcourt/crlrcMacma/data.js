import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const CRLRCMacmaSections = (key, formData) => {
    let data = {
        "173": {
            mainTitle: { text: "CRIMINAL REVISION CASE" },
            subTitle: { text: "UNDER SECTION 173 OF M.V.ACT." },

            headLines: [
                {
                    head: {
                        text: `In the Court of the Motor Accidents Claims Tribunal -Cum- ${formData?.lowercourt || "«lowercourt»"}`
                    },
                    lines: [
                        `${formData?.OPNO || "«OPNO»"}`,
                        `${formData?.highcourt || "«highcourt»"}`,
                        `M.A.C.M.A. No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: {
                    address: ``,
                    suffix: "..Appellant / Respondent No."
                },
                res: {
                    address: `${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}`,
                    suffix: "…Respondents / Petitioners"
                }
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all summons, notices and processes etc., on the above named appellant is that of their counsel ${formData?.counsel_address || "«counsel_address»"}.`,
                        `The above named appellants beg to prefer this memorandum of appeal, being aggrieved by the decree and judgment passed in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, on the file of Motor Accident Claims Tribunal -cum- ${formData?.lowercourt || "«lowercourt»"} for the following among other.`
                    ]
                }
            ],

            grounds: [
                `1. The Judgment and decree passed by the Motor Accident Claims Tribunal -cum- ${formData?.lowercourt || "«lowercourt»"} is contrary to law, weight of evidence and probabilities of the case.`,
                `2. The Court below erred in relieving the respondent from liability to pay compensation to the petitioner ignoring the settled law.`,
                `3. The Court below erred in fixing the liability to pay compensation on the respondent ignoring the fact that the claim is made under the peace of social welfare legislation.`,
                `4. The Tribunal below failed to appreciate the law that the Apex Court has settled the law with pay and recovery in such cases of technicalities.`,
                `5. The Hon’ble Tribunal having appreciated the fact that respondent No.1 is the owner and driver of the offending vehicle ought to have fixed the liability on respondent No.2 also.`,
                `6. The Tribunal ought to have taken a lenient view in awarding compensation by fixing liability on respondent No.2 as the petitioners have lost their sole bread earner leading to a miserable life for the petitioners.`,
                `Other grounds will be urged at the time of the hearing of the appeal.`
            ],

            valuation: {
            },

            footer: [
                {
                    left: [
                        `Value of the appeal is Rs.________/-`,
                    ],
                    right: [""]
                },
                {
                    left: [
                        "Court fee paid: Rs.10/"
                    ],
                    right: [""]
                },
                {
                    left: [
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: ["Counsel for Appellant"]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `M.A.C.M.A. No.${tabSpace(14)}OF ${formData?.myear || "«myear»"}`,
                        ]
                    },
                ],
                middleHeader: { text: "G R O U N D S", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed on: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            ``,
                            `Filed by:`,
                            ``,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Appellant`
                        ],
                    },
                ],
            }
        },
        "affidavit": {
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A. No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                    "IN",
                    `M.A.C.M.A. No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: "…Petitioner",
                res: "….Respondents"
            },
            headPara: [{
                head: { text: "AFFIDAVIT FILED BY THE PETITIONER/APPELLANT" },
                para: [
                    `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                    "2. That",
                    `3. The petitioner herein aggrieved by the order dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"} on the file of Motor Accident Claims Tribunal -cum- ${formData?.lowercourt || "«lowercourt»"} is filing the main appeal.`,
                    `4. It is submitted that in the above case the tribunal had passed an erroneous order-awarding sum of Rs. ${formData?.awardAmount || "________"} /- in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of Motor Accident Claims Tribunal -cum- ${formData?.lowercourt || "«lowercourt»"}, ${formData?.district || "«DISTRICT»"} District, without any basis together with interest @ ${formData?.interest || "___"} % per annum from the date of ${formData?.interestStartDate || "________"} till the date of payment with costs.`,
                    `5. It is submitted that the tribunal erred in passing award granting a sum of Rs. ${formData?.awardAmount || "________"} /- without any basis. It is submitted that the ...`,
                    `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above appeal in the interest of justice and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                ]
            }],
            footer: [{
                left: [
                    "Last Page Corss....",
                ],
                right: ["Deponent"]
            },
            {
                left: [
                    `Sworn and Signed in my presence on this day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                    `at ${formData?.place || "«place»"}`
                ],
                right: [""]
            }]
        },
        "151": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "UNDER SEC. 151 OF CIVIL PROCEDURE CODE" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `MACMA. NO. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: { address: ``, suffix: "..Petitioner" },
                res: { address: ``, suffix: "..Respondent" }
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above appeal in the interest of justice and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}  District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.NO.${tabSpace(9)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `MACMA. No.${tabSpace(16)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: "STAY / DIRECTION PETITION", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel For The Petitioner`
                        ],
                    }
                ],
            }
        },
        "5": {
            mainTitle: { text: "PETITION FILED UNDER SECTION 5 OF LIMITATION ACT" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A. No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `M.A.C.M.A. No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: { address: ``, suffix: "..Petitioner/ Appellant" },
                res: { address: ``, suffix: "..Respondents/Respondents" }
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the common affidavit, the petitioner/appellant herein prays that this Hon’ble Court may be pleased to condone the delay of ${formData?.delayDays || "______"} days in filing the appeal against ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of Motor Accidents Claims Tribunal -Cum- ${formData?.lowercourt || "«lowercourt»"} and to pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`, `${formData?.place || "«place»"}`],
                    right: ["Counsel for Petitioner/Appellant"]
                }
            ]
        },
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}  District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.No.${tabSpace(6)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `M.A.C.M.A. No.${tabSpace(14)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: "CONDONE DELAY PETITION", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed on: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            ``,
                            `Filed by:`,
                            ``,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ],
                    }
                ],
            }
        },
        "notice": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `M.A.C.M.A.NO. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            againstSection: {
                opno: `${formData?.OPNO || "«OPNO»"} (On the file of ${formData?.lowercourt || "«lowercourt»"})`
            },
            betweenSection: {
                pet: { name: ``, suffix: "..Petitioner" },
                res: { name: `${formData?.RESPONDENT_NAME || "«RESPONDENT_NAME»"}`, suffix: "..Respondent", address: `${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}` }
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `Take Notice that the Appellant/Petitioner (Respondent) has/have presented a petition to the Court praying that under Section 151 of C.P.C.`,
                        "(AFFIDAVIT AND PETITION ENCLOSED)",
                        `and that the same will be heard by the Court on the day ${formData?.hearingDate || "________"} ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order of the Court dated the ${formData?.orderDate || "________"} of ${formData?.myear || "«myear»"}.`,
                        `The affidavit of ${formData?.affiantName || "________"} has been filed in support thereof. Dated at ${formData?.place || "«place»"} this ${formData?.day || "________"} day of ${formData?.myear || "«myear»"}.`
                    ]
                }
            ],
            footer: [
                {
                    left: [],
                    right: ["Advocate for Petitioner"]
                }
            ]
        },
        "sidePage4": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "MOTOR ACCIDENT CIVIL MISC.APPEAL MISC. PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(10)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `M.A.C.M.A.NO.${tabSpace(12)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}    District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `\n${tabSpace(27)}... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION\n(UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above appeal in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "sidePage5": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CIVIL MISC.PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(15)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `MACMA.NO.${tabSpace(18)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}    District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `\n${tabSpace(27)}... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION\n(UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to condone the delay of (${formData?.DELAY_DAYS || "     "}) days in filing the above MACMA in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of Motor Accident Claims Tribunal-cum-${formData?.lowercourt || "«lowercourt»"}, otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "sidePage6": {
            right: {
                mainTitle: { text: "(Under Sec.173 of Motor Vehicles Act)", bold: false, underline: false },
                subTitle: { text: "HIGH COURT", bold: true, underline: true },
                headLines: [
                    {
                        head: { text: "MOTOR ACCIDENT CIVIL MISC. APPEAL", bold: true },
                        lines: [
                            `M.A.C.M.A. NO.${tabSpace(14)}OF ${formData?.myear || "«myear»"}`,
                            `${formData?.district || "«DISTRICT»"} District`,
                            ``,
                            `${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            ``,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: `\n${tabSpace(5)}…Petitioner\nVersus\n${formData?.RESPONDENT_NAME || "«RESPONDENT_NAME»"}\n${tabSpace(9)}…Respondent`
                },
                headPara: [
                    {
                        head: { text: `Date of Order/ Decree: ${formatDate(formData?.OPDATE) || "«OPDATE»"}`, bold: false },
                        para: []
                    }
                ],
                footer: [
                    {
                        left: [
                            `Presented on     : ${formatDate(formData?.fdate) || "«fdate»"}`,
                            `Represented on :`,
                            `Filed on       :`,
                            `Admitted on    :`
                        ]
                    }
                ]
            }
        }

    }

    return data[key];
};