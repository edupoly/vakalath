import { tabSpace } from "../../../components/templates/elementTypes";
import { advocateDetails, formatDate } from "../../../services/templateFunctions";

export const AmendamentSections = (key, formData) => {
    let data = {
        "writ_affidavit": {
            mainTitle: { text: "" },

            headLines: [
                {
                    head: {
                        text: `${formData?.highcourt || "«highcourt»"}`,
                        allCaps: true,
                        bold: true,
                        size: 14
                    },
                    lines: [
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },

            headPara: [
                {
                    head: {
                        text: "AFFIDAVIT",
                        bold: true,
                        underline: true
                    },
                    para: [
                        `${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name || "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age || "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address || "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,

                        `1.${tabSpace(1)}I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.`,

                        `2.${tabSpace(1)}I submit that I am the writ petitioner in the above W.P. No. __________. I am filing this affidavit to amend the writ prayer in view of subsequent developments occurred after filing of the writ.`,

                        `3.${tabSpace(1)}I submit that`,

                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer as follows:`,

                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            // footer: [
            //     {
            //         left: [
            //             "last page corrs.",
            //             "Solemnly and sincerely affirm this",
            //             `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
            //             "and signed his name in my presence."
            //         ],
            //         right: ["Deponent"]
            //     }
            // ]
            footer: [{
                left: [
                    `${formData?.place || "«place»"}`,
                    `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                ],
                right: [
                    "Counsel for the Petitioner"
                ]
            }]
        },
        "151": {
            mainTitle: "MEMORANDUM OF WRIT PETITION MISC. PETITION",
            subTitle: "(UNDER SEC. 151 OF THE C.P.C.)",
            headLines: [
                {
                    head: {
                        text: `${formData?.highcourt || "«highcourt»"}`,
                        allCaps: true,
                        bold: true,
                        size: 14
                    },
                    lines: [
                        `I.A. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },

            headPara: [
                {
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit it is therefore prayed that this Hon'ble Court may be pleased to permit the petitioner to amend the prayer in W.P. No. ___________ as follows:`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [
                    `${formData?.place || "«place»"}`,
                    `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                ],
                right: [
                    "Counsel for the Petitioner"
                ]
            }]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}      District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                ],
                middleHeader: { text: "AMENDMENT PETITION", bold: true, underline: true },
                footer: [{
                    left: [
                        `Filed by:`,
                        ...advocateDetails(formData?.userDetails),
                        `Counsel for Petitioner`
                    ],
                }],
            }
        },
        "sidePage2": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true, size: 20 },
                subTitle: { text: "WRIT PETITION MISC.PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}     District` },
                        lines: []
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
                        head: { text: "NATURE OF APPLICATION\n(UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `This Hon’ble Court may be pleased to permit the petitioner to amend the prayer in WP.No.___________ as follows:`,
                            `This Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
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