import { FlatList, Flex } from "native-base";
import { useMemo, useState } from "react";
import { useGetPatientsQuery } from "../../features/urql/generated/graphql";
import Patient from "../Patient/Patient";
import PatientListHeader from "./PatientListHeader";

type PatientListProps = {
  clinicId: string;
};

export type SortableFields = "id" | "dateOfBirth" | "lastName";

const PatientList = ({ clinicId }: PatientListProps): JSX.Element => {
  const [sortedBy, setSortedBy] = useState<SortableFields>("id");
  const [sortedAsc, setSortedAsc] = useState(true);

  const [clinic, refreshClinics] = useGetPatientsQuery({
    variables: {
      getClinicId: clinicId,
    },
    requestPolicy: "network-only",
  });

  const sortedPatientData = useMemo(() => {
    if (!clinic.data?.getClinic?.patients)
      return clinic.data?.getClinic?.patients;

    return clinic.data.getClinic.patients.sort((patientA, patientB) => {
      if (sortedAsc) {
        return patientA[sortedBy] < patientB[sortedBy] ? -1 : 1;
      }
      return patientA[sortedBy] < patientB[sortedBy] ? 1 : -1;
    });
  }, [clinic.data, sortedBy, sortedAsc]);

  return (
    <Flex flex={1}>
      <FlatList
        initialNumToRender={5}
        windowSize={2}
        showsVerticalScrollIndicator={false}
        data={sortedPatientData}
        ListHeaderComponent={
          <PatientListHeader
            isFetching={clinic.fetching}
            name={clinic.data?.getClinic?.name}
            sortedBy={sortedBy}
            setSortedBy={setSortedBy}
            sortedAsc={sortedAsc}
            setSortedAsc={setSortedAsc}
          />
        }
        refreshing={clinic.fetching}
        onRefresh={refreshClinics}
        renderItem={({ item: patient }) => {
          return <Patient patient={patient} mb={4} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </Flex>
  );
};

export default PatientList;
