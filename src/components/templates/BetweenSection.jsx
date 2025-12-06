import { Paragraph, TextRun, AlignmentType, Spacing, } from "docx";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";
import { LineSpace } from "./elementTypes";

export const BetweenSection = (formData,petSign,resSign) => {

    return [
        createParagraph("Between:", {...paragraphStyles.leftAlignSmall,bold:true,font:"Tahoma"}),
        ...LineSpace(1),
        ...formData?.Petitioners?.map((pet) => [
            createParagraph(pet?.Name, {...paragraphStyles.leftAlignSmall,spacing:{before:150},font:"Tahoma"}),
            createParagraph(pet?.Address,paragraphStyles.leftAlignSmall),
        ]).flat(),
        createParagraph(petSign, {...paragraphStyles.rightAlignSmall,font:"Tahoma"}),
        createParagraph("AND", paragraphStyles.leftAlignSmall),
        ...formData?.Respondents?.map((res) => [
            createParagraph(res?.Name, {...paragraphStyles.leftAlignSmall,spacing:{before:150},font:"Tahoma"}),
            createParagraph(res?.Address,paragraphStyles.leftAlignSmall),
        ]).flat(),
        createParagraph(resSign, {...paragraphStyles.rightAlignText,font:"Tahoma"}),
    ];
};
