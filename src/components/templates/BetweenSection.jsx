import { Paragraph, TextRun, AlignmentType, Spacing, } from "docx";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";
import { LineSpace } from "./elementTypes";

export const BetweenSection = (formData,petSign,resSign) => {

    return [
        createParagraph("Between:", {...paragraphStyles.leftAlignSmall,bold:true,indentRight:4000}),
        ...formData?.Petitioners?.map((pet,i) => [
            createParagraph(`${formData?.Petitioners.length >1 ? `${i+1}. ` : ""}${pet?.Name}`, {...paragraphStyles.leftAlignSmall,spacing:{before:150},indentRight:4000}),
            createParagraph(pet?.Address,{...paragraphStyles.leftAlignSmall,indentRight:4000}),
        ]).flat(),
        createParagraph(petSign, {...paragraphStyles.rightAlignSmall}),
        createParagraph("AND", paragraphStyles.leftAlignSmall),
        ...formData?.Respondents?.map((res) => [
            createParagraph(res?.Name, {...paragraphStyles.leftAlignSmall,spacing:{before:150},indentRight:4000}),
            createParagraph(res?.Address,{...paragraphStyles.leftAlignSmall,indentRight:4000}),
        ]).flat(),
        createParagraph(resSign, {...paragraphStyles.rightAlignText}),
    ];
};
