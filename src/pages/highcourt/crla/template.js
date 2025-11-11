import { Document, Packer, PageBreak } from "docx";
import { h3Center, h3underlineBoldCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes";
import { BetweenSection } from "../../../components/templates/BetweenSection";
import { addParagraphs } from "../../../components/templates/paragraphFunctions";
import { headerWith1Number, headerWith1NumberUnderlineBold, headerWith2Numbers } from "../../../components/templates/HeaderSection";
import { createRightAlignPage } from "../../../components/templates/tableFunctions";
import { create3LineFooter, createSignatureFooter } from "../../../components/templates/FooterSections";
import { combinedSections } from "../../../components/highcourt/combineSections";
import { CRLASections } from "./crlaData";

export const CRLATemplate = (formData) => {
    return new Document({
        sections: [
            {
                properties: {},
                children: [
                   ...combinedSections(formData,CRLASections["374(2)"]),
                    pageBreak(),
                    createRightAlignPage([
                        h3Center("«district» :: District"),
                        ...headerWith2Numbers([
                            "IN THE COURT OF THE «district»",
                            `I.A.No. ${tabSpace(3)} OF <<myear>>`,
                            "IN",
                            `«OPNO» \nDated «OPDATE»  \nOn the file of the  \n«lowercourt»`
                        ]),
                        ...LineSpace(10),
                        h3underlineBoldCenter("MEMORANDUM OF APPEAL"),
                        ...LineSpace(10),
                        ...create3LineFooter([
                            "Filed By:",
                            "M/s <<counsel_address1>>",
                            "Counsel for Petitioner"
                        ])
                    ]),
                    pageBreak(),
                   ...combinedSections(formData,CRLASections["482"]),
                    pageBreak(),
                    createRightAlignPage([
                        h3Center("«district» :: District"),
                        ...headerWith2Numbers([
                            "IN THE COURT OF THE <<highcourt>>",
                            `I.A.No. ${tabSpace(3)} OF <<myear>>`,
                            "IN",
                            `Crl.A.No.${tabSpace(3)}OF «myear»`
                        ]),
                        ...LineSpace(10),
                        h3underlineBoldCenter("SUSPENSION PETITION"),
                        ...LineSpace(10),
                        ...create3LineFooter([
                            "Filed By:",
                            "M/s <<counsel_address1>> Advocate",
                            "Counsel for Petitioner"
                        ])
                    ]),
                    pageBreak(),

                ],
            },
        ],
    });
};