import {
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

import {
  workoutPlans,
} from "../data/workouts";

export default function PlanScreen() {

  const [workout, setWorkout] =
    useState<any>(null);

  useEffect(() => {

    loadWorkout();

  }, []);

  const loadWorkout =
    async () => {

      const savedUser =
        await AsyncStorage.getItem(
          "userData"
        );

      let selectedWorkout;

      if (!savedUser) {

        selectedWorkout =
          workoutPlans.follicular
            .lowerBody;

      }

      else {

        const user =
          JSON.parse(savedUser);

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

        let phase = "";

        if (cycleDay <= 5) {

          phase = "Menstrual";

        }

        else if (
          cycleDay <= 13
        ) {

          phase = "Follicular";

        }

        else if (
          cycleDay <= 16
        ) {

          phase = "Ovulation";

        }

        else {

          phase = "Luteal";

        }

        if (
          phase ===
          "Menstrual"
        ) {

          selectedWorkout =
            workoutPlans.menstrual
              .recovery;

        }

        else if (
          phase ===
          "Follicular"
        ) {

          if (
            user.focus ===
            "Upper Body"
          ) {

            selectedWorkout =
              workoutPlans.follicular
                .upperBody;

          }

          else {

            selectedWorkout =
              workoutPlans.follicular
                .lowerBody;

          }

        }

        else if (
          phase ===
          "Ovulation"
        ) {

          selectedWorkout =
            workoutPlans.ovulation
              .hiit;

        }

        else {

          selectedWorkout =
            workoutPlans.luteal
              .pilates;

        }

      }

      setWorkout(
        selectedWorkout
      );

    };

  if (!workout) {

    return (

      <View style={styles.loading}>

        <Text style={styles.loadingText}>
          Generating your AI plan...
        </Text>

      </View>

    );

  }

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
        Today's Workout 🌸
      </Text>

      <View style={styles.heroCard}>

        <Text style={styles.heroTitle}>
          {workout.title}
        </Text>

        <Text style={styles.heroText}>
          Duration:
          {" "}
          {workout.duration}
        </Text>

        <Text style={styles.heroText}>
          Calories:
          {" "}
          {workout.calories}
        </Text>

        <Text style={styles.heroText}>
          Difficulty:
          {" "}
          {workout.difficulty}
        </Text>

      </View>

      <Text style={styles.sectionTitle}>
        Warmup 🔥
      </Text>

      {workout.warmup.map(
        (
          item: any,
          index: number
        ) => (

          <View
            key={index}
            style={styles.exerciseCard}
          >

            <Text
              style={styles.exerciseName}
            >
              {item.name}
            </Text>

            <Text
              style={styles.exerciseInfo}
            >
              {item.duration}
            </Text>

          </View>

        )
      )}

      <Text style={styles.sectionTitle}>
        Main Workout 💪
      </Text>

      {workout.mainWorkout.map(
        (
          item: any,
          index: number
        ) => (

          <View
            key={index}
            style={styles.exerciseCard}
          >

            <Text
              style={styles.exerciseName}
            >
              {item.name}
            </Text>

            <Text
              style={styles.exerciseInfo}
            >
              {item.sets}
              {" × "}
              {item.reps}
            </Text>

          </View>

        )
      )}

      <Text style={styles.sectionTitle}>
        Cooldown 🌿
      </Text>

      {workout.cooldown.map(
        (
          item: any,
          index: number
        ) => (

          <View
            key={index}
            style={styles.exerciseCard}
          >

            <Text
              style={styles.exerciseName}
            >
              {item.name}
            </Text>

            <Text
              style={styles.exerciseInfo}
            >
              {item.duration}
            </Text>

          </View>

        )
      )}

      <TouchableOpacity

        style={styles.button}

        onPress={() =>
          router.push("/workout")
        }
      >

        <Text style={styles.buttonText}>
          LET'S DO IT 🔥
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

  loading: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#050505",
  },

  loadingText: {

    color: "#FFFFFF",

    fontSize: 22,
  },

  heading: {

    color: "#FFFFFF",

    fontSize: 34,

    fontWeight: "bold",

    marginBottom: 24,
  },

  heroCard: {

    backgroundColor: "#1A1024",

    borderRadius: 30,

    padding: 28,

    marginBottom: 30,
  },

  heroTitle: {

    color: "#FFFFFF",

    fontSize: 30,

    fontWeight: "bold",

    marginBottom: 18,
  },

  heroText: {

    color: "#D0D0D0",

    fontSize: 17,

    marginBottom: 10,
  },

  sectionTitle: {

    color: "#FFFFFF",

    fontSize: 28,

    fontWeight: "bold",

    marginBottom: 18,

    marginTop: 10,
  },

  exerciseCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 22,

    padding: 20,

    marginBottom: 16,
  },

  exerciseName: {

    color: "#FF6F91",

    fontSize: 22,

    fontWeight: "bold",

    marginBottom: 8,
  },

  exerciseInfo: {

    color: "#FFFFFF",

    fontSize: 16,
  },

  button: {

    backgroundColor: "#FF6F91",

    paddingVertical: 24,

    borderRadius: 30,

    alignItems: "center",

    marginTop: 30,
  },

  buttonText: {

    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "bold",
  },

});