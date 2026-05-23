import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const phases = [

  {
    phase: "Menstrual 🌸",
    days: "Days 1-5",
    workout:
      "Recovery + Stretching",
    color: "#FF6F91",
  },

  {
    phase: "Follicular ⚡",
    days: "Days 6-13",
    workout:
      "Strength Training",
    color: "#C77DFF",
  },

  {
    phase: "Ovulation 🔥",
    days: "Days 14-16",
    workout:
      "HIIT + Power Workouts",
    color: "#9D4EDD",
  },

  {
    phase: "Luteal 🌿",
    days: "Days 17-28",
    workout:
      "Pilates + Mobility",
    color: "#7B2CBF",
  },

];

export default function CalendarScreen() {

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
        Cycle Calendar 📅
      </Text>

      <Text style={styles.subheading}>
        AI-powered workout guidance
        based on your cycle phases.
      </Text>

      {phases.map(
        (item, index) => (

          <View
            key={index}

            style={[
              styles.phaseCard,

              {
                borderLeftColor:
                  item.color,
              },
            ]}
          >

            <Text
              style={styles.phaseTitle}
            >
              {item.phase}
            </Text>

            <Text
              style={styles.phaseDays}
            >
              {item.days}
            </Text>

            <Text
              style={styles.workoutText}
            >
              Recommended:
            </Text>

            <Text
              style={styles.workout}
            >
              {item.workout}
            </Text>

          </View>

        )
      )}

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
    marginBottom: 14,
  },

  subheading: {
    color: "#B0B0B0",
    fontSize: 17,
    lineHeight: 28,
    marginBottom: 30,
  },

  phaseCard: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 24,

    padding: 24,

    marginBottom: 22,

    borderLeftWidth: 8,
  },

  phaseTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  phaseDays: {
    color: "#FF6F91",
    fontSize: 17,
    marginBottom: 18,
  },

  workoutText: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 8,
  },

  workout: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  },

});