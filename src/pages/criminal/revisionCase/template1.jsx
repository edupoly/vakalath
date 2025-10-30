import { Document, Packer, Paragraph, PageBreak, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { paragraphStyles, createParagraph } from "../../../services/templateFunctions";

export const CriminalRevisionTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
          createParagraph("MEMORANDUM OF CRIMINAL REVISION CASE", paragraphStyles.headingCenter),
          createParagraph("UNDER SECTION 397 & 401 OF CRIMINAL PROCEDURE CODE, 1973", paragraphStyles.center),
          createParagraph("IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH", paragraphStyles.headingCenter),
          createParagraph("AT HYDERABAD", paragraphStyles.center),

          createParagraph("Crl.R.C.No. ________ OF 2007", paragraphStyles.center),
          createParagraph("IN", paragraphStyles.center),
          createParagraph("Crl.A.No. ________ OF 2007", paragraphStyles.center),
          createParagraph("ON THE FILE OF THE _______________________________", paragraphStyles.center),
          createParagraph("IN", paragraphStyles.center),
          createParagraph("C.C.No. ________ OF 2007", paragraphStyles.center),
          createParagraph("ON THE FILE OF THE _______________________________", paragraphStyles.center),

          createParagraph("BETWEEN:", paragraphStyles.center),

          createParagraph("----------------", paragraphStyles.item),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("..ACCUSED/PETITIONER", paragraphStyles.endTextBold),

          createParagraph("and", paragraphStyles.startText),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("..COMPLAINANT/RESPONDENT", paragraphStyles.endTextBold),

          createParagraph(
            "The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ### Advocate, Hyderabad.",
            paragraphStyles.justifiedText
          ),
          createParagraph(
            "The above named Appellant begs to file the revision against the judgment and sentence passed by the learned ____________________, Dt.__________ in Crl.A.No.___ of 2007, for the following grounds among others:",
            paragraphStyles.justifiedText
          ),

          createParagraph("GROUNDS", { ...paragraphStyles.heading, textDecoration: "underline" }),

          createParagraph("1. The judgment of the learned ______________ Judge is illegal, improper and incorrect.", paragraphStyles.item),
          createParagraph("2. The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs ________________.", paragraphStyles.item),
          createParagraph("3. The learned Judge should have seen that the ingredients to constitute the said offences are not made out by the prosecution.", paragraphStyles.item),
          createParagraph("4. The learned Judge should have seen that the medical evidence does not corroborate with the prosecution case.", paragraphStyles.item),

          createParagraph("5.", paragraphStyles.item),
          createParagraph("6.", paragraphStyles.item),
          createParagraph("7.", paragraphStyles.item),
          createParagraph("8. The other reasons given by the learned Judge are unsustainable.", paragraphStyles.item),
          createParagraph("9. Having regard to the facts and circumstances of the case, the sentence is unduly severe.", paragraphStyles.item),

          createParagraph("HYDERABAD", paragraphStyles.normalText),
          createParagraph("COUNSEL FOR THE PETITIONER", paragraphStyles.alignRight),
          createParagraph("DATE: ____________", paragraphStyles.normalText),

          createParagraph("_______ DISTRICT", paragraphStyles.coverPage),
          createParagraph("HIGH COURT :: HYDERABAD", paragraphStyles.center),
          createParagraph("Crl.M.P.No. _______ OF 2007", paragraphStyles.center),
          createParagraph("IN", paragraphStyles.center),
          createParagraph("Crl.R.C.No. _______ OF 2007", paragraphStyles.center),

          createParagraph("BAIL PETITION", { ...paragraphStyles.headingCenter, fontSize: 14 }),

          createParagraph("M/s ### (000)", paragraphStyles.startText),
          createParagraph("Advocate", paragraphStyles.startText),
          createParagraph("COUNSEL FOR THE PETITIONER", paragraphStyles.endText),

          createParagraph("MEMORANDUM OF CRIMINAL MISC. PETITION", paragraphStyles.headingCenter),
          createParagraph("UNDER SECTION 397(1) OF CRIMINAL PROCEDURE CODE, 1973", paragraphStyles.center),
          createParagraph("IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH", paragraphStyles.headingCenter),
          createParagraph("AT HYDERABAD", paragraphStyles.center),

          createParagraph("Crl.M.P.No. _______ OF 2007", paragraphStyles.center),
          createParagraph("IN", paragraphStyles.center),
          createParagraph("Crl.R.C.No. _______ OF 2007", paragraphStyles.center),

          createParagraph("BETWEEN:", paragraphStyles.center),

          createParagraph("----------------", paragraphStyles.item),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("..ACCUSED/PETITIONER", paragraphStyles.endTextBold),

          createParagraph("and", paragraphStyles.startText),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("----------------", paragraphStyles.item),
          createParagraph("..COMPLAINANT/RESPONDENT", paragraphStyles.endTextBold),

          createParagraph(
            "The petitioner is convicted under Sec._____ and sentenced to suffer R.I/S.I., for a period of _________ years. He is also directed to pay a fine of Rs.________/- in default suffer, R.I for ____ months. The petitioner has paid the fine amount. Further he was on bail pending appeal.",
            paragraphStyles.justifiedText
          ),

          createParagraph(
            "It is therefore prayed that this Hon'ble Court may be pleased to release the petitioner on bail pending disposal of the Criminal Revision Case No.________ in this Hon'ble Court.",
            paragraphStyles.justifiedText
          ),

          createParagraph("HYDERABAD", paragraphStyles.normalText),
          createParagraph("COUNSEL FOR THE PETITIONER", paragraphStyles.alignRight),
          createParagraph("DATE: ____________", paragraphStyles.normalText),

          createParagraph("Note: Accused in ___________ Jail.", paragraphStyles.item),
          createParagraph("Bail to the satisfaction of the JFCM, _____________.", paragraphStyles.item),
        ],
      },
    ],
  });
};

const generateAndDownloadCriminalRevisionDocx = (formData) => {
  const doc = CriminalRevisionTemplate(formData);
  Packer.toBlob(doc).then((blob) => saveAs(blob, "CriminalRevisionCase.docx"));
};

export default generateAndDownloadCriminalRevisionDocx;
