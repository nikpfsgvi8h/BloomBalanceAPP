import {
  Dimensions,
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

import {
  LineChart,
} from "react-native-chart-kit";

import {
  AnimatedCircularProgress,
} from "react-native-circular-progress";

const screenWidth =
  Dimensions.get("window").width;

const aiInsights = [

  "Your recovery levels are improving steadily 🌸",

  "Consistency matters more than intensity today 💪",

  "Your cycle phase suggests prioritizing mobility and recovery 🧘",

  "Energy trends indicate improved workout readiness ⚡",

  "Your wellness balance is becoming more stable 💖",

];

export default function ProgressScreen() {

  const [streak, setStreak] =
    useState(0);

  const [goal, setGoal] =
    useState("");

  const [energy, setEnergy] =
    useState("");

  const [focus, setFocus] =
    useState("");

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const savedStreak =
      await AsyncStorage.getItem(
        "streak"
      );

    const savedUser =
      await AsyncStorage.getItem(
        "userData"
      );

    if (savedStreak) {

      setStreak(
        Number(savedStreak)
      );

    }

    if (savedUser) {

      const parsedUser =
        JSON.parse(savedUser);

      setGoal(parsedUser.goal);

      setEnergy(parsedUser.energy);

      setFocus(parsedUser.focus);

    }

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

      <Text style={styles.heading}>
        Your Wellness Progress 🌸
      </Text>

      <View style={styles.mainCard}>

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

        <Text style={styles.cardText}>
          {goal}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Focus Area 💪
        </Text>

        <Text style={styles.cardText}>
          {focus}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Energy Level ⚡
        </Text>

        <Text style={styles.cardText}>
          {energy}
        </Text>

      </View>

      <View style={styles.aiCard}>

        <Text style={styles.aiTitle}>
          AI Wellness Insights 🧠
        </Text>

        {aiInsights.map(
          (item, index) => (

            <View
              key={index}
              style={styles.insightBubble}
            >

              <Text
                style={styles.insightText}
              >
                {item}
              </Text>

            </View>

          )
        )}

      </View>

      <View style={styles.scoreContainer}>

        <Text style={styles.scoreTitle}>
          Wellness Scores 🌸
        </Text>

        <View style={styles.scoreRow}>

          <View style={styles.scoreItem}>

            <AnimatedCircularProgress
              size={120}
              width={12}
              fill={82}
              tintColor="#FF6F91"
              backgroundColor="#1A1A1A"
              rotation={0}
            >

              {() => (
                <Text style={styles.scoreText}>
                  82%
                </Text>
              )}

            </AnimatedCircularProgress>

            <Text style={styles.scoreLabel}>
              Recovery
            </Text>

          </View>

          <View style={styles.scoreItem}>

            <AnimatedCircularProgress
              size={120}
              width={12}
              fill={74}
              tintColor="#C77DFF"
              backgroundColor="#1A1A1A"
              rotation={0}
            >

              {() => (
                <Text style={styles.scoreText}>
                  74%
                </Text>
              )}

            </AnimatedCircularProgress>

            <Text style={styles.scoreLabel}>
              Energy
            </Text>

          </View>

        </View>

      </View>

      <View style={styles.chartCard}>

        <Text style={styles.chartTitle}>
          Wellness Trends 📈
        </Text>

        <LineChart

          data={{

            labels: [
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
            ],

            datasets: [
              {
                data: [
                  40,
                  55,
                  70,
                  75,
                  95,
                ],
              },
            ],
          }}

          width={screenWidth - 48}

          height={240}

          yAxisSuffix="%"

          chartConfig={{

            backgroundColor:
              "#050505",

            backgroundGradientFrom:
              "#1A1024",

            backgroundGradientTo:
              "#24112E",

            decimalPlaces: 0,

            color: (
              opacity = 1
            ) =>
              `rgba(255,111,145,${opacity})`,

            labelColor: (
              opacity = 1
            ) =>
              `rgba(255,255,255,${opacity})`,

            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#FF6F91",
            },
          }}

          bezier

          style={{
            marginTop: 20,
            borderRadius: 24,
          }}

        />

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
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
  },

  mainCard: {

    backgroundColor:
      "#FF6F91",

    borderRadius: 30,

    padding: 30,

    marginBottom: 24,

    alignItems: "center",
  },

  bigText: {
    color: "#FFFFFF",
    fontSize: 46,
    fontWeight: "bold",
    marginTop: 10,
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

  cardText: {

    color: "#FFFFFF",

    fontSize: 18,

    lineHeight: 28,
  },

  aiCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 28,

    padding: 24,

    marginTop: 10,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  aiTitle: {

    color: "#FF6F91",

    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 20,
  },

  insightBubble: {

    backgroundColor:
      "#1A1024",

    padding: 18,

    borderRadius: 18,

    marginBottom: 16,
  },

  insightText: {

    color: "#FFFFFF",

    fontSize: 16,

    lineHeight: 24,
  },

  scoreContainer: {

    marginTop: 30,

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 28,

    padding: 24,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  scoreTitle: {

    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 24,
  },

  scoreRow: {

    flexDirection: "row",

    justifyContent:
      "space-around",
  },

  scoreItem: {

    alignItems: "center",
  },

  scoreText: {

    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "bold",
  },

  scoreLabel: {

    color: "#B0B0B0",

    marginTop: 14,

    fontSize: 16,
  },

  chartCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 28,

    padding: 20,

    marginTop: 24,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  chartTitle: {

    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 10,
  },

});