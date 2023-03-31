import { Flex, IFlexProps } from "native-base";
import { View } from "react-native";

type ScreenContainerProps = IFlexProps & {
  children: React.ReactNode;
};

const ScreenContainer = ({
  children,
  ...containerProps
}: ScreenContainerProps): JSX.Element => {
  return (
    <Flex flex={1} p={8} bgColor="neutral.800" {...containerProps}>
      <Flex flex={1} width="100%" maxWidth={800} alignSelf="center">
        {children}
      </Flex>
    </Flex>
  );
};

export default ScreenContainer;
