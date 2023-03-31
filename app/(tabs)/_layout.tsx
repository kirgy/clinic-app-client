import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Icon } from "native-base";
import { useColorScheme } from "react-native";

import theme from "../../features/theme/theme";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.neutral[50],
        tabBarInactiveTintColor: theme.colors.neutral[300],
        headerStyle: { backgroundColor: theme.colors.primary[400] },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: theme.colors.primary[400] },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Clinics",
          tabBarIcon: ({ color }) => (
            <Icon
              as={<FontAwesome5 name="hospital" />}
              size="md"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="info-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
