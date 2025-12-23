import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const quashSections = (key, formData) => {
    let data = {
        "482": {
            header: [],
            mainTitle: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
            subTitle: { text: "(MEMORANDUM OF CRIMINAL PETITION FILED U/S.482 OF CR.PC.)" },

            headLines: [
                {
                    head: { text: `` },
                    lines: [
                        `CRL.P.No.                        OF ${formData?.myear || "«myear»"}`,
                        "AGAINST",
                        `${formData?.OPNO || "«OPNO»"}`,
                        `(${formData?.lowercourt || "«lowercourt»"})`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.petitioner_address || "«petitioner_address»"} ...Petitioner/Accused`,
                res: `${formData?.respondent_address || "«respondent_address»"} ...Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}.`,
                        `This memorandum of criminal petition is filed under Sec.482 of Cr.P.C. to quash the proceedings dated ${formData?.OPDATE || "«OPDATE»"} in ${formData?.OPNO || "«OPNO»"} on the file of ${formData?.lowercourt || "«lowercourt»"}.`,
                        `It is submitted that the petitioner is Accused in ${formData?.OPNO || "«OPNO»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, registered under Section ________, questioning the same, the present criminal quash petition is filed on the following among other grounds:`
                    ]
                },
                {
                    head: { text: "GROUNDS" },
                    para: [
                        `1. That the petitioner submits that he is accused in ${formData?.OPNO || "«OPNO»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, registered under Section ________.`,
                        "2.",
                        "3. That the other grounds would be urged at the time of hearing.",
                        "",
                        `It is therefore prayed that this Hon'ble Court may be pleased to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, against the Petitioner/Accused and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        "",
                        `It is just and necessary that this Hon'ble Court may be pleased to grant stay of all further proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} including the appearance of the Accused till the disposal of the Main Quash Petition in the interest of justice and pass such other order or orders may deem fit and proper.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `DATE: ${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [
                        "Counsel for Petitioner"
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
                            `Crl.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "QUASH PETITION",
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
        "482-IA": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CRIMINAL PETITION" },
            subTitle: { text: "(UNDER SEC. 482 OF THE Cr.P.C.)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No.                  OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `CRL.P.No.                OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.petitioner_address || "«petitioner_address»"} ...Petitioner/Accused`,
                res: `${formData?.respondent_address || "«respondent_address»"} ...Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying quash petition grounds filed in support of the above criminal petition, it is therefore prayed that this Hon'ble Court may be pleased to grant stay of all further proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} including the appearance of the Accused till the disposal of the Main Quash Petition in the interest of the justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [
                        "Counsel For Petitioner"
                    ]
                }
            ]
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.district || "«district»"} :: District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "STAY PETITION",
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
        "482-dispense": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 482 OF CRIMINAL PROCEDURE CODE)" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No.                 OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `CRL.P.NO.               OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.PETITIONER_ADDRESS || "«PETITIONER_ADDRESS»"}..Petitioner/s`,
                res: `${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}..Respondent/s`
            },

            headPara: [
                {
                    head: { text: "DISPENSEWITH PETITION" },
                    para: [
                        `That the above Criminal petition is filed seeking to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} and the petitioner did not obtained the certified copies of the said ${formData?.OPNO || "«OPNO»"} and hence filed the photocopy of the same and the same may be dispensed with.`,
                        `For the reasons stated in the accompanying criminal petition, it is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [
                        "Counsel for the Petitioner"
                    ]
                }
            ]
        },
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `CRL.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DISPENSEWITH PETITION",
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
        "sidePage4": {
            right: {
                headLines: [
                    {
                        head: { text: "HIGH COURT" },
                        lines: []
                    },
                    {
                        head: { text: "CRIMINAL PETITION" },
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
                    pet: "... Petitioner"
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)` },
                        para: [`Counsel for Petitioner`]
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)"
                        },
                        para: [
                            `The Hon’ble High Court may be pleased to quash the proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, against the Petitioner/Accused and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
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
        "sidePage5": {
            right: {
                headLines: [
                    {
                        head: { text: "HIGH COURT" },
                        lines: []
                    },
                    {
                        head: { text: "CRIMINAL MISC.PETITION" },
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
                    pet: "... Petitioner"
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)` },
                        para: ["Counsel for Petitioner"]
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to grant stay of all further proceedings in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} including the appearance of the Accused till the disposal of the Main Quash Petition in the interest of the justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
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
        "sidePage6": {
            right: {
                headLines: [
                    {
                        head: { text: "HIGH COURT" },
                        lines: []
                    },
                    {
                        head: { text: "CRIMINAL MISC.PETITION" },
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
                    pet: "... Petitioner"
                },

                headPara: [
                    {
                        head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)` },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)" },
                        para: [
                            `The Hon’ble Court may be pleased to dispense with certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                        ]
                    }
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
        }
    }

    return data[key];
};