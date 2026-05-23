import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  useEffect,
} from "react";

import {
  router,
} from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoadingScreen() {

  useEffect(() => {

    const checkUser = async () => {

      const completed =
        await AsyncStorage.getItem(
          "onboardingComplete"
        );

      setTimeout(() => {

        router.replace("/");
      }, 2500);

    };

    checkUser();

  }, []);

  return (

    <View style={styles.container}>

      <Image
        source={require(
          "../assets/images/BloomBalancelogo.jpg"
        )}

        style={styles.logo}
      />

      <Text style={styles.title}>
        BloomBalance
      </Text>

      <ActivityIndicator
        size="large"
        color="#FF6F91"
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
  },

});