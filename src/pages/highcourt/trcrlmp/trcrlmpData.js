import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const trcrlmpSections = (key, formData) => {
    let data = {
        "affidavit": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `TR.CRL.P.No. ${formData?.TRCRLNo || "«TRCRLNo»"} OF ${formData?.myear || "«myear»"}`,
                        `Against`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I submit that`,
                        `3.`,
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        `It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                   //"last page corrs.",
"",
                        `Solemnly and sincerely affirm this`,
                        `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: [
                        "Deponent"
                    ]
                }
            ]
        },
        "407": {
            mainTitle: { text: "MEMORANDUM OF TRANSFER CRIMINAL PETITION" },
            subTitle: { text: "(PETITION FILED UNDER SEC. 407  OF CR.P.C)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `TR.CRL.P.No. ${formData?.TRCRLNo || "«TRCRLNo»"} OF ${formData?.myear || "«myear»"}`,
                        `Against`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service on the above named Petitioners is that of their counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deem fit just and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`],
                    right: [
                        "Counsel for the Petitioner",
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `«DISTRICT» District` },
                        lines: []
                    },
                    {
                        head: { text: `«highcourt»` },
                        lines: [
                            `TR.CRL.P.NO.${tabSpace(3)} OF «myear»`,
                            `AGAINST`,
                            `«OPNO»`,
                            `On the file of the`,
                            `«lowercourt»`
                        ]
                    }
                ],

                middleHeader: {
                    text: "TRANSFER CRIMINAL PETITION",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "407(6)": {
            mainTitle: { text: "MEMORANDUM OF TRANSFER CRIMINAL PETITION" },
            subTitle: { text: "(PETITION FILED UNDER SEC. 407(6) OF CR.P.C)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `TR.CRL.P.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `TR.CRL.M.P.No. OF ${formData?.myear || "«myear»"}`,
                        `Against`,
                        `${formData?.OPNO || "«OPNO»"}`,
                        `In the court of the ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the affidavit filed in support of Transfer Criminal Petition, it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above transfer criminal petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`],
                    right: [
                        "Counsel for the Petitioner",
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                    ]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `«DISTRICT» District` },
                        lines: []
                    },
                    {
                        head: { text: `«highcourt»` },
                        lines: [
                            `TR.CRL.MP.NO.${tabSpace(3)} OF «myear»`,
                            `IN`,
                            `TR.CRL.P.NO.${tabSpace(3)} OF «myear»`
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
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "sidePage3": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "TRANSFER CRIMINAL PETITION", bold: true },

                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `TR.CRL.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 407 OF CR.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "TRANSFER CRIMINAL MISC. PETITION", bold: true },

                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `TR.CRL.P.M.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `TR.CRL.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 407 OF CR.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above transfer criminal petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
    }

    return data[key];
};