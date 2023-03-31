import { Stack } from "expo-router";
import theme from "../../features/theme/theme";

type StackHeaderProps = {
  title: string;
};

const StackHeader = ({ title }: StackHeaderProps) => {
  return (
    <Stack.Screen
      options={{
        title,
        headerStyle: { backgroundColor: theme.colors.primary[400] },
        headerTintColor: "#fff",
      }}
    />
  );
};

export default StackHeader;
