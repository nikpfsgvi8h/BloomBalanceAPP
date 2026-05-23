import {
  Alert,
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
  CountdownCircleTimer,
} from "react-native-countdown-circle-timer";

import {
  router,
} from "expo-router";

import {
  workoutPlans,
} from "../data/workouts";

const exerciseImages: any = {

  "Jumping Jacks":
    require(
      "../assets/exercises/jumpingjacks.png"
    ),

  "Jump Squats":
    require(
      "../assets/exercises/jumpsquat.png"
    ),

  Lunges:
    require(
      "../assets/exercises/lunge.png"
    ),

  "Mountain Climbers":
    require(
      "../assets/exercises/mountainclimbers.png"
    ),

  Plank:
    require(
      "../assets/exercises/plank.png"
    ),

  "Shoulder Rolls":
    require(
      "../assets/exercises/shoulderroll.png"
    ),

  "Side Leg Raises":
    require(
      "../assets/exercises/sidelegraises.png"
    ),

  Squats:
    require(
      "../assets/exercises/squat.png"
    ),

  "Tricep Dips":
    require(
      "../assets/exercises/tricepdips.png"
    ),

};

export default function WorkoutScreen() {

  const [
    exerciseIndex,
    setExerciseIndex,
  ] = useState(0);

  const [
    workout,
    setWorkout,
  ] = useState<any>(null);

  const [
    allExercises,
    setAllExercises,
  ] = useState<any[]>([]);

  useEffect(() => {

    loadWorkout();

  }, []);

  const loadWorkout =
    async () => {

      try {

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

              (
                1000 *
                60 *
                60 *
                24
              )

            );

          const cycleDay =
            (difference % 28) + 1;

          let phase = "";

          if (cycleDay <= 5) {

            phase =
              "Menstrual";

          }

          else if (
            cycleDay <= 13
          ) {

            phase =
              "Follicular";

          }

          else if (
            cycleDay <= 16
          ) {

            phase =
              "Ovulation";

          }

          else {

            phase =
              "Luteal";

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
                workoutPlans
                  .follicular
                  .upperBody;

            }

            else {

              selectedWorkout =
                workoutPlans
                  .follicular
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

        const combined = [

          ...selectedWorkout
            .warmup,

          ...selectedWorkout
            .mainWorkout,

          ...selectedWorkout
            .cooldown,

        ];

        setAllExercises(
          combined
        );

      }

      catch (error) {

        console.log(error);

      }

    };

  if (
    !workout ||
    allExercises.length === 0
  ) {

    return (

      <View style={styles.loading}>

        <Text style={styles.loadingText}>
          Loading workout...
        </Text>

      </View>

    );

  }

  const current =
    allExercises[exerciseIndex];

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

      <Text style={styles.heading}>
        Guided Workout 🌸
      </Text>

      <Text style={styles.progress}>
        Exercise
        {" "}
        {exerciseIndex + 1}
        {" / "}
        {allExercises.length}
      </Text>

      <View style={styles.timerContainer}>

        <CountdownCircleTimer

          key={exerciseIndex}

          isPlaying

          duration={45}

          colors="#FF6F91"

          size={220}

          strokeWidth={14}
        >

          {({
            remainingTime,
          }) => (

            <Text
              style={styles.timerText}
            >
              {remainingTime}
            </Text>

          )}

        </CountdownCircleTimer>

      </View>

      <View style={styles.exerciseCard}>

        <Text style={styles.exerciseName}>
          {current.name}
        </Text>

        {exerciseImages[
          current.name
        ] && (

          <Image

            source={
              exerciseImages[
                current.name
              ]
            }

            style={
              styles.exerciseImage
            }

            resizeMode="contain"
          />

        )}

        {current.sets && (

          <Text
            style={
              styles.exerciseInfo
            }
          >
            {current.sets}
            {" sets × "}
            {current.reps}
          </Text>

        )}

        {current.duration && (

          <Text
            style={
              styles.exerciseInfo
            }
          >
            Duration:
            {" "}
            {current.duration}
          </Text>

        )}

        {current.rest && (

          <Text
            style={
              styles.exerciseInfo
            }
          >
            Rest:
            {" "}
            {current.rest}
          </Text>

        )}

        {current.muscles && (

          <Text
            style={
              styles.exerciseInfo
            }
          >
            Target:
            {" "}
            {current.muscles}
          </Text>

        )}

        {current.instructions && (

          <Text
            style={
              styles.instructions
            }
          >
            {current.instructions}
          </Text>

        )}

      </View>

      <TouchableOpacity

        style={styles.nextButton}

        onPress={async () => {

          if (

            exerciseIndex <

            allExercises.length - 1

          ) {

            setExerciseIndex(
              exerciseIndex + 1
            );

          }

          else {

            const currentStreak =
              await AsyncStorage.getItem(
                "streak"
              );

            const streakNumber =
              currentStreak
                ? parseInt(
                    currentStreak
                  )
                : 0;

            await AsyncStorage.setItem(

              "streak",

              String(
                streakNumber + 1
              )

            );

            Alert.alert(

              "Workout Complete 🎉",

              "Congratulations on completing today's workout!",

              [

                {

                  text:
                    "View Progress",

                  onPress: () => {

                    router.replace(
                      "/(tabs)/progress"
                    );

                  },

                },

              ]

            );

          }

        }}
      >

        <Text
          style={
            styles.nextButtonText
          }
        >
          Next Exercise →
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

    marginBottom: 14,
  },

  progress: {

    color: "#B0B0B0",

    fontSize: 18,

    marginBottom: 30,
  },

  timerContainer: {

    alignItems: "center",

    marginBottom: 40,
  },

  timerText: {

    color: "#FFFFFF",

    fontSize: 46,

    fontWeight: "bold",
  },

  exerciseCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 30,

    padding: 28,

    marginBottom: 30,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  exerciseName: {

    color: "#FF6F91",

    fontSize: 30,

    fontWeight: "bold",

    marginBottom: 20,
  },

  exerciseImage: {

    width: "100%",

    height: 220,

    marginBottom: 20,
  },

  exerciseInfo: {

    color: "#FFFFFF",

    fontSize: 18,

    marginBottom: 14,
  },

  instructions: {

    color: "#B0B0B0",

    fontSize: 16,

    lineHeight: 28,

    marginTop: 12,
  },

  nextButton: {

    backgroundColor: "#FF6F91",

    paddingVertical: 20,

    borderRadius: 24,

    alignItems: "center",
  },

  nextButtonText: {

    color: "#FFFFFF",

    fontSize: 18,

    fontWeight: "bold",
  },

});