import { AlignmentType, Packer, Paragraph, TabStopPosition, TabStopType, TextRun, UnderlineType, Table, TableRow, TableCell, WidthType } from "docx";
import { CMATemplate } from "../pages/civil/cma/template1";
import { CRPTemplate } from "../pages/civil/crp/template1";
import { FirstAppealTemplate } from "../pages/civil/firstAppeal/template1";
import { SecondAppealTemplate } from "../pages/civil/secondAppeal/template1";
import { WritAppealTemplate } from "../pages/civil/writAppeal/template1";
import { AffidavitTemplate } from "../pages/civil/writAffidavit/template1";
import { ABTemplate } from "../pages/criminal/anticiptoryBail/template1";
import CriminalBailFile from "../pages/criminal/bail/template";
import { CriminalAppealTemplate } from "../pages/criminal/appeal/template1";
import { CriminalRevisionTemplate } from "../pages/criminal/revisionCase/template1";
import HighCourtTemplate from "../pages/highcourt/template";

export const paragraphStyles = {
  
   centerText: { alignment: AlignmentType.CENTER },
  centerTextSmall:{alignment: AlignmentType.CENTER,spacing: {after:0}},
  centerTextBold:{alignment: AlignmentType.CENTER,bold:true,spacing:{after:100}},
    centerTextBig:{alignment:AlignmentType.CENTER,spacing:{before:400,after:0}},
    leftAlignSmall:{alignment:AlignmentType.LEFT,spacing: {after:0}},
    leftAlignText:{alignment:AlignmentType.LEFT},
    leftAlignBold:{alignment:AlignmentType.LEFT,bold:true},
    rightAlignBold:{alignment:AlignmentType.RIGHT,bold:true},
    rightAlignText:{alignment:AlignmentType.RIGHT},
    rightAlignSmall:{alignment:AlignmentType.RIGHT,spacing:{after:0}},
    rightAlignTight: {
    alignment: AlignmentType.RIGHT,
    spacing: { before: 0, after: 0, line: 400 },  // smaller line spacing, no before/after spacing
    
},

    rightALignBig:{alignment:AlignmentType.RIGHT,spacing:{line:1000}},
    paraText:{alignment:AlignmentType.JUSTIFIED,spacing:{after:0}},
    // paraTextSpace:{alignment:AlignmentType.JUSTIFIED},
    emptySpace:{spacing:{line:1000}},
    emptySpaceSmall:{spacing:{line:400}},
    emptySpaceMedium:{spacing:{line:200}},
    emptySpaceBig:{spacing:{line:5000}},
    underlinedHeading: { alignment: AlignmentType.CENTER, bold: true, underline: { type: UnderlineType.SINGLE } },
        underlinedHeadingSmall: { alignment: AlignmentType.CENTER, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
        underlinedHeadingRight: { alignment: AlignmentType.RIGHT, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
        underlinedHeadingLeft: { alignment: AlignmentType.LEFT, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
        underlinedTextSmall: { alignment: AlignmentType.CENTER, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
        underlinedText: { alignment: AlignmentType.CENTER, underline: { type: UnderlineType.SINGLE }, spacing: { after: 400 } },
    centerHeading:{alignment:AlignmentType.CENTER,bold:true,spacing:{after:0}},
    bulletPoint:{spacing:{before:100,after:1000}},
    bulletPointsm:{spacing:{before:100,after:200}},
    bulletPointmd:{spacing:{before:100,after:300}},
};



export const createParagraph = (text, options = {}) =>
    new Paragraph({
        children: [new TextRun({ text, ...options })],
        alignment: options.alignment || AlignmentType.LEFT,
        spacing: options.spacing || { line: 800 },
    });

export const getPetitionersParagraphs = (petitioners = []) => {
    return petitioners
        .map((pet) => [
            createParagraph(pet.Name,paragraphStyles.leftAlignSmall),
            createParagraph(pet.Address,paragraphStyles.leftAlignSmall),
        ])
        .flat();
};

export const headerCell = (text, options) =>
    new TableCell({
        children: [
            new Paragraph({
                children: [new TextRun({ text, bold: true })],
                alignment: options?.alignment || AlignmentType.CENTER,
                width: {
                    size: 100,
                    type: WidthType.DXA
                }
            }),
        ],
        columnSpan: options?.colSpan || 1,
    });

export const cell = (text, options) =>
    new TableCell({
        // width: { size: options?.width , type: WidthType.PERCENTAGE },
        columnSpan: options?.colSpan || 1,
        children: [new Paragraph({
            children: [new TextRun(text)],
            alignment: options?.alignment || AlignmentType.LEFT,
        })],
    });

export const Appellantaddress = () => {
  return [
      createParagraph("BETWEEN:", paragraphStyles.leftAlignText),
      createParagraph("...APPELLANT", paragraphStyles.rightAlignText),
      createParagraph("AND", paragraphStyles.leftAlignText),
      createParagraph("...RESPONDENT", paragraphStyles.rightAlignText),
]
};

export const PetitionerAddress = () => {
return [
     createParagraph("Between:", paragraphStyles.leftAlignText),
          createParagraph("...PETITIONER", paragraphStyles.rightAlignText),
          createParagraph("AND", paragraphStyles.leftAlignText),
          createParagraph("...RESPONDENT", paragraphStyles.rightAlignText),
]
}

export function createDocxFooterTable(rows) {
    return new Table({
        rows: rows,
        width: {
            size: 8835,
            type: WidthType.DXA
        },
        borders: {
            top: { size: 0 },
            bottom: { size: 0 },
            left: { size: 0 },
            right: { size: 0 },
            insideHorizontal: { size: 0 },
            insideVertical: { size: 0 },
        }
    })
}

export const appellantTable = () => {
  return new Table({
      rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      createParagraph("HYDERABAD", paragraphStyles.leftAlignSmall),
                      createParagraph("DATE: ____", paragraphStyles.leftAlignSmall),
                    ],
                    // Set cell width to automatically adjust
                    width: {
                      size: 50, // 50%
                      type: WidthType.PERCENTAGE,
                    },
                    borders: {
                      top: {
                        size: 0,
                        style:"none"
                      },
                      left: {
                        size: 0,
                        style:"none"
                      },
                      right: {
                        size: 0,
                        style:"none"
                      },
                      bottom: {
                        size: 0,
                        style:"none"
                      }
                    }
                  }),
                  new TableCell({
                    children: [
                      createParagraph(
                        "COUNSEL FOR THE APPELLANT",
                        paragraphStyles.rightAlignText
                      ),
                    ],
                    // Set cell width to automatically adjust
                    width: {
                      size: 50, // 50%
                      type: WidthType.AUTO,
                    },
                    borders: {
                      top: {
                        size: 0,
                        style:"none"
                      },
                      left: {
                        size: 0,
                        style:"none"
                      },
                      right: {
                        size: 0,
                        style:"none"
                      },
                      bottom: {
                        size: 0,
                        style:"none"
                      }
                    }
                  }),
                ],
                width: {
                  size: 100, // 50%
                  type: WidthType.PERCENTAGE,
                },
              }),
            ],
            width: {
              size: 8835,
              type: WidthType.DXA
            },
            borders: {
             top: { size: 0 },
        bottom: { size: 0 },
        left: { size: 0 },
        right: { size: 0 },
        insideHorizontal: { size: 0 },
        insideVertical: { size: 0 },
            }
  });
}

export const petitionerTable = () => {
  return new Table({
      rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      createParagraph("HYDERABAD", paragraphStyles.leftAlignSmall),
                      createParagraph("DATE: ____", paragraphStyles.leftAlignSmall),
                    ],
                    // Set cell width to automatically adjust
                    width: {
                      size: 50, // 50%
                      type: WidthType.PERCENTAGE,
                    },
                    borders: {
                      top: {
                        size: 0,
                        style:"none"
                      },
                      left: {
                        size: 0,
                        style:"none"
                      },
                      right: {
                        size: 0,
                        style:"none"
                      },
                      bottom: {
                        size: 0,
                        style:"none"
                      }
                    }
                  }),
                  new TableCell({
                    children: [
                      createParagraph(
                        "COUNSEL FOR THE PETITIONER",
                        paragraphStyles.rightAlignText
                      ),
                    ],
                    // Set cell width to automatically adjust
                    width: {
                      size: 50, // 50%
                      type: WidthType.AUTO,
                    },
                    borders: {
                      top: {
                        size: 0,
                        style:"none"
                      },
                      left: {
                        size: 0,
                        style:"none"
                      },
                      right: {
                        size: 0,
                        style:"none"
                      },
                      bottom: {
                        size: 0,
                        style:"none"
                      }
                    }
                  }),
                ],
                width: {
                  size: 100, // 50%
                  type: WidthType.PERCENTAGE,
                },
              }),
            ],
            width: {
              size: 8835,
              type: WidthType.DXA
            },
            borders: {
             top: { size: 0 },
        bottom: { size: 0 },
        left: { size: 0 },
        right: { size: 0 },
        insideHorizontal: { size: 0 },
        insideVertical: { size: 0 },
            }
  });
}

export function createDocxCoverSection(childrenContent, leftMargin) {
    return {
        properties: {
            page: {
                margin: {
                    top: 720,
                    right: 720,
                    left: leftMargin,
                    bottom: 720
                }
            }
        },
        children: childrenContent,
    };
}

export const addresses= (petitioners,respondents)=>{
    console.log(petitioners);
    console.log(respondents);
    return [
        createParagraph("BETWEEN:", paragraphStyles.leftAlignText),
        // ...petitioners,
        createParagraph("..PETITIONER/Plantiff", paragraphStyles.rightAlignText),
        createParagraph("AND", paragraphStyles.leftAlignText),
        // ...respondents,
        createParagraph('...Respondent/Defendant', paragraphStyles.rightAlignText),
    ]
  }