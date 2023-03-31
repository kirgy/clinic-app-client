import { useSearchParams } from "expo-router";
import { Spinner } from "native-base";
import PatientList from "../components/PatientList/PatientList";
import ScreenContainer from "../components/ScreenContainer/ScreenContainer";
import StackHeader from "../components/StackHeader/StackHeader";

const patients = () => {
  const { clinicId } = useSearchParams();

  return (
    <ScreenContainer py={0}>
      <StackHeader title="Patients" />
      {typeof clinicId === "string" ? (
        <PatientList clinicId={clinicId} />
      ) : (
        <Spinner />
      )}
    </ScreenContainer>
  );
};

export default patients;
