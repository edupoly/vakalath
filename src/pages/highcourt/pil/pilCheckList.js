import { BetweenSection } from "../../../components/templates/BetweenSection"
import { h3Center, h3Left, h3underlineBoldCenter, h3UnderlineBoldLeft, h3UnderlineCenter, LineSpace, pageBreak, tabSpace } from "../../../components/templates/elementTypes"
import { createSignatureFooter } from "../../../components/templates/FooterSections"


export const pilCheckList = (formData) => {
    return [
        h3Center("«highcourt»"),
        h3Center(`W.P. NO.${tabSpace(3)}OF «myear»`),
        ...BetweenSection(formData, " ..Petitioner", "…Respondent"),
        h3UnderlineCenter("CHECK LIST FOR WRIT PETITION"),
        // TableWithBorder()
        h3UnderlineBoldLeft("ORIGINAL SET"),
        h3Left("1) 	Proof of Service             1"),
        h3Left("2) 	Court Fee Rs.   /-           2"),
        h3Left("3) 	Writ Petition                3"),
        h3Left("4) 	Annexures I & II             4"),
        h3Left("5) 	Affidavit                        5 to"),
        h3Left("     a) 	Averment regarding     previous proceedings"),
        h3Left(tabSpace(2) + "(mention Page No.       Para No.          )"),
        h3Left("     b) 	Averment regarding   alternative relief"),
        h3Left("6) 	Verification Statement"),
        h3Left("7) 	Enclosure"),
        h3Left("8) 	Material Papers"),
        h3Left(tabSpace(2) + "(Duly Indexed  P.Series)          t"),
        h3Left("9)  a)	Vakalath Rs.      /-"),
        h3Left(tabSpace(2) + "Power of Attorney/Resolution Authorising"),
        h3Left(tabSpace(2) + "to sue if petition is filed in rep.capacity"),
        h3Left("10)	Sheet containing  Respondents' Addresses"),
        h3Left(
            "_________________________________________________________________________"
        ),
        h3UnderlineBoldLeft("DUPLICATE SET"),
        h3Left("11) 	Writ Petition              3"),
        h3Left("12) 	Annexures I & II           4"),
        h3Left("13) 	Affidavit                  5  to"),
        h3Left("14) 	Material Papers               to"),
        h3Left(
            "_________________________________________________________________________"
        ),
        h3UnderlineBoldLeft("MISCELLANEOUS SET"),
        h3Left("15) 	Batta Rs."),
        h3Left("16) 	Rule Nisi Forms"),
        h3Left("17) 	Covers with Postal Addresses & Ack.Forms"),
        h3Left("18) 	Copies of Petition and Affidavits"),
        h3Left(tabSpace(1) + "(As many as the No.of the Respondents + 2)"),
        h3Left(
            "_________________________________________________________________________"
        ),
        h3UnderlineBoldLeft("19. WRIT PETITION MISC. PETITION"),
        h3Left(tabSpace(1) + "(Filed for)"),
        h3Left(tabSpace(1) + "Petition"),
        h3Left(tabSpace(1) + "Court Fee Rs."),
        h3Left(tabSpace(1) + "Batta        Rs."),
        h3Left(
            tabSpace(1) +
            "Notice Papers, Covers with Postal Addresses and Ack.Forms"
        ),
        h3Left(tabSpace(1) + " Proforma Draft Interim Order"),
        ...LineSpace(1),
        createSignatureFooter(["Signature of the", "Scrutiny Officer"],
            ["Signature of the Advocate", "Name: «counsel_code»"]
        ),

        ...LineSpace(1),
        createSignatureFooter([
            "FOR OFFICE USE ONLY",
            "Respondent Vakalat filed by",
            "Counter Filed for Respt.No.",
            "Other Miscellaneous Petitions filed",
        ], ["", " for Respt.No", "", ""],
        ),

    ]
}