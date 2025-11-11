import {
  Document,
  Packer,
  PageBreak,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import {
  paragraphStyles,
  createParagraph,
  PetitionerAddress,
  petitionerTable,
  createDocxCoverSection,
} from "../../../services/templateFunctions";
import { BetweenSection } from "../../../components/templates/BetweenSection";

export const CRPTemplate = (formData) => {
  // ===== COVER PAGE CONTENT =====
  const coverChildren = [
    createParagraph("_______ DISTRICT", paragraphStyles.centerTextSmall),
    createParagraph("HIGH COURT : HYDERABAD", paragraphStyles.centerTextSmall),
    createParagraph("C.R.P.No. _______ OF 2007", paragraphStyles.centerTextSmall),
    createParagraph("AGAINST", paragraphStyles.centerTextSmall),
    createParagraph("I.A.No. _______ OF 2007", paragraphStyles.centerTextSmall),
    createParagraph("IN", paragraphStyles.centerTextSmall),
    createParagraph("O.S.No. _______ OF 2007", paragraphStyles.centerTextSmall),
    createParagraph("ON THE FILE OF THE", paragraphStyles.centerTextSmall),
    createParagraph("__________________________", paragraphStyles.centerTextSmall),
    createParagraph("__________________________", paragraphStyles.centerTextSmall),

    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("", paragraphStyles.emptySpace),

    createParagraph("G R O U N D S", paragraphStyles.centerTextSmall),

    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("", paragraphStyles.emptySpace),
    createParagraph("", paragraphStyles.emptySpace),

    createParagraph("Filed By:", paragraphStyles.centerTextSmall),
    createParagraph("M/s ### (000)", paragraphStyles.centerTextSmall),
    createParagraph("ADVOCATE", paragraphStyles.centerTextSmall),
    createParagraph(
      "COUNSEL FOR THE APPELLANT / PETITIONER",
      paragraphStyles.centerTextSmall
    ),
  ];

  // ===== MAIN DOCUMENT =====
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          // === Heading Section ===
          createParagraph(
            "MEMORANDUM OF CIVIL REVISION PETITION",
            paragraphStyles.centerTextSmall
          ),
          createParagraph(
            "(UNDER SECTION 115 OF C.P.C)",
            paragraphStyles.centerTextSmall
          ),
          createParagraph(
            "(UNDER ART.227 OF CONSTITUTION OF INDIA)",
            paragraphStyles.centerTextSmall
          ),
          createParagraph(
            "IN THE COURT OF THE _________________________________________",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph("I.A.No. _______ OF 2007", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph("IN", paragraphStyles.centerTextSmall),
          createParagraph("O.S.No. _______ OF 2007", paragraphStyles.centerTextSmall),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH AT HYDERABAD",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          createParagraph("C.R.P.No. _______ OF 2007", paragraphStyles.centerTextSmall),

          // === Parties Section ===
          ...PetitionerAddress(),

          // === Address Section ===
          createParagraph(
            "The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ####, Advocate, Hyderabad.",
            paragraphStyles.paraText
          ),
          createParagraph(
            "The above named Petitioner begs to present this Memorandum of Civil Revision Petition against the Judgment passed in I.A.No._____ of 2007 in O.S.No._____ of 2007, Dt.__________, on the file of _________________, __________, for the following grounds among other:",
            paragraphStyles.paraText
          ),

          createParagraph("G R O U N D S", paragraphStyles.underlinedHeading),

          createParagraph(
            "1. The Judgment and decree of the Lower Court is illegal, contrary to law and facts, weight of evidence and probabilities of the case.",
            paragraphStyles.paraText
          ),
          createParagraph("2.", paragraphStyles.paraText),
          createParagraph("3.", paragraphStyles.paraText),

          createParagraph("", { children: [new PageBreak()] }),

          createParagraph("4.", paragraphStyles.paraText),
          createParagraph("5.", paragraphStyles.paraText),

          // === Valuation Section ===
          createParagraph("MEMO OF VALUATION", paragraphStyles.underlinedHeading),
          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph(
            "The value of Revision is more than One Thousand, hence Court fee of Rs.10/- paid herewith which is sufficient under the A.P.C.F. and S.V.Act.",
            paragraphStyles.paraText
          ),

          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph("", paragraphStyles.emptySpaceMedium),
          createParagraph("", paragraphStyles.emptySpaceMedium),

          petitionerTable(),

          // === Page Break Before Cover Page ===
          createParagraph("", { children: [new PageBreak()] }),
        ],
      },

      // === Court Heading (Cover Page) ===
      createDocxCoverSection(coverChildren, 7000),

      // === Affidavit Section ===
      {
        properties: {},
        children: [
          createParagraph(
            "",
            { children: [new PageBreak()] }
          ),
          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE : ANDHRA PRADESH",
            paragraphStyles.centerTextSmall
          ),
          createParagraph("AT HYDERABAD", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("CRP.M.P.No. _______ OF 2007", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("IN", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),
          createParagraph("C.R.P.No. _______ OF 2007", {
            ...paragraphStyles.centerTextSmall,
            spacing: { after: 100 },
          }),

          ...BetweenSection(formData),

          createParagraph("A F F I D A V I T", {
            ...paragraphStyles.underlinedHeading,
            spacing: { before: 200 },
          }),

          createParagraph(
            "I, _________________, S/o._____________, aged __ years, Occ:___________, R/o.__________________________________ District, temporarily come down to Hyderabad, do hereby solemnly affirm and state as follows:",
            { ...paragraphStyles.paraText, spacing: { before: 500 } }
          ),

          createParagraph(
            "1. I am the Petitioner herein and I know the facts of the case.",
            paragraphStyles.bulletPointmd
          ),
          createParagraph("2.", paragraphStyles.bulletPointsm),
          createParagraph("3.", paragraphStyles.bulletPointsm),
          createParagraph("4.", paragraphStyles.bulletPointsm),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to _______________________________________________ and pass such other order or orders as this Hon'ble Court may deem fit and proper in the circumstances of the Case.",
            { ...paragraphStyles.paraText, spacing: { after: 800 } }
          ),

          // === Signature Table ===
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      createParagraph("Last Page Cross....", paragraphStyles.paraText),
                    ],
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    borders: {
                      top: { size: 0 },
                      left: { size: 0 },
                      right: { size: 0 },
                      bottom: { size: 0 },
                    },
                  }),
                  new TableCell({
                    children: [
                      createParagraph("DEPONENT", paragraphStyles.paraText),
                    ],
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    borders: {
                      top: { size: 0 },
                      left: { size: 0 },
                      right: { size: 0 },
                      bottom: { size: 0 },
                    },
                  }),
                ],
              }),
            ],
            width: { size: 8835, type: WidthType.DXA },
            borders: {
              top: { size: 0 },
              bottom: { size: 0 },
              left: { size: 0 },
              right: { size: 0 },
              insideHorizontal: { size: 0 },
              insideVertical: { size: 0 },
            },
          }),

          createParagraph("Sworn and Signed in my presence", {
            ...paragraphStyles.paraText,
            spacing: { before: 200 },
          }),
          createParagraph("on this day of _________", paragraphStyles.paraText),
          createParagraph("at Hyderabad.", paragraphStyles.paraText),
          createParagraph("ADVOCATE :: HYDERABAD", {
            ...paragraphStyles.centerTextSmall,
            spacing: { before: 100 },
          }),
        ],
      },
    ],
  });
};

// ===== Download Function =====
const generateAndDownloadCRPDocx = (formData) => {
  const doc = CRPTemplate(formData);
  Packer.toBlob(doc).then((blob) =>
    saveAs(blob, "CivilRevisionPetition.docx")
  );
};

export default generateAndDownloadCRPDocx;
