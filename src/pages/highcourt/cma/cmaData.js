import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const CMASections = (key, formData) => {
    let data = {
        "order43_rule1": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISCELLANEOUS APPEAL" },
            subTitle: { text: "(UNDER ORDER 43 RULE 1 OF C.P.C.)" },
            headLines: [
                {
                    head: { text: `In the court of the ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [`${formData?.OPNO || "«OPNO»"}`]
                },
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [`C.M.A.No. OF ${formData?.myear || "«myear»"}`]
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
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `The above named Appellant begs to present this Memorandum of Civil Miscellaneous Appeal against the Judgment dated ${formData?.OPDATE || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"} for the following grounds among other:`
                    ]
                },
                {
                    head: { text: "GROUNDS",bold:true,underline:true },
                    para: [
                        "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
                        "2.",
                        "3.",
                        "4.",
                        "5.",
                        "Other grounds would be urged at the time of hearing."
                    ]
                },
                {
                    head: { text: "MEMO OF VALUATION",bold:true,underline:true },
                    para: [
                        `The value of Appeal is Rs.____________/-, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: ["Counsel For Appellant"]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    { head: { text: `${formData?.district || "«district»"} :: District` }, lines: [] },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` }, lines: [
                            `C.M.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `AGAINST`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
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
                            `Counsel for Appellant`
                        ]
                    }
                ]
            }
        },
        "affidavit_cma": {
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
                res: `...Respondent/s`
            },
            headPara: [
                {
                    head: { text: "A F F I D A V I T",bold:true,underline:true },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I submit that`,
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`Last Page Corss....`],
                    right: ["Deponent"]
                },
                {
                    left: [
                        `Sworn and Signed in my presence`,
                        `on this day of ${formData?.fdate || "«fdate»"}`,
                        `at ${formData?.place || "«place»"}`,
                        `ADVOCATE :: ${formData?.place || "«place»"}`
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
                    left: [`${formData?.place || "«place»"}`],
                    right: ["Counsel for the Petitioner"]
                },
                {
                    left: [`DATE: ${formData?.fdate || "«fdate»"}`]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    { head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` }, lines: [] },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` }, lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.M.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
        "sidePage3": {
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CRIMINAL PETITION`, bold: true },
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
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: `NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)` },
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
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CIVIL MISC. APPEAL`, bold: true },
                headLines: [
                    {
                        head: { text: `(Under                                              )` },
                        lines: [
                            `C.M.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `${formData?.district || "«DISTRICT»"} District`,
                            `${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `In the court of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `dated ${formData?.OPDATE || "«OPDATE»"}`
                        ]
                    },
                    {
                        head: { text: `` },
                        lines: [`…Petitioner`]
                    },
                    {
                        head: { text: `Versus` },
                        lines: [` …Respondent`]
                    }
                ],
                headPara: [
                    {
                        head: { text: `Date of Order/ Decree: ${formData?.OPDATE || "«OPDATE»"}` },
                        para: []
                    }
                ],
                footer: [
                    {
                        left: [
                            `Presented on: ${formData?.fdate || "«fdate»"}`,
                            `Represented on:`,
                            `Filed on:`,
                            `Admitted on:`
                        ]
                    }
                ]
            }
        },
        "notice": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"} IN C.M.A.NO. OF ${formData?.myear || "«myear»"}`,
                        `AGAINST`,
                        `${formData?.OPNO || "«OPNO»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: `` },
                    para: [
                        `To`,
                        `Take Notice that the Appellant/Petitioner (Respondent) has/have presented a petition to the Court praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order Court dated the day of ${formData?.myear || "«myear»"} the affidavit of ${formData?.verification || "«verification»"} has been filed in support thereof. Dated at ${formData?.place || "«place»"} this day ${formData?.myear || "«myear»"}.`
                    ]
                }
            ],
            footer: [
                {
                    right: ["Advocate for Petitioner"]
                }
            ]
        },
        "cma_notice": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `C.M.A.NO. OF ${formData?.myear || "«myear»"}`,
                        `Civil Miscellaneous Appeal to revise the order/decree in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: `` },
                    para: [
                        `To`,
                        `Take Notice that an appeal/revision/petition from the above decree/order has been presented by the above named appellant/petitioner and registered in this court and that if you intend the same you must enter your appearance in this court and give notice thereof to the appellant or petitioner or his pleader within 30 days after service of the notice on you.`,
                        `If no appearance is entered on your behalf by yourself, your pleader, or someone by law authorized to act for you in this appeal/revision, it will be heard and decided in your absence.`,
                        `The address for service of the appellant/petitioner is that of his Advocate By ${formData?.counsel_code || "«counsel_code»"}`,
                        `A copy of the Memorandum of which is annexed hereto-A`,
                        `By order of the Court`
                    ]
                }
            ],
            footer: [
                {
                    left: [`DATE: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
                    right: ["Assistant Registrar Judicial"]
                },
                {
                    head: { text: "" },
                    para: [
                        `Interlocutory Application No.________ has been made by the Appellant/Petitioner and execution has been stayed (or other order made) by order, dated the ${formData?.myear || "«myear»"}`,
                        `The hours of attendance of the office of the Registrar of High Court are from 10-30 AM to 4.15 PM.`,
                        `Note: Process server should make an endorsement in his return to the effect that a copy of the notice and a copy of the Memorandum of Appeal have been served. Attention is directed to High Court Circular, Dis.No.781 of 1922.`
                    ]
                }
            ]
        }
    }

    return data[key];
};