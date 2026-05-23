import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  router,
} from "expo-router";

export default function HomeScreen() {

  return (

    <ScrollView
      style={styles.container}

      contentContainerStyle={{
        paddingBottom: 80,
      }}

      showsVerticalScrollIndicator={
        false
      }
    >

      <Image

        source={require("../../assets/images/BloomBalancelogo.jpg")}

        style={styles.logo}

        resizeMode="contain"
      />

      <Text style={styles.title}>
        BloomBalance 🌸
      </Text>

      <Text style={styles.subtitle}>
        Fitness designed around your
        cycle, wellness, and energy.
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Personalized AI Fitness 💪
        </Text>

        <Text style={styles.cardText}>
          Adaptive workouts designed
          around your phase, recovery,
          symptoms, and goals.
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Wellness Insights 🧠
        </Text>

        <Text style={styles.cardText}>
          Understand your body with
          smart recommendations and
          cycle-aware guidance.
        </Text>

      </View>

      <TouchableOpacity

        style={styles.workoutButton}

        onPress={() =>
          router.push("/workout")
        }
      >

        <Text
          style={styles.workoutButtonText}
        >
          START TODAY'S WORKOUT →
        </Text>

      </TouchableOpacity>

      <TouchableOpacity

        style={styles.loginButton}

        onPress={() =>
          router.push("/userinfo")
        }
      >

        <Text style={styles.loginText}>
          Login
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#050505",

    paddingTop: 70,

    paddingHorizontal: 24,
  },

  logo: {

    width: 220,

    height: 220,

    alignSelf: "center",

    marginBottom: 10,
  },

  title: {

    color: "#FFFFFF",

    fontSize: 48,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 16,
  },

  subtitle: {

    color: "#B0B0B0",

    fontSize: 20,

    textAlign: "center",

    lineHeight: 34,

    marginBottom: 40,
  },

  card: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 30,

    padding: 28,

    marginBottom: 24,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  cardTitle: {

    color: "#FF6F91",

    fontSize: 28,

    fontWeight: "bold",

    marginBottom: 18,
  },

  cardText: {

    color: "#FFFFFF",

    fontSize: 18,

    lineHeight: 32,
  },

  workoutButton: {

    backgroundColor: "#FF6F91",

    paddingVertical: 28,

    borderRadius: 30,

    alignItems: "center",

    marginTop: 10,

    marginBottom: 24,
  },

  workoutButtonText: {

    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "bold",
  },

  loginButton: {

    borderWidth: 2,

    borderColor: "#FF6F91",

    paddingVertical: 18,

    borderRadius: 24,

    alignItems: "center",
  },

  loginText: {

    color: "#FF6F91",

    fontSize: 18,

    fontWeight: "bold",
  },

});