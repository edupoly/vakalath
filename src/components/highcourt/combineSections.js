import { BetweenSection } from "../templates/BetweenSection"
import { h3BoldCenter, h3underlineBoldCenter, LineSpace, tabSpace } from "../templates/elementTypes"
import { createSignatureFooter } from "../templates/FooterSections"
import { header, headerTable, headerWith2Numbers, headerWithNumbers } from "../templates/HeaderSection"
import { headerList } from "../templates/ListSection"
import { addParagraphs } from "../templates/paragraphFunctions"


export const combinedSections = (sectionData,formData) => {
    // const submittedFormData = useSelector((state) => state.submittedForm.fData);
    return [
        ...headerTable(sectionData?.header),
        header(sectionData?.mainTitle),
        header(sectionData?.subTitle),
        ...headerWithNumbers(sectionData?.headLines),
        ...BetweenSection(
            formData,
            sectionData?.betweenSection?.pet,
            sectionData?.betweenSection?.res
        ),
        ...createSignatureFooter(sectionData?.middleContent),
        ...(sectionData?.headPara
            ? sectionData.headPara.map((set) => {
                const elements = []
                if (set?.head) elements.push(h3underlineBoldCenter(set.head))
                if (set?.para) elements.push(...addParagraphs(set.para))
                return elements
            }).flat()
            : []),
        ...createSignatureFooter(sectionData?.footer),
        sectionData?.note && headerList(sectionData?.note),
        header(sectionData?.before),
        ...LineSpace(3),
        header(sectionData?.advocate),
    ]
}