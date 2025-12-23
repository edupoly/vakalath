import { BetweenSection } from "../templates/BetweenSection";
import {
    h3BoldCenter,
    h3underlineBoldCenter,
    LineSpace,
    tabSpace,
} from "../templates/elementTypes";
import { SignatureFooter } from "../templates/FooterSections";
import {
    header,
    headerTable,
    headerWith2Numbers,
    headerWithNumbers,
} from "../templates/HeaderSection";
import { headerList } from "../templates/ListSection";
import { addParagraphs } from "../templates/paragraphFunctions";

export const combinedSections = (sectionData, formData) => {
    // const submittedFormData = useSelector((state) => state.submittedForm.fData);
    return [
        ...((sectionData?.header && headerTable(sectionData?.header)) || []),
        sectionData?.mainTitle && header(sectionData?.mainTitle),
        sectionData?.subTitle && header(sectionData?.subTitle),
        ...((sectionData?.header || sectionData?.mainTitle || sectionData?.subTitle) ? LineSpace(1) : []),
        ...(sectionData?.headLines ? headerWithNumbers(sectionData?.headLines) : []),
        ...LineSpace(1),
        ...BetweenSection(
            formData,
            sectionData?.betweenSection?.pet,
            sectionData?.betweenSection?.res
        ),
        ...SignatureFooter(sectionData?.middleContent),
        ...(sectionData?.headPara
            ? sectionData.headPara.map((set) => {
                const elements = []
                if (set?.head) elements.push(header(set.head))
                if (set?.para) elements.push(...addParagraphs(set.para))
                return elements
            }).flat()
            : []),
        ...SignatureFooter(sectionData?.footer),
        ...LineSpace(1),
        sectionData?.note && headerList(sectionData?.note),
        sectionData?.before && header(sectionData?.before),
        ...(sectionData?.advocate ? LineSpace(3) : []),
        sectionData?.advocate && header(sectionData?.advocate),
    ]
}