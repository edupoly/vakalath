import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const xobjSections = (key, formData) => {
    let data = {
        "41-22": {
            mainTitle: { text: "MEMORANDUM OF CROSS OBJECTIONS" },
            subTitle: { text: "(Under Order-41, Rule-22 of Civil Procedure Code)" },

            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `CROSS OBJECTIONS No.      OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `L.A.A.S.No.              OF ${formData?.myear || "«myear»"}`,
                    `Against`,
                    `${formData?.OPNO || "«OPNO»"}`,
                    `In the court of the ${formData?.lowercourt || "«lowercourt»"}`
                ]
            }],

            betweenSection: {
                pet: `...Cross Objector/Respondent`,
                res: `...Appellant/Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}The address for service of all notices and process on the above named Cross Objector is that of his counsel ${formData?.counsel_address || "«counsel_address»"}.`,
                        `${tabSpace(1)}The above named Cross Objector begs to present this Memorandum of Cross Objections in L.A.A.S.No.______ against the Order/Judgment dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, passed in ${formData?.OPNO || "«OPNO»"}, on the file of ${formData?.lowercourt || "«lowercourt»"}.`,
                        `${tabSpace(1)}The notice is received in the above L.A.A.S.No._____ on ___________ and the above Cross Objections are being filed with a petition to condone the delay for the following among other:`
                    ]
                },

                {
                    head: { text: "GROUNDS" },
                    para: [
                        `1.   The order and decree under the Cross Objections to the extent of claims of the Cross Objector which are not considered by the Court below are illegal, contrary to law and facts, weight of evidence and probabilities of the case.`,
                        `2.`,
                        `3.`,
                        `4.`,
                        `5.   Any other grounds would be urged at the time of hearing.`,
                        `${tabSpace(1)}In the circumstances submitted above, it is therefore humbly prayed that this Hon’ble Court may be pleased:`,
                        `a)   To allow the Cross Objections as prayed for`,
                        `b)   To award costs of this Cross Objections`,
                        `c)   And to pass such other order or orders which are deemed fit and just.`
                    ]
                }
            ],

            footer: []
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `Cross Objections No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `L.A.A.S.No.${tabSpace(20)}OF ${formData?.myear || "«myear»"}`,
                            `Against`,
                            `${formData?.OPNO || "«OPNO»"}`,
                            `In the court of the ${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],
                middleHeader: { text: "CROSS OBJECTION GROUNDS", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Cross Objector`
                        ]
                    }
                ]
            }
        },
        "affidavit": {
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No.          OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `CROSS OBJECTIONS No.          OF ${formData?.myear || "«myear»"}`
                ]
            }],

            betweenSection: {
                pet: `\n..Petitioner/s`,
                res: `\n...Respondent/s`
            },

            mainTitle: { text: "A F F I D A V I T" },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2.   I submit that ________`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [
                    "Last Page Cross....",
                    `Sworn and Signed in my presence on this day of ${formatDate(formData?.fdate) || "«fdate»"} at ${formData?.place || "«place»"}.`
                ],
                right: ["Deponent"]
            }]
        },
        "151": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },

            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No.          OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `CROSS OBJECTIONS No.          OF ${formData?.myear || "«myear»"}`
                ]
            }],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [`${formData?.place || "«place»"}`],
                right: ["Counsel for the Petitioner"]
            }]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.NO.${tabSpace(12)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Cross Objections No.${tabSpace(9)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: "DIRECTION PETITION", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Cross Objector`
                        ]
                    }
                ]
            }
        },
        "5": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 5 OF LIMITATION ACT)" },

            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No.          OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `CROSS OBJECTIONS No.          OF ${formData?.myear || "«myear»"}`
                ]
            }],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to condone the delay of (     ) days in filing the above LA.A.S. in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"} otherwise the petitioner will suffer irreparable loss and hardship and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                right: ["Counsel for the Petitioner"]
            }]
        },
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.NO.${tabSpace(5)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Cross Objections No.${tabSpace(8)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: "DELAY PETITION", bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Cross Objector`
                        ]
                    }
                ]
            }
        },
        "sidePage4": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CROSS OBJECTIONS MISC.PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Cross Objections NO.${tabSpace(7)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: ` ... Cross Objector`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
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
                subTitle: { text: "CROSS OBJECTIONS MISC.PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Cross Objections NO.${tabSpace(7)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: ` ... Cross Objector`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased to condone the delay of (     ) days in filing the above AS in ${formData?.OPNO || "«OPNO»"} dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of the ${formData?.lowercourt || "«lowercourt»"}; otherwise the petitioner will suffer irreparable loss and hardship, and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
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
            left: {
                left: [
                    { "text": "Notice put up on Board" },
                    { "text": "" },
                    { "text": "Hearing fixed " },
                    { "text": "" },
                    { "text": "Record Called for" },
                    { "text": "" },
                    { "text": "Notice sent to Respondent" },
                ],
                right: [
                    { "text": "«myear»" },
                    { "text": "" },
                    { "text": "«myear»" },
                    { "text": "" },
                    { "text": "«myear»" },
                    { "text": "" },
                    { "text": "«myear»" },
                ]
            },
            right: {
                headLines: [
                    {
                        head: { text: `Under Order-41, Rule-22, R/w.Sec.151 of Civil Procedure Code` },
                        lines: []
                    },
                    {
                        head: { text: `HIGH COURT` },
                        lines: []
                    },
                    {
                        head: { text: `CROSS OBJECTIONS` },
                        lines: []
                    },
                    {
                        head: { text: `NO.${tabSpace(17)}OF ${formData?.myear || "«myear»"}` },
                        lines: []
                    },
                    {
                        head: { text: `IN` },
                        lines: [
                            `L.A.A.S.No.${tabSpace(16)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `Against` },
                        lines: [
                            `${formData?.OPNO || "«OPNO»"}`,
                            `In the court of the`,
                            `${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: ` ... Cross Objector` },
                        lines: []
                    },
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)` },
                        lines: [
                            `Advocate`
                        ]
                    }
                ]
            }
        }


    }

    return data[key];
};