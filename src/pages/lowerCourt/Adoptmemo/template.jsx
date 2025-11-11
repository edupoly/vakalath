import { Document, Packer, PageBreak, AlignmentType, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";
import {
    createDocxCoverSection,
    createParagraph,
    paragraphStyles,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";
// import { getDocxDocument } from "../bail/template1";

export const AdoptMemoTemplate = (formData) => {

    let fData={};
    fData.Petitioners=[
        {
            Name: "Petitioner One",
            Address: "123 First Street, Springfield"
        },
        {
            Name: "Petitioner Two",
            Address: "456 Second Avenue, Shelbyville"
        },
        {
            Name: "Petitioner Three",
            Address: "789 Third Boulevard, Capital City"
        }
    ];
    fData.Respondents=[
        {
            Name: "Respondent One",
            Address: "123 First Street, Springfield"
        },
        {
            Name: "Respondent Two",
            Address: "456 Second Avenue, Shelbyville"
        },
        {
            Name: "Respondent Three",
            Address: "789 Third Boulevard, Capital City"
        }
    ]

    const coverChildren = [
        createParagraph(
            `IN THE COURT OF THE`,
            paragraphStyles.underlinedTextSmall
        ),
        createParagraph(`<District>`, paragraphStyles.underlinedText),
        createParagraph(
            `I.A.No. <IANo> OF <myyear>`,
            paragraphStyles.centerTextSmall
        ),
        createParagraph('IN', paragraphStyles.centerTextSmall),
        createParagraph(
            `O.S.No. <OSNo>> OF <myyear>`,
            paragraphStyles.centerTextSmall
        ),
        createParagraph("",paragraphStyles.emptySpaceSmall),
        ...BetweenSection(fData,"...Petitioner/Plantiff","...Respondent/Defendant"),
        createParagraph("", paragraphStyles.emptySpace),
        createParagraph(
            "ADOPTION MEMO FILED BY THE",
            paragraphStyles.underlinedHeadingSmall
        ),
        createParagraph("RESPONDENTS No._______", paragraphStyles.underlinedHeadingSmall),
        createParagraph("", paragraphStyles.emptySpace),
        createParagraph(`FILED ON: <fDate>>`, paragraphStyles.centerText),
        createParagraph("", paragraphStyles.emptySpace),
        createParagraph("FILED BY:", paragraphStyles.leftAlignSmall),
        createParagraph(`M/s <counsel_Address>`, paragraphStyles.leftAlignSmall),
        createParagraph("COUNSEL FOR RESPONDENTS No.",paragraphStyles.rightAlignSmall)
    ];

    // const tableRows = [
    //     new TableRow({
    //         children: [
    //             new TableCell({
    //                 children: [
    //                     createParagraph(`Place: <place>`, paragraphStyles.leftAlignSmall),
    //                     createParagraph(`DATE: <fDate>`, paragraphStyles.leftAlignSmall),
    //                 ],
    //                 width: {
    //                     size: 50,
    //                     type: WidthType.PERCENTAGE,
    //                 },
    //             }),
    //             new TableCell({
    //                 children: [
    //                     createParagraph(
    //                         "COUNSEL FOR PETITIONER",
    //                         paragraphStyles.rightAlignText
    //                     ),
    //                 ],
    //                 width: {
    //                     size: 50,
    //                     type: WidthType.AUTO,
    //                 },
    //             }),
    //         ],
    //         width: {
    //             size: 100,
    //             type: WidthType.PERCENTAGE,
    //         },
    //     }),
    // ]


    return new Document({
        sections: [
            {
                properties: {},
                children: [
                    createParagraph(
                        `IN THE COURT OF THE <district>`,
                        paragraphStyles.centerText
                    ),
                    createParagraph(
                        `I.A.No. <IANo> OF <myyear>`,
                        paragraphStyles.centerTextSmall
                    ),
                    createParagraph('IN', paragraphStyles.centerTextSmall),
                    createParagraph(
                        `O.S.No. <OSNo> OF <myyear>`,
                        paragraphStyles.centerTextSmall
                    ),
                    ...BetweenSection(fData,"...Petitioner/Plantiff","...Respondent/Defendant"),
                    createParagraph(
                        "ADOPTION MEMO FILED BY THE RESPONDENTS No.3,4 & 5",
                        paragraphStyles.underlinedHeading
                    ),
                    createParagraph("     We are the Respondents No.__________ in the above OS.No._________. We have read the counter affidavit filed by the Respondent No.__ in the above IA.No._________ in OS.No._______ and we are adopting the said counter affidavit. The contentions made in the IA filed by the petitioner are denied as they are incorrect and untrue.",
                        paragraphStyles.paraText
                    ),
                    createParagraph('', paragraphStyles.emptySpaceSmall),
                    createParagraph('        Hence this memo.', paragraphStyles.leftAlignText),
                    createParagraph("Respondent No.", paragraphStyles.rightAlignText),
                    createParagraph("Respondent No.", paragraphStyles.rightAlignText),
                    createParagraph("Respondent No.", paragraphStyles.rightAlignText),
                    createParagraph("", paragraphStyles.emptySpaceSmall),
                    createParagraph(`Date: <<fDate>>`, paragraphStyles.leftAlignSmall),
                    createParagraph(`Place: <<place>>`, paragraphStyles.leftAlignSmall),
                    createParagraph(`Counsel for Respondents No.`, paragraphStyles.centerText)
                ]
            },
            createDocxCoverSection(coverChildren, 6780),
        ],
    });
};