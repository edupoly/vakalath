import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const petpetrSections = (key, formData) => {
    let data = {
        "affidavit": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `W.P. NO. OF ${tabSpace(3)} ${formData?.myear || "«myear»"}`,
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `I submit that`,
                        `It is therefore prayed that this Hon'ble Court may be pleased to bring the Petitioners No._____ on record as Legal representatives of the deceased Writ Petitioner in above W.P.No__________ as petitioner No.____ ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        `BEFORE ME`,
                        `ADVOCATE :: ${formData?.place || "«place»"}`,
                        `VERIFICATION STATEMENT`,
                        `I, ${formData?.verification || "«verification»"}, being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge.  Hence verified at ${formData?.place || "«place»"} on this the day of ${formData?.fdate || "«fdate»"}`,
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `last page corrs.`,
                        `Solemnly and sincerely affirm this`,
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        `and signed his name in my presence.`,
                    ],
                    right: [`Deponent`]
                }
            ]
        },
        "151": {
            mainTitle: { text: "MEMORANDUM OF WRIT PETITION MISC. PETITION" },
            subTitle: { text: "(UNDER ORDER-XXII, RULE-4  R/W.SEC. 151 OF THE C.P.C.)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.NO. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `W.P. NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner\n\n..Proposed Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit filed in support of the above Writ Petition it is hereby prayed that this Hon'ble Court may be pleased to bring the Petitioners No._____ on record as Legal representatives of the deceased Writ Petitioner in above W.P.No__________ as Petitioner No.____ ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`],
                    right: ["Counsel for the Petitioner", `DATE: ${formData?.fdate || "«fdate»"}`]
                }
            ]
        },
        "sidePage1": {
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
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: `L.R. PETITION`, bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed by:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `HIGH COURT` },
                        lines: [
                            `WRIT PETITION MISC.PETITION`,
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: ` ... Petitioner/s`
                },
                headPara: [
                    {
                        head: { text: `By M/s ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: `NATURE OF APPLICATION (Under Order-XXII, Rule-3, R/w.Sec. 151 C.P.C.)` },
                        para: [
                            `The Hon’ble Court may be pleased to bring the Petitioners No.${formData?.PET_NO || "_____"} on record as Legal representatives of the deceased Writ Petitioner in above W.P.No.${formData?.WPNO || "_______"} as petitioner ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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