export const highCourtInitialValues = {
  CouncilName: "",
  BarCouncilEnrollmentNumber: "",
  CouncilAddress: "",
  CaseType: "",
  Date: "",
  CourtName: "",
  State: "",
  Petitioners: [{ Name: '', Address: '', Age: '' }],
  Respondents: [{ Name: '', Address: '', Age: '' }],
  Place: "",
  Userid: "",
};

export function countEntries(data, prefix) {
  return Object.keys(data).filter((key) => key.startsWith(prefix)).length;
}

// export const highCourtInitialValues={
//   "CouncilName": "Bar Council of Telangana",
//   "BarCouncilEnrollmentNumber": "TS/5678/2019",
//   "CouncilAddress": "Bar Council of Telangana, High Court Premises, Hyderabad, Telangana - 500066",
//   "CaseType": "Civil Suit",
//   "Date": "2025-10-18",
//   "CourtName": "District Court, Ranga Reddy",
//   "State": "Telangana",
//   "Petitioners": [
//     {
//       "Name": "Mohammed Irfan",
//       "Address": "Plot No. 45, Mehdipatnam, Hyderabad, Telangana",
//       "Age": 35
//     },
//     {
//       "Name": "Kavitha Reddy",
//       "Address": "House No. 8-76, Gachibowli, Hyderabad, Telangana",
//       "Age": 30
//     }
//   ],
//   "Respondents": [
//     {
//       "Name": "GHMC Commissioner",
//       "Address": "GHMC Office, Tank Bund Road, Hyderabad, Telangana",
//       "Age": 50
//     },
//     {
//       "Name": "Municipal Engineer",
//       "Address": "Circle Office, Kukatpally, Hyderabad, Telangana",
//       "Age": 45
//     }
//   ],
//   "Place": "Hyderabad",
//   "Userid": "user_12345"
// }
