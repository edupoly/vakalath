import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const ceaSections = (key, formData) => {
    let data = {
        "35G": {
            header: [],

            mainTitle: { text: "Memorandum of Central Excise Appeal" },
            subTitle: { text: "(Under Section 35(G) of the Customs Act, 1962)" },

            headLines: [
                {
                    head: { text: "Before the Assistant Commissioner of Central Excise, _____________" },
                    lines: [
                        "Order in Original No.__________, Dt.________"
                    ]
                },
                {
                    head: { text: "Before the Commissioner of Customs and Central Excise, ___________" },
                    lines: [
                        "Order in Appeal No.______________, Dated. _______"
                    ]
                },
                {
                    head: { text: "In the Customs, Excise and Service Tax Appellate Tribunal, South Zonal Bench, Bangalore" },
                    lines: [
                        "Appeal No._______, Final Order No.________, Dated. _______"
                    ]
                },
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `C.E.A.NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.petitioner_address || "«petitioner_address»"}...Appellant/s`,
                res: `${formData?.respondent_address || "«respondent_address»"}...Respondent/s`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service of all notices and process on the above named Appellant is that of his counsel ${formData?.counsel_address || "«counsel_address»"}.`,
                        `The address for the above purpose of service of notice on the respondent is the same as given above.`,
                        `The above named Appellant begs to present this Memorandum of Central Excise Appeal being aggrieved by the Final Order No._________, dated _______ passed in Appeal No. _______ by the Customs, Excise and Service Tax Appellate Tribunal, South Zonal Bench, Bangalore. The certified copy of CESTAT order is received on _______.`
                    ]
                },
                {
                    head: { text: "BRIEF FACTS:" },
                    para: [
                        "1.",
                        "2.",
                        "3."
                    ]
                },
                {
                    head: { text: "GROUNDS OF APPEAL" },
                    para: [
                        "1.1). The Order of the Appellate Tribunal is contrary to law.",
                        "1.2).",
                        "1.3). Thus, the Hon’ble Tribunal erred in allowing the refund amount even in cases where no excess payment of duty was made by the respondent."
                    ]
                },
                {
                    head: { text: "Substantial Question of Law" },
                    para: [
                        "a) Whether the Hon’ble Tribunal is right in allowing",
                        "b) Whether the Hon’ble Tribunal is right in holding",
                        "c) Whether the Hon’ble Tribunal is right in allowing"
                    ]
                },
                {
                    head: { text: "PRAYER:" },
                    para: [
                        `It is therefore prayed in the interest of justice that the Hon’ble High Court may be pleased to allow the appeal by duly setting aside the Final Order No.______ dated _____ passed in Appeal No._______ by the Customs, Excise and Service Tax Appellate Tribunal, South Zonal Bench, Bangalore and pass such other order as the Hon’ble Court may deem fit and proper in the facts and circumstances of the case.`
                    ]
                },
                {
                    head: { text: "Memo of Valuation:" },
                    para: [
                        `The value of the appeal is Rs._______ and fixed Court of Rs.200/- is exempted under Section 35(G) of Central Excise Act 1944.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`,
                        `DATE:${formData?.fdate || "«fdate»"}`
                    ],
                    right: [
                        "Counsel For Appellant"
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
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `CEA.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `AGAINST`,
                            `Appeal No.______,`,
                            `Final Order No._____, dated ___`
                        ]
                    }
                ],

                middleHeader: {
                    text: "Memorandum of Central Excise Appeal",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Appellant`
                        ]
                    }
                ]
            }
        },
        "affidavit": {
            header: [],

            mainTitle: { text: "AFFIDAVIT" },
            subTitle: { text: "" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.E.A.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.petitioner_name || "«petitioner_name»"}...Petitioner`,
                res: `${formData?.respondent_name || "«respondent_name»"}...Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I submit that`,
                        ``,
                        `It is therefore prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `Last Page Corss....`,
                        `Sworn and Signed in my presence on this day of ${formData?.fdate || "«fdate»"} at ${formData?.place || "«place»"}`
                    ],
                    right: [
                        "Deponent"
                    ]
                }
            ]
        },
        "151": {
            header: [],

            mainTitle: { text: "MEMORANDUM OF CIVIL MISC. PETITION" },
            subTitle: { text: "UNDER SEC. 151 OF CIVIL PROCEDURE CODE" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.E.A.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.PETITIONER_ADDRESS || "«PETITIONER_ADDRESS»"}..Petitioner`,
                res: `${formData?.RESPONDENT_ADDRESS || "«RESPONDENT_ADDRESS»"}..Respondent`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
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
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.E.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DIRECTION PETITION",
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
        "sidePage3": {
            right: {
                headLines: [
                    {
                        head: { text: `${formData?.DISTRICT || "«DISTRICT»"} District` },
                        lines: []
                    },
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `C.E.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "CIVIL MISC. PETITION",
                    bold: true,
                    underline: true
                },

                footer: [
                    {
                        left: [
                            `${formData?.PETITIONER_NAME || "«PETITIONER_NAME»"}`,
                            `... Petitioner`,
                            `By ${formData?.counsel_code || "«counsel_code»"}`,
                            ``,
                            `NATURE OF APPLICATION`,
                            `(UNDER SEC. 151 C.P.C.)`,
                            ``,
                            `The Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                            ``,
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `REPRESENTED ON:`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
        "notice": {
            header: [],

            mainTitle: { text: "HIGH COURT" },
            subTitle: { text: "CIVIL MISC. PETITION" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. ${formData?.IANO || "«IANO»"} OF ${formData?.myear || "«myear»"} IN C.E.A.No. ${formData?.CEANO || "«CEANO»"} OF ${formData?.myear || "«myear»"}`,
                        `AGAINST`,
                        `${formData?.OPNO || "«OPNO»"} On the file of the ${formData?.lowercourt || "«lowercourt»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `${formData?.PETITIONER_NAME || "«PETITIONER_NAME»"}..Petitioner/s`,
                res: `${formData?.RESPONDENT_NAME || "«RESPONDENT_NAME»"}..Respondent/s`,
                resAddress: `${formData?.respondent_address || "«respondent_address»"}`
            },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `Take Notice that the Appellant/Petitioner (Respondent) has/have presented a petition to the Court praying that under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day of ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order of the Court dated the ______ of ______ «myear». The affidavit of ${formData?.affidavit_name || "«affidavit_name»"} has been filed in support thereof. Dated at ${formData?.place || "«place»"} this ______ day of ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                        `REPRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                        `FILED ON: ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [
                        `Advocate for Petitioner`
                    ]
                }
            ]
        },
        "ServiceCertificate": {
            header: [],

            mainTitle: { text: "SERVICE CERTIFICATE" },
            subTitle: { text: "(PROOF OF SERVICE)" },

            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `We have served the copies of C.E.A Grounds, Affidavit, Miscellaneous Petition(s) and Material Papers on the other side Counsel/Government Pleader.`
                    ]
                }
            ],

            footer: [
                {
                    left: [
                        `${formData?.place || "«place»"}`
                    ],
                    right: [
                        `Counsel for the Petitioner/s`,
                        `DATE: ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ]
        }


    }

    return data[key];
};