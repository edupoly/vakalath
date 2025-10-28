import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { saveAs } from "file-saver";

export const getDocxDocument = (formData) => {
  const createParagraph = (text, options = {}) =>
    new Paragraph({
      children: [new TextRun({ text, ...options })],
      alignment: options.alignment || AlignmentType.LEFT,
      spacing: { after: 200 },
    });

  const petitionersParagraphs =
    formData?.Petitioners?.map((pet) => [
      createParagraph(pet.Name, { bold: true }),
      createParagraph(pet.Address),
    ]).flat() || [];

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("MEMORANDUM OF CRIMINAL PETITION", { alignment: AlignmentType.CENTER, bold: true }),
          createParagraph("(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)", { alignment: AlignmentType.CENTER }),
          createParagraph("IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH", { alignment: AlignmentType.CENTER }),
          createParagraph("AT HYDERABAD", { alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
          createParagraph(`CRL.P.No. ${formData?.CrlpNo || "________"} OF 2007`, { alignment: AlignmentType.CENTER }),
          createParagraph("BETWEEN:", { alignment: AlignmentType.CENTER }),
          ...petitionersParagraphs,
          createParagraph("..PETITIONER/ACCUSED", { alignment: AlignmentType.RIGHT, bold: true }),
          createParagraph("AND"),
          createParagraph("THE STATE OF A.P. REP. BY"),
          createParagraph("PUBLIC PROSECUTOR"),
          createParagraph("..RESPONDENT/COMPLAINANT", { alignment: AlignmentType.RIGHT, bold: true }),
          createParagraph(`The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ###, Advocate, Hyderabad.`),
          createParagraph("PETITION FOR ANTICIPATORY BAIL", { alignment: AlignmentType.CENTER, bold: true }),
          createParagraph(`The petitioner is accused in Crime No. ${formData?.CrimeNumber} of 2007 of ${formData?.PoliceStationName} Police Station. He is alleged to have committed offenses punishable under Sections ${formData?.Sections}. He is apprehending arrest in the above crime.`),
          ...Array.from({ length: 10 }, (_, i) => createParagraph(`${i + 1}. The petitioner submits that ...`)),
          createParagraph("HYDERABAD", { alignment: AlignmentType.LEFT }),
          createParagraph("COUNSEL FOR THE PETITIONER", { alignment: AlignmentType.RIGHT, bold: true }),
          createParagraph("DATE: ____________"),
           createParagraph(`${formData?.Place || "________"} DISTRICT`, {
            bold: true,
            alignment: AlignmentType.LEFT,
          }),
          createParagraph("HIGH COURT HYDERABAD", {
            alignment: AlignmentType.CENTER,
            spacingBefore: 40,
          }),
          createParagraph(`Crl.P.No. ${formData?.CrlpNo || "________"} OF 2007`, {
            alignment: AlignmentType.CENTER,
            underline: {},
            spacingBefore: 40,
          }),
          createParagraph("PETITION FOR ANTICIPATORY BAIL", {
            alignment: AlignmentType.CENTER,
            bold: true,
            spacingBefore: 100,
          }),
          createParagraph("M/s ### (000)", { alignment: AlignmentType.LEFT, spacingBefore: 100 }),
          createParagraph("Advocate", { alignment: AlignmentType.LEFT }),
          createParagraph("COUNSEL FOR THE PETITIONER", { alignment: AlignmentType.RIGHT, spacingBefore: 20 }),
        ],
      },
    ],
  });
};

const generateAndDownloadDocx = (formData) => {
  const doc = getDocxDocument(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "HighCourtBail.docx"));
};

export default generateAndDownloadDocx;
