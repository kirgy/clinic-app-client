import { Flex, Text } from "native-base";
import { useEffect, useState } from "react";

type ClinicListHeaderProps = {
  isFetching: boolean;
};

const ClinicListHeader = ({ isFetching }: ClinicListHeaderProps) => {
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
    <Flex pt={4} pb={8}>
      <Text variant="heading2">All known clinics</Text>
      <Text variant="bodym" color="neutral.300">
        Last refeshed:{" "}
        {isFetching ? "loading..." : `${secondsSinceRefresh} seconds`}
      </Text>
    </Flex>
  );
};

export default ClinicListHeader;
