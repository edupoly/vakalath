import { tabSpace } from "../../../components/templates/elementTypes";
import { advocateDetails, formatDate } from "../../../services/templateFunctions";

export const ABSections = (key, formData) => {
        let data = {
            "438": {
                mainTitle: { text: "MEMORANDUM OF CRIMINAL PETITION" },
                subTitle: { text: "(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)" },
                headLines: [
                    {
                        head: { text: `${formData?.highcourt || "«highcourt»"}`, allCaps: true, bold: true, size: 14 },
                        lines: [
                            `CRL.P.No.${tabSpace(3)} OF ${formData?.myear || "«myear»"}`,
                            `IN`,
                            `${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"}`,
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
                            `${tabSpace(1)}The address for service of all notices and process on the above named petitioner is that of his counsel ${advocateDetails(formData?.userDetails)}`,
                            `Petitioner humbly submit that,`,
                            `${tabSpace(1)}The above named petitioner beg to present this Memorandum of Criminal Petition seeking to release the petitioner on bail in the event their/his/her arrest in ${formData?.OPNO || "«OPNO»"} dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} of ${formData?.lowercourt || "«lowercourt»"}. He is alleged to have committed offenses punishable under Sections ______________. He is apprehending arrest in the above crime.`,
                            `1.${tabSpace(1)}The prosecution case is briefly follows:-`,
                            `2.${tabSpace(1)}The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to`,
                            `The petitioner submits that`,
                            `9.${tabSpace(1)}The petitioner submits that he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.`,
                            `10.${tabSpace(1)}The petitioner submits that he filed Crl.M.P.No. _________ before the learned Sessions Judge ____________ and the same was dismissed on ________.`,
                            `11${tabSpace(1)}The Police officials are making enquiries to know whereabouts of the petitioner and the petitioner is apprehending arrest and he would be put to third degrees methods if arrested.`,
                            `12.${tabSpace(1)}The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose`,
                            `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} of ${formData?.lowercourt || "«lowercourt»"} ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                        ]
                    }
                ],
                footer: [
                    {
                        left: [`${formData?.place || "«place»"}`, `DATE: ${formatDate(formData?.fdate) || "«fdate»"}`],
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
                            head: { text: `${formData?.highcourt || "«highcourt»"}`, allCaps: true, bold: true, size: 14 },
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
                                ...advocateDetails(formData?.userDetails),
                                `Counsel for Petitioner/Accused`
                            ]
                        }
                    ]
                }
            },
            "sidePage2": {
                right: {
                    mainTitle: { text: "HIGH COURT", bold: true, underline: true, size: 20 },
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
                            head: { text: `By ${formData?.userDetails?.firstname} ${formData?.userDetails?.lastname} (9377)`, bold: true },
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
                                `PRESENTED ON: ${formatDate(formData?.fdate) || "«fdate»"}`,
                                `REPRESENTED ON:`,
                                `FILED ON: ${formatDate(formData?.fdate) || "«fdate»"}`
                            ]
                        }
                    ]
                }
            },
        }

    return data[key];
};