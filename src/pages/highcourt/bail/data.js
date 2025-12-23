import { tabSpace } from "../../../components/templates/elementTypes";
import { advocateDetails, formatDate } from "../../../services/templateFunctions";

export const bailSections = (key, formData) => {
    let data = {
        "437_439": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "UNDER SECTION 389(1) OF CRIMINAL PROCEDURE CODE, 1973" },
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No. ${tabSpace(3)} OF ${formData?.myear || "«myear»"} `,
                    `IN`,
                    `Crl.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"} `
                ]
            }],
            betweenSection: {
                pet: `...Accused / Appellant`,
                res: `...Complainant / Respondent`
            },
            headPara: [
                {
                    head: { text: "PETITION FILED UNDER SECTION 437 & 439 OF Cr.P.C. FOR THE GRANT OF BAIL", bold: true, underline: true },
                    para: [
                        "DATE OF OFFENCE:",
                        "PLACE OF OFFENCE:",
                        "OFFENCE UNDER SECTION:",
                        "DATE OF REMAND:",
                        "May it please your Lordship,",
                        "The petitioner above named submits as follows:",
                        "Petitioner humbly submits that,",
                        "1. The petitioner is innocent, not guilty and has no knowledge about the alleged offence. There is no whisper about the involvement of the petitioner in the FIR/Panchanama.",
                        "2. The petitioner shall abide by any conditions imposed by this Hon'ble Court while granting bail.",
                        "3. That the case of the prosecution is denied by the petitioner and the case registered is false, foisted and motivated.",
                        "4. The petitioner submits that he filed a bail application vide Crl.M.P.No.________ before the Hon'ble ___________ and the same was dismissed on ______. The petitioner is in Jail since _______.",
                        "5. The petitioner submits that he is approaching this Hon'ble Court U/s.439 of Cr.P.C. for the first time.",
                        "6. The officials arrested the petitioner herein on _______ and he is in ______ Jail.",
                        `${tabSpace(1)} It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                },
            ],
            footer: [{
                left: [
                    `DATE:${formatDate(formData?.fdate) || "«fdate»"}`,
                    `${formData?.place || "«place»"}`
                ],
                right: [`Counsel For petitioner`]
            }],
            note: {
                head: { text: "Note:", bold: true },
                lines: [
                    `Accused in ${formData?.jailname || "___________"} Jail.`,
                    `Bail to the satisfaction of the JFCM, ${formData?.jfcmlocation || "_____________"}.`
                ]
            }
        },
        sidePage1: {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `Crl.P. NO.${tabSpace(5)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `${formData?.OPNO || "«OPNO»"},`,
                            `dated ${formatDate(formData?.OPDATE) || "«OPDATE»"},`,
                            `of ${formData?.lowercourt || "«lowercourt»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "PETITION FILED U/Sec.\n437 & 439 OF Cr.P.C.\nFOR GRANT OF BAIL",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            ...advocateDetails(formData?.userDetails),
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "memo_appearance": {
            mainTitle: { text: "MEMO OF APPEARANCE" },
            subTitle: { text: "" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `CRL.P.No.${tabSpace(5)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `(${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"})`
                    ]
                }
            ],

            betweenSection: {
                pet: `...Petitioner/Accused`,
                res: `...Respondent/Complainant`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `I ${formData?.counsel_address || "«counsel_address»"} hereby declare that I have been duly entrusted and engaged by ${formData?.Petitioners[0]?.Name|| "<<petitionerName>>"}, Aged about: ${formData?.Petitioners[0]?.Age|| "<<petitionerAge>>"} Years, ${formData?.Petitioners[0]?.Address|| "<<petitionerAddress>>"}, Person interested in accused to file the present bail application on behalf of the accused.`,
                        `Kindly enter my case as Counsel for the Petitioner/Accused in the above case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        "Signature of the Person",
                        "Interested in Accused"
                    ],
                    right: [
                        "Counsel for Petitioner"
                    ]
                }
            ],
        },
        sidePage2: {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `Crl.P. NO.                       OF ${formData?.myear || "«myear»"}`,
                            "IN",
                            `(${formData?.OPNO || "«OPNO»"},`,
                            `dated ${formatDate(formData?.OPDATE) || "«OPDATE»"},`,
                            `of ${formData?.lowercourt || "«lowercourt»"})`
                        ]
                    }
                ],

                middleHeader: {
                    text: "MEMO OF APPEARANCE",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            "Filed By:",
                            ...advocateDetails(formData?.userDetails),
                            "Counsel for Petitioner"
                        ]
                    }
                ]
            }
        },
        sidePage3: {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CRIMINAL PETITION", bold: true },

                headLines: [
                    {
                        head: { text: "" },
                        lines: [
                            `CRL.M.P.NO.                   OF ${formData?.myear || "«myear»"}`,
                            "IN",
                            `CRL.P.No.                    OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«district»"}    District` },
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
                        head: { text: "NATURE OF APPLICATION\n(UNDER SEC. 437 & 439 Cr.P.C.)" },
                        para: [
                            `The Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],

                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
                            "REPRESENTED ON:",
                            `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`
                        ]
                    }
                ]
            }
        },

    }

    return data[key];
};