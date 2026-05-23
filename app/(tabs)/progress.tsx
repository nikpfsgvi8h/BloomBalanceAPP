import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProgressScreen() {

  const [streak, setStreak] =
    useState(0);

  const [phase, setPhase] =
    useState("");

  const [userName, setUserName] =
    useState("");

  useEffect(() => {

    loadProgress();

  }, []);

  const loadProgress =
    async () => {

      try {

        const savedStreak =
          await AsyncStorage.getItem(
            "streak"
          );

        if (savedStreak) {

          setStreak(
            parseInt(savedStreak)
          );

        }

        const savedUser =
          await AsyncStorage.getItem(
            "userData"
          );

        if (!savedUser) return;

        const user =
          JSON.parse(savedUser);

        setUserName(
          user.name
        );

        const today =
          new Date();

        const start =
          new Date(
            user.cycleStartDate
          );

        const difference =
          Math.floor(

            (
              today.getTime()
              -
              start.getTime()
            )

            /

            (1000 * 60 * 60 * 24)

          );

        const cycleDay =
          (difference % 28) + 1;

        if (cycleDay <= 5) {

          setPhase(
            "Menstrual 🌸"
          );

        }

        else if (
          cycleDay <= 13
        ) {

          setPhase(
            "Follicular ⚡"
          );

        }

        else if (
          cycleDay <= 16
        ) {

          setPhase(
            "Ovulation 🔥"
          );

        }

        else {

          setPhase(
            "Luteal 🌙"
          );

        }

      }

      catch (error) {

        console.log(error);

      }

    };

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

      <Text style={styles.heading}>
        Your Progress 🌸
      </Text>

      <Text style={styles.subheading}>
        Keep showing up consistently.
        Your wellness journey matters.
      </Text>

      <View style={styles.streakCard}>

        <Text style={styles.cardLabel}>
          Workout Streak
        </Text>

        <Text style={styles.streakText}>
          {streak} Days 🔥
        </Text>

      </View>

      <View style={styles.phaseCard}>

        <Text style={styles.cardLabel}>
          Current Phase
        </Text>

        <Text style={styles.phaseText}>
          {phase}
        </Text>

      </View>

      <View style={styles.insightCard}>

        <Text style={styles.cardLabel}>
          Wellness Insight
        </Text>

        <Text style={styles.insightText}>

          {userName
            ? `${userName}, your consistency is building healthier habits every day.`
            : "Your consistency is building healthier habits every day."}

        </Text>

      </View>

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

  heading: {

    color: "#FFFFFF",

    fontSize: 36,

    fontWeight: "bold",

    marginBottom: 14,
  },

  subheading: {

    color: "#B0B0B0",

    fontSize: 17,

    lineHeight: 28,

    marginBottom: 34,
  },

  streakCard: {

    backgroundColor: "#1A1024",

    borderRadius: 30,

    padding: 30,

    marginBottom: 24,
  },

  phaseCard: {

    backgroundColor: "#1A1024",

    borderRadius: 30,

    padding: 30,

    marginBottom: 24,
  },

  insightCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 30,

    padding: 30,
  },

  cardLabel: {

    color: "#B0B0B0",

    fontSize: 16,

    marginBottom: 12,
  },

  streakText: {

    color: "#FFFFFF",

    fontSize: 34,

    fontWeight: "bold",
  },

  phaseText: {

    color: "#FFFFFF",

    fontSize: 30,

    fontWeight: "bold",
  },

  insightText: {

    color: "#FFFFFF",

    fontSize: 18,

    lineHeight: 30,
  },

});