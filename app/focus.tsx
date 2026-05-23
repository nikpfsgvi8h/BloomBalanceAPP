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

export default function FocusScreen() {

  const { goal } = useLocalSearchParams();

  const selectFocus = (focus: string) => {
    router.push({
      pathname: "/frequency",
      params: {
        goal,
        focus,
      },
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Which area would you like to focus on?
      </Text>

      <Text style={styles.subtitle}>
        Goal: {goal}
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFocus("Full Body")}
      >
        <Text style={styles.cardText}>
          Full Body
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFocus("Arms")}
      >
        <Text style={styles.cardText}>
          Arms
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFocus("Legs")}
      >
        <Text style={styles.cardText}>
          Legs
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => selectFocus("Abs")}
      >
        <Text style={styles.cardText}>
          Abs
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