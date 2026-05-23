import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router } from "expo-router";

export default function GoalsScreen() {

  const selectGoal = (goal: string) => {
    router.push({
      pathname: "/focus",
      params: { goal },
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        What is your main goal?
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectGoal("Fat Loss")}
      >
        <Text style={styles.cardText}>
          Fat Loss
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectGoal("Muscle Gain")}
      >
        <Text style={styles.cardText}>
          Muscle Gain
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectGoal("General Fitness")}
      >
        <Text style={styles.cardText}>
          General Fitness
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectGoal("Flexibility")}
      >
        <Text style={styles.cardText}>
          Flexibility
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
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