import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const osaSections = (key, formData) => {
    let data = {
        "483": {
            mainTitle: { text: "Memorandum of Original Side Appeal" },
            subTitle: { text: "(Under Clause 15 of the Letter Patent Act and Sec.483 of the Companies Act, 1956)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        "(ORIGINAL JURISDICTION)",
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `In the Matter of ${formData?.lowercourt || "«lowercourt»"}`,
                        `O.S.A. No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Appellant/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `The above named Appellant/s begs to present this Memorandum of Original Side Appeal, aggrieved by the order passed by the learned Company Judge in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} for the following among other:`
                    ]
                },
                {
                    head: { text: "G R O U N D S" },
                    para: [
                        `1. The order of the learned company judge made in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} with respect is contrary to law, facts of the case and is liable to be set aside.`,
                        "Other grounds would be urged at the time of arguments.",
                        `It is therefore prayed that this Hon’ble Court may be pleased to set aside the order passed in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} by the learned company Judge and consequently allow the said company petition as prayed for and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: ["last page corrs. Deponent", `DATE: ${formData?.fdate || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: DISTRICT` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `O.S.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `AGAINST`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "Memorandum of Grounds of Original Side Appeal",
                    bold: true,
                    underline: true
                },

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
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. ${formData?.IANo || "«IANo»"} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `O.S.A.No. ${formData?.OSA_No || "«OSA_No»"} OF ${formData?.myear || "«myear»"}`
                    ]
                }
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
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I submit that`,
                        `3.`,
                        `4.`,
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "Last Page Corss....",
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [
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
                        `I.A.No. ${formData?.IANo || "«IANo»"} OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `O.S.A.No. ${formData?.OSA_No || "«OSA_No»"} OF ${formData?.myear || "«myear»"}`
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
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
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
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `O.S.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "STAY PETITION",
                    bold: true,
                    underline: true
                },

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
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: "HIGH COURT" },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `O.S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "CIVIL MISC. PETITION",
                    bold: true,
                    underline: true
                },

                betweenSection: {
                    pet: "... Petitioner"
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders as may be deemed fit and proper in the circumstances of the case.`
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
            left: {
                left: [
                    { "text": "1.Records called for" },
                    { "text": "2.Hearing fixed for" },
                    { "text": "3.Notice put up on Board" },
                    { "text": "4.Process for paid" },
                    { "text": "5.Notice sent to Respondent" },
                    { "text": "6.BHI for Deposit sent" },
                    { "text": "7.Deposit paid" },
                ],
                right: []
            },
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.highcourt || "HIGH COURT"}` },
                        lines: []
                    },
                    {
                        head: { text: "APPEAL" },
                        lines: [
                            `O.S.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} DISTRICT` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                betweenSection: {
                    pet: `…Appellant/s`,
                    resp: `…Respondent/s`
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "Versus" },
                        para: [
                            ``
                        ]
                    },
                    {
                        head: { text: ""},
                        para: ["NATURE OF CLAIM:" ]
                    },
                    {
                        head: { text: "" },
                        para: [
                            `DECREE PASSED ON: ${formData?.OPDATE || "«OPDATE»"}`
                        ]
                    },
                    {
                        head: { text: "" },
                        para: ["APPEAL PRESENTED ON:"]
                    },
                    {
                        head: { text: "" },
                        para: ["APPEAL RE-PRESENTED ON:"]
                    },
                    {
                        head: { text: "" },
                        para: ["APPEAL FILED ON:"]
                    },
                    {
                        head: { text: "" },
                        para: ["APPEAL ADMITTED ON:"]
                    },
                    {
                        head: { text: "" },
                        para: ["APPEAL VALUED AT RUPEES:"]
                    },
                    {
                        head: { text: "" },
                        para: ["STAMP DUTY PAID RUPEES:"]
                    }
                ],

                footer: [
                    {
                        left: [
                            `To be heard on:`
                        ]
                    }
                ]
            }
        }




    }

    return data[key];
};