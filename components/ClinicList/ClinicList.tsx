import { FlatList, Flex } from "native-base";
import { useGetClinicsQuery } from "../../features/urql/generated/graphql";
import Clinic from "../Clinic/Clinic";
import ClinicListHeader from "./ClinicListHeader";

const ClinicList = (): JSX.Element => {
  const [clinics, refreshClinics] = useGetClinicsQuery({
    requestPolicy: "network-only",
  });

  return (
    <Flex flex={1}>
      <FlatList
        data={clinics.data?.getClinics}
        ListHeaderComponent={<ClinicListHeader isFetching={clinics.fetching} />}
        refreshing={clinics.fetching}
        onRefresh={refreshClinics}
        renderItem={({ item: clinic }) => (
          <Clinic id={clinic.id} name={clinic.name} mb={4} />
        )}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </Flex>
  );
};

export default ClinicList;
