import { Document } from "docx"
import { combinedSections } from "../../../components/highcourt/combineSections"
import { HCSections } from "./hcData"
import { h3BoldCenter, h3Center, h3UnderlineBoldLeft, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes"
import { pageTable } from "../../../components/highcourt/rightSideCommonSections"
import { headerWith1NumberBold } from "../../../components/templates/HeaderSection"
import { ChronologicalTable } from "../../../components/templates/ChronologicalTable"
import { createSignatureFooter } from "../../../components/templates/FooterSections"
import { OfficeUseTable } from "../../../components/templates/officeUseTable"
import { InfoTable } from "../../../components/templates/InfoTable"
import { ChallanTable } from "../../../components/templates/ChallanTable"
import { LowerCourtTable } from "../../../components/templates/LowerCourtTable"
import { BetweenSection } from "../../../components/templates/BetweenSection"
import { addParagraphs } from "../../../components/templates/paragraphFunctions"
import { formatDate } from "../../../services/templateFunctions"


export const HCTemplate = (formData) => {

    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    ...combinedSections(HCSections("page1", formData), formData),
                    h3Center("BEFORE ME"),
                    ...LineSpace(1),
                    h3Center(`ADVOCATE :: ${formData?.place || "«place»"}`),
                    pageBreak(),
                    ...combinedSections(HCSections("page2", formData), formData),
                    pageBreak(),
                    pageTable(HCSections("sidePage1", formData), formData),
                    pageBreak(),
                    pageTable(HCSections("sidePage2", formData), formData),
                    pageBreak(),
                    ...combinedSections(HCSections("page3", formData), formData),
                    pageBreak(),
                    ...combinedSections(HCSections("page4", formData), formData),
                    pageBreak(),
                    pageTable(HCSections("sidePage3", formData), formData),
                    pageBreak(),
                    ...headerWith1NumberBold([
                        `${formData?.highcourt || "«highcourt»"}`,
                        `Crl.P.No.OF  ${formData?.myear || "«myear»"}`
                    ]),
                    ...LineSpace(1),
                    h3UnderlineCenter("RUNNING INDEX"),
                    ...LineSpace(3),
                    ChronologicalTable(formData),
                    ...LineSpace(3),
                    createSignatureFooter(
                        [`DATE: ${formatDate(formData?.fdate) || "«fdate»"}`,`${formData?.place || "«place»"}`],
                        [`Counsel for the Petitioner`]
                    ),
                    pageBreak(),
                    h3BoldCenter(formData?.highcourt || "«highcourt»"),
                    h3BoldCenter("Basic Information"),
                    ...OfficeUseTable(formData),
                    ...InfoTable(formData),
                    ...ChallanTable(formData),
                    ...LowerCourtTable(formData),
                    pageBreak(),
                    h3UnderlineBoldLeft("Full Cause Title:"),
                    ...BetweenSection(formData, "..Petitioner(s)", "..Respondent(s)"),
                    pageBreak(),
                    h3UnderlineBoldLeft("Main Case Prayer:"),
                    ...addParagraphs([`${tabSpace(1)}Therefore, it is prayed that this Hon’ble Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`]),
                    h3UnderlineBoldLeft("IA(s) Prayer:"),
                    ...addParagraphs([
                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`,

                        `${tabSpace(1)}It is therefore prayed that this Hon'ble Court may be pleased to grant permission to record the compromise statement and quash the ${formData?.OPNO || "«OPNO»"}, dated ${formatDate(formData?.OPDATE) || "«OPDATE»"} on the file of ${formData?.lowercourt || "«lowercourt»"}, in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
                    ]
                    ),
                ]
            }
        ]
    })
}