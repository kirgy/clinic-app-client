import { Flex, HStack, Icon, IFlexProps, Square, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
type ClinicProps = IFlexProps & {
  id: string;
  name: string;
};

const Clinic = ({ id, name, ...containerProps }: ClinicProps): JSX.Element => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/clinic?clinicId=${id}`)}>
      <Flex
        backgroundColor="neutral.50"
        flex={1}
        p={4}
        borderRadius={8}
        justifyContent="center"
        {...containerProps}
      >
        <HStack space={4}>
          <Square>
            <Icon
              as={<FontAwesome5 name="hospital-alt" />}
              color="neutral.800"
              size="xl"
            />
          </Square>
          <Text variant="heading2" color="neutral.800">
            {name}
          </Text>
        </HStack>
      </Flex>
    </TouchableOpacity>
  );
};

export default Clinic;
