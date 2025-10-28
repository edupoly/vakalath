import { AlignmentType, Paragraph, TextRun } from "docx";

export const paragraphStyles = {
    page: { spacing: { after: 0 }, alignment: AlignmentType.LEFT },
    heading: { bold: true, spacing: { after: 200 }, alignment: AlignmentType.LEFT },
    headingCenter: { bold: true, underline: {}, alignment: AlignmentType.CENTER },
    centerText: { alignment: AlignmentType.CENTER },
    startText: { alignment: AlignmentType.LEFT },
    endText: { alignment: AlignmentType.RIGHT },
    paragraph: { alignment: AlignmentType.JUSTIFIED, spacing: { line: 360 } },
    justifiedText: { alignment: AlignmentType.JUSTIFIED, spacing: { after: 200 } },
    item: { alignment: AlignmentType.LEFT },
    subItem: { alignment: AlignmentType.LEFT },
    signatureRow: { alignment: AlignmentType.LEFT },
    signatureBox: { alignment: AlignmentType.LEFT },
    alignRight: { alignment: AlignmentType.RIGHT },
    coverPage: { alignment: AlignmentType.RIGHT },
    title: { bold: true, alignment: AlignmentType.CENTER },
    subTitle: { italics: true, alignment: AlignmentType.CENTER },
    centeredText: { alignment: AlignmentType.CENTER },
    caseNo: { bold: true, alignment: AlignmentType.CENTER },
    against: { alignment: AlignmentType.CENTER },
    sectionTitle: { bold: true, alignment: AlignmentType.LEFT },
    partyLine: { alignment: AlignmentType.LEFT },
    rightAligned: { alignment: AlignmentType.RIGHT },
    groundsTitle: { bold: true, alignment: AlignmentType.CENTER },
    groundLine: { alignment: AlignmentType.LEFT },
    headingAlt: { bold: true, alignment: AlignmentType.CENTER },
    leftText: { alignment: AlignmentType.LEFT },
    rightText: { alignment: AlignmentType.RIGHT },
    center: { alignment: AlignmentType.CENTER },
    row: { alignment: AlignmentType.LEFT },
    headerRow: { bold: true, alignment: AlignmentType.LEFT },
    hr: { alignment: AlignmentType.LEFT },
    officeUseBlock: { alignment: AlignmentType.LEFT },
    battaRow: { alignment: AlignmentType.LEFT },
    rightLane: { alignment: AlignmentType.RIGHT }
};


export const createParagraph = (text, options = {}) =>
    new Paragraph({
        children: [new TextRun({ text, ...options })],
        alignment: options.alignment || AlignmentType.LEFT,
        spacing: { after: 200 },
    });

export const getPetitionersParagraphs = (petitioners = []) => {
    return petitioners
        .map((pet) => [
            createParagraph(pet.Name),
            createParagraph(pet.Address),
        ])
        .flat();
};