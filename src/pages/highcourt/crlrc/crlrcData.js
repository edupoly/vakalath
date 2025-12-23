import { tabSpace } from "../../../components/templates/elementTypes";

export const CRLRCSections = (key, formData) => {
    let data = {
        "397_401": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL REVISION CASE" },
            subTitle: { text: "UNDER SECTION 397 & 401 OF CRIMINAL PROCEDURE CODE, 1973" },
            headLines: [{
                head: { text: "" },
                lines: [
                    `C.C.No. OF ${formData?.myear || "«myear»"}`,
                    `ON THE FILE OF THE _______________________________`,
                    `${formData?.OPNO || "«OPNO»"}`,
                    `In the Court of the ${formData?.lowercourt || "«lowercourt»"}`,
                    `${formData?.highcourt || "«highcourt»"}`,
                    `Crl.R.C.No. OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `...Accused/Petitioner`,
                res: `...Complainant/Respondent`
            },
            headPara: [
                {
                    head: {text:""},
                    para: [
                        `${tabSpace(1)}The address for service of all notices and process on the above named petitioner is that of his counsel ${formData?.counsel_address || "«counsel_address»"}.`,
                        "",
                        `${tabSpace(1)}The above named petitioner begs to file this Criminal Revision Case against the judgment and sentence passed by the learned ${formData?.lowercourt || "«lowercourt»"} in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} for the following grounds among other:`,
                    ]
                },
                {
                    head: {text:"GROUNDS"},
                    para: [
                        "1.   The judgment of the learned Judge is illegal, improper and incorrect.",
                        "2.   The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs _________________.",
                        "",
                        "3.   The learned Judge should have seen that the ingredients to constitute the said offences are not made out by the prosecution.",
                        "",
                        "4.   The learned Judge should have seen that the medical evidence does not corroborate with the prosecution case.",
                        "5.   ",
                        "",
                        "6.   ",
                        "",
                        "7.   ",
                        "",
                        "8.   The other reasons given by the learned Judge are unsustainable.",
                        "",
                        "9.   Having regard to the facts and circumstances of the case, the sentence is unduly severe.",
                        "",
                        "10.  That the other grounds would be urged at the time of hearing.",
                        "",
                        `${tabSpace(1)}For the reasons stated in the accompanying grounds it is therefore prayed that this Hon’ble Court may be pleased ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [{
                left: [
                    `DATE:${formData?.fdate || "«fdate»"}`,
                    `${formData?.place || "«place»"}`
                ],
                right: ["Counsel For petitioner"]
            }]
        },
        "sidePage1": {
            right: {
                headLines: [
                    {
                        head: { text: `«district» :: District` },
                        lines: []
                    },
                    {
                        head: { text: `«highcourt»` },
                        lines: [
                            `Crl.R.C.No.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `Crl.A.No.${tabSpace(3)}OF «myear»`,
                            `«OPNO»`,
                            `(On the file of the`,
                            `«lowercourt»)`
                        ]
                    }
                ],

                middleHeader: { text: `MEMORANDUM OF GROUNDS`, bold: true, underline: true },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for petitioner`
                        ]
                    }
                ]
            }
        },
        "482(1)": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL REVISION MISC. PETITION" },
            subTitle: { text: "UNDER SECTION 482 OF CRIMINAL PROCEDURE CODE, 1973" },
            headLines: [{
                head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                lines: [
                    `I.A.No. OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `Crl.R.C.No. OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `...Accused/Petitioner`,
                res: `...Complainant/Respondent`
            },
            headPara: [{
                head: {text:""},
                para: [
                    `For the reasons stated in the accompanying grounds it is therefore prayed that this Hon’ble Court may be pleased ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                ]
            }],
            footer: [{
                left: [
                    `DATE:${formData?.fdate || "«fdate»"}`,
                    `${formData?.place || "«place»"}`
                ],
                right: ["Counsel For petitioner"]
            },
            ],
            note: {
                head: { text: "Note:", bold: true },
                lines: [
                    `Accused in ${formData?.jailname || "___________"} Jail.`,
                    `Bail to the satisfaction of the JFCM, ${formData?.jfcmlocation || "_____________"}.`
                ]
            },
        },
        "sidePage2": {
            right: {
                headLines: [
                    {
                        head: { text: `«district» :: District` },
                        lines: []
                    },
                    {
                        head: { text: `«highcourt»` },
                        lines: [
                            `I.A.No.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `Crl.R.C.No.${tabSpace(3)}OF «myear»`
                        ]
                    }
                ],

                middleHeader: { text: `SUSPENSION PETITION`, bold: true, underline: true },

                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "397(1)": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "UNDER SECTION 397(1) OF CRIMINAL PROCEDURE CODE, 1973" },

            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [
                        `I.A.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `Crl.R.C.No. OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],

            betweenSection: {
                pet: `...Accused/Petitioner`,
                res: `...Complainant/Respondent`
            },

            headPara: [
                {
                    head: {text:""},
                    para: [`It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}, of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }],

            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: ["Counsel For petitioner"]
                },
            ],
            note: {
                head: { text: "Note:", bold: true },
                lines: [
                    `Accused in ${formData?.jailname || "___________"} Jail.`,
                    `Bail to the satisfaction of the JFCM, ${formData?.jfcmlocation || "_____________"}.`
                ]
            },
        },
        "sidePage3": {
            right: {
                headLines: [
                    { head: { text: `«district» :: District` }, lines: [] },
                    {
                        head: { text: `«highcourt»` }, lines: [
                            `I.A.No.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `Crl.R.C.No.${tabSpace(3)}OF «myear»`
                        ]
                    }
                ],
                middleHeader: { text: `BAIL PETITION`, bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "sidePage4": {
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CRIMINAL PETITION`, bold: true },
                headLines: [
                    {
                        head: { text: `` }, lines: [
                            `CRL.M.P.NO.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `CRL.P.No.${tabSpace(3)}OF «myear»`
                        ]
                    },
                    { head: { text: `«DISTRICT» District` }, lines: [] }
                ],
                betweenSection: { pet: `... Petitioner/Accused` },
                headPara: [
                    { head: { text: `By «counsel_code»`, bold: true }, para: [] },
                    {
                        head: { text: `NATURE OF APPLICATION (UNDER SEC. 397(1) Cr.P.C.)` }, para: [
                            `The Hon'ble Court may be pleased to enlarge the petitioner on bail in «OPNO», dated «OPDATE», of «lowercourt» «INTERIM_PRAYER»  and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: «fdate»`,
                            `REPRESENTED ON:`,
                            `FILED ON: «fdate»`
                        ]
                    }
                ]
            }
        },
        "sidePage5": {
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CRIMINAL PETITION`, bold: true },
                headLines: [
                    {
                        head: { text: `` }, lines: [
                            `I.A.NO.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `Crl.R.C.NO.${tabSpace(3)}OF «myear»`
                        ]
                    },
                    { head: { text: `«DISTRICT» District` }, lines: [] }
                ],
                betweenSection: { pet: `... Petitioner/Accused` },
                headPara: [
                    { head: { text: `By «counsel_code»`, bold: true }, para: [] },
                    {
                        head: { text: `NATURE OF APPLICATION (UNDER SEC. 482 Cr.P.C.)` }, para: [
                            `The Hon’ble Court may be pleased «INTERIM_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: «fdate»`,
                            `REPRESENTED ON:`,
                            `FILED ON: «fdate»`
                        ]
                    }
                ]
            }
        },
        "sidePage6": {
            right: {
                mainTitle: { text: `HIGH COURT`, bold: true, underline: true },
                subTitle: { text: `CRIMINAL REVISION CASE`, bold: true },
                headLines: [
                    {
                        head: { text: `` }, lines: [
                            `Crl.R.C.NO.${tabSpace(3)}OF «myear»`
                        ]
                    },
                    { head: { text: `«PETITIONER_NAME»` }, lines: [`... Petitioner/Accused`] },
                    { head: { text: `By «counsel_code»` }, lines: [] },
                    { head: { text: `«DISTRICT» District` }, lines: [] }
                ],
                betweenSection: { pet: `` },
                headPara: [
                    { head: { text: `Case No. of «myear» on the file of JMFC` }, para: [] },
                    { head: { text: `Of the           of   JMFC` }, para: [] },
                    { head: { text: `«OPNO» on the file of «lowercourt»` }, para: [] },
                    { head: { text: `Sentenced to suffer R.I/S.I., for a period of _________ years. He is also directed to pay a fine of Rs.________/- in default suffer, RI for ____ months. OR Order` }, para: [] },
                    { head: { text: `Date of Sentence or Order: «OPDATE»` }, para: [] },
                    {
                        head: { text: `Orders are solicited on the following` }, para: [
                            `1. Notice to the Public Prosecutor`,
                            `2. Notice to accused`,
                            `3. Notice to Complainant (or other side)`,
                            `4. Post before a single Judge`,
                            `Or`,
                            `Post before a Bench of two judges`,
                            `5. Print for Court`,
                            `Or`,
                            `Print at Party’s Cost`,
                            `Or`,
                            `Do not print`,
                            `N.B. If stay is ordered, the case will be posted without printing`,
                            `To be heard on Crl.MP.No.`
                        ]
                    }
                ],
                footer: []
            }
        },
        "meoa": {
            mainTitle: { text: "MEMO OF APPEARANCE" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [`CRL.R.C.No. OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `...Petitioner/Accused`,
                res: `...Respondent/Complainant`
            },
            middleContent: [
                { left: ["To"] },
                { left: ["The Registrar", "High Court", `${formData?.place || "«place»"}.`] }
            ],
            headPara: [`Sir,`, `Please enter my/our appearance in the above matter on behalf of the Petitioner.`],
            signatureBlock: [`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, `Counsel for Petitioner`],
            footer: [
                {
                    left: [
                        `DATE:${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ]
                }
            ]
        },
        "sidePage7": {
            right: {
                mainTitle: { text: `«district» :: District`, bold: true, underline: false },
                subTitle: { text: `«highcourt»`, bold: true },
                headLines: [
                    {
                        head: { text: `` }, lines: [
                            `Crl.R.C. NO.${tabSpace(3)}OF «myear»`
                        ]
                    }
                ],
                betweenSection: { pet: `MEMO OF APPEARANCE` },
                headPara: [],
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "482(2)": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL MISC. PETITION" },
            subTitle: { text: "(UNDER SEC. 482 OF CRIMINAL PROCEDURE CODE)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`,bold:true },
                    lines: [`I.A.No. OF ${formData?.myear || "«myear»"}`, `IN`, `CRL.R.C.NO. OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `..Petitioner/s`,
                res: `..Respondent/s`
            },
            headPara: [{
                head: `DISPENSEWITH PETITION`,
                para: [
                    `That the above Criminal RC is filed seeking to revision the Judgment passed in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} and the petitioner did not obtained the certified copies of the said ${formData?.OPNO || "«OPNO»"} and hence filed the photocopy of the same and the same may be dispensed with.`,
                    `For the reasons stated in the accompanying criminal petition, it is therefore prayed that this Hon'ble Court may be pleased to dispense with filing of the original certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court pending disposal of the main Crl. RC and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                ]
            }],
            footer: [
                { left: [`${formData?.place || "«place»"}`], right: ["Counsel for the Petitioner"] },
                { left: [`DATE: ${formData?.fdate || "«fdate»"}`] }
            ]
        },
        "sidePage8": {
            right: {
                headLines: [
                    { head: { text: `«DISTRICT» District` }, lines: [] },
                    {
                        head: { text: `«highcourt»` }, lines: [
                            `I.A.NO.${tabSpace(3)}OF «myear»`,
                            `IN`,
                            `CRL.R.C.No.${tabSpace(3)}OF «myear»`
                        ]
                    }
                ],
                middleHeader: { text: `DISPENSEWITH PETITION`, bold: true, underline: true },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s «counsel_code»`,
                            `Advocate`,
                            `Counsel for Petitioner`
                        ]
                    }
                ]
            }
        },
        "482(3)": {
            mainTitle: { text: "HIGH COURT" },
            headLines: [{
                head: { text: "CRIMINAL MISC.PETITION" },
                lines: [
                    `I.A.NO. OF ${formData?.myear || "«myear»"}`,
                    `IN`,
                    `CRL.R.C.NO. OF ${formData?.myear || "«myear»"}`
                ]
            }],
            betweenSection: {
                pet: `${formData?.DISTRICT || "«DISTRICT»"} District`,
                res: `...Petitioner`
            },
            middleContent: [
                { left: [`By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`] },
                { left: ["NATURE OF APPLICATION", "(UNDER SEC. 482 Cr.P.C.)"] }
            ],
            headPara: [
                {
                    head: {text:""},
                    para: [`The Hon’ble Court may be pleased to dispense with certified copy of ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"} before this Hon’ble Court and pass such other order or orders as this Hon’ble Court may deem fit and proper in the circumstances of the case.`
                    ]
                }],
            footer: [{
                left: [
                    `PRESENTED ON:${formData?.fdate || "«fdate»"}`,
                    `REPRESENTED ON:`,
                    `FILED ON:${formData?.fdate || "«fdate»"}`
                ]
            }]
        }
    }

    return data[key];
};