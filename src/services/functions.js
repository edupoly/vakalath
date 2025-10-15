export const highCourtInitialValues = {
  CouncilName: "",
  BarCouncilEnrollmentNumber: "",
  CouncilAddress: "",
  CaseType: "",
  Date: "",
  CourtName: "",
  State: "",
  PetitionerName1: "",
  PetitionerAddress1: "",
  PetitionerAge1: "",
  PetitionerName2: "",
  PetitionerAddress2: "",
  PetitionerAge2: "",
  PetitionerName3: "",
  PetitionerAddress3: "",
  PetitionerAge3: "",
  RespondentName1: "",
  RespondentAddress1: "",
  RespondentAge1: "",
  RespondentName2: "",
  RespondentAddress2: "",
  RespondentAge2: "",
  RespondentName3: "",
  RespondentAddress3: "",
  RespondentAge3: "",
  Place: "",
  Userid: "",
};

export function countEntries(data, prefix) {
  return Object.keys(data).filter((key) => key.startsWith(prefix)).length;
}
