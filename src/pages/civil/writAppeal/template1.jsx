import { Document, Packer, Paragraph, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { paragraphStyles, createParagraph } from "../../../services/templateFunctions";

export const WritAppealTemplate = (formData) => {
  return new Document({
    sections: [{
      properties: {},
      children: [
        createParagraph("MEMORANDUM OF WRIT APPEAL", paragraphStyles.title),
        createParagraph("(UNDER CLAUSE 15 OF LETTER PATENT)", paragraphStyles.subTitle),
        createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD", paragraphStyles.centeredText),
        createParagraph("WRIT APPEAL No.           OF 2007", paragraphStyles.caseNo),
        createParagraph("AGAINST", paragraphStyles.against),
        createParagraph("W.P.No.                  OF 2007", paragraphStyles.caseNo),
        createParagraph("BETWEEN:", paragraphStyles.sectionTitle),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("...APPELLANT", paragraphStyles.rightAligned),
        createParagraph("AND", paragraphStyles.sectionTitle),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("________________", paragraphStyles.partyLine),
        createParagraph("...RESPONDENT", paragraphStyles.rightAligned),
        createParagraph("The address for service of all notices and process on the above named Appellant is that of his counsel M/s ###, Advocate, Hyderabad.", paragraphStyles.paragraph),
        createParagraph("The above named Appellant begs to present this Memorandum of Writ Appeal against the Judgment passed in W.P.No._____ of 2007, Dt.__________, passed by His Lordship Sri ________________, for the following grounds among other:", paragraphStyles.paragraph),
        createParagraph("G R O U N D S", paragraphStyles.groundsTitle),
        createParagraph("1.", paragraphStyles.groundLine),
        createParagraph("2.", paragraphStyles.groundLine),
        createParagraph("3.", paragraphStyles.groundLine),
        createParagraph("4.", paragraphStyles.groundLine),
        new Paragraph({ text: "", pageBreakBefore: true }),
        createParagraph("5.", paragraphStyles.groundLine),
        createParagraph("Other grounds would be urged at the time of hearing.", paragraphStyles.paragraph),
        createParagraph("HYDERABAD", paragraphStyles.paragraph),
        createParagraph("DATE:", paragraphStyles.paragraph),
        createParagraph("COUNSEL FOR THE APPELLANT", paragraphStyles.paragraph),
        new Paragraph({ text: "", pageBreakBefore: true }),
        createParagraph("__________ DISTRICT", paragraphStyles.startText),
        createParagraph("HIGH COURT : HYDERABAD", paragraphStyles.startText),
        createParagraph("W.A.No.               OF 2007", paragraphStyles.startText),
        createParagraph("AGAINST", paragraphStyles.startText),
        createParagraph("W.P.M.P/W.P.No.           OF 2007", paragraphStyles.startText),
        createParagraph("ON THE FILE OF THE", paragraphStyles.startText),
        createParagraph("__________________________", paragraphStyles.startText),
        createParagraph("__________________________", paragraphStyles.startText),
        createParagraph("G R O U N D S", paragraphStyles.heading),
        createParagraph("Filed By:", paragraphStyles.startText),
        createParagraph("M/s ### (000)", paragraphStyles.paragraph),
        createParagraph("ADVOCATE", paragraphStyles.paragraph),
        createParagraph("COUNSEL FOR THE APPELLANT/", paragraphStyles.paragraph),
        createParagraph("PETITIONER", paragraphStyles.paragraph),
        new Paragraph({ text: "", pageBreakBefore: true }),
        createParagraph("IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH", paragraphStyles.heading),
        createParagraph("AT HYDERABAD", paragraphStyles.heading),
        createParagraph("W.A.M.P.No.                OF 2007", paragraphStyles.centerText),
        createParagraph("IN", paragraphStyles.centerText),
        createParagraph("W.A.No.                OF 2007", paragraphStyles.centerText),
        createParagraph("Between:", paragraphStyles.centerText),
        createParagraph("_________________", paragraphStyles.leftText),
        createParagraph("...PETITIONER", paragraphStyles.rightText),
        createParagraph("AND", paragraphStyles.centerText),
        createParagraph("_____________________", paragraphStyles.leftText),
        createParagraph("...RESPONDENT", paragraphStyles.rightText),
        createParagraph("A F F I D A V I T", paragraphStyles.heading),
        createParagraph("I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:", paragraphStyles.paragraph),
        createParagraph("1.   I am the Petitioner herein and I know the facts of the case.", paragraphStyles.paragraph),
        createParagraph("2.", paragraphStyles.paragraph),
        createParagraph("3.", paragraphStyles.paragraph),
        createParagraph("4.", paragraphStyles.paragraph),
        createParagraph("It is therefore prayed that this Hon'ble Court may be Pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.", paragraphStyles.paragraph),
        createParagraph("Last Page Corss....", paragraphStyles.paragraph),
        createParagraph("DEPONENT", paragraphStyles.paragraph),
        createParagraph("Sworn and Signed in my presence on this day of _________ at Hyderabad.", paragraphStyles.paragraph),
        createParagraph("ADVOCATE :: HYDERABAD", paragraphStyles.paragraph),
      ]
    }]
  });
};

const generateAndDownloadWritAppealDocx = (formData) => {
  const doc = WritAppealTemplate(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "WritAppeal.docx"));
};

export default generateAndDownloadWritAppealDocx;
