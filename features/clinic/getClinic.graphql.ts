import { gql } from "urql";

const GET_CLINIC = gql`
  query GetClinic($getClinicId: ID!) {
    getClinic(id: $getClinicId) {
      id
      originId
      name
    }
  }
`;

export default GET_CLINIC;
