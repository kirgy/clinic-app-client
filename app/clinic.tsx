import { useSearchParams } from "expo-router";
import { Spinner, Text } from "native-base";
import ClinicDetails from "../components/ClinicDetails/ClinicDetails";
import ScreenContainer from "../components/ScreenContainer/ScreenContainer";
import StackHeader from "../components/StackHeader/StackHeader";

const clinic = () => {
  const { clinicId } = useSearchParams();

  return (
    <ScreenContainer>
      <StackHeader title="Clinic" />
      {typeof clinicId === "string" ? (
        <ClinicDetails clinicId={clinicId} />
      ) : (
        <Spinner />
      )}
    </ScreenContainer>
  );
};

export default clinic;
