import { Flex, HStack, IFlexProps, Text, VStack } from "native-base";
import { type Patient as PatientType } from "../../features/urql/generated/graphql";
type ClinicProps = IFlexProps & {
  patient: PatientType;
};

const Patient = ({ patient, ...containerProps }: ClinicProps): JSX.Element => {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const humanFriendlyDOB = dateTimeFormat.format(new Date(patient.dateOfBirth));

  return (
    <Flex
      backgroundColor="neutral.50"
      flex={1}
      p={4}
      borderRadius={8}
      justifyContent="center"
      {...containerProps}
    >
      <VStack space={4}>
        <Flex>
          <Text variant="heading4" color="neutral.800">
            {patient.firstName} {patient.lastName}
          </Text>
        </Flex>
        <HStack justifyContent="space-between" flex={1}>
          <Flex>
            <Text variant="bodyM" color="neutral.800" fontWeight={600}>
              Date of birth
            </Text>
            <Text variant="bodyS" color="neutral.800">
              {humanFriendlyDOB}
            </Text>
          </Flex>
          <Flex>
            <Text variant="bodyM" color="neutral.800" fontWeight={600}>
              Patient ID
            </Text>
            <Text variant="bodyS" color="neutral.800">
              {patient.id}
            </Text>
          </Flex>
          <Flex>
            <Text variant="bodyM" color="neutral.800" fontWeight={600}>
              Origin ID
            </Text>
            <Text variant="bodyS" color="neutral.800">
              {patient.originId}
            </Text>
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Patient;
