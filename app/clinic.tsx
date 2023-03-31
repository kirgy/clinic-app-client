import { useSearchParams } from "expo-router";
import { Spinner, Text } from "native-base";
import ClinicDetails from "../components/ClinicDetails/ClinicDetails";
import ScreenContainer from "../components/ScreenContainer/ScreenContainer";

const clinic = () => {
  const { clinicId } = useSearchParams();

  return (
    <ScreenContainer>
      {typeof clinicId === "string" ? (
        <ClinicDetails clinicId={clinicId} />
      ) : (
        <Spinner />
      )}
    </ScreenContainer>
  );
};

export default clinic;
