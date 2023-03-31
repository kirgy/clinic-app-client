import { Flex, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import DataSortControls from "./DataSortControls";
import { SortableFields } from "./PatientList";

type HeaderComponentProps = {
  isFetching: boolean;
  name?: string;
  sortedBy: SortableFields;
  setSortedBy: (field: SortableFields) => void;
  sortedAsc: boolean;
  setSortedAsc: (asc: boolean) => void;
};

const HeaderComponent = ({
  isFetching,
  name,
  sortedBy,
  setSortedBy,
  sortedAsc,
  setSortedAsc,
}: HeaderComponentProps) => {
  const [lastRefetchedDate, setLastRefetchedDate] = useState<Date | undefined>(
    undefined
  );

  const [secondsSinceRefresh, setSecondsSinceRefresh] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (isFetching) {
      setLastRefetchedDate(undefined);
    } else {
      setLastRefetchedDate(new Date());
    }
  }, [isFetching]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastRefetchedDate == undefined) return;

      const nowDate = new Date().getTime();
      const diffTime = Math.floor(
        (nowDate - lastRefetchedDate.getTime()) / 1000
      );
      setSecondsSinceRefresh(diffTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSecondsSinceRefresh, lastRefetchedDate]);

  return (
    <VStack pt={4} pb={8} space={4}>
      <Flex>
        <Text variant="heading2">Patients at {name}</Text>
        <Text variant="bodym" color="neutral.300">
          Last refeshed:{" "}
          {isFetching ? "loading..." : `${secondsSinceRefresh} seconds`}
        </Text>
      </Flex>

      <DataSortControls
        setSortedBy={setSortedBy}
        sortedBy={sortedBy}
        sortedAsc={sortedAsc}
        setSortedAsc={setSortedAsc}
      />
    </VStack>
  );
};

export default HeaderComponent;
