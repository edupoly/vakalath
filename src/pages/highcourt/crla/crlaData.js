import { tabSpace } from "../../../components/templates/elementTypes";

export const CRLASections = {
  "374(2)": {
    mainTitle: `MEMORANDUM OF CRIMINAL APPEAL`,
    subTitle: `UNDER SECTION 374(2) OF CRIMINAL PROCEDURE CODE, 1973`,
    headerLines: [
      `«highcourt»`,
      `Crl.A.No. ${tabSpace(3)} OF «myear»`,
      `IN`,
      `«OPNO»`
    ],
    headerLine: { bold: true, underLine: true },
    betweenSection: {
      pet: `...Accused/Appellant`,
      res: `...Complainant/Respondent`
    },
    headPara: [
      {
        head: "",
        para: [`${tabSpace(1)}The address for service of all notices and process on the above named Appellant is that of his counsel «counsel_address»`,
          `${tabSpace(1)}The above named Appellant begs to file this Criminal Appeal against the judgment and sentence passed by the learned «lowercourt» in «OPNO», dated «OPDATE»,  for the following grounds among other:`]
      },
      {
        head: "GROUNDS",
        para: [
          "1.   The judgment of the learned ______________ Judge is contrary to law weight of evidence and probabilities of the case. ",
          "2.   The learned Judge erred in placing reliance on the highly interested and discrepant testimony of PWs _________________.",
          "3.   The learned Judge ",
          "4.",
          "5.",
          "6.",
          "7.",
          "8.   The other reasons given by the learned Judge are unsustainable. ",
          "9.   Having regard to the facts and circumstances of the case. The sentence is unduly severe.",
          "     It is therefore prayed that this Hon'ble Court may be pleased «MAIN_PRAYER» and pass such other order or orders may deem fit and proper in the circumstances of the case."
        ]

      },
    ],
    footerLeft: [`DATE:«fdate»`, `«place»`],
    footerRight: [`Counsel For Appellant`]
  },

  482: {
    mainTitle: `MEMORANDUM OF CRIMINAL MISC. PETITION`,
    subTitle: `UNDER SECTION 482 OF CRIMINAL PROCEDURE CODE, 1973`,
    headerLines: [
      `«highcourt»`,
      `I.A.No. ${tabSpace(3)} OF «myear»`,
      `IN`,
      `Crl.A.No.${tabSpace(3)}OF «myear»`
    ],
    betweenSection: {
      left: `...Accused/Appellant`,
      right: `...Complainant/Respondent`
    },
    paragraphs: [
      `${tabSpace(1)} It is therefore prayed that this Hon'ble Court may be pleased «INTERIM_PRAYER» pending disposal of the above criminal appeal and pass such other order or orders may deem fit and proper in the circumstances of the case.`
    ],
    footerLeft: [`DATE:«fdate»`, `«place»`],
    footerRight: [`Counsel For petitioner`]
  },

  389: {
    mainTitle: `MEMORANDUM OF CRIMINAL MISC. PETITION`,
    subTitle: `UNDER SECTION 389(1) OF CRIMINAL PROCEDURE CODE, 1973`,
    headerLines: [
      `«highcourt»`,
      `I.A.No. ${tabSpace(3)} OF «myear»`,
      `IN`,
      `Crl.A.No.${tabSpace(3)}OF «myear»`
    ],
    betweenSection: {
      left: `...Accused/Appellant`,
      right: `...Complainant/Respondent`
    },
    paragraphs: [
      `${tabSpace(1)} It is therefore prayed that this Hon'ble Court may be pleased to enlarge the petitioner on bail in «OPNO», dated «OPDATE», of «lowercourt» and pass such other order or orders may deem fit and proper in the circumstances of the case.`
    ],
    footerLeft: [`DATE:«fdate»`, `«place»`],
    footerRight: [`Counsel For petitioner`]
  },

  378: {
    mainTitle: `MEMORANDUM OF CRIMINAL MISC. PETITION`,
    subTitle: `UNDER SECTION 378(4) OF CRIMINAL PROCEDURE CODE, 1973`,
    headerLines: [
      `«highcourt»`,
      `I.A.No. ${tabSpace(3)} OF «myear»`,
      `IN`,
      `Crl.A.No.${tabSpace(3)}OF «myear»`
    ],
    betweenSection: {
      left: `...Accused/Appellant`,
      right: `...Complainant/Respondent`
    },
    paragraphs: [
      `${tabSpace(1)} For the reasons stated in the accompanying affidavit, it is therefore prayed that this Hon'ble Court may be pleased to grant leave to file appeal against the order passed by the «lowercourt» in «OPNO», dated «OPDATE» in the interest of justice and pass such other order or orders may deem fit and proper in the circumstances of the case.`
    ],
    footerLeft: [`DATE:«fdate»`, `«place»`],
    footerRight: [`Counsel For petitioner`]
  }
};
