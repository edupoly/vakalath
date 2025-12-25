import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const CCCASections = (key, formData) => {
    let data = {
        "order43_rule1": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISCELLANEOUS APPEAL" },
            subTitle: { text: "(Under Sec.96 R/w.Order-41, Rule-1 of CPC)" },
            headLines: [
                {
                    head: { text: `In the court of the ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [`${formData?.OPNO || "«OPNO»"}`]
                },
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [`C.C.C.A. No. OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `...Appellant/Plaintiff/s`,
                res: `...Respondent/Defendant/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `Aggrieved by the Judgment and Decree dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"}, this Appeal is being filed within the time prescribed on the following among other grounds:`
                    ]
                },
                {
                    head: { text: "Brief Facts of the Case:", underline: true },
                    para: [
                        `Challenging the dismissal of the said suit vide Judgment and Decree dated  ${formatDate(formData?.OPDATE) || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"} this appeal is being filed within the time prescribed on the following among other`
                    ]
                },
                {
                    head: { text: "GROUNDS" },
                    para: [
                        "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
                        "2. The court below failed to take into consideration _______",
                        "",
                        "Other grounds would be urged at the time of hearing.",
                        `Hence, it is prayed that this Hon’ble Court may be allowed by setting aside the Judgment and Decree dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"}, on the file of the ${formData?.lowercourt || "«lowercourt»"} and in effect decreeing the suit of the Appellant/ Plaintiff and be pleased to pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
                {
                    head: { text: "MEMO OF VALUATION" },
                    para: [
                        `The suit is valued at Rs.____________/-, and the same valuation is taken as valuation in this Appeal and an amount of Rs.________ is paid as Court fees which is sufficient under the A.P.C.F. and S.V.Act`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
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
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true }, lines: [
                            `C.C.C.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `AGAINST`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `On the file of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],
                middleHeader: { text: `Memorandum of Grounds `, bold: true, underline: true },
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
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.C.C.A.NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `...Respondent/s`
            },
            headPara: [
                {
                    head: { text: "A F F I D A V I T" },
                    para: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly affirm and state as follows:`,
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
                        `on this day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                        `at ${formData?.place || "«place»"}`,
                        `ADVOCATE :: ${formData?.place || "«place»"}`
                    ]
                },
                {
                    head: "VERIFICATION STATEMENT",
                    left: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. Hence verified at ${formData?.place || "«place»"} on this the day of ${formatDate(formData?.fdate) || "«fdate»"}.`
                    ],
                    right: ["Deponent"]
                }
            ]
        },
        "151": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.C.C.A.NO. OF ${formData?.myear || "«myear»"}`
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
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                },
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    { head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` }, lines: [] },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true }, lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.C.C.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: `STAY PETITION`, bold: true, underline: true },
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
                subTitle: { text: `CIVIL MISC.PETITION`, bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.C.C.C.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `...Petitioner`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: `NATURE OF APPLICATION(UNDER SEC. 151 C.P.C.)`
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
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CIVIL MISC. APPEAL`, bold: true },
                headLines: [
                    {
                        head: { text: `(Under                                              )` },
                        lines: [
                            `C.C.C.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `${formData?.district || "«DISTRICT»"} District`,
                            `${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `In the court of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`
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
                        head: { text: `Date of Order/ Decree: ${formatDate(formData?.OPDATE) || "«OPDATE»"}` },
                        para: []
                    }
                ],
                footer: [
                    {
                        left: [
                            `DECREE PASSED ON : ${formatDate(formData?.OPDATE) || "«OPDATE»"}`,
                            `APPEAL PRESENTED ON     :`,
                            `APPEAL RE-PRESENTED ON:`,
                            `APPEAL FILED ON               :`,
                            `APPEAL ADMITTED ON       :`,
                            `APPEAL VALUED AT RUPEES:`,
                            `STAMP DUTY PAID RUPEES  :`,
                        ]
                    },
                    { left: [`To be heard on:`] }
                ]
            }
        },
        "notice": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"} IN C.C.C.A.NO. OF ${formData?.myear || "«myear»"}`,
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
                    head: { text: `To` },
                    para: [
                        ``,
                        `Take Notice that the Appellant/Petitioner (Respondent) has/have presented a petition to the Court praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order Court dated the day of ${formData?.myear || "«myear»"} the affidavit of ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"} has been filed in support thereof. Dated at ${formData?.place || "«place»"} this day ${formData?.myear || "«myear»"}.`
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
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `C.C.C.A.NO. OF ${formData?.myear || "«myear»"}`,
                        `Civil Miscellaneous Appeal to revise the order/decree in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: `To` },
                    para: [
                        ``,
                        `Take Notice that an appeal/revision/petition from the above decree/order has been presented by the above named appellant/petitioner and registered in this court and that if you intend the same you must enter your appearance in this court and give notice thereof to the appellant or petitioner or his pleader within 30 days after service of the notice on you.`,
                        `If no appearance is entered on your behalf by yourself, your pleader, or someone by law authorized to act for you in this appeal/revision, it will be heard and decided in your absence.`,
                        `The address for service of the appellant/petitioner is that of his Advocate By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`,
                        `A copy of the Memorandum of which is annexed hereto-A`,
                        `By order of the Court`
                    ]
                }
            ],
            footer: [
                {
                    left: [`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`, `${formData?.place || "«place»"}`],
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