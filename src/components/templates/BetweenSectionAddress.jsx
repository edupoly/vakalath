import { Paragraph, TextRun, AlignmentType } from "docx";
import {
  createParagraph,
  paragraphStyles,
} from "../../services/templateFunctions";

export const BetweenSectionAddress = (formData,petSign,respSign,petAddress,respAddress) => {
  const petitioners = formData?.Petitioners || [];
  const respondents = formData?.Respondents || [];

  return [
    createParagraph("Between:", paragraphStyles.leftAlignText),
    ...petitioners.flatMap((pet) => [
      createParagraph(pet?.Name || "", { spacing: { after: 0 } }),
      createParagraph(pet?.Address || ""),
  
    ]),
    createParagraph(petSign, paragraphStyles.rightAlignText),
    createParagraph(petAddress,paragraphStyles.paraText),
    createParagraph("AND", paragraphStyles.leftAlignText),
    ...respondents.flatMap((res) => [
      createParagraph(res?.Name || "", { spacing: { after: 0 } }),
      createParagraph(res?.Address || ""),
    ]),
    createParagraph(respSign, paragraphStyles.rightAlignText),
    createParagraph(respAddress,paragraphStyles.paraText),
  ];
};

