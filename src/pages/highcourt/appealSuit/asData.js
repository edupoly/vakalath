import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { advocateDetails, formatDate } from "../../../services/templateFunctions";

export const appealSuitSections = (key, formData) => {
    let data = {
        "96_41": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF REGULAR APPEAL" },
            subTitle: { text: "(UNDER SECTION 96 R/W ORDER 41 RULE 1 OF C.P.C.)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `A.S.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `...Appellant/s`,
                res: `...Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `${tabSpace(1)}The above named Appellant begs to present this Memorandum of Appeal against the Judgment dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"} to the extent it went against the appellant, for the following grounds among other:`
                    ]
                },
                {
                    head: { text: "G R O U N D S", bold: true, underline: true },
                    para: [
                        "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
                        "2.",
                        "3.",
                        "4."
                    ]
                },
                {
                    head: { text: "MEMO OF VALUATION", bold: true, underline: true },
                    para: [
                        "The value of appeal is Rs.____________ and the Court Fee payable thereon is Rs._____/- and the same is sufficient under the A.P.C.F. and S.V.Act."
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ],
                    right: [
                        `Counsel For Appellant`,
                    ]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                        lines: [
                            `A.S.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `AGAINST`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `(On the file of the ${formData?.lowercourt || "«lowercourt»"})`
                        ]
                    }
                ],
                betweenSection: {
                    pet: `...Petitioner`,
                    res: `...Respondent`
                },
                middleHeader: {
                    text: "G R O U N D S",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            ...advocateDetails(formData?.userDetails),
                            `Counsel for Appellant`
                        ]
                    }
                ]
            }
        },
        "affidavit": {
            header: [],

            mainTitle: { text: "" },
            subTitle: { text: "" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `A.S.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `...Respondent/s`
            },

            headPara: [
                {
                    head: { text: "AFFIDAVIT", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name || "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age || "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address || "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.${tabSpace(1)}I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2.${tabSpace(1)}I submit that `,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `Last Page Cross....`,
                        `Sworn and Signed in my presence on this day of ${formatDate(formData?.fdate) || "«fdate»"} at ${formData?.place || "«place»"}`
                    ],
                    right: [
                        `Deponent`
                    ]
                }
            ]
        }
        ,
        "151": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `A.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ],
                    right: [
                        "Counsel for the Petitioner"
                    ]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DIRECTION PETITION",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            ...advocateDetails(formData?.userDetails),
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "5": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 5 OF LIMITATION ACT)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `A.S.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to condone the delay of (${formData?.delayDays || "     "}) days in filing the above A.S. in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ],
                    right: [
                        `Counsel for the Petitioner`
                    ]
                }
            ]
        },
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DELAY PETITION",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            ...advocateDetails(formData?.userDetails),
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "151(1)": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `A.S.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        ` For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to dispense with Xerox  Copy of the judgment dated  ${formatDate(formData?.OPDATE) || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}  in filing the above AS otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case. `
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ],
                    right: [
                        "Counsel for the Petitioner"
                    ]
                }
            ]
        },
        "sidePage4": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DISPENSEWITH PETITION",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            ...advocateDetails(formData?.userDetails),
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "sidePage5": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true, size: 20 },
                subTitle: { text: "CIVIL MISC.PETITION", bold: true },

                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: `... Petitioner`
                },

                headPara: [
                    {
                        head: {
                            text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
                            bold: true
                        },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
                mainTitle: { text: "HIGH COURT", bold: true, underline: true, size: 20 },
                subTitle: { text: "CIVIL MISC.PETITION", bold: true },

                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: `... Petitioner`
                },

                headPara: [
                    {
                        head: {
                            text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
                            bold: true
                        },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased to condone the delay of (     ) days in filing the above AS in ${formData?.OPNO || "«OPNO»"} dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
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
        "sidePage7": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true, size: 20 },
                subTitle: { text: "CIVIL MISC.PETITION", bold: true },

                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: `... Petitioner`
                },

                headPara: [
                    {
                        head: {
                            text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
                            bold: true
                        },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased to dispense with Xerox Copy of the judgment passed in ${formData?.OPNO || "«OPNO»"} dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"} in filing the above AS otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
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
        "sidePage8": {
            "right": {
                "mainTitle": { "text": "HIGH COURT", "bold": true, "underline": true },
                "subTitle": { "text": "FIRST APPEAL", "bold": true },
                "headLines": [
                    {
                        "head": { "text": "" },
                        "lines": [
                            `A.S.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `${formData?.district || "«DISTRICT»"} District`
                        ]
                    },
                    {
                        "head": { "text": `${formData?.counsel_code || "«counsel_code»"}` },
                        "lines": [
                            `Advocate`,
                            `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`
                        ]
                    }
                ],
                "betweenSection": {
                    "pet": `..Petitioner/s`,
                    "resp": `..Respondent/s`
                },
                "headPara": [
                    {
                        "head": { "text": "Nature Of Claim:", "bold": true },
                        "para": []
                    },
                    {
                        "head": { "text": "Dates & Details", "bold": true },
                        "para": [
                            `Date of Order/Decree: ${formatDate(formData?.OPDATE) || "«OPDATE»"}`,
                            `Appeal Presented on: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            `Appeal Represented on: `,
                            `Appeal Filed On: `,
                            `Appeal admitted on: `,
                            `Appeal valued at Rupees:`,
                            `Stamp Duty paid Rupees:`,
                            `To be heard on:`
                        ]
                    }
                ]
            }
        },
        "notice": {
            header: [],

            mainTitle: { text: "A.S. NO." },
            subTitle: { text: "Appeal Suit to revise the order / decree" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `A.S.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                        `Appeal Suit to revise the order / decree ${formData?.OPNO || "«OPNO»"} ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        "To",
                        // ``,
                        `${tabSpace(1)}Take Notice that an appeal/revision/petition from the above decree/order has been presented by the above named appellant/petitioner and registered in this court and that if you intend the same you must enter your appearance in this court and give notice thereof to the appellant or petitioner or his pleader within 30 days after service of the notice on you.`,
                        `${tabSpace(1)}If no appearance is entered on your behalf by yourself, your pleader, or someone by law authorized to act for you in this appeal/revision it will be heard and decided in your absence.`,
                        `${tabSpace(1)}The address for service of the appellant/petitioner is that of his Advocate By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
                        `${tabSpace(1)}A copy of the Memorandum of which is annexed hereto-A`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [
                        `Assistant Registrar Judicial`
                    ]
                }
            ]
        },
        "CivilMiscNotice": {
            header: [],
            mainTitle: { text: "I.A. NO." },
            subTitle: { text: "Civil Miscellaneous Petition" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No. ${formData?.IANo || "«IANo»"} OF ${formData?.myear || "«myear»"} IN A.S.NO. ${formData?.ASNo || "«ASNo»"} OF ${formData?.myear || "«myear»"}`,
                        `AGAINST ${formData?.OPNO || "«OPNO»"} On the file of ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`,
                resAddress: ``
            },

            headPara: [
                {
                    head: { text: "Notice" },
                    para: [
                        `${tabSpace(1)}Take Notice that the Appellant/Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day ${formData?.myear || "«myear»"}.`,
                        `${tabSpace(1)}Notice and Interim Stay has/have been granted by order of Court dated the ____ of ____ ${formData?.myear || "«myear»"}. The affidavit of __________________ has been filed in support thereof. Dated at ${formData?.place || "«place»"} this ____ day of ${formData?.myear || "«myear»"}.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `Advocate for Petitioner`
                    ],
                    right: []
                }
            ]
        }
    }

    return data[key];
};