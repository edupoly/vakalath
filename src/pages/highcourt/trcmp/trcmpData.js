import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const trcmpSections = (key, formData) => {
    let data = {
        "affidavit": {
            mainTitle: { text: "MEMORANDUM OF TRANSFER CRIMINAL MISC. PETITION" },
            subTitle: { text: "(AFFIDAVIT IN SUPPORT)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `Tr.C.M.P.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `NO. OF ${formData?.myear || "«myear»"}`
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
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"} now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I submit that`,
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        `It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
            ],
            footer: [
                {
                    left: ["last page corrs. Deponent", `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sec_24": {
            mainTitle: { text: "MEMORANDUM OF TRANSFER CIVIL MISC. PETITION" },
            subTitle: { text: "(PETITION FILED UNDER SEC.24 OF CIVIL PROCEDURE CODE)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `Tr.C.M.P.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `NO. OF ${formData?.myear || "«myear»"}`
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
                        `The address for service on the above named Petitioners is that of their counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `Tr.C.M.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "TRANSFER C.M.P",
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
        "151": {
            mainTitle: { text: "MEMORANDUM OF TRANSFER MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `Tr.C.M.P.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `NO. OF ${formData?.myear || "«myear»"}`
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
                        `For the reasons stated in the affidavit filed in support of the above Petition it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
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
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `Tr.C.MP.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                            `Tr.C.M.P NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                betweenSection: {
                    pet: `... Petitioner/s`
                },

                headPara: [
                    {
                        head: { text:`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
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
                            `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`
                        ]
                    }
                ]
            }
        }





    }

    return data[key];
};