import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";


export const DISPENSESections = (key, formData) => {
    let data = {
        "482(1)": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 482 OF CRIMINAL PROCEDURE CODE)" },
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    "IN",
                    `CRL.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "DISPENSEWITH PETITION", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}That the above Criminal Petition is filed seeking to ________ the order passed in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}  on the file of ${formData?.lowercourt || "«lowercourt»"} and the petitioner did not obtained the certified copies of the said  ${formData?.OPNO || "«OPNO»"} and hence filed the photocopy of the same and the same may be dispensed with.`,
                        `${tabSpace(1)}For the reasons stated in the accompanying criminal petition, it is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}  on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [{
                left: [
                    `${formData?.place || "«place»"}`,
                    `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`
                ],
                right: [
                    `Counsel for the Petitioner`
                ]
            }]
        },
        "482(2)": {
            right: {
                subTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `CRL.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: "DISPENSEWITH PETITION", bold: true, underline: true },
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
        "482(3)": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CRIMINAL MISC.PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `CRL.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)"
                        },
                        para: [
                            `The Hon’ble Court may be pleased to dispense with certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of «lowercourt» before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
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

    return data[key];
}