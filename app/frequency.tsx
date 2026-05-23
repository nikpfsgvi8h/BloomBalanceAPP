import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    router,
    useLocalSearchParams,
} from "expo-router";

export default function FrequencyScreen() {

  const { goal, focus } = useLocalSearchParams();

  const selectFrequency = (days: string) => {
    router.push({
      pathname: "/userinfo",
      params: {
        goal,
        focus,
        days,
      },
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        How often would you like to work out?
      </Text>

      <Text style={styles.subtitle}>
        Goal: {goal} • Focus: {focus}
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFrequency("2 Days")}
      >
        <Text style={styles.cardText}>
          2 Days / Week
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFrequency("3 Days")}
      >
        <Text style={styles.cardText}>
          3 Days / Week
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFrequency("4 Days")}
      >
        <Text style={styles.cardText}>
          4 Days / Week
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFrequency("5 Days")}
      >
        <Text style={styles.cardText}>
          5 Days / Week
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    paddingTop: 100,
    paddingHorizontal: 24,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#161616",
    padding: 24,
    borderRadius: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#9D4EDD",
  },

  cardText: {
    color: "#FF6F91",
    fontSize: 20,
    fontWeight: "bold",
  },
});