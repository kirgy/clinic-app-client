import { gql } from "urql";
import PatientFragment from "../urql/fragments/patientFragment.graphql";

const GET_CLINICS = gql`
  query GetClinics {
    getClinics {
      id
      originId
      name
      # patients {
      #   ...PatientFragment
      # }
    }
  }

  # ${PatientFragment}
`;

export default GET_CLINICS;
