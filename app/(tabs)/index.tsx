import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import environment from "../../constants/environment";
import { useGetClinicQuery } from "../../features/urql/generated/graphql";

export default function TabOneScreen() {
  const [clinics] = useGetClinicQuery();
  console.log({ clinics });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clinics</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Clinic</Text>

      {clinics.data?.getClinics.map((clinic, key) => (
        <Text key={clinic.id}>{clinic.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
