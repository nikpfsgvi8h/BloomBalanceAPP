import {
  Tabs,
} from "expo-router";

import {
  Ionicons,
} from "@expo/vector-icons";

export default function TabLayout() {

  return (

    <Tabs

      screenOptions={{

        headerShown: false,

        tabBarStyle: {

          backgroundColor: "#050505",

          borderTopColor:
            "rgba(255,255,255,0.08)",

          height: 75,

          paddingBottom: 10,

          paddingTop: 10,
        },

        tabBarActiveTintColor:
          "#FF6F91",

        tabBarInactiveTintColor:
          "#999",
      }}
    >

      <Tabs.Screen

        name="index"

        options={{

          title: "Home",

          tabBarIcon: ({
            color,
            size,
          }) => (

            <Ionicons
              name="home"
              size={size}
              color={color}
            />

          ),

        }}
      />

      <Tabs.Screen

        name="calendar"

        options={{

          title: "Cycle",

          tabBarIcon: ({
            color,
            size,
          }) => (

            <Ionicons
              name="calendar"
              size={size}
              color={color}
            />

          ),

        }}
      />

      <Tabs.Screen

        name="progress"

        options={{

          title: "Progress",

          tabBarIcon: ({
            color,
            size,
          }) => (

            <Ionicons
              name="stats-chart"
              size={size}
              color={color}
            />

          ),

        }}
      />

      <Tabs.Screen

        name="profile"

        options={{

          title: "Login",

          tabBarIcon: ({
            color,
            size,
          }) => (

            <Ionicons
              name="person"
              size={size}
              color={color}
            />

          ),

        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="plan"
        options={{
          href: null,
        }}
      />

    </Tabs>

  );

}