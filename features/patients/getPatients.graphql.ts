import { gql } from "urql";

const GET_PATIENTS = gql`
  query GetPatients($getClinicId: ID!) {
    getClinic(id: $getClinicId) {
      id
      originId
      name
      patients {
        id
        originId
        clinicId
        firstName
        lastName
        dateOfBirth
      }
    }
  }
`;

export default GET_PATIENTS;
