import { useRouter } from "expo-router";
import { Button, Flex, Text, VStack } from "native-base";
import { useGetClinicQuery } from "../../features/urql/generated/graphql";

type ClinicDetailsProps = {
  clinicId: string;
};

const ClinicDetails = ({ clinicId }: ClinicDetailsProps) => {
  const [clinic, _refreshClinic] = useGetClinicQuery({
    variables: { getClinicId: clinicId as string },
    pause: !clinicId,
    requestPolicy: "network-only",
  });

  const router = useRouter();

  return (
    <Flex flex={1}>
      <VStack space={4} flex={1}>
        <Flex>
          <Text variant="heading3">Clinic ID</Text>
          <Text variant="bodyL">{clinic.data?.getClinic?.id}</Text>
        </Flex>
        <Flex>
          <Text variant="heading3">Clinic Origin ID</Text>
          <Text variant="bodyL">{clinic.data?.getClinic?.originId}</Text>
        </Flex>
        <Flex>
          <Text variant="heading3">Clinic Name</Text>
          <Text variant="bodyL">{clinic.data?.getClinic?.name}</Text>
        </Flex>
      </VStack>
      <Flex>
        <Button onPress={() => router.push(`/patients?clinicId=${clinicId}`)}>
          View clinic's patients
        </Button>
      </Flex>
    </Flex>
  );
};

export default ClinicDetails;
