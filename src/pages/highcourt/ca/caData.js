import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const caSections = (key, formData) => {
    let data = {
        "form51": {
            header: [{
                left: { text: "Form No.51", bold: true },
                right: { text: "Rule 128(C.R.P)", bold: true }
            }],
            mainTitle: { text: "Application for Certified Copies",bold:true },
            subTitle: { text: "IN THE COURT OF THE " + (formData?.district || "«district»"),bold:true },
            headLines: [{
                head: { text: "" },
                lines: [
                    `O.S.No. ${tabSpace(3)} of ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: ` Petitioner/Plaintiff`,
                res: ` Defendant/Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}It is requested that the Certified Copies for the documents undermentioned may be furnished to Plaintiff ____________________________________ Defendant ____________________________________ The copies are urgently required for: ____________________________________`
                    ]
                }
            ],
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `IN THE COURT OF THE` },
                        lines: [
                            `${formData?.district || "«district»"}`
                        ]
                    },
                    {
                        head: { text: `O.S.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: "….Plaintiff",
                    res: "….Defendant",
                },

                middleHeader:{ text: "COPY APPLICATION", bold: true },

                footer: [
                    {
                        left: [
                            `FILED ON: ${formData?.fdate || "«fdate»"}`,
                            `FILED BY:`,
                            `M/s ${formData?.counsel_address || "«counsel_address»"}`,
                            `Advocate`,
                            `ADVOCATE FOR PLAINTIFF`
                        ]
                    }
                ]
            }
        }

    }

    return data[key];
};