import { AlignmentType, PageBreak } from "docx"
import { createParagraph, paragraphStyles } from "../../services/templateFunctions"

export const tabSpace = (num) => {
    let space = "";
    for (var i = 1; i <= num; i++) {
        space += "\t";
    }
    return space;
}

export const LineSpace = (n) => {
    return Array.from({ length: n }, (_, i) =>
        createParagraph("", paragraphStyles.singleSpace)
    )
}

export const pageBreak = () => {
    return createParagraph("", { children: [new PageBreak()] })
}

export const h3underlineBoldCenter = (text) => {
    return createParagraph(text, paragraphStyles.underlinedHeadingSmall)
}

export const h3BoldCenter = (text) => {
    return createParagraph(text, paragraphStyles.centerHeading)
}

export const h3UnderlineCenter = (text) => {
    return createParagraph(text, paragraphStyles.underlinedTextSmall)
}

export const h3Center = (text) => {
    return createParagraph(text, paragraphStyles.centerTextSmall)
}

export const h3Left = (text) => {
    return createParagraph(text, paragraphStyles.leftAlignSmall)
}

export const h3BoldLeft = (text) => {
    return createParagraph(text, paragraphStyles.leftHeading)
}

export const h3UnderlineLeft = (text) => {
    return createParagraph(text, paragraphStyles.leftUnderline)
}

export const h3UnderlineBoldLeft = (text) => {
    return createParagraph(text, paragraphStyles.underlinedHeadingLeft)
}

export const h3Right = (text) => {
    return createParagraph(text, paragraphStyles.rightAlignSmall)
}

export const h3BoldRight = (text) => {
    return createParagraph(text, paragraphStyles.rightHeading)
}

export const h3UnderlineRight = (text) => {
    return createParagraph(text, paragraphStyles.rightUnderline)
}
export const h3UnderlineBoldRight = (text) => {
    return createParagraph(text, paragraphStyles.rightunderlinedHeading)
}

export const h1BoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.centerHeading, size: 64 })
}

export const h1UnderlineBoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 64 })
}

export const h1Center = (text) => {
    return createParagraph(text, { ...paragraphStyles.centerTextSmall, size: 64 })
}

export const h2BoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.centerHeading, size: 40 })
}

export const h2UnderlineBoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 40 })
}

export const h2Center = (text) => {
    return createParagraph(text, { ...paragraphStyles.centerTextSmall, size: 40 })
}

export const h4BoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.centerHeading, size: 32 })
}

export const h4UnderlineBoldCenter = (text) => {
    return createParagraph(text, { ...paragraphStyles.underlinedHeadingSmall, size: 32 })
}

export const paragraph = (text) => {
    return createParagraph(text, paragraphStyles.paraText)
}

