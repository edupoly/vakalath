import { Paragraph, TextRun, AlignmentType, Spacing, } from "docx";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";

export const BetweenSection = (formData,petSign,resSign) => {

    return [
        createParagraph("Between:", {...paragraphStyles.leftAlignSmall,size:22,font:"Tahoma"}),
        ...formData?.Petitioners.flatMap((pet) => [
            createParagraph(pet?.Name, {...paragraphStyles.leftAlignSmall,spacing:{before:150},size:22,font:"Tahoma"}),
            createParagraph(pet?.Address,paragraphStyles.leftAlignSmall),
        ]),
        createParagraph(petSign, {...paragraphStyles.rightAlignSmall,size:22,font:"Tahoma"}),
        createParagraph("AND", paragraphStyles.leftAlignSmall),
        ...formData?.Respondents.flatMap((res) => [
            createParagraph(res?.Name, {...paragraphStyles.leftAlignSmall,spacing:{before:150},size:22,font:"Tahoma"}),
            createParagraph(res?.Address,paragraphStyles.leftAlignSmall),
        ]),
        createParagraph(resSign, {...paragraphStyles.rightAlignText,size:22,font:"Tahoma"}),
    ];
};
