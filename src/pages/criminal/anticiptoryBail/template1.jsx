import { Document, Packer, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import {
  createParagraph,
  getPetitionersParagraphs,
} from "../../../services/templateFunctions";
import { getDocxDocument } from "../bail/template1";
import paragraphStyles from "../../../assets/templateStyles";

export const ABTemplate = (formData) => {
  const petitionersParagraphs = getPetitionersParagraphs(formData?.Petitioners);

  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph(
            "MEMORANDUM OF CRIMINAL PETITION",
            paragraphStyles.headingCenter
          ),
          createParagraph(
            "(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)",
            paragraphStyles.center
          ),
          createParagraph(
            "IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH",
            paragraphStyles.heading
          ),
          createParagraph("AT HYDERABAD", paragraphStyles.center),
          createParagraph(
            `CRL.P.No. ${formData?.CrlpNo || "________"} OF 2007`,
            paragraphStyles.caseNo
          ),
          createParagraph("BETWEEN:", paragraphStyles.startText),
          ...petitionersParagraphs,
          createParagraph("..PETITIONER/ACCUSED", paragraphStyles.endText),
          createParagraph("AND", paragraphStyles.centerText),
          createParagraph(
            "THE STATE OF A.P. REP. BY",
            paragraphStyles.startText
          ),
          createParagraph("PUBLIC PROSECUTOR", paragraphStyles.startText),
          createParagraph("..RESPONDENT/COMPLAINANT", paragraphStyles.endText),
          createParagraph(
            `The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ###, Advocate, Hyderabad.`,
            paragraphStyles.justifiedText
          ),
          createParagraph(
            "PETITION FOR ANTICIPATORY BAIL",
            paragraphStyles.headingCenter
          ),
          createParagraph(
            `The petitioner is accused in Crime No. ${formData?.CrimeNumber || "____"
            } of 2007 of ${formData?.PoliceStationName || "____"
            } Police Station. He is alleged to have committed offenses punishable under Sections ${formData?.Sections || "____"
            }. He is apprehending arrest in the above crime.`,
            paragraphStyles.paragraph
          ),
          ...Array.from({ length: 10 }, (_, i) =>
            createParagraph(
              `${i + 1}. The petitioner submits that`,
              { spacing: { after: 800 } },
            )
          ),
          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to direct the Station House Officer _______________ Police Station to release the Petitioner on Bail in the event of his arrest in connection with Crime No.______ of 2007 of ____________ Police Station.",
            paragraphStyles.paragraph
          ),
          createParagraph("HYDERABAD", paragraphStyles.leftText),
          createParagraph(
            "COUNSEL FOR THE PETITIONER",
            paragraphStyles.rightText
          ),
          createParagraph("DATE: ____________", paragraphStyles.leftText),
          createParagraph("", { children: [new PageBreak()] }),
          createParagraph(
            `${formData?.Place || "________"} DISTRICT`,
            paragraphStyles.rightLane
          ),
          createParagraph("HIGH COURT HYDERABAD", paragraphStyles.centeredText),
          createParagraph(
            `Crl.P.No. ${formData?.CrlpNo || "________"} OF 2007`,
            paragraphStyles.centeredText
          ),
          createParagraph(
            "PETITION FOR ANTICIPATORY BAIL",
            paragraphStyles.headingAlt
          ),
          createParagraph("M/s ### (000)", paragraphStyles.leftText),
          createParagraph("Advocate", paragraphStyles.leftText),
          createParagraph(
            "COUNSEL FOR THE PETITIONER",
            paragraphStyles.rightText
          ),
        ],
      },
    ],
  });
};

 
