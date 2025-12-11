import { Table, TableCell, TableRow, WidthType } from "docx"
import { createParagraph, paragraphStyles } from "../../services/templateFunctions"
import { h1BoldCenter, h2BoldCenter, h3BoldCenter, h3BoldLeft, h3BoldRight, h3Center, h3Left, h3Right, h3underlineBoldCenter, h3UnderlineBoldLeft, h3UnderlineBoldRight, h3UnderlineCenter, h3UnderlineLeft, h3UnderlineRight, LineSpace } from "./elementTypes"

export const headerWith1NumberBold = (lines) => {
    return [
        h3BoldCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1])
    ]
}

export const headerWith1NumberUnderline = (lines) => {
    return [
        h3UnderlineCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1])
    ]
}

export const headerWith1NumberUnderlineBold = (lines) => {
    return [
        h3underlineBoldCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1])
    ]
}

export const headerWith1Number = (lines) => {
    return [
        h3Center(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1])
    ]
}

export const header = (head) => {
    let firstLine;
    if (head?.bold && head?.underline) {
        firstLine = h3underlineBoldCenter(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.bold) {
        firstLine = h3BoldCenter(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.underline) {
        firstLine = h3UnderlineCenter(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else {
        firstLine = h3Center(head?.text,head?.size && head?.size*2,head?.allCaps);
    }
    return firstLine;
}

export const leftHeader = (head) => {
    let firstLine;
    if (head?.bold && head?.underline) {
        firstLine = h3UnderlineBoldLeft(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.bold) {
        firstLine = h3BoldLeft(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.underline) {
        firstLine = h3UnderlineLeft(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else {
        firstLine = h3Left(head?.text,head?.size && head?.size*2,head?.allCaps);
    }
    return firstLine;
}

export const rightHeader = (head) => {
    let firstLine;
    if (head?.bold && head?.underline) {
        firstLine = h3UnderlineBoldRight(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.bold) {
        firstLine = h3BoldRight(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else if (head?.underline) {
        firstLine = h3UnderlineRight(head?.text,head?.size && head?.size*2,head?.allCaps);
    } else {
        firstLine = h3Right(head?.text,head?.size && head?.size*2,head?.allCaps);
    }
    return firstLine;
}

export const headerWithNumbers = (data) => {
    return data?.map((row) => {
        const lines = row?.lines || [];

        return [
            ...(row?.head && [header(row?.head),
            ...LineSpace(1)]),
            ...lines?.map((line) => h3Center(line)).flat(),
        ];
    }).flat() || [];
};


export const headerWith2NumbersBold = (lines) => {
    return [
        h3BoldCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1]),
        h3Center(lines[2]),
        h3Center(lines[3]),
    ]
}

export const headerWith2NumbersBoldUnderline = (lines) => {
    return [
        h3underlineBoldCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1]),
        h3Center(lines[2]),
        h3Center(lines[3]),
    ]
}

export const headerWith2Numbers = (lines) => {
    return [
        h3Center(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1]),
        h3Center(lines[2]),
        h3Center(lines[3]),
    ]
}

export const headerWith2NumbersUnderline = (lines) => {
    return [
        h3UnderlineCenter(lines[0]),
        ...LineSpace(1),
        h3Center(lines[1]),
        h3Center(lines[2]),
        h3Center(lines[3]),
    ]
}

export const headerTable = (headerArray = []) => {
    return headerArray.map((headerObj) => {
        return new Table({
            rows: [
                new TableRow({
                    children: [
                        headerObj?.left ? new TableCell({
                            children: [leftHeader(headerObj?.left)],
                            width: { size: 50, type: WidthType.PERCENTAGE },
                        }) : null,

                        headerObj?.right ? new TableCell({
                            children: [rightHeader(headerObj?.right)],  // reuse header, or create rightHeader if different
                            width: { size: 30, type: WidthType.PERCENTAGE },
                        }) : null,
                    ],
                }),
            ],
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
                top: { size: 0 },
                bottom: { size: 0 },
                left: { size: 0 },
                right: { size: 0 },
                insideHorizontal: { size: 0 },
                insideVertical: { size: 0 },
            },
        });
    });
};
