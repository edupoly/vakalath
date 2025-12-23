import { tabSpace } from "../../../components/templates/elementTypes";


export const DELAYREPSections = (key, formData) => {
    let data = {
        "151(1)": {
            subTitle: { text: "(UNDER SEC. 151 OF CIVIL PROCEDURE CODE)" },
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `M.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    "IN",
                    `Sr.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "VERIFIED PETITION", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}It is submitted that the above appeal filed having been aggrieved by the Order dated «OPDATE» passed in «OPNO», on the file of the «lowercourt», the above case was returned on _______ with office objections. For complying the office objection, the delay of ____ days is occurred. The delay is neither willful nor wanton.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to condone the delay of _____ days in re-presenting   Sr.No.___________  «myear» and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [{
                left: [
                    `${formData?.place || "«place»"}`,
                    `DATE: ${formData?.fdate || "«fdate»"}`
                ],
                right: [
                    `Counsel for the Petitioner`
                ]
            }]
        },
        "151(2)": {
            right:{
                subTitle: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `M.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `Sr.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: "DELAY IN RE-PRESENTATION PETITION", bold: true, underline: true },
                footer :[{
                    left:[
                        `Filed By:`,
                        `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                        "Advocate",
                        "Counsel for Petitioner"
                    ]
                }]
            }
        }
    }

    return data[key];
}