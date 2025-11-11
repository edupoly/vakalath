

import { Document } from "docx";
import { combinedSections } from "../../../components/highcourt/combineSections";
import {
  h3BoldCenter,
  h3Center,
  h3Left,
  h3underlineBoldCenter,
  h3UnderlineCenter,
  LineSpace,
  pageBreak,
  tabSpace,
} from "../../../components/templates/elementTypes";
import { create3LineFooter, createSignatureFooter } from "../../../components/templates/FooterSections";
import { headerWith2Numbers } from "../../../components/templates/HeaderSection";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { writPetitionSections } from "./wpData";

export const writPetitionTemplate = (formData) => {
  return new Document({
    sections: [
      {
        properties: {},
        children: [
            ...combinedSections(formData, writPetitionSections["wp.no"]),
            ...LineSpace(1),
            h3Center("BEFORE ME"),
            ...LineSpace(1),
            h3Center("ADVOCATE :: «place»"),
            ...LineSpace(1),
            h3UnderlineCenter("VERIFICATION STATEMENT"),
            ...LineSpace(1),
            h3Left(tabSpace(3)+" I, «verification», being the petitioner/ person acquainted with the facts do hereby verify and state that the contents of the above paras of the Affidavit are true and correct to the best of my knowledge. The above contents are typed under my instructions and same are read over and explained to me in vernacular language.   Hence verified at «place» on this the day of «fdate»"),
            ...LineSpace(1),
            createSignatureFooter(["Advocate"],["Deponent"]),
          pageBreak(),
          ...combinedSections(formData,writPetitionSections["Art-226"]),
          pageBreak(),
          createRightAlignPage([
            h3Center("«district» :: District"),
            ...headerWith2Numbers([
              "IN THE COURT OF THE «district»",
              `I.A.No. ${tabSpace(3)} OF <<myear>>`,
              "IN",
              `«OPNO» \nDated «OPDATE»  \nOn the file of the  \n«lowercourt»`,
            ]),
            ...LineSpace(10),
            h3underlineBoldCenter("MEMORANDUM OF APPEAL"),
            ...LineSpace(10),
            ...create3LineFooter([
              "Filed By:",
              "M/s <<counsel_address1>>",
              "Counsel for Petitioner",
            ]),
          ]),
          pageBreak(),
          ...combinedSections(formData,writPetitionSections["sec-151"]),

        ],
      },
    ],
  });
};
