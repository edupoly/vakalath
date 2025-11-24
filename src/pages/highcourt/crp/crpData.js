import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const CRPSections = (key, formData) => {
    let data = {
        "115": {
            mainTitle: { text: "MEMORANDUM OF CIVIL REVISION PETITION" },
            subTitle: { text: "(Under Section 115 Of C.P.C.) (Under Art.227 of Constitution Of India)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `C.R.P.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/s`,
                res: `...Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `The above named Petitioner begs to present this Memorandum of Civil Revision Petition against the Order dated ${formData?.OPDATE || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"} for the following grounds among other:`
                    ]
                },
                {
                    head: { text: "G R O U N D S" },
                    para: [
                        "1. The order of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
                        "2.",
                        "3.",
                        "4.",
                        "Other grounds would be urged at the time of hearing.",
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "MEMO OF VALUATION" },
                    para: [
                        "The value of Revision is more than Rs.1,000/-, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act."
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`],
                    right: ["Counsel For Petitioner", `DATE: ${formData?.fdate || "«fdate»"}`]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `AGAINST` },
                        lines: [
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    },
                    {
                        head: { text: `BETWEEN:` },
                        lines: [
                            ``,
                            `…Petitioner`
                        ]
                    },
                    {
                        head: { text: `AND` },
                        lines: [
                            ``,
                            `…Respondent`
                        ]
                    }
                ],
                middleHeader: { text: `G R O U N D S`, bold: true, underline: true },
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
        "affidavit": {
            mainTitle: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: [
                { text: `I.A.No. OF ${formData?.myear || "«myear»"}` },
                { text: `IN` },
                { text: `C.R.P.No. OF ${formData?.myear || "«myear»"}` }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        "1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.",
                        "2. I submit that",
                        "3.",
                        "4.",
                        `It is therefore prayed that this Hon'ble Court may be Pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        "Last Page Corss....                               Deponent",
                        `Sworn and Signed in my presence on this day of ${formData?.fdate || "«fdate»"} at ${formData?.place || "«place»"}.`,
                        `ADVOCATE :: ${formData?.place || "«place»"}`
                    ]
                },
                {
                    head: { text: "VERIFICATION STATEMENT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, being the petitioner/person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`,
                        "Deponent"
                    ]
                }
            ]
        },
        "151(1)": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
            court: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: [
                { text: `I.A.No. OF ${formData?.myear || "«myear»"}` },
                { text: "IN" },
                { text: `C.R.P.NO. OF ${formData?.myear || "«myear»"}` }
            ],
            betweenSection: {
                pet: ` ..Petitioner/s`,
                res: ` ..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `${formData?.place || "«place»"} Counsel for the Petitioner`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: `DIRECTION PETITION`, bold: true, underline: true },
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
        "sec-5": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 5 OF LIMITATION ACT)" },
            court: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: [
                { text: `I.A.No. OF ${formData?.myear || "«myear»"}` },
                { text: "IN" },
                { text: `C.R.P.NO. OF ${formData?.myear || "«myear»"}` }
            ],
            betweenSection: {
                pet: ` ..Petitioner/s`,
                res: ` ..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to condone the delay of (${formData?.DELAY_DAYS || "     "}) days in filing the above CRP in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `${formData?.place || "«place»"} Counsel for the Petitioner`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ]
        },
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: `DELAY PETITION`, bold: true, underline: true },
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
        "151(2)": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
            court: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: [
                { text: `I.A.No. OF ${formData?.myear || "«myear»"}` },
                { text: "IN" },
                { text: `C.R.P.NO. OF ${formData?.myear || "«myear»"}` }
            ],
            betweenSection: {
                pet: ` ..Petitioner/s`,
                res: ` ..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased to dispense with Xerox Copy of the order dated ${formData?.OPDATE || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"} in filing the above CRP otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `${formData?.place || "«place»"} Counsel for the Petitioner`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ]
        },
        "sidePage4": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: ` ... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "sidePage6": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: ` ... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to condone the delay of (${formData?.DELAY_DAYS || "     "}) days in filing the above CRP in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "sidePage7": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: ` ... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to dispense with Xerox Copy of the order dated ${formData?.OPDATE || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"}, in filing the above CRP otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "notice": {
            court: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: {
                text: `I.A.No. ${formData?.IANo || "«IANo»"} OF ${formData?.myear || "«myear»"} IN C.R.P.NO. ${formData?.CRPNo || "«CRPNo»"} OF ${formData?.myear || "«myear»"} AGAINST ${formData?.OPNO || "«OPNO»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}`
            },
            betweenSection: {
                pet: ` ..Petitioner/s`,
                res: ` ..Respondent/s`,
                address: ``
            },
            noticePara: [
                {
                    head: { text: "" },
                    para: [
                        `Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order Court dated the ${formData?.orderDate || "«orderDate»"} of ${formData?.myear || "«myear»"} the affidavit of ${formData?.affidavitFiledBy || "________________"} has been filed in support thereof. Dated at ${formData?.place || "«place»"} this day ${formData?.myear || "«myear»"}.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `Advocate for Petitioner`
                    ]
                }
            ]
        },
        "crp_notice": {
            court: { text: `${formData?.highcourt || "«highcourt»"}` },
            caseInfo: {
                text: `C.R.P.NO. ${formData?.CRPNo || "«CRPNo»"} OF ${formData?.myear || "«myear»"} Civil Revision Petition to revise the order / decree in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`
            },
            betweenSection: {
                pet: ` ..Petitioner/s`,
                res: ` ..Respondent/s`,
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `To`,
                        `«respondent_address» `,
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `Take Notice that an appeal/revision/petition from the above decree/order has been presented by the above named appellant/petitioner and registered in this court and that if you intend the same you must enter your appearance in this court and give notice thereof to the appellant or petitioner or his pleader within 30 days after service of the notice on you.`,
                        `If no appearance is entered on your behalf by yourself, your pleader, or someone by law authorized to act for you in this appeal/revision it will be heard and decided in your absence.`,
                        `The address for service of the appellant/petitioner is that of his Advocate By ${formData?.counsel_code || "«counsel_code»"}.`,
                        `A copy of the Memorandum of which is annexed hereto-A.`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `By order of the Court`,
                        `DATE: ${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"} Assistant Registrar Judicial`,
                        `Interlocutory Application No.________ has been made by the Appellant/Petitioner and execution has been stayed (or other order made) by order, dated the ____________________________ ${formData?.myear || "«myear»"}.`,
                        `The hours of attendance of the office of the Registrar of High Court are from 10-30 AM to 4.15 PM.`,
                        `Note: Process server should make an endorsement in his return to the effect that a copy of the notice and a copy of the Memorandum of Appeal have been served. Attention is directed to High Court Circular, Dis.No.781 of 1922.`
                    ]
                }
            ]
        },
        "crp_court_fee": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `C.R.P.NO. OF ${formData?.myear || "«myear»"}`,
                        `BETWEEN:`,
                        ``,
                        `..Petitioner`,
                        `AND`,
                        ``,
                        `..Respondent`
                    ]
                }
            ],
            betweenSection: {
                pet: "",
                res: ""
            },
            headPara: [
                {
                    head: { text: "COURT FEE" },
                    para: [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ]
                }
            ],
            footer: [
                {
                    left: [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sidePage8": {
            left: {
                left: [
                    { "text": "1.Notice put up on Board" },
                    { "text": "2.Hearing fixed " },
                    { "text": "3.Record Called for" },
                    { "text": "4.Process Fee paid" },
                    { "text": "5.Notice sent to Respondent" },
                ],
                right: [
                    { "text": "«myear»" },
                    { "text": "«myear»" },
                    { "text": "«myear»" },
                    { "text": "«myear»" },
                    { "text": "«myear»" },
                ]
            },
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CIVIL REVISION PETITION ", bold: true },
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.R.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: ` ... Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to dispense with Xerox Copy of the order dated ${formData?.OPDATE || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"}, in filing the above CRP otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        }










    };

    return data[key];
};