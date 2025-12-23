import { tabSpace } from "../../../components/templates/elementTypes";


export const IMPLEADSections = (key, formData) => {
    let data = {
        "page1": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [`W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: "..Respondent"
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT FILED BY IMPLEAD / PROPOSED  RESPONDENT No.", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I submit that I am the Proposed Respondent No.___ and Implead Petitioner and I am the _________ and as such I am well acquainted with the facts of the case.`,
                        `2.   I submit that this affidavit may be read as affidavit filed in support of the implead petition and also this may be read as counter affidavit in this writ petition.`,
                        `3.   I read the petitioner's affidavit filed in support of writ petition. I submit that it does not disclose any valid or substantial grounds to issue any relief as prayed for. The petitioner is put to strict proof of the allegations which are denied, except to the extent of specifically admitted hereunder. The petitioner has not approached with clean hands. I submit that the writ petition is not maintainable and the same is liable to be dismissed.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} pass orders impleading Mr.______________ as Respondent No.__ in WP.No.__________ and WPMP.No.______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} vacate the interim orders granted in WP.No._________ and WPMP.No.______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `Last page corrs`,
                        `Solemnly and sincerely affirm this`,
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        `and signed his name in my presence.`
                    ],
                    right: [`Deponent`]
                }
            ]
        },
        "page2": {
            mainTitle: { text: "MEMORANDUM OF WRIT PETITION MISC. PETITION" },
            subTitle: { text: "(UNDER SEC.16(A) OF WRIT RULES)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/Proposed Respondent No. Implead Petitioner`,
                res: "..Respondent"
            },
        },
        "sidePage1": {
            right: {
                subTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `IMPLEAD PETITION`, bold: true, underline: true },
                footer: [{
                    left: [
                        `Filed By:`,
                        `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                        `Advocate`,
                        `Counsel for Petitioner`
                    ]
                }]
            }
        },
        "page3": {
            mainTitle: { text: "MEMORANDUM OF WRIT PETITION MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: "..Respondent/s"
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} vacate the interim orders granted in WP.No._______ and WPMP.No._______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formData?.fdate || "«fdate»"}`,
                    ],
                    right: [`Counsel for the Petitioner`]
                }
            ]
        },
        "sidePage2": {
            right: {
                subTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `VACATE PETITION`, bold: true, underline: true },
                footer: [{
                    left: [
                        `Filed By:`,
                        `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                        `Advocate`,
                        `Counsel for Petitioner`
                    ]
                }]
            }
        },
        "sidePage3": {
            // left:{
            //     h3Left: [{text:"Presented"},{text:"Represented"},{text:"Admitted"},]
            // },
            right: {
                mainTitle: { text: "HIGH COURT" },
                // subTitle: { text: "WRIT VACATE MISC.PETITION", bold:true,underline:true },
                headLines: [
                    {
                        head: { text: "WRIT VACATE MISC.PETITION", bold: true, underline: true },
                        lines: [
                            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: [``]
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
                        head: {
                            text: "NATURE OF APPLICATION"
                        },
                        para: [`(Under Sec.16A of Writ Rules)`]
                    },
                    {
                        head: { text: `` },
                        para: [
                            `The Hon’ble Court may be pleased  ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} pass orders impleading  Mr.______________ as Respondent No.__ in WP.No.__________ and WPMP.No.______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ],
                    }
                ]
            }
        },
        "sidePage4": {
            // left:{
            //     h3Left: [{text:"Presented"},{text:"Represented"},{text:"Admitted"},]
            // },
            right: {
                mainTitle: { text: "HIGH COURT" },
                // subTitle: { text: "WRIT VACATE MISC.PETITION", bold:true,underline:true },
                headLines: [
                    {
                        head: { text: "WRIT VACATE MISC.PETITION", bold: true, underline: true },
                        lines: [
                            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: [``]
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
                        head: {
                            text: "NATURE OF APPLICATION"
                        },
                        para: [`(Under SEC. 151 C.P.C.)`]
                    },
                    {
                        head: { text: `` },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} vacate the interim orders granted in WP.No._______ and WPMP.No._______ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ],
                    }
                ]
            }
        },
    }
    return data[key];
}