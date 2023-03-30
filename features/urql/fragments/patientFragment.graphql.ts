import { gql } from "urql";

const PatientFragment = gql`
  fragment PatientFragment on Patient {
    id
    originId
    clinicId
    firstName
    lastName
    dateOfBirth
  }
`;

export default PatientFragment;
