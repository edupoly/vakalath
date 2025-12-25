import { tabSpace } from "../../../components/templates/elementTypes"
import { formatDate } from "../../../services/templateFunctions"

export const EXTENSIONSections = (key, formData) => {
    let data = {
        "482(1)": {
            mainTitle:{text:`MEMORANDUM OF CRIMINAL PETITION`},
            subTitle:{text:`UNDER SECTION 482 OF CRIMINAL PROCEDURE CODE, 1973`},
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                lines: [
                    `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    "IN",
                    `Crl.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `...Accused/Petitioner`,
                res: `...Complainant/Respondent`
            },
            headPara: [
                {
                    head:{text:""},
                    para:[`${tabSpace(1)}The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`]
                },
                {
                    head: { text: `EXTENSION OF INTERIM ORDERS`, bold: true, underline: true },
                    para: [
                        `1.	That the above Crl.P is filed against the ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}`,
                        `2.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to extend the interim stay order passed by this Hon’ble Court in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} until further orders in the interest of justice and to pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [
                        `Counsel For petitioner`
                    ]
                }
            ]
        },
        sidePage1:{
            right: {
                subTitle: { text: `${formData?.DISTRICT || "«district»"} :: District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `Crl.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `EXTENSION OF INTERIM ORDERS`, bold: true, underline: true },
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
                mainTitle: { text: "HIGH COURT", underline: true },
                subTitle: { text: "CRIMINAL PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `... Petitioner/Accused`
                },
                headPara: [
                    {
                        head: { text:`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION\n(UNDER SEC. 482 OF Cr.P.C.)"
                        },
                        para: [
                            `The Hon'ble Court may be pleased to extend the interim stay order passed by this Hon’ble Court in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} until further orders in the interest of justice and to pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    },
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
    return data[key]
}