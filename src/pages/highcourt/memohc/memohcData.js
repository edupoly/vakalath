import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const memohcSections = (key, formData) => {
    let data = {
        "memohc": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `W.P.NO. OF ${formData?.myear || "«myear»"}`,
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "MEMO FOR PROOF OF SERVICE" },
                    para: [
                        `This Hon’ble High Court has directed to take personal notice to the respondents and sent through registered post with acknowledgment due, the notices have been served to the respondents. The acknowledgments are herewith filed.`,
                        `Hence this Memo.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                    right: ["Counsel for the Petitioner"]
                }
            ]
        },
        "sidePage": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `W.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: { text: `MEMO FOR PROOF OF SERVICE`, bold: true },
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
        }


    };

    return data[key];
};