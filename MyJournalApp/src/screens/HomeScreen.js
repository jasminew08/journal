// src/screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "../components/NavBar";
import styles from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");

  const saveEntry = async () => {
    if (!date || !entry) return;
    try {
      const stored = await AsyncStorage.getItem("journalEntries");
      const existing = stored ? JSON.parse(stored) : [];
      await AsyncStorage.setItem(
        "journalEntries",
        JSON.stringify([...existing, { date, text: entry }])
      );
      setDate("");
      setEntry("");
    } catch (error) {
      console.error("Error saving entry", error);
    }
  };

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
        <Text style={styles.p}>Write Journal Entries Daily!</Text>

        <View style={styles.entryCard}>
          <Text style={styles.entryTitle}>New Entry</Text>

          <TextInput
            style={styles.inputDate}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#c0bcb5"
            value={date}
            onChangeText={setDate}
          />

          <TextInput
            style={styles.textArea}
            placeholder="Write your thoughts..."
            placeholderTextColor="#c0bcb5"
            multiline
            value={entry}
            onChangeText={setEntry}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={saveEntry}>
            <Text style={{ fontFamily: "Quicksand", textAlign: "center" }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <NavBar navigation={navigation} />
      </View>
    </ScrollView>
  );
}
