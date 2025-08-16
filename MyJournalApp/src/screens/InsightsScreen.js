// src/screens/InsightsScreen.js
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import NavBar from "../components/NavBar";
import styles from "../styles/globalStyles";

export default function InsightsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/temp.png")}
          style={styles.cornerLogo}
        />

        <Text style={styles.h1}>Journal</Text>
        <Text style={styles.h2}>
          Mental Health - Tracking, Insights, Education
        </Text>

        <Text style={styles.p}>
          View mental health insights from your entries.
        </Text>

        {/* Additional insights content can go here */}
        {/* For example, graphs, mood summaries, or statistics */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.p}>
            Insights will help you track trends and reflect on your mental
            health over time.
          </Text>
        </View>

        <NavBar navigation={navigation} />
      </View>
    </ScrollView>
  );
}
