// src/components/NavBar.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/globalStyles";

export default function NavBar({ navigation }) {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../../assets/home.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navButton}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("PastEntries")}
      >
        <Image
          source={require("../../assets/pastentries.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navButton}>Past Entries</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Resources")}
      >
        <Image
          source={require("../../assets/resources.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navButton}>Resources</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Insights")}
      >
        <Image
          source={require("../../assets/insights.png")}
          style={styles.navIcon}
        />
        <Text style={styles.navButton}>Insights</Text>
      </TouchableOpacity>
    </View>
  );
}
