import { text } from "@fortawesome/fontawesome-svg-core";
import { tabSpace } from "../../../components/templates/elementTypes";

export const pilSections = (key, formData) => {
    let data = {
        "affidavit": {
            mainTitle: { text: "Public Interest Litigation Affidavit" },
            subTitle: { text: "(Rule-4(e) the High Court of Judicature at Hyderabad for the State Telangana and the State of Andhra Pradesh Public Interest Litigation Rules, 2015)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        "CONTENTS OF WRIT PETITION (PIL)",
                        "I. Particulars of the cause/order against which the petition is made:",
                        "The writ petition is being filed in public interest aggrieved by the action of the Respondents in seeking ________________. The Public Interest Litigation therefore alleges violations of Statutes, Norms governing Public administration and Constitutional Court judgments in relation to such actions.",
                        "II. Particulars of the Petitioner:",
                        "1. The Petitioner herein is _________ and filed this Public Interest Litigation representing the cause as a public spirited individual and concerned with the general public. It is respectfully submitted that the Petitioner herein is not involved in any litigation either civil, revenue or criminal in any capacity before any Court or Tribunal.",
                        "A brief profile of the Petitioner is as follows:",
                        "i. ____",
                        "ii. A brief profile of the Petitioner is being filed herewith as Annexure P-1",
                        "2. Locus Standi: The Present Petition is being filed by way of Public Interest Litigation(PIL) and the Petitioner does not have any personal interest in the matter. This Petition is filed in the larger interest of the people. Therefore this Hon’ble court has got both territorial and pecuniary Jurisdiction to entertain the above PIL under the Public Interest Litigation Rules, 2015, since cause of action arose in the State of Telangana, which is well within the Jurisdiction of this Hon’ble court.",
                        "III. Declaration and understanding of the Petitioner:",
                        `${formData?.verification || "«verification»"}. The Petitioner is the native of _______`,
                        "The Petitioner herein declares and undertakes:",
                        "i. That the present Petition is being filed by way of a public Interest Litigation in the larger interest of the public and the Petitioner does not have any personal interest in the matter. The Petitioner is well acquainted with the facts and circumstances of the case.",
                        "ii. The entire litigation costs, including the advocate’s fee and other charges are being borne by the Petitioner from his personal expenditure.",
                        "iii. That thorough research has been conducted in the matter raised through the Petition.",
                        "iv. That to the best of the Petitioner’s knowledge and research, the issue raised has not been dealt with or decided and that a similar or identical petition has not been filed earlier by the Petitioner before a court of law.",
                        "v. That the Petitioner has understood that in the course of hearing of this petition the Court may require any security to be furnished towards costs or any other charges and the Petitioner shall have to comply with such requirements.",
                        "vi. That the Petitioner has never faced contempt of court proceedings.",
                        "vii. That the Petitioner has never been ordered by any Hon’ble Court not to file any further PIL cases.",
                        "viii. The Petitioner is primarily relying on the provisions of Constitution and State laws. The Petitioner is also relying on Journals, Articles drawn from various government websites and archives on Protection of Environment in various cities in India and the world.",
                        "IV. Facts in brief, constituting the cause:",
                        "Source of Information: It is submitted that the information of the facts _________ (declare the source of information of the facts pleaded in the petition and as to whether the petitioner has verified the facts personally, if yes in what manner?)",
                        "V. Nature and Injury Caused/apprehended:",
                        "1. It is submitted that the (nature and extent of injury caused/apprehended)",
                        "VI. Representations: It is respectfully submitted that aggrieved by the action of the Respondent ____________________. Thus, the Petitioners having left with no other alternative is approaching the Hon’ble Court for relief against such illegal acts.",
                        "VII. Delay, if any, In filing the Petition and Explanation: It is submitted that there is no delay in filing this Petition between the last representation and the filing this instant PIL, as this is a continuous cause of action. Therefore, in the event of this Hon’ble court coming to a conclusion that there is any delay in approaching this Hon’ble court, the same may be condoned. Aggrieved by the inaction the Respondents, the Petitioner has no other alternative and effective remedy except to approach this Hon’ble Court under Article 226 of the constitution of India. The Petitioner has not filed any other writ or proceedings before any other Court or Authority praying for the same relief sought for in this writ petition.",
                        "VIII. Material relied upon: Constitution of India, Supreme court and High Court Judgments and Articles on Sustainable Development, Precautionary Principle and Public Trust Doctrine, ____________________",
                        "IX. Relief(s) Prayed for: In view of the above submission, It is therefore prayed that this Hon’ble Court may be pleased to issue a writ, order or direction more particularly one in the nature of writ of mandamus to declaring the " + (formData?.MAIN_PRAYER || "«MAIN_PRAYER»") + " and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.",
                        `It is also just and necessary that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders may deem fit and proper in the circumstances of the case.`,
                        "X. Caveat: It is respectfully submitted that no notice has been received of lodging a caveat by the opposite parties."
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "last page corrs.",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: ["Deponent"]
                }
            ]
        },
        "affidavit_rule5": {
            mainTitle: { text: "Public Interest Litigation Affidavit" },
            subTitle: { text: "In Compliance with Rule 5 of the Public Interest Litigation Rules, 2015" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        "1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.",
                        `2. I state that my mail ID is ${formData?.email || "___________"}, mobile number ${formData?.mobile || "__________"}, Aadhar number ${formData?.aadhar || "___________"}, Bank Account No. ${formData?.bank || "___________"}, PAN Number ${formData?.pan || "___________"} and my address and all particulars furnished in the above cause title is true and correct.`,
                        "3. I am herewith annexing copies of Aadhar Card, Bank Account, PAN Card towards my identity and address proof as required under Rule-5(b) of the PIL Rules, 2015.",
                        "4. I submit that I did not face contempt of court proceedings under the Contempt of Courts Act, 1971.",
                        "5. I have not been ordered by this Hon’ble Court or any other court not to file Public Interest Litigation Cases.",
                        "6. I submit that I have not involved in any civil, criminal and revenue cases.",
                        "7. I am not a party in pending civil or criminal cases that has a nexus with the subject matter of the above public interest litigation case."
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "last page corrs.",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: ["Deponent"]
                }
            ]
        },
        "declaration_rule6": {
            mainTitle: { text: "Public Interest Litigation Declaration" },
            subTitle: { text: "Filed under Rule 6 of the Public Interest Litigation Rules, 2015" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "DECLARATION" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state on oath and declare that the writ petition (PIL) is being instituted purely in Public Interest and not at the instance of any other persons or organization other than the petitioner.`,
                        `Verified at ${formData?.place || "«place»"} on this day ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ],
            footer: [
                {
                    left: [],
                    right: ["Advocate", "Deponent"]
                }
            ]
        },
        "affidavit_rule7A": {
            mainTitle: { text: "Affidavit in Compliance with Rule 7A" },
            subTitle: { text: "Under the Public Interest Litigation Rules, 2015" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I hereby affirm and state on oath that I have no personal interest in the above subject matter of this petition. I hereby undertake to pay exemplary costs and/or compensatory damages as directed by the court if the writ petition (PIL) is filed for extraneous/personal considerations or with an oblique motive.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "last page corrs.",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: ["Deponent"]
                }
            ]
        },
        "declaration_rule8": {
            mainTitle: { text: "Declaration Filed Under Rule 8" },
            subTitle: { text: "Under the Public Interest Litigation Rules, 2015" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and declare that the questions made in the writ petition (PIL) have not been raised or agitated earlier and there are no other case(s) or petition(s) filed or that are pending before this Hon’ble Court or any other forum or court to the best of my knowledge and belief.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "Verified at",
                        `${formData?.place || "«place»"} on this day ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [
                        "Advocate",
                        "Deponent"
                    ]
                }
            ]
        },
        "affidavit_rule10": {
            mainTitle: { text: "AFFIDAVIT" },
            subTitle: { text: "In Compliance With Rule 10(a),(b),(c)&(e) of the Public Interest Litigation Rules, 2015" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1. I am the Petitioner herein and as such I am well acquainted with the facts of the case.`,
                        `2. I respectfully state that I have no personal gain, private motive or oblique reason in filing the present Public Interest Litigation.`,
                        `3. I hereby undertake to pay costs as ordered by the court, if it is ultimately held that the petition is frivolous or has been filed for extraneous consideration or that it lack bona fides.`,
                        `4. I hereby undertake that I will disclose the source of my information, leading to the filing of the Public Interest Litigation, if and when called upon by the court, to do so.`,
                        `5. I hereby undertake that I will disclose the source of my information, leading to the filing of the Public Interest Litigation, if and when called upon by the court, to do so.`,
                        `6. I hereby undertake that in case I seek to withdraw the petition or if I fail to attend the case by myself or through my advocate, I will bear the cost incurred by the respondent and pay such amount of additional costs as may be imposed in the discretion of the court.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "last page corrs.",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formData?.fdate || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: [
                        "Deponent"
                    ]
                }
            ]
        },
        "rule5_ab": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL).NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner(s)`,
                res: `.Respondent(s)`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby provide the following information in accordance with 5(a) and (b) of the Public Interest Litigation Rules, 2015.`
                    ]
                }
            ],
            footer: [
                {
                    left: [],
                    right: []
                }
            ]
        },
        "226": {
            mainTitle: { text: "MEMORANDUM OF WRIT PETITION" },
            subTitle: {
                text: "(SPECIAL ORIGINAL JURISDICTION)\n(UNDER ART. 226 OF THE CONSTITUTION OF INDIA)"
            },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `WP(PIL). NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `The address for service on the above named Petitioners is that of their counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `For the reasons stated in the accompanying affidavit, it is hereby prayed that this Hon'ble Court may be pleased to issue a writ, order or direction more particularly one in the nature of writ of mandamus to declaring the ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`
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
                            `WP(PIL). NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "WRIT PETITION",
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
        "151": {
            mainTitle: { text: "MEMORANDUM OF WRIT PETITION MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 151 OF THE C.P.C.)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A. NO. OF ${formData?.myear || "«myear»"}`,
                        "IN",
                        `WP(PIL). NO. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `For the reasons stated in the affidavit filed in support of the above Writ Petition it is hereby prayed that this Hon'ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and to pass such other order or orders as this Hon’ble Court may deems fit just and proper in the circumstances of the case.`
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
                        head: { text: `${formData?.highcourt || "«highcourt»"}` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `WP(PIL). NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],

                middleHeader: {
                    text: "DIRECTION / SUSPENSION / SET ASIDE / STAY PETITION",
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
                        head: { text: "SINGLE / BENCH" },
                        lines: [
                            "SERVICE/NON-SERVICE",
                            "DEPT:_______________",
                            "Category Code and",
                            "Sub Category Code",
                            "Admission Court:"
                        ]
                    },
                    {
                        head: { text: `${formData?.highcourt || "HIGH COURT"}` },
                        lines: [
                            "SPECIAL ORIGINAL JURISDICTION",
                            `WP(PIL).NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `${formData?.district || "«DISTRICT»"} District`
                        ]
                    }
                ],

                betweenSection: {
                    pet: "..Petitioner/s"
                },

                headPara: [
                    {
                        head: {
                            text: `By M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            bold: true
                        },
                        para: ["COUNSEL FOR PETITIONER"]
                    },
                    {
                        head: { text: "NATURE OF APPLICATION" },
                        para: [
                            "(Under Art. 226 of Constitution of India)"
                        ]
                    },
                    {
                        head: { text: "" },
                        para: [
                            `The Hon’ble Court may be pleased to issue a writ, order or direction more particularly one in the nature of writ of mandamus declaring the ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and to pass such other order or orders as this Hon’ble Court may deem fit, just and proper in the circumstances of the case.`
                        ]
                    }
                ],

                footer: [
                    {
                        left: [
                            `Permitted on  : ${formData?.fdate || "«fdate»"}`,
                            `Presented on  : ${formData?.fdate || "«fdate»"}`,
                            `Filed on      : ${formData?.fdate || "«fdate»"}`,
                            `I.A.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
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
                        head: { text: "WRIT PETITION MISC. PETITION" },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `WP(PIL). NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"} District` },
                        lines: []
                    }
                ],

                betweenSection: {
                    pet: "... Petitioner/s"
                },

                headPara: [
                    {
                        head: { text: `By M/s ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: { text: "NATURE OF APPLICATION (UNDER SEC. 151 C.P.C.)" },
                        para: [
                            `This Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and to pass such other order or orders as this Hon’ble Court may deem fit, just and proper in the circumstances of the case.`
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
        "service_certificate": {
            mainTitle: { text: "SERVICE CERTIFICATE" },
            subTitle: { text: "(PROOF OF SERVICE)" },
            headLines: [
                {
                    head: { text: "" },
                    lines: []
                }
            ],
            betweenSection: {
                pet: "",
                res: ""
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        "We have served the copies of Writ Petition, Affidavit, Writ Petition Miscellaneous Petition(s) and Material Papers on the other side Counsel/Government Pleader."
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
        "ia_notice": {
            mainTitle: { text: "" },
            subTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `I.A.No. ${formData?.IANO || "«IANO»"} OF ${formData?.myear || "«myear»"}   IN     WP(PIL). NO. ${formData?.WPILNO || "«WPILNO»"} OF ${formData?.myear || "«myear»"}`,
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: `..Respondent`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `To`,
                        ``,
                        `Take Notice that the Appellant /Petitioner (Respondent) has/have presented a petition to the Court Praying that Under Section 151 of C.P.C. (AFFIDAVIT AND PETITION ENCLOSED) and that the same will be heard by the Court on the day ${formData?.myear || "«myear»"}.`,
                        `Notice and Interim Stay has/have been granted by order Court dated the of ${formData?.myear || "«myear»"} the affidavit of has been filed in support thereof Dated at ${formData?.place || "«place»"} this day ${formData?.myear || "«myear»"}.`
                    ]
                }
            ],
            footer: [
                {
                    left: [],
                    right: [
                        "Advocate for Petitioner"
                    ]
                }
            ]
        },

    }

    return data[key];
};