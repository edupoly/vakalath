import { tabSpace } from "../../../components/templates/elementTypes";


export const CPSections = (key, formData) => {
    let data = {
        "page1": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `(ORIGINAL JURISDICTION)`,
                        `IN THE MATTER OF THE COMPANIES ACT, 1956 AND`
                    ]
                },
                {
                    head: { text: `In the matter of  ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [`COMPANY PETITION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: "..Respondent"
            },
            headPara: [
                {
                    head: { text: "VERIFYING AFFIDAVIT", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly affirm and state as follows`,
                        `1.   I am the ______________ Manager of the Petitioner herein and as such I am well acquainted with the facts of the case and I swear to the contents of this affidavit.`,
                        `2.   Contents stated in the accompanying company petition are true and correct to the best of my knowledge and belief and I believe them to be true.`,
                        `3.   The material papers filed in support of the company petition are originals/true copies of the originals.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `Last page corrs…`,
                        "",
                        `Verified on this the`,
                        `day of ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [`Deponent`]
                }
            ]
        },
        "page2": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `(ORIGINAL JURISDICTION)`,
                        `IN THE MATTER OF THE COMPANIES ACT, 1956 AND`
                    ]
                },
                {
                    head: { text: `In the matter of  ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [`COMPANY PETITION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: "..Respondent"
            },
            headPara: [
                {
                    head: { text: "PETITION FILED UNDER SEC.433(e),(f), 434(1)(a) and (439) OF THE COMPANIES ACT, 1956 READ WITH RULE-95 OF THE COMPANY (COURT) RULES 1959.", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}The petition of ${formData?.petitioner_name || "«petitioner_name»"}, the petitioner herein, most respectfully showeth:`,
                        `1.     The address of the Petitioner Company for the purpose of service of notices, summons, etc., is that of their counsel ${formData?.counsel_address || "«counsel_address»"}`,
                        `2.   ${formData?.respondent_name || "«respondent_name»"} (hereinafter referred to as "The Respondent Company") is a public limited Company incorporated under the Companies Act, 1956, as Company No.__________ with the Registrar of Companies, ___________________`,
                        `3.   The Registered Office of the Respondent Company is at  _______`,
                        `4.   The authorised share capital of the respondent company, as ascertained from the records available with the office of the Registrar of Companies, ___________, is Rs.________/- consisting of   __________________ equity shares of Rs.______/- each.  The issued, subscribed and paid up share capital of the respondent company is Rs.____________/- divided into equity shares of Rs.________/- each paid in cash at par.`,
                        `4.   THE MAIN OBJECTS OF THE RESPONDENT COMPANY ARE  AS FOLLOWS:\n(i)\n(ii)\n(iii)`,
                        `13.  Even after sufficient time was granted, the respondent company had failed to clear the long outstanding dues of the petitioner and it is amply clear from the above facts that the respondent is unable to pay the debts and is ought to be wound up in the interest of justice.`,
                        `14.  The Registered Office of the respondent company is within the State of Andhra Pradesh and hence this Hon'ble Court has jurisdiction to try and decide the case.`,
                        `15.  This petition has been filed bonafide and in the interest of justice and a fixed court fee of Rs.200/- is paid in accordance with the provisions of Article 11(v) of the II-Schedule of Andhra Pradesh Court Fees and Suit Valuation Act.`,
                        `16.  The petitioner therefore prays that :`,
                        `a)    ${formData?.respondent_name || "«respondent_name»"} the respondent be wound up in accordance with the provisions of the Companies Act, 1956 and`,
                        `b)   Appoint Official Liquidator as provisional liquidator pending the disposal of the winding up petition under Sec.450 of the Companies Act, 1956, and to pass such other order or orders as are deemed fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `Counsel for Petitioner`,
                        `Date: ${formData?.fdate || "«fdate»"}`
                    ],
                    right: [`Petitioner`]
                }
            ]
        },
        sidePage1: {
            right: {
                subTitle: { text: `${formData?.district || "«district»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `C.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    ]
                }],
                middleHeader: { text: `PETITION FILED UNDER SEC.433(e),(f), 434(1)(a) and (439) OF THE COMPANIES ACT, 1956 READ WITH RULE-95 OF THE COMPANY (COURT) RULES1959.`, underline: true },
                footer: [{
                    left: [
                        `Filed on: ${formData?.fdate || "«fdate»"}`,
                        `M/s ${formData?.counsel_address || "«counsel_address»"}`,
                        `Counsel for Petitioner`
                    ]
                }]
            }
        },
        "page3": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `(ORIGINAL JURISDICTION)`,
                        `IN THE MATTER OF THE COMPANIES ACT, 1956 AND`
                    ]
                },
                {
                    head: { text: `In the matter of  ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [
                        `COMPANY APPLICATION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `COMPANY PETITION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: "..Respondent"
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly affirm and state as follows:`,
                        `1.   I state that I am the ____________ of the applicant Company herein who is the petitioner in the accompanying company petition and as such I am well acquainted with the facts of the case and I am authorized to depose to this affidavit.`,
                        `2.   I submit that the applicant/petitioner company has filed the above Company Petition under sections 433, 434 and 439 of the Companies Act 1956 for winding up of the Respondent Company.  The same may be read as part and parcel of this affidavit.`,
                        `${tabSpace(1)}For the facts and reasons stated above, it is prayed that this Hon'ble Court may be pleased to ${formData?.interim_prayer || "«interim_prayer»"}`,
                        `a)   to appoint the Official Liquidator High Court of Andhra Pradesh as Provisional Liquidator pending disposal of the winding up petition in the interest of justice.`,
                        `b)   and pass such other order or orders as this Hon'ble Court deems fit and proper in the interests of justice.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        `DATE: ${formData?.fdate || "«fdate»"}`,
                        `${formData?.place || "«place»"}`
                    ],
                    right: [`Deponent`]
                }
            ]
        },
        "page4": {
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `(ORIGINAL JURISDICTION)`,
                        `IN THE MATTER OF THE COMPANIES ACT, 1956 AND`
                    ]
                },
                {
                    head: { text: `In the matter of  ${formData?.lowercourt || "«lowercourt»"}` },
                    lines: [
                        `COMPANY APPLICATION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `COMPANY PETITION No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`
                    ]
                }
            ],
            betweenSection: {
                pet: `..Petitioner`,
                res: "..Respondent"
            },
            headPara: [
                {
                    head: { text: "JUDGE'S SUMMONS UNDER SECTION 450 OF THE COMPANIES ACT, 1956  R/W.RULES 9 & 106 OF THE COMPANIES (COURT) RULES 1959.", bold: true, underline: true },
                    para: [
                        `Let all the parties concerned attend the Judge in Chambers/Court on the _______ day of ${formData?.myear || "«myear»"} at 10.30 A.M. in the Forenoon on the hearing of an application by the applicant/above company for an order that :`,
                        `a) to appoint official liquidator High Court of Andhra Pradesh as Provisional Liquidator pending disposal of the winding up petition.`,
                        `b) to pass any other order or orders as are deemed fit and proper in the circumstances of the case.`
                    ]

                }
            ],
            footer: [
                {
                    left: [
                        `Dated this day of ${formData?.fdate || "«fdate»"}`,
                        `ADVOCATE FOR THE APPLICANT`
                    ],
                    right: [`REGISTRAR`]
                }
            ]
        },
        sidePage2: {
            right: {
                subTitle: { text: `${formData?.district || "«district»"} District` },
                headLines: [{
                    head: { text: `${formData?.highcourt || "«highcourt»"}` },
                    lines: [
                        `COMPANY APPL. No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        `IN`,
                        `C.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    ]
                }],
                middleHeader: { text: `JUDGE'S SUMMONS UNDER SECTION 450 OF THE COMPANIES ACT, 1956 R/W.RULES 9 & 106 OF THE  COMPANIES (COURT) RULES 1959.`, underline: true },
                footer: [{
                    left: [
                        `Filed on: ${formData?.fdate || "«fdate»"}`,
                        `FILED BY:`,
                        `M/s ${formData?.counsel_address || "«counsel_address»"}`,
                        `Counsel for Applicant`
                    ]
                }]
            }
        },
        sidePage3:{
            // left:{
            //     h3Left: [{text:"Presented"},{text:"Represented"},{text:"Admitted"},]
            // },
            right: {
                mainTitle: { text: "HIGH COURT", bold : true, underline: true },
                subTitle: { text: "(ORDINARY ORIGINAL CIVIL JURISDICTION)" },
                headLines: [
                    {
                        head: { text: `COMPANY PETITION` },
                        lines: [
                            `NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                        ]
                    },
                    {
                        head: { text: `In the matter of the Companies Act I of 1956` },
                        lines: [
                            `And`,
                            `In the matter of ${formData?.lowercourt ||"«lowercourt»"}`
                        ]
                    }
                ],
                betweenSection: {
                    pet: `... Petitioner`
                },
                headPara: [
                    {
                        head: { text: ``},
                        para: [
                            `Company Petition under Section         of the Companies Act for ____________\n________________________________________\n________________________________________\nCompany Application No.           of 200\nFor directions under Rule-23`,
                            `Orders are solicited on the following:\n1.Notice to the Company   :\n2.Notice to the Respondent:\n3.Notice to :${tabSpace(3)}(Rule)`,
                            `Advertisement in one issue each of`,
                            `The Andhra Pradesh Gazette`
                        ]
                    }
                ],
                footer: [
                    {
                        left:[``],
                        right: [
                            `(Eng.Daily) and`,
                            `(Ver.Daily)`,
                            `(Rule)`
                        ],
                    },
                    {
                        left:[
                            `Hearing date:`
                        ],
                        right:[``]
                    }
                ]
            }
        }
    }

    return data[key];
}