import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";


export const fcaSections = (key, formData) => {
    let data = {
        "19": {
            "mainTitle": { "text": "MEMORANDUM OF CIVIL MISCELLANEOUS APPEAL" },
            "subTitle": { "text": "(UNDER SEC.19 OF THE FAMILY COURTS ACT.)" },

            "headLines": [
                {
                    "head": { "text": `` },
                    "lines": [
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
                        `${formData?.OPNO || "«OPNO»"}`,
                    ],
                    "lines": [
                        `${formData?.highcourt || "«highcourt»"}`,
                        `F.C.A.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                "pet": `...Appellant/s`,
                "res": `...Respondent/s`
            },

            "headPara": [
                {
                    "head": { "text": "" },
                    "para": [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `The above named Appellant begs to present this Memorandum of Family Court Appeal against the Order and Decree / Judgment dated ${formData?.OPDATE || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"} on the file of ${formData?.lowercourt || "«lowercourt»"} for the following grounds among other:`
                    ]
                },

                {
                    "head": { "text": "G R O U N D S", bold: true, underline: true },
                    "para": [
                        "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
                        "2.",
                        "3.",
                        "4.",
                        "5.",
                        "Other grounds would be urged at the time of hearing."
                    ]
                },

                {
                    "head": { "text": "MEMO OF VALUATION", bold: true, underline: true },
                    "para": [
                        "The Appeal is filed under Sec.19 of the Family Courts Act. Hence a value of the appeal is incapable. Hence a fixed court fee of Rs.10/- is paid which is sufficient."
                    ]
                },

                {
                    "head": { "text": "" },
                    "para": [
                        `Hence, it is prayed that this Hon’ble Court may be pleased to set aside the order and decree dated ${formData?.OPDATE || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"} and allow the ${formData?.OPNO || "«OPNO»"} by dissolving the marriage between the parties performed on _______ and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            "footer": [
                {
                    "left": [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
                    "right": ["Counsel For Appellant"]
                }
            ]
        },

        "sidePage1": {
            "right": {
                "headLines": [
                    {
                        "head": { "text": `${formData?.district || "«district»"} :: District` },
                        "lines": []
                    },
                    {
                        "head": { text: `${formData?.highcourt || "«highcourt»"}` },
                        "lines": []
                    },
                    {
                        "head": { text: `F.C.A.No.` },
                        "lines": [
                            `OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        "head": { "text": "AGAINST" },
                        "lines": [
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],
                "middleHeader": { "text": "G R O U N D S", "bold": true, "underline": true },
                "footer": [
                    {
                        "left": [
                            "Filed By:",
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            "Advocate",
                            "Counsel for Appellant"
                        ]
                    }
                ]
            }
        },
        "affidavit": {
            "mainTitle": {
                text: `${formData?.highcourt || "«highcourt»"}`
            },

            "caseInfo": [
                { text: `I.A.No. OF ${formData?.myear || "«myear»"}` },
                { text: `IN` },
                { text: `F.C.A.No. OF ${formData?.myear || "«myear»"}` }
            ],

            "betweenSection": {
                pet: `..Petitioner/s`,
                res: `...Respondent/s`
            },

            "headPara": [
                {
                    head: { text: "A F F I D A V I T", bold: true, underline: true },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly affirm and state as follows:`,
                        "1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.",
                        "2. I submit that",
                        "",
                        `It is therefore prayed that this Hon'ble Court may be Pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },

                {
                    head: { text: "" },
                    para: [
                        "Last Page Corss....                             Deponent",
                        `Sworn and Signed in my presence`,
                        `on this day of ${formData?.fdate || "«fdate»"}`,
                        `at ${formData?.place || "«place»"}.`,
                        "",
                        `ADVOCATE :: ${formData?.place || "«place»"}`
                    ]
                },

                {
                    head: { text: "VERIFICATION STATEMENT", underline: true },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}.`,
                        "Deponent"
                    ]
                }
            ]
        },

        "151": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.M.A.NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            "headPara": [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },

            ],
            "footer": [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
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
                middleHeader: { text: `DIRECTION PETITION`, bold: true, undefine: true },
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
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `(CIVIL MISC.PETITION)`, bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.R.C.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `...Petitioner/Accused`
                },
                headPara: [
                    {
                        head: { text: `By: ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: `NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)` },
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

        "sidePage4": {
            "right": {
                mainTitle: { text: `Under Sec.19 of Family Courts Act`, bold: true, underline: true },
                subTitle: { text: `HIGH COURT`, bold: true },
                "headLines": [
                    {
                        "head": {},
                        "lines": [
                            `FAMILY COURT APPEAL`
                        ]
                    },
                    {
                        "head": {},
                        "lines": [
                            `F.C.A. NO. OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        "head": { "text": `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        "lines": []
                    },
                    {
                        "head": { "text": `${formData?.counsel_code || "«counsel_code»"}` },
                        "lines": [
                            `Advocate`
                        ]
                    },
                    {
                        "head": { "text": `In the court of the ${formData?.lowercourt || "«lowercourt»"}` },
                        "lines": [
                            `${formData?.OPNO || "«OPNO»"}`
                        ]
                    },
                    {
                        "head": { "text": `` },
                        "lines": [
                            `…Petitioner`,
                            `Versus`,
                            `…Respondent`
                        ]
                    },
                    {
                        "head": { "text": `Date of Order/ Decree:` },
                        "lines": [
                            `${formData?.OPDATE || "«OPDATE»"}`
                        ]
                    }
                ],

                "footer": [
                    {
                        "left": [
                            `Presented on: ${formData?.fdate || "«fdate»"}`,
                            `Represented on:`,
                            `Filed on:`,
                            `Admitted on:`
                        ]
                    }
                ]
            }
        },
        "151_notice": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"} IN F.C.A.NO. OF ${formData?.myear || "«myear»"}`,
                        `AGAINST`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `On the file of the ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`,
                resAddress: `${formData?.respondent_address || "«respondent_address»"}`
            },

            "headPara": [
                {
                    head: { text: "" },
                    para: [
                        `Take Notice that the Appellant / Petitioner (Respondent) has/have presented a petition to the Court praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the ______ day ${formData?.myear || "«myear»"}.`,
                        ``,
                        `Notice and Interim Stay has/have been granted by order of Court dated the _____ of ${formData?.myear || "«myear»"}, the affidavit of ____________________ has been filed in support thereof.`,
                        ``,
                        `Dated at ${formData?.place || "«place»"} this ______ day ${formData?.myear || "«myear»"}.`
                    ]
                }
            ],

            "footer": [
                {
                    left: [],
                    right: [
                        "Advocate for Petitioner"
                    ]
                }
            ]
        }
    };

    return data[key];
};