import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import DateTimePicker from "@react-native-community/datetimepicker";

import {
  router,
} from "expo-router";

import {
  db,
} from "../firebase";

import {
  doc,
  setDoc,
} from "firebase/firestore";

export default function UserInfoScreen() {

  const [name, setName] =
    useState("");

  const [age, setAge] =
    useState(21);

  const [weight, setWeight] =
    useState(55);

  const [goal, setGoal] =
    useState("Weight Loss");

  const [focus, setFocus] =
    useState("Lower Body");

  const [energy, setEnergy] =
    useState("Medium");

  const [
    cycleStartDate,
    setCycleStartDate,
  ] = useState(new Date());

  const [
    showPicker,
    setShowPicker,
  ] = useState(false);

  const saveUserData =
    async () => {

if (!name.trim()) {

  alert("Please enter your name 🌸");

  return;

}

      try {

        const userData = {

          name,

          age,

          weight,

          goal,

          focus,

          energy,

          cycleStartDate:
            cycleStartDate.toISOString(),

        };

        await AsyncStorage.setItem(

          "userData",

          JSON.stringify(userData)

        );

        await setDoc(

          doc(db, "users", name),

          userData

        );

        router.replace("/plan");

      }

      catch (error) {

        console.log(error);

      }

    };

  return (

    <ScrollView
      style={styles.container}

      contentContainerStyle={{
        paddingBottom: 100,
      }}

      showsVerticalScrollIndicator={
        false
      }
    >

      <Text style={styles.heading}>
        Create Your Wellness Profile 🌸
      </Text>

      <Text style={styles.subheading}>
        Personalized AI fitness
        designed around your cycle,
        energy, and goals.
      </Text>

      <Text style={styles.label}>
        Your Name
      </Text>

      <TextInput

        placeholder="Enter your name"

        placeholderTextColor="#777"

        style={styles.input}

        value={name}

        onChangeText={setName}
      />

      <Text style={styles.label}>
        Age 🎂
      </Text>

      <ScrollView

        horizontal

        showsHorizontalScrollIndicator={
          false
        }

        style={styles.scrollRow}
      >

        {Array.from(
          { length: 53 },
          (_, i) => i + 13
        ).map((item) => (

          <TouchableOpacity

            key={item}

            style={[

              styles.scrollOption,

              age === item && {
                backgroundColor:
                  "#FF6F91",
              },

            ]}

            onPress={() =>
              setAge(item)
            }
          >

            <Text
              style={styles.scrollText}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <Text style={styles.label}>
        Weight (kg) ⚖️
      </Text>

      <ScrollView

        horizontal

        showsHorizontalScrollIndicator={
          false
        }

        style={styles.scrollRow}
      >

        {Array.from(
          { length: 81 },
          (_, i) => i + 30
        ).map((item) => (

          <TouchableOpacity

            key={item}

            style={[

              styles.scrollOption,

              weight === item && {
                backgroundColor:
                  "#FF6F91",
              },

            ]}

            onPress={() =>
              setWeight(item)
            }
          >

            <Text
              style={styles.scrollText}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <Text style={styles.label}>
        Fitness Goal 🎯
      </Text>

      <View style={styles.optionContainer}>

        {[
          "Weight Loss",
          "Strength",
          "Wellness",
          "Muscle Gain",
        ].map((item) => (

          <TouchableOpacity

            key={item}

            style={[

              styles.optionButton,

              goal === item && {
                backgroundColor:
                  "#FF6F91",
              },

            ]}

            onPress={() =>
              setGoal(item)
            }
          >

            <Text
              style={styles.optionText}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <Text style={styles.label}>
        Focus Area 💪
      </Text>

      <View style={styles.optionContainer}>

        {[
          "Lower Body",
          "Upper Body",
          "Core",
          "Full Body",
        ].map((item) => (

          <TouchableOpacity

            key={item}

            style={[

              styles.optionButton,

              focus === item && {
                backgroundColor:
                  "#FF6F91",
              },

            ]}

            onPress={() =>
              setFocus(item)
            }
          >

            <Text
              style={styles.optionText}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <Text style={styles.label}>
        Energy Level ⚡
      </Text>

      <View style={styles.optionContainer}>

        {[
          "Low",
          "Medium",
          "High",
        ].map((item) => (

          <TouchableOpacity

            key={item}

            style={[

              styles.optionButton,

              energy === item && {
                backgroundColor:
                  "#FF6F91",
              },

            ]}

            onPress={() =>
              setEnergy(item)
            }
          >

            <Text
              style={styles.optionText}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <Text style={styles.label}>
        First Day of Last Period 🌸
      </Text>

      <TouchableOpacity

        style={styles.dateButton}

        onPress={() =>
          setShowPicker(true)
        }
      >

        <Text style={styles.dateText}>

          {
            cycleStartDate
              .toDateString()
          }

        </Text>

      </TouchableOpacity>

      {showPicker && (

        <DateTimePicker

          value={cycleStartDate}

          mode="date"

          display="default"

          onChange={(
            event,
            selectedDate
          ) => {

            setShowPicker(false);

            if (selectedDate) {

              setCycleStartDate(
                selectedDate
              );

            }

          }}
        />

      )}

      <TouchableOpacity

        style={styles.button}

        onPress={saveUserData}
      >

        <Text style={styles.buttonText}>
          Generate My AI Plan ✨
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

    marginBottom: 34,
  },

  label: {

    color: "#FFFFFF",

    fontSize: 18,

    fontWeight: "600",

    marginBottom: 14,

    marginTop: 10,
  },

  input: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 22,

    paddingVertical: 18,

    paddingHorizontal: 20,

    color: "#FFFFFF",

    fontSize: 16,

    marginBottom: 24,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  scrollRow: {

    marginBottom: 26,
  },

  scrollOption: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    paddingVertical: 16,

    paddingHorizontal: 20,

    borderRadius: 18,

    marginRight: 12,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  scrollText: {

    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "600",
  },

  optionContainer: {

    flexDirection: "row",

    flexWrap: "wrap",

    gap: 12,

    marginBottom: 26,
  },

  optionButton: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    paddingVertical: 14,

    paddingHorizontal: 18,

    borderRadius: 20,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  optionText: {

    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "600",
  },

  dateButton: {

    backgroundColor:
      "rgba(255,255,255,0.05)",

    borderRadius: 22,

    paddingVertical: 18,

    paddingHorizontal: 20,

    marginBottom: 30,

    borderWidth: 1,

    borderColor:
      "rgba(255,255,255,0.08)",
  },

  dateText: {

    color: "#FFFFFF",

    fontSize: 16,
  },

  button: {

    backgroundColor: "#FF6F91",

    paddingVertical: 22,

    borderRadius: 28,

    alignItems: "center",

    marginTop: 10,
  },

  buttonText: {

    color: "#FFFFFF",

    fontSize: 20,

    fontWeight: "bold",
  },

});