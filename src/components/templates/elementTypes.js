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
        createParagraph("", {...paragraphStyles.singleSpace})
    )
}

export const pageBreak = () => {
    return createParagraph("", { children: [new PageBreak()] })
}

export const h3underlineBoldCenter = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.underlinedHeadingSmall,size})
}

export const h3BoldCenter = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.centerHeading,size})
}

export const h3UnderlineCenter = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.underlinedTextSmall,size})
}

export const h3Center = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.centerTextSmall,size})
}

export const h3Left = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.leftAlignSmall,size})
}

export const h3BoldLeft = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.leftHeading,size})
}

export const h3UnderlineLeft = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.leftUnderline,size})
}

export const h3UnderlineBoldLeft = (text) => {
    return createParagraph(text, {...paragraphStyles.underlinedHeadingLeft,size:28})
}

export const h3Right = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.rightAlignSmall,size})
}

export const h3BoldRight = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.rightHeading,size})
}

export const h3UnderlineRight = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.rightUnderline,size})
}
export const h3UnderlineBoldRight = (text,size) => {
    return createParagraph(text, {...paragraphStyles?.rightunderlinedHeading,size})
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

