import { HStack, Radio, Switch, Text, VStack } from "native-base";
import { SortableFields } from "./PatientList";

type DataSortControlsProps = {
  setSortedBy: (field: SortableFields) => void;
  sortedBy: SortableFields;
  sortedAsc: boolean;
  setSortedAsc: (asc: boolean) => void;
};

const DataSortControls = ({
  setSortedBy,
  sortedBy,
  sortedAsc,
  setSortedAsc,
}: DataSortControlsProps) => {
  return (
    <VStack space={4}>
      <HStack flex={1} space={4} justifyContent="space-between">
        <Text variant="heading4">Sort </Text>
        <Radio.Group
          name="sortByFieldGroup"
          value={sortedBy}
          onChange={(nextValue) => {
            setSortedBy(nextValue as SortableFields);
          }}
          flexDirection="row"
          space={4}
        >
          <Radio ml={4} value="id">
            Id
          </Radio>
          <Radio ml={4} value="dateOfBirth">
            DOB
          </Radio>
          <Radio ml={4} value="lastName">
            Last name
          </Radio>
        </Radio.Group>
      </HStack>
      <HStack
        flex={1}
        space={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="heading4">Order ascending </Text>
        <Switch
          size="sm"
          onTrackColor="primary.400"
          isChecked={sortedAsc}
          onToggle={(toggled) => setSortedAsc(toggled)}
        />
      </HStack>
    </VStack>
  );
};

export default DataSortControls;
