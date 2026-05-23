import {
  Switch,
} from "react-native";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  router,
} from "expo-router";

export default function ProfileScreen() {

  const [goal, setGoal] =
    useState("");

  const [focus, setFocus] =
    useState("");

  const [energy, setEnergy] =
    useState("");

  const [streak, setStreak] =
    useState(0);
  
    const [darkMode, setDarkMode] =
  useState(true);

  useEffect(() => {

    loadUserData();

  }, []);

  const loadUserData = async () => {

    const savedUser =
      await AsyncStorage.getItem(
        "userData"
      );

    const savedStreak =
      await AsyncStorage.getItem(
        "streak"
      );

    if (savedUser) {

      const parsedUser =
        JSON.parse(savedUser);

      setGoal(parsedUser.goal);

      setFocus(parsedUser.focus);

      setEnergy(parsedUser.energy);

    }

    if (savedStreak) {

      setStreak(
        Number(savedStreak)
      );

    }

  };

  const logout = async () => {

    await AsyncStorage.clear();

    router.replace("/");

  };

  return (

    <ScrollView
      style={styles.container}

      contentContainerStyle={{
        paddingBottom: 60,
      }}

      showsVerticalScrollIndicator={
        false
      }
    >

      <View style={styles.header}>

        <Image
          source={require(
            "../../assets/images/BloomBalancelogo.jpg"
          )}

          style={styles.avatar}
        />

        <Text style={styles.name}>
          BloomBalance User 🌸
        </Text>

        <Text style={styles.subtext}>
          Personalized wellness journey
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Current Streak 🔥
        </Text>

        <Text style={styles.bigText}>
          {streak} Days
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Fitness Goal 🎯
        </Text>

        <Text style={styles.infoText}>
          {goal}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Focus Area 💪
        </Text>

        <Text style={styles.infoText}>
          {focus}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Energy Level ⚡
        </Text>

        <Text style={styles.infoText}>
          {energy}
        </Text>

      </View>
          <View style={styles.card}>

  <Text style={styles.cardTitle}>
    Theme 🌙
  </Text>

  <View style={styles.themeRow}>

    <Text style={styles.infoText}>
      {darkMode
        ? "Dark Mode"
        : "Light Mode"}
    </Text>

    <Switch
      value={darkMode}
      onValueChange={setDarkMode}
      trackColor={{
        false: "#ccc",
        true: "#FF6F91",
      }}
      thumbColor="#FFFFFF"
    />

  </View>

</View>
      <TouchableOpacity
        style={styles.logoutButton}

        onPress={logout}
      >

        <Text style={styles.logoutText}>
          Logout
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

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  avatar: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 20,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtext: {
    color: "#B0B0B0",
    fontSize: 16,
  },

  card: {
    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 28,

    padding: 24,

    marginBottom: 22,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  cardTitle: {
    color: "#FF6F91",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  bigText: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },

  infoText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },

  themeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  logoutButton: {
    backgroundColor: "#FF6F91",
    paddingVertical: 20,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 10,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

});