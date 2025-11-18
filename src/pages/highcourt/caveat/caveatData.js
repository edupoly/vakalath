import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const caveatSections = (key, formData) => {
    let data = {
        "affidavit": {
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}` },
                lines: [
                    `CAVEAT PETITION No.                                     OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `W.P.No.                OF ${formData?.myear || "«myear»"}`,
                    `AGAINST`,
                    `${formData?.OPNO || "«OPNO»"}\n(${formData?.lowercourt || "«lowercourt»"})`
                ]
            }],

            betweenSection: {
                pet: `${formData?.petitioner_address || "«petitioner_address»"}\n...Petitioner/Caveator`,
                res: `${formData?.respondent_address || "«respondent_address»"}\n...Respondent`
            },

            
            headPara: [
                {
                    head: { text: "A F F I D A V I T" },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2.   I submit that ________`,
                        `3.   ________`,
                        `4.   That aggrieved thereby, the Respondents may file WP before this Hon'ble Court and obtain ex parte ad interim orders in WP and WPMP against ${formData?.OPNO || "«OPNO»"} dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"}. If any ex parte orders are obtained it will suffer serious and irreparable loss.`,
                        `${tabSpace(1)}It is prayed that this Hon'ble Court may be pleased to order notice to be served on our counsel ${formData?.counsel_address || "«counsel_address»"} before passing any orders on any Writ Petition or WPMP that may be filed against ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [
                    "last page corrs.",
                    `Solemnly and sincerely affirmed on this the day of ${formData?.fdate || "«fdate»"} and signed his name in my presence.`
                ],
                right: ["Deponent"]
            }]
        },
        "148A": {
            mainTitle: { text: "MEMORANDUM OF CAVEAT PETITION" },
            subTitle: { text: "(UNDER SECTION 148-A C.P.C.)" },

            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}` },
                lines: [
                    `CAVEAT PETITION No.                         OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `W.P.No.                               OF ${formData?.myear || "«myear»"}`,
                    `AGAINST`,
                    `${formData?.OPNO || "«OPNO»"}\n(${formData?.lowercourt || "«lowercourt»"})`
                ]
            }],

            betweenSection: {
                pet: `${formData?.petitioner_address || "«petitioner_address»"}\n...Petitioner`,
                res: `${formData?.respondent_address || "«respondent_address»"}\n...Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}For the reasons stated in above this Hon'ble Court may be pleased to order notice to be served on our counsel ${formData?.counsel_address || "«counsel_address»"} before passing any orders on any Writ Petition or WPMP that may be filed against ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [{
                left: [`Date: ${formData?.fdate || "«fdate»"}`, `${formData?.place || "«place»"}`],
                right: ["Counsel for Petitioner"]
            }]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `Caveat Petition No.${tabSpace(9)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `W.P.No.${tabSpace(7)}OF ${formData?.myear || "«myear»"}`,
                            `Against`,
                            `${formData?.OPNO || "«OPNO»"} (${formData?.lowercourt || "«lowercourt»"})`
                        ]
                    }
                ],
                middleHeader: { text: "CAVEAT PETITION", bold: true, underline: true },
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




    }

    return data[key];
};