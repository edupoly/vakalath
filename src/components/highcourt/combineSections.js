import { BetweenSection } from "../templates/BetweenSection"
import { h3BoldCenter, h3underlineBoldCenter, LineSpace, tabSpace } from "../templates/elementTypes"
import { createSignatureFooter } from "../templates/FooterSections"
import { headerWith2Numbers, headerWithNumbers } from "../templates/HeaderSection"
import { addParagraphs } from "../templates/paragraphFunctions"


export const combinedSections = (formData, sectionData) => {
    return [
        ...headerWithNumbers(sectionData?.header),
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