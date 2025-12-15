import { tabSpace } from "../../../components/templates/elementTypes";
import { advocateDetails, formatDate } from "../../../services/templateFunctions";

export const WPAFISections = (key, formData) => {
    let data = {
        "writ_affidavit": {
            mainTitle: { text: "" },
            headLines: [
                {
                    head: { text: `${formData?.highcourt || "«highcourt»"}`, allCaps: true, bold: true, size: 14 },
                    lines: [
                        `W.P. NO.${tabSpace(3)}OF ${formData?.myear || "«myear»"}`,
                    ]
                }
            ],
            betweenSection: {
                pet: `...Petitioner`,
                res: `...Respondent`
            },
            headPara: [
                {
                    head: { text: "AFFIDAVIT", bold: true, underline: true },
                    para: [
                        `${tabSpace(1)}I, ${formData?.verification || "«verification»"}, now having temporarily come down to ${formData?.place || "«place»"}, do hereby solemnly and sincerely affirm and state as follows:`,
                        `1.${tabSpace(1)}I submit that I am the ____ Petitioner herein and as such I am well acquainted with the facts of the case. I am filing this affidavit on behalf of other petitioners as well.`,
                        `2.${tabSpace(1)}I further submit that since the cause of action of all the petitioners herein is one and the same, we are filing a single writ petition. However, as required under writ rules, separate court fee is paid herewith.`,
                        `3.${tabSpace(1)}I submit that`,
                        `${tabSpace(1)}In the circumstances stated above, the petitioner has no efficacious alternative remedy, except to seek redressal before this Hon'ble Court seeking the indulgence of this Hon’ble Court to exercise the extraordinary original jurisdiction vested in this Hon’ble Court by virtue of Article 226 of the Constitution of India.`,
                        `${tabSpace(1)}The petitioner has not filed any writ petition, suit, or other proceedings for the relief or reliefs sought herein.`,
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to issue a Writ, Order, or Direction, more particularly one in the nature of Writ of Mandamus declaring ${formData?.MAIN_PRAYER || "«MAIN_PRAYER»"} and pass such other order or orders as may be deemed fit and proper in the circumstances of the case.`,
                        `${tabSpace(1)}It is also just and necessary that this Hon'ble Court may be pleased to ${formData?.INTERIM_PRAYER || "«INTERIM_PRAYER»"} pending disposal of the above writ petition and pass such other order or orders as may be deemed fit and proper in the circumstances of the case.`
                    ]
                }
            ],
            footer: [
                {
                    left: [
                        "last page corrs.",
                        "Solemnly and sincerely affirm this",
                        `the day of ${formatDate(formData?.fdate) || "«fdate»"}`,
                        "and signed his name in my presence."
                    ],
                    right: ["Deponent"]
                }
            ]
        }
    }

    return data[key];
};