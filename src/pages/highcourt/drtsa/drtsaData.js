import { tabSpace } from "../../../components/templates/elementTypes"


export const DRTSASections = (key, formData) => {
    let data = {
        page1: {
            mainTitle: { text: "BEFORE THE HON’BLE DEBTS RECOVERY TRIBUNAL, TELANGANA AT: HYDERABAD", bold: true },
            subTitle: { text: `Securitisation Application No.${tabSpace(3)}of ${formData?.myear || "«myear»"}`, bold: true },
            betweenSection: {
                pet: `..Applicants`,
                res: `..Respondents`
            }
        },
        page2: {
            mainTitle: { text: "APPLICATION FILED UNDER SECTION 17 OF SECURITISATION AND RECONSTRUCTION OF FINANCIAL ASSETS AND ENFORCEMENT OF SECURITY INTEREST ACT, 2002.", bold: true },
            subTitle: { text: `S.A. No.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`, bold: true },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        `DATE OF FILING __________________________________________________________`,
                        `DATE OF RECEIPT : ___________________________________________`,
                        `REGISTRATION NO. : _________________________________________`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `SIGNATURE`
                    ]
                },
                {
                    head: { text: "" },
                    para: [
                        `REGISTRAR ________________________________________________`
                    ]
                },

            ]
        },
        page3: {
            mainTitle: { text: "BEFORE THE HON’BLE DEBTS RECOVERY TRIBUNAL, TELANGANA AT: HYDERABAD", bold: true },
            subTitle: { text: `Securitisation Application No.${tabSpace(3)}of ${formData?.myear || "«myear»"}` },
            betweenSection: {
                pet: `..Applicants`,
                res: `..Respondents`
            },
            headPara: [
                {
                    head: {text:""},
                    para:[
                        "","",""
                    ]
                },
                {
                    head: { text: "MEMORANDUM OF APPLICATION U/s. 17 OF THE SECURITISATION ACT, 2002", bold: true, underline: true },
                    para: []
                }
            ]
        },
        page4: {
            mainTitle: { text: "BEFORE THE HON’BLE DEBTS RECOVERY TRIBUNAL, TELANGANA, AT: HYDERABAD.", bold: true },
            subTitle: { text: `Securitisation Application No.${tabSpace(3)}of ${formData?.myear || "«myear»"}`, bold: true },
            betweenSection: {
                pet: `..Applicants`,
                res: `..Respondents`
            },
            headPara: [
                {
                    head: { text: "" },
                    para: [
                        "1. Particulars of the Applicants:",
                        "2. Particulars of the Respondents:",
                        "3. Jurisdiction of the Tribunal: The applicants declare that the application falls within the Jurisdiction of the Hon’ble Tribunal in terms of Sec.17 of the Securitisation Act.",
                        "4. Limitation: The applicants declare that there is a delay of … days in filing the present Securitisation Application challenging the Sale Certificate. However, separate application U/S.5 of the Limitation Act is filed along with this application.",
                        "5. Facts of the case and the orders:",
                        "6. Relief Sought: In view of the facts mentioned above, the applicants pray that the Hon’ble Tribunal may be pleased to: «main_prayer»",
                        "7. Interim Order, if prayed for: Pending final decision on and disposal of the present application, the applicants seek and pray that the Hon’ble Tribunal may be pleased to «interim_prayer»",
                        "Matter not pending with any other Court etc.: The Applicants further declare that the matter regarding which this application is filed is not pending before any Court of law or any other Authority or Tribunal.",
                        "8. Particulars of Bank Draft, Postal Order in respect of deposit of debts due in terms of Section 17(2) of Securitisation and Reconstruction of Financial Assets & Enforcement of Security Interest Act 2002 applicable or under any other provisions of the Act: Not applicable in view of Judgment of the Hon’ble Supreme Court in Mardia Chemicals Ltd., on 8th April, 2004 vide 2004(4) SCC 311",
                        "9. Particulars of Bank Draft / Postal Order in respect of the fee paid in terms of Rule 7 of the DRT (procedure) Rules: Name of the Bank/Post Office: No. of D.D. / Postal Order: Date of Issue: Amount Rs.",
                        "10. Details of Index: An index in duplicate containing the details of the documents relied upon is enclosed.",
                        "11. List of Enclosures: As given in the index"
                    ]
                },
                {
                    head : {text:"VERIFICATION",bold:true},
                    para :[
                        `${tabSpace(1)}I, «verification», do hereby verify and state that the contents in Para Nos. 1 to 11 are true and correct to the best of my personal knowledge and belief and that I have not suppressed and material facts.`,
                    ]
                },
                {
                    head : {text:""},
                    para :[
                        `Place : Hyderabad`,
                        `Date  : ${formData?.fdate || "«fdate»"}`
                    ]
                }
            ],
            footer : [{
                left :[
                    `Counsel for the Applicants`
                ],
                right : [
                    `Applicant No.1`
                ]
            }]
        },
        page6:{
            mainTitle: {text:"BEFORE THE HON’BLE DEBTS RECOVERY TRIBUNAL, TELANGANA AT: HYDERABAD",bold:true},
            subTitle: {text : `Securitisation Application No.${tabSpace(3)}of ${formData?.myear || "«myear»"}`},
            betweenSection:{
                pet: `..Applicants`,
                res: `..Respondents`
            },
            headPara : [
                {
                    head: {text:""},
                    para:[
                        "","",""
                    ]
                },
                {
                    head :{text:"APPLICATION FILED UNDER SECTION 17 OF SECURITISATION AND RECONSTRUCTION OF FINANCIAL ASSETS AND ENFORCEMENT OF SECURITY INTEREST ACT, 2002.*-*-*-*-*",bold:true},
                    para:[]
                }
            ]
        }
    }

    return data[key];
}