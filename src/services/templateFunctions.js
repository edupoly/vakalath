import { AlignmentType, Packer, Paragraph, TableCell, TextRun, WidthType, UnderlineType, Table, TableRow } from "docx";

import { FirstAppealTemplate } from "../pages/civil/firstAppeal/template1";
import { SecondAppealTemplate } from "../pages/civil/secondAppeal/template1";
import { WritAppealTemplate } from "../pages/civil/writAppeal/template1";
import { AffidavitTemplate } from "../pages/civil/writAffidavit/template1";
import { ABTemplate } from "../pages/criminal/anticiptoryBail/template1";
import CriminalBailFile from "../pages/criminal/bail/template";
import { CriminalAppealTemplate } from "../pages/criminal/appeal/template1";
import { CriminalRevisionTemplate } from "../pages/criminal/revisionCase/template1";
import HighCourtTemplate from "../pages/highcourt/template";
import { AmendmentTemplate } from "../pages/highcourt/amendment/template";
import { AntiBailTemplate } from "../pages/highcourt/antibail/template";
import { BailTemplate } from "../pages/highcourt/bail/template";
import { WPAffidavitTemplate } from "../pages/highcourt/wpafi/template";
import { CRLATemplate } from "../pages/highcourt/crla/template";
import { writPetitionTemplate } from "../pages/highcourt/writPetition/template";
import { WATemplate } from "../pages/highcourt/writAppeal/template";
import { WIATemplate } from "../pages/highcourt/writ-IA/template";
import { vakalathTemplate } from "../pages/highcourt/vakalath/template";
import { vacateTemplate } from "../pages/highcourt/vacate/template";
import { vacateMacmaTemplate } from "../pages/highcourt/vacateMacma/template";
import { taxAppellateTribunalTemplate } from "../pages/highcourt/taxAppellateTribunal/template";
import { stateConsumerRedressalCommissionTemplate } from "../pages/highcourt/stateConsumerRedressalCommison/template";
import { secondAppealTemplate } from "../pages/highcourt/secondAppeal/template";
import { CRLRCTemplate } from "../pages/highcourt/crlrc/template";
import { CMATemplate } from "../pages/highcourt/cma/template";
import { CRPTemplate } from "../pages/highcourt/crp/template";
import { PetpetrTemplate } from "../pages/highcourt/petpetr/template";
import { PetrespTemplate } from "../pages/highcourt/petresp/template";
import { MemoHCTemplate } from "../pages/highcourt/memohc/template";
import { EXTENSIONTemplate } from "../pages/highcourt/extension/template";
import { EXPEDITETemplate } from "../pages/highcourt/expedite/template";
import { DRTSATemplate } from "../pages/highcourt/drtsa/template";
import { DISPENSETemplate } from "../pages/highcourt/dispense/template";
import { DELAYREPTemplate } from "../pages/highcourt/delayrep/template";
import { CCCATemplate } from "../pages/highcourt/ccca/template";
import { TRCRLMPTemplate } from "../pages/highcourt/trcrlmp/template";
import { TRCMPTemplate } from "../pages/highcourt/trcmp/template";
import { OSATemplate } from "../pages/highcourt/osa/template";
import { PILTemplate } from "../pages/highcourt/pil/template";
import { WtaTemplate } from "../pages/highcourt/Wta/template";
import { rectranTemplate } from "../pages/highcourt/rectran/template";
import { reviewTemplate } from "../pages/highcourt/reviewPetition/template";
import { ContemptAffidavitTemplate } from "../pages/highcourt/cc/template";
import { CounterTemplate } from "../pages/highcourt/counter/template";
import { FCATemplate } from "../pages/highcourt/fca/template";
import { ForbeingTemplate } from "../pages/highcourt/forbeing/template";
import { CATemplate } from "../pages/highcourt/ca/template";
import { LeaveTemplate } from "../pages/highcourt/leave/template";
import { QuashTemplate } from "../pages/highcourt/quash/template";
import { CEATemplate } from "../pages/highcourt/cea/template";
import { AppealSuitTemplate } from "../pages/highcourt/appealSuit/template";
import { XOBJTemplate } from "../pages/highcourt/xobj/template";
import { CaveatTemplate } from "../pages/highcourt/caveat/template";
import { CPTemplate } from "../pages/highcourt/cp/template";
import { HCTemplate } from "../pages/highcourt/hc/template";
import { IMPLEADTemplate } from "../pages/highcourt/implead/template";

export const paragraphStyles = {
    centerText: { alignment: AlignmentType.CENTER },
    centerTextSmall: { alignment: AlignmentType.CENTER, spacing: { after: 0 } },
    centerTextBig: { alignment: AlignmentType.CENTER, spacing: { before: 400, after: 0 } },
    leftAlignSmall: { alignment: AlignmentType.LEFT, spacing: { after: 0 } },
    leftAlignText: { alignment: AlignmentType.LEFT },
    rightAlignText: { alignment: AlignmentType.RIGHT },
    rightAlignSmall: { alignment: AlignmentType.RIGHT, spacing: { after: 0 } },
    rightALignBig: { alignment: AlignmentType.RIGHT, spacing: { line: 1000 } },
    paraText: { alignment: AlignmentType.JUSTIFIED, spacing: { after: 0 } },
    emptySpace: { spacing: { line: 1000 } },
    emptySpaceSmall: { spacing: { line: 400 } },
    emptySpaceBig: { spacing: { line: 5000 } },
    singleSpace: { spacing: { line: 200 } },
    leftunderlinedHeading: { alignment: AlignmentType.LEFT, bold: true, underline: { type: UnderlineType.SINGLE } },
    underlinedHeading: { alignment: AlignmentType.CENTER, bold: true, underline: { type: UnderlineType.SINGLE } },
    underlinedHeadingSmall: { alignment: AlignmentType.CENTER, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    underlinedHeadingRight: { alignment: AlignmentType.RIGHT, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    underlinedHeadingLeft: { alignment: AlignmentType.LEFT, bold: true, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    underlinedTextSmall: { alignment: AlignmentType.CENTER, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    underlinedText: { alignment: AlignmentType.CENTER, underline: { type: UnderlineType.SINGLE }, spacing: { after: 400 } },
    bulletPoint: { spacing: { before: 100, after: 1000 } },
    centerHeading: { alignment: AlignmentType.CENTER, bold: true, spacing: { after: 0 } },
    leftHeading: { alignment: AlignmentType.LEFT, bold: true, spacing: { after: 0 } },
    leftUnderline: { alignment: AlignmentType.LEFT, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    rightHeading: { alignment: AlignmentType.RIGHT, bold: true, spacing: { after: 0 } },
    rightUnderline: { alignment: AlignmentType.RIGHT, underline: { type: UnderlineType.SINGLE }, spacing: { after: 0 } },
    rightunderlinedHeading: { alignment: AlignmentType.RIGHT, bold: true, underline: { type: UnderlineType.SINGLE } },
};

export const paragraphStyles1 = {
    page: { spacing: { after: 0 }, alignment: AlignmentType.LEFT },
    heading: { bold: true, spacing: { after: 200 }, alignment: AlignmentType.LEFT },
    headingCenter: { bold: true, underline: {}, alignment: AlignmentType.CENTER },
    centerText: { alignment: AlignmentType.CENTER },
    startText: { alignment: AlignmentType.LEFT },
    endText: { alignment: AlignmentType.RIGHT },
    paragraph: { alignment: AlignmentType.JUSTIFIED, spacing: { line: 360 } },
    justifiedText: { alignment: AlignmentType.JUSTIFIED, spacing: { after: 200 } },
    item: { alignment: AlignmentType.LEFT },
    subItem: { alignment: AlignmentType.LEFT },
    signatureRow: { alignment: AlignmentType.LEFT },
    signatureBox: { alignment: AlignmentType.LEFT },
    alignRight: { alignment: AlignmentType.RIGHT },
    coverPage: { alignment: AlignmentType.RIGHT },
    title: { bold: true, alignment: AlignmentType.CENTER },
    subTitle: { italics: true, alignment: AlignmentType.CENTER },
    centeredText: { alignment: AlignmentType.CENTER },
    caseNo: { bold: true, alignment: AlignmentType.CENTER },
    against: { alignment: AlignmentType.CENTER },
    sectionTitle: { bold: true, alignment: AlignmentType.LEFT },
    partyLine: { alignment: AlignmentType.LEFT },
    rightAligned: { alignment: AlignmentType.RIGHT },
    groundsTitle: { bold: true, alignment: AlignmentType.CENTER },
    groundLine: { alignment: AlignmentType.LEFT },
    headingAlt: { bold: true, alignment: AlignmentType.CENTER },
    leftText: { alignment: AlignmentType.LEFT },
    rightText: { alignment: AlignmentType.RIGHT },
    center: { alignment: AlignmentType.CENTER },
    row: { alignment: AlignmentType.LEFT },
    headerRow: { bold: true, alignment: AlignmentType.LEFT },
    hr: { alignment: AlignmentType.LEFT },
    officeUseBlock: { alignment: AlignmentType.LEFT },
    battaRow: { alignment: AlignmentType.LEFT },
    rightLane: { alignment: AlignmentType.RIGHT }
};
export const createParagraph = (text, options = {}) => {
    const textRunOptions = { text: text, ...options };

    return new Paragraph({
        children: [new TextRun(textRunOptions)],
        alignment: options.alignment || AlignmentType.LEFT,
        spacing: options.spacing || { after: 200 },
    });
};

export const getPetitionersParagraphs = (petitioners = []) => {
    return petitioners
        .map((pet) => [
            createParagraph(pet.Name),
            createParagraph(pet.Address),
        ])
        .flat();
};

export const generateAndDownloadDocx = (formData) => {
    const doc = caseTypeTemplates[formData?.CaseType](formData);
    Packer.toBlob(doc).then((blob) => saveAs(blob, `${formData?.CaseType}.docx`));
};

export const headerCell = (text, options) =>
    new TableCell({
        children: [
            new Paragraph({
                children: [new TextRun({ text, bold: options?.headerbold })],
                alignment: options?.alignment || AlignmentType.CENTER,
                width: {
                    size: 100,
                    type: WidthType.DXA
                }
            }),
        ],
        columnSpan: options?.colSpan || 1,
    });

export const cell = (text, options) =>
    new TableCell({
        // width: { size: options?.width , type: WidthType.PERCENTAGE },
        columnSpan: options?.colSpan || 1,
        children: [new Paragraph({
            children: [new TextRun(text)],
            alignment: options?.alignment || AlignmentType.LEFT,
        })],
    });

export const caseTypeTemplates = {
    cma: CMATemplate,
    civilRevisionPetition: CRPTemplate,
    firstAppeal: FirstAppealTemplate,
    secondAppeal: SecondAppealTemplate,
    writAppeal: WATemplate,
    writPetition: writPetitionTemplate,
    antiBail: AntiBailTemplate,
    amendament: AmendmentTemplate,
    bail: BailTemplate,
    criminalAppeal: CRLATemplate,
    criminalRevisionCase: CRLRCTemplate,
    highcourt: HighCourtTemplate,
    affidavit: WPAffidavitTemplate,
    writIa: WIATemplate,
    vakalath: vakalathTemplate,
    vacate: vacateTemplate,
    vacateMacma: vacateMacmaTemplate,
    taxAppellateTribunal: taxAppellateTribunalTemplate,
    stateConsumerRedressalCommission: stateConsumerRedressalCommissionTemplate,
    secondAppeal: secondAppealTemplate,
    lrPetPet: PetpetrTemplate,
    lrPreTreps: PetrespTemplate,
    memoForProofOfService: MemoHCTemplate,
    debtsRecoveryTribunal: DRTSATemplate,
    delayInRepresentation: DELAYREPTemplate,
    dispense: DISPENSETemplate,
    expedite: EXPEDITETemplate,
    extension: EXTENSIONTemplate,
    civilMiscAppealMemorandum: CCCATemplate,
    transferCriminalPetition: TRCRLMPTemplate,
    transferMiscPetition: TRCMPTemplate,
    originalSideAppeal: OSATemplate,
    pil: PILTemplate,
    contemptCase: ContemptAffidavitTemplate,
    counter: CounterTemplate,
    familyCourtsAppeal: FCATemplate,
    forbeing: ForbeingTemplate,
    ca: CATemplate,
    leave: LeaveTemplate,
    quash: QuashTemplate,
    centralExciseAppeal: CEATemplate,
    appealSuit:AppealSuitTemplate,
    crossObjections:XOBJTemplate,
    caveat: CaveatTemplate,
    companyPetition:CPTemplate,
    compromiseHc:HCTemplate,
    implead:IMPLEADTemplate,
    incomeTaxAppellateTribunal:WtaTemplate,
    receiveAndTransmit:rectranTemplate,
    reviewPetition:reviewTemplate,
};

export const SignatureRow = (formdata) => {
    return new Table({
        rows: [
            new TableRow({
                children: [
                    cell(`Date: ${formdata?.fdate || "______________"}`, paragraphStyles.leftAlignSmall),
                    cell(`Counsel for the Petitioner`, paragraphStyles.leftAlignSmall),
                ]
            }),
            new TableRow({
                children: [
                    cell(`${formdata?.place || "______________"}`, paragraphStyles.leftAlignSmall)
                ]
            })
        ],
        width: {
            size: 8835,
            type: WidthType.DXA
        },
        borders: {
            top: { size: 0 },
            bottom: { size: 0 },
            left: { size: 0 },
            right: { size: 0 },
            insideHorizontal: { size: 0 },
            insideVertical: { size: 0 },
        }
    })
}


export const caseTypeFields = [
    { label: "AB", value: "antiBail" },
    { label: "WPAFI", value: "affidavit" },
    { label: "AMENDMENT", value: "amendament" },
    { label: "BAIL", value: "bail" },
    // { label: "Anti Bail", value: "antiBail" },

    { label: "APPEALSUiT", value: "appealSuit" },
    { label: "CA", value: "ca" },
    { label: "CAVEAT", value: "caveat" },
    { label: "CEA", value: "centralExciseAppeal" },

    { label: "CMA", value: "cma" },
    { label: "CRP", value: "civilRevisionPetition" },
    // { label: "CRP (2nd File)", value: "crpSecond" },

    { label: "CP", value: "companyPetition" },
    { label: "HC", value: "compromiseHc" },
    { label: "CC", value: "contemptCase" },
    { label: "COUNTER", value: "counter" },
    { label: "CRLA", value: "criminalAppeal" },
    { label: "CRLRC", value: "criminalRevisionCase" },
    { label: "CRLRC-MACMA", value: "criminalRevisionCaseMacma" },

    { label: "XOBJ", value: "crossObjections" },

    { label: "DRTSA", value: "debtsRecoveryTribunal" },
    { label: "DELAYREP", value: "delayInRepresentation" },
    { label: "DISPENSE", value: "dispense" },
    { label: "EXPEDITE", value: "expedite" },
    { label: "EXTENSION", value: "extension" },

    { label: "FCA", value: "familyCourtsAppeal" },
    { label: "FORBEING", value: "forbeing" },
    { label: "IMPLEAD", value: "implead" },

    { label: "WTA", value: "incomeTaxAppellateTribunal" },
    { label: "ITTA", value: "taxAppellateTribunal" },

    { label: "LEAVE", value: "leave" },
    { label: "LR-PETPET", value: "lrPetPet" },
    { label: "LR-PRETREP", value: "lrPreTreps" },

    { label: "MEMOHC", value: "memoForProofOfService" },
    { label: "CCCA", value: "civilMiscAppealMemorandum" },

    { label: "TRCRLMP", value: "transferCriminalPetition" },
    { label: "TRCMP", value: "transferMiscPetition" },

    { label: "OSA", value: "originalSideAppeal" },

    { label: "PIL", value: "pil" },
    { label: "QUASH", value: "quash" },
    { label: "RECTRAN", value: "receiveAndTransmit" },

    { label: "REVIEW", value: "reviewPetition" },
    { label: "SECOND APPEAL", value: "secondAppeal" },

    { label: "FASC", value: "stateConsumerRedressalCommission" },

    { label: "VACATE-MACMA", value: "vacateMacma" },
    { label: "VACATE", value: "vacate" },

    { label: "VAKALATH", value: "vakalath" },

    { label: "WRIT - IA", value: "writIa" },
    { label: "WP", value: "writPetition" },
    { label: "WA", value: "writAppeal" }
];
