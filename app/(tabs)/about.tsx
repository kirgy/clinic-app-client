import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import { View } from "../../components/Themed";
import { Flex, Text, VStack } from "native-base";

export default function AboutScreen() {
  return (
    <ScreenContainer py={0}>
      <FlatList
        ListHeaderComponent={
          <VStack flex={1} pt={3} space={4}>
            <Text variant="bodyM">
              This is an example app, using fictional patient and clinic data to
              demo rendering and browsing that data from a Graph server.
            </Text>
            <Text variant="bodyM">This uses some key technologies:</Text>
          </VStack>
        }
        data={[
          "Expo",
          "TypeScript",
          "Expo Router (navigation)",
          "URQL (GraphQL Client)",
          "Dotenv (environment files)",
          "Native Base (UI, design tokens)",
          "Flatlists",
        ]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text variant="bodyM" mb={1}>{`\u2022 ${item}`}</Text>;
        }}
      />
    </ScreenContainer>
  );
}
