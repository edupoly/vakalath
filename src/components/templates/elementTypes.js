import { AlignmentType, PageBreak } from "docx";
import { createParagraph, paragraphStyles } from "../../services/templateFunctions";

export const tabSpace = (num) => {
  let space = "";
  for (let i = 1; i <= num; i++) space += "\t";
  return space;
};

export const LineSpace = (n) =>
  Array.from({ length: n }, () => createParagraph("", paragraphStyles.singleSpace));

export const pageBreak = () =>
  createParagraph("", { children: [new PageBreak()] });

// -------------------- TEXT STYLES --------------------

// === Headings (Exact Word Sizes, Calibri) ===

// 14pt
export const h1BoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.centerHeading, size: 28, font: "Calibri" });
export const h1UnderlineBoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 28, font: "Calibri" });
export const h1Center = (text) =>
  createParagraph(text, { ...paragraphStyles.centerTextSmall, size: 28, font: "Calibri" });

// 13pt
export const h2BoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.centerHeading, size: 26, font: "Calibri" });
export const h2UnderlineBoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 26, font: "Calibri" });
export const h2Center = (text) =>
  createParagraph(text, { ...paragraphStyles.centerTextSmall, size: 26, font: "Calibri" });
export const h3underlineBoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 26, font: "Calibri" });
export const h3BoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.centerHeading, size: 26, font: "Calibri" });
export const h3UnderlineCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedTextSmall, size: 26, font: "Calibri" });

// 12pt
export const h3Center = (text) =>
  createParagraph(text, { ...paragraphStyles.centerTextSmall, size: 24, font: "Calibri" });
export const h3Left = (text) =>
  createParagraph(text, { ...paragraphStyles.leftAlignSmall, size: 24, font: "Calibri" });
export const h3Right = (text) =>
  createParagraph(text, { ...paragraphStyles.rightAlignSmall, size: 24, font: "Calibri" });
export const h3UnderlineBoldLeft = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedHeadingLeft, size: 24, font: "Calibri" });
export const h3UnderlineLeft = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedTextSmall, alignment: AlignmentType.LEFT, size: 24, font: "Calibri" });
export const h4BoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.centerHeading, size: 24, font: "Calibri" });
export const h4UnderlineBoldCenter = (text) =>
  createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 24, font: "Calibri" });

// 12pt normal text
export const paragraph = (text) =>
  createParagraph(text, { ...paragraphStyles.paraText, size: 24, font: "Calibri" });
