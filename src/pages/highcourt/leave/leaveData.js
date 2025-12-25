import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";
import { formatDate } from "../../../services/templateFunctions";

export const leaveSections = (key, formData) => {
    let data = {
        "affidavit": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `Crl.A.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: ` ...Accused/Appellant`,
                res: ` ...Complainant/Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        "",
                        "1. I submit that I am the Appellant/Petitioner herein and as such I am well acquainted with the facts of the case.",
                        "2. I submit that ",
                        "3. ",
                        "",
                        `It is therefore prayed that this Hon'ble Court may be pleased to grant leave to the petitioner to file appeal against the order dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, by the ${formData?.lowercourt || "«lowercourt»"} in the interest of justice and pass such other order or orders as may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                   //"last page corrs.",
"",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: [
                        "Deponent"
                    ]
                }
            ]
        },
        "378(4)": {
            header: [],
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "UNDER SECTION 378 (4) OF CRIMINAL PROCEDURE CODE, 1973" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. ${formData?.IANo || "«IANo»"} OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `Crl.A.No. ${formData?.CrlANo || "«CrlANo»"} OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: "...Accused/Appellant",
                res: "...Complainant/Respondent"
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to grant leave to the petitioner to file appeal against the order dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, by the ${formData?.lowercourt || "«lowercourt»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
                        "Counsel For petitioner"
                    ]
                }
            ]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "LEAVE PETITION",
                    bold: true,
                    underline: true
                },

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
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: "HIGH COURT" },
                        lines: []
                    },
                    {
                        head: { text: "CRIMINAL PETITION" },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: "... Petitioner/Accused"
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 378 (4) Cr.P.C.)" },
                        para: [
                            `The Hon'ble Court may be pleased to grant leave to the petitioner to file appeal against the order dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} passed in ${formData?.OPNO || "«OPNO»"}, by the ${formData?.lowercourt || "«lowercourt»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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