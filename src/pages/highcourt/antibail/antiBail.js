import { tabSpace } from "../../../components/templates/elementTypes";

export const ABSections = (key, formData) => {
    let data = {
        "438": {
            mainTitle: { text: "MEMORANDUM OF CRIMINAL PETITION" },
            subTitle: { text: "(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `CRL.P.No. OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"}`,
                        `on the file of the ${formData?.lowercourt || "«lowercourt»"}`
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
                        `The address for service of all notices and process on the above named petitioner is that of his counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `Petitioner humbly submit that,`,
                        `The above named petitioner beg to present this Memorandum of Criminal Petition seeking to release the petitioner on bail in the event their/his/her arrest in ${formData?.OPNO || "«OPNO»"} dated ${formData?.OPDATE || "«OPDATE»"} of ${formData?.lowercourt || "«lowercourt»"}. He is alleged to have committed offenses punishable under Sections ______________. He is apprehending arrest in the above crime.`,
                        `1.   The prosecution case is briefly follows:-`,
                        `2.   The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to`,
                        `The petitioner submits that`,
                        `9.   The petitioner submits that he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.`,
                        `10.  The petitioner submits that he filed Crl.M.P.No. _________ before the learned Sessions Judge ____________ and the same was dismissed on ________.`,
                        `11. The Police officials are making enquiries to know whereabouts of the petitioner and the petitioner is apprehending arrest and he would be put to third degrees methods if arrested.`,
                        `12.   The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose`,
                        `It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formData?.OPDATE || "«OPDATE»"} of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [`${formData?.place || "«place»"}`, `DATE: ${formData?.fdate || "«fdate»"}`],
                    right: ["Counsel For Petitioner/Accused"]
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
                            `Crl.P.No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    }
                ],
                middleHeader: {
                    text: `PETITION FOR ANTICIPATORY BAIL FILED U/SEC.438 OF CrPC`,
                    bold: true, underline: true
                },
                footer: [
                    {
                        left: [
                            `Filed By:`,
                            `M/s ${formData?.counsel_code || "«counsel_code»"}`,
                            `Advocate`,
                            `Counsel for Petitioner/Accused`
                        ]
                    }
                ]
            }
        },
        "sidePage2": {
            right: {
                mainTitle: { text: "HIGH COURT", bold: true, underline: true },
                subTitle: { text: "CRIMINAL PETITION", bold: true },
                headLines: [
                    {
                        head: { text: `` },
                        lines: [
                            `I.A.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `Crl.P.NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                        ]
                    },
                    {
                        head: { text: `${formData?.district || "«DISTRICT»"}  District` },
                        lines: []
                    }
                ],
                betweenSection: {
                    pet: `..Petitioner/Accused`
                },
                headPara: [
                    {
                        head: { text: `By ${formData?.counsel_code || "«counsel_code»"}`, bold: true },
                        para: []
                    },
                    {
                        head: {
                            text: "NATURE OF APPLICATION (UNDER SEC. 389(1) Cr.P.C.)"
                        },
                        para: [
                            `The Hon'ble Court may be pleased to ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above criminal appeal and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    },
                ],
                footer: [
                    {
                        left: [
                            `PRESENTED ON: ${formData?.fdate || "«fdate»"}`,
                            `AdvocatREPRESENTED ON:e`,
                            `FILED ON: ${formData?.fdate || "«fdate»"}`
                        ]
                    }
                ]
            }
        },
    }

    return data[key];
};