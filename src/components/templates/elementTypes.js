import { AlignmentType, PageBreak } from "docx"
import { createParagraph, paragraphStyles } from "../../services/templateFunctions"

export const tabSpace = (num)=>{
    let space="";
    for(var i=1;i<=num;i++){
        space+="\t";
    }
    return space;
}

export const LineSpace = (n)=>{
    return Array.from({ length: n }, (_, i) =>
            createParagraph("",paragraphStyles.singleSpace)
          )
}

export const pageBreak = ()=>{
    return createParagraph("",{ children:[new PageBreak()]})
}

export const h3underlineBoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedHeadingSmall,size:22,font:"Tahoma"})
}

export const h3BoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerHeading,size:22,font:"Tahoma"})
}

export const h3UnderlineCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedTextSmall,size:22,font:"Tahoma"})
}

export const h3Center= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerTextSmall,size:22,font:"Tahoma"})
}

export const h3Left= (text)=>{
    return createParagraph(text,{...paragraphStyles.leftAlignSmall,size:22,font:"Tahoma"})
}

export const h3Right= (text)=>{
    return createParagraph(text,{...paragraphStyles.rightAlignSmall,size:22,font:"Tahoma"})
}

export const h3UnderlineBoldLeft = (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedHeadingLeft,size:22,font:"Tahoma"})
}

export const h3UnderlineLeft = (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedTextSmall,alignment:AlignmentType.LEFT,size:22,font:"Tahoma"})
}

export const h1BoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerHeading,size:64,font:"Tahoma"})
}

export const h1UnderlineBoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedHeadingSmall,size:64,font:"Tahoma"})
}

export const h1Center= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerTextSmall,size:64,font:"Tahoma"})
}

export const h2BoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerHeading,size:40,font:"Tahoma"})
}

export const h2UnderlineBoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedHeadingSmall,size:40,font:"Tahoma"})
}

export const h2Center= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerTextSmall,size:40,font:"Tahoma"})
}

export const h4BoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.centerHeading,size:32,font:"Tahoma"})
}

export const h4UnderlineBoldCenter= (text)=>{
    return createParagraph(text,{...paragraphStyles.underlinedHeadingSmall,size:32,font:"Tahoma"})
}

export const paragraph = (text)=>{
    return createParagraph(text,{...paragraphStyles.paraText,size:22,font:"Tahoma"})
}

