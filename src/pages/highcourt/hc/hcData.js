import { tabSpace } from "../../../components/templates/elementTypes";

export const HCSections = (key, formData) => {
    let data = {
        "page1": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `CRL.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/\nRespondent/\nDefacto Complainant`,
                res: "...Respondents/\nPetitioners/\n Accused"
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT FILED BY THE PETITIONER/RESPONDENT", underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.   I am the deponent herein and defacto complainant in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, as such I am well acquainted with the facts of the case.`,
                        `2.   It is submitted that I have given a complaint before ${formData?.lowercourt || "«lowercourt»"}, against the petitioners herein (Accused No.____) and police registered a FIR vide ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} against the petitioners herein for Offences Punishable Under Sec.________.`,
                        `3.   I submit that the intervention of the well wishers and elders of the both parties settled the matter amicably out of the court. That due to the said reasons, I came forward to withdraw the complaint for which I am also executed an Affidavit stating that I am ready to withdraw the above said case.`,
                        `4.   It is submitted that the matter is settled out of the court, I am ready to withdraw the case against the petitioners considering all the above circumstances this Hon'ble Court may be pleased to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, otherwise the petitioners and their family members will suffer irreparable loss.`,
                        `${tabSpace(1)}Therefore, it is prayed that this Hon’ble Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        `${tabSpace(1)}Hence, this affidavit,`
                    ]

                }
            ],
            footer: [
                {
                    left: [
                        `Last page corrs…`,
                        "",
                        `Solemnly and sincerely affirm this`,
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        `and signed his name in my presence.`
                    ],
                    right: [`Deponent`]
                }
            ]
        },
        "page2": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL PETITION" },
            subTitle: { text: "(UNDER SEC. 320(2)OF THE Cr.P.C.)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `CRL.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/\nRespondent/\nDefacto Complainant`,
                res: "...Respondents/\nPetitioners/\nAccused"
            },
            headPara: [
                {
                    head: { text: "", underline: true },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [`Counsel For Petitioner`]
                }
            ]
        },
        "sidePage1": {
            right: {
                subTitle: { text: `${formData?.district || "«district»"} :: District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `CRL.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `COMPROMISE PETITION`, bold: true, underline: true },
                footer: [{
                    left: [
                        `Filed By:`,
                        `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                        `Advocate`,
                        `Counsel for Petitioner/Respondent`
                    ]
                }]
            }
        },
        "sidePage2": {
            right: {
                mainTitle: { text: "HIGH COURT", underline: true },
                subTitle: { text: "CRIMINAL PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `Crl.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `... Petitioner/\nRespondent`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}\nCounsel for Petitioner`, bold: true },
                        para: [``]
                    },
                    {
                        head: { text: `NATURE OF APPLICATION\n(UNDER SEC. 320(2) OF Cr.P.C.)` },
                        para: [``]
                    },
                    {
                        head: { text: "" },
                        para: [
                            `The Hon’ble High Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
        },
        "page3": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `CRL.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/Accused `,
                res: "...Respondents/\nDefacto Complainant"
            },
            headPara: [
                {
                    head: { text: "JOINT MEMO", bold: true, underline: true },
                    para: [
                        `May it please your lordship,`,
                        `1.   It is to submit that the allegation of the complaint is that`,
                        `2.   It is submitted that I have given a complaint before ${formData?.lowercourt || "«lowercourt»"}, against the petitioners herein (Accused No.____) and police registered a FIR vide ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} against the petitioners herein for Offences Punishable Under Sec.________.`,
                        `3.   I submit that the intervention of the well wishers and elders of the both parties settled the matter amicably out of the court. That due to the said reasons, I came forward to withdraw the complaint for which I am also executed an Affidavit stating that I am ready to withdraw the above said case.`,
                        `4.   It is submitted that the matter is settled out of the court, I am ready to withdraw the case against the petitioners considering all the above circumstances this Hon'ble Court may be pleased to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, otherwise the petitioners and their family members will suffer irreparable loss.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        `${tabSpace(1)}Hence, this Joint Memo.`
                    ]


                }
            ],
            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formData?.fdate || "«fdate»"}`,
                    ],
                    // right: [`Deponent`]
                },
                {
                    left: [``],
                    right: [`Petitioner No.1\n\n\nPetitioner No.2`]
                },
                {
                    left: [`Counsel for Petitioner`]
                },
                {
                    left: [`Counsel for Respondent`],
                    right: [`Respondent`]
                }
            ]
        },
        "page4": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "UNDER SEC. 320(6) OF CRIMINAL PROCEDURE CODE, 1973" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, bold: true },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `Crl.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/\nRespondent/\nDefacto Complainant`,
                res: "...Respondents/\nPetitioners/\nAccused"
            },
            headPara: [
                {
                    head: { text: "", underline: true },
                    para: [
                        `${tabSpace(1)}For the reasons stated in the Compromise Petition and Joint Memo, it is therefore prayed that this Hon'ble Court may be pleased to grant permission to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [`Counsel For Petitioner`]
                }
            ]
        },
        "sidePage3": {
            right: {
                subTitle: { text: `${formData?.district || "«district»"} :: District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `Crl.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }],
                middleHeader: { text: `PERMISSION PETITION`, bold: true, underline: true },
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
    }
    return data[key];
}