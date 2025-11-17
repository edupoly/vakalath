import { Table, TableRow, TableCell, WidthType, Paragraph } from "docx";

// Utility for left-aligned text
const tLeft = (text) =>
    new Paragraph({
        children: [],
        text,
    });

export const pilTable = (formData) => {
    const rows = [
        ["1.  Name", ` : `, ""],
        ["2.  Postal Address", ` : `, formData?.Petitioners[0]?.Address ||"«PETITIONER_ADDRESS»"],
        ["3.  Mobile No.", ` : `, ""],
        ["4.  Proof regarding personal identification", ` : `, "AADHAR"],
        ["5.  Occupation", ` : `, ""],
        ["6.  Annual Income", ` : `, ""],

        // BANK DETAILS HEADER (spanning)
        ["Bank Account Details", "", ""],

        ["7.  Bank Name", ` : `, ""],
        ["8.  Account Holder Name", ` : `, ""],
        ["9.  Account Number", ` : `, ""],
        ["10. Branch", ` : `, ""],
        ["11. PAN Card Number", ` : `, ""],
        ["12. AADHAR Card Number", ` : `, ""],
        ["13. Email Address", ` : `, ""]
    ];

      return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },

        rows: rows.map((row, index) => {
            const isHeading = index === 6; // Bank Account Details row

            if (isHeading) {
                return new TableRow({
                    children: [
                        new TableCell({
                            children: [tLeft(row[0])],
                            columnSpan: 3,
                            width: { size: 100, type: WidthType.PERCENTAGE },
                        }),
                    ],
                });
            }

            return new TableRow({
                children: [
                    new TableCell({
                        children: [tLeft(row[0])],
                        width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [tLeft(row[1])],
                        width: { size: 10, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [tLeft(row[2])],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                    }),
                ],
            });
        }),
    });
};