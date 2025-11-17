import { tabSpace } from "../../../components/templates/elementTypes";

export const EXPEDITESections = (key,formData) => {
    let data = {
        page1:{

            headLines:[{
                head:{text:`${formData?.highcourt || "«highcourt»"}`,bold:true},
                lines:[
                    `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection:{
                pet:`..Petitioner/s`,
                res:`.Respondent/s`
            },
            headPara : [
                {
                    head:{text:`AFFIDAVIT`,bold:true,underline:true},
                    para:[
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I am the petitioner herein in the above Writ Petition and as such I am well acquainted with the facts of the case.`,
                        `2.	It is submitted that `,
                        `3.	In view of the above there is an urgency to decide this litigation.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to fix an early date for hearing the above WP.No._________ and pass such other order or orders as may deem fit and proper in the circumstances of the case.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left:[
                        `last page corrs.`
                    ],
                    right:[
                        `Deponent`
                    ]
                },
                {
                    left:[
                        `Solemnly and sincerely affirm this`,
                        `the day of  ${formData?.fdate || "«fdate»"}`,
                        `and signed his name in my presence.`
                    ]
                }
            ]
        },
        "151(1)":{
            mainTitle:{text:`MEMORANDUM OF WRIT PETITION MISCELLANEOUS PETITION`},
            subTitle:{text:`(UNDER SEC. 151 OF THE C.P.C.)`},
            headLines:[{
                head:{text:`${formData?.highcourt || "«highcourt»"}`},
                lines:[
                    `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection:{
                pet:`..Petitioner/Respondent`,
                res:`..Respondent/Writ Petitioner`
            },
            headPara : [{
                head:{text:""},
                para:[
                    `${tabSpace(1)}For the reasons stated in the accompanying counter affidavit it is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"}  and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                ]
            }],
            footer:[{
                left:[
                    `${formData?.place || "«place»"}`,
                    `DATE: ${formData?.fdate || "«fdate»"}`
                ],
                right:[
                    `Counsel for the Petitioner`
                ]
            }]
        },
        sidePage1:{
            right: {
                subTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `EXPEDITE PETITION\n\nTO FIX AN EARLY DATE FOR HEARING`, bold: true, underline: true },
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
        sidePage2:{
            right: {
                mainTitle: { text: "HIGH COURT", bold: true },
                subTitle: { text: "WRIT PETITION MISC.PETITION", bold: true, underline:true },
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
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `..Petitioner/s`
                },
                headPara: [
                    {
                        head: { text: `By\n M/s ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION\n(UNDER SEC. 151 C.P.C.)" , underline:true
                        },
                        para: [
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    },
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
    }
    return data[key];
}