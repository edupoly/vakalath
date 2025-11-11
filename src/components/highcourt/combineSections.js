import { BetweenSection } from "../templates/BetweenSection"
import { h3BoldCenter, h3underlineBoldCenter, LineSpace, tabSpace } from "../templates/elementTypes"
import { createSignatureFooter } from "../templates/FooterSections"
import { headerWith2Numbers } from "../templates/HeaderSection"
import { addParagraphs } from "../templates/paragraphFunctions"


export const combinedSections = (formData, sectionData) => {
    return [
        h3BoldCenter(sectionData?.mainTitle),
        h3BoldCenter(sectionData?.subTitle),
        ...LineSpace(2),
        ...headerWith2Numbers([
            `«OPNO»`,
            `On the file of the «lowercourt»`,
            `IN THE COURT OF THE «highcourt»`,
            `Crl.A.No.${tabSpace(3)}OF «myear»`
        ]),
        ...BetweenSection(
            formData,
            sectionData?.betweenSection?.pet,
            sectionData?.betweenSection?.res
        ),
        ...(sectionData?.headPara
            ? sectionData.headPara.flatMap((set) => {
                const elements = []
                if (set?.head) elements.push(h3underlineBoldCenter(set.head))
                if (set?.para) elements.push(...addParagraphs(set.para))
                return elements
            })
            : []),
        createSignatureFooter(["DATE:«fdate»", "«place»"], ["Counsel For Appellant"]),
    ]
}