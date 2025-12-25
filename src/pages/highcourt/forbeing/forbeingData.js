import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const forbeingSections = (key, formData) => {
    let data = {
        affidavit: {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `W.P. NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },

            headPara: [
                {
                    head: { text: "AFFIDAVIT", bold: true, underline: true },
                    para: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,

                        `1. I submit that I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,

                        `2. I submit that I am the petitioner in WPMP.No._________ in WP.No.________.In that`,
                        `I submit that due to clerical mistake the proceedings was typed as ________________ instead of _____________. It is neither wilful nor wanton. It is only a clerical mistake. Accordingly it was typed in the order copy as proceedings _______________________.`,

                        `It is therefore prayed that this Hon'ble Court may be pleased to take this matter as "For Being Mention" and direct the office to correct the order as proceedings _____________ instead of __________________________ ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ],
                }
            ],

            footer: [
                {
                    left: [`last page corrs.`],
                    right: ["Deponent"]
                },
                {
                    left: [
                        `Solemnly and sincerely affirm this`,
                        `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                        `and signed his name in my presence.`,
                        `BEFORE ME`,
                        `ADVOCATE :: ${formData?.place || "«place»"}`
                    ]
                },
                {
                    head: "VERIFICATION STATEMENT",
                    left: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, being the petitioner/person acquainted with the facts, do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. Hence verified at ${formData?.place || "«place»"} on this the day of ${formatDate(formData?.fdate) || "«fdate»"}.`
                    ],
                    right: ["Deponent"]
                }
            ]
        },
        "151": {
            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF C.P.C)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
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
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased to take this matter as "For Being Mention" and direct the office to correct the order as proceedings _____________ instead of ______________________  «INTERIM_PRAYER» and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                },

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
        "sidePage1": {
            right: {
                headLines: [
                    { head: { "text": `${formData?.DISTRICT || "«DISTRICT»"} :: District` }, lines: [] },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                ],
                middleHeader: { text: `FOR BEING MENTION PETITION`, bold: true, underline: true },
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
        "sidePage2": {
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `(WRIT PETITION MISC.PETITION)`, bold: true , underline: true},
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
                        head: { text: `By M/s ${formData?.counsel_code  || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: `NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)` },
                        para: [
                            `The Hon’ble Court may be pleased to take this matter as "For Being Mention" and direct the office to correct the order as proceedings ________ instead of _________________ ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
    };
    return data[key];
};