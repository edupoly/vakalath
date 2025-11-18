import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const caSections = (key, formData) => {
    let data = {
        "form51": {
            header: [{
                left: { text: "Form No.51", bold: true },
                right: { text: "Rule 128(C.R.P)", bold: true }
            }],
            mainTitle: { text: "Application for Certified Copies" },
            subTitle: { text: "IN THE COURT OF THE " + (formData?.district || "«district»") },
            headLines: [{
                head: { text: "" },
                lines: [
                    `O.S.No. ${formData?.osno || "«O.S.No.»"} of ${formData?.myear || "«myear»"}`
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
                        `${tabSpace(1)}It is requested that the Certified Copies for the documents undermentioned may be furnished to:`,
                        `${tabSpace(2)}Plaintiff: ${formData?.plaintiff_copy_to || "________________________"}`,
                        `${tabSpace(2)}Defendant: ${formData?.defendant_copy_to || "________________________"}`,
                        `${tabSpace(1)}The copies are urgently required for: ${formData?.purpose || "____________________________________"}`
                    ]
                }
            ],
            footer: [{
                left: [
                    `DATE: ${formData?.fdate || "«fdate»"}`,
                    `${formData?.place || "«place»"}`
                ],
                right: ["Counsel for the Applicant"]
            }]
        },
        "form51footer": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: "" },
                    lines: [
                        "",
                        "",
                        ""
                    ]
                }
            ],
            betweenSection: {
                pet: "",
                res: ""
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [""]
                }
            ],
            footer: [
                {
                    left: [
                        `Date: ${formData?.fdate || "«fdate»"}`,
                        `${formData?.station || "«station»"}`
                    ],
                    right: [
                        `${formData?.counsel_code1 || "«counsel_code1»"}`,
                        "Advocate for Petitioner/Plaintiff"
                    ]
                }
            ]
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
                    pet: "BETWEEN:"
                },

                headPara: [
                    {
                        head: { text: `${formData?.PETITIONER_NAME || "«PETITIONER_NAME»"}` },
                        para: ["…Plaintiff"]
                    },
                    {
                        head: { text: "AND" },
                        para: []
                    },
                    {
                        head: { text: `${formData?.respondent_name || "«respondent_name»"}` },
                        para: ["..Defendant"]
                    },
                    {
                        head: { text: "COPY APPLICATION", bold: true },
                        para: []
                    }
                ],

                footer: [
                    {
                        left: [
                            `FILED ON: ${formData?.fdate || "«fdate»"}`,
                            `FILED BY:`,
                            `M/s ${formData?.counsel_address1 || "«counsel_address1»"}`,
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