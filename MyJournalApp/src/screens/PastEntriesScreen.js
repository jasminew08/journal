// src/screens/PastEntriesScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "../components/NavBar";
import styles from "../styles/globalStyles";

export default function PastEntriesScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const stored = await AsyncStorage.getItem("journalEntries");
        if (stored) {
          const parsed = JSON.parse(stored);

          // Convert object to array if needed (for date as key)
          const entriesArray = Array.isArray(parsed)
            ? parsed
            : Object.keys(parsed).map((date) => ({
                date,
                text: parsed[date],
              }));

          // Sort newest first
          entriesArray.sort((a, b) => new Date(b.date) - new Date(a.date));
          setEntries(entriesArray);
        }
      } catch (error) {
        console.error("Error loading entries:", error);
      }
    };

    // Reload when screen gains focus
    const unsubscribe = navigation.addListener("focus", loadEntries);
    loadEntries();
    return unsubscribe;
  }, [navigation]);

  const renderEntry = ({ item }) => (
    <View style={styles.entry}>
      <Text style={styles.entryDate}>{item.date}</Text>
      <Text style={styles.entryText}>{item.text}</Text>
      {item.mood && <Text style={styles.entryText}>Mood: {item.mood}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/temp.png")}
        style={styles.cornerLogo}
      />
      <Text style={styles.h1}>Journal</Text>
      <Text style={styles.h2}>
        Mental Health - Tracking, Insights, Education
      </Text>
      <Text style={styles.p}>View and Edit Past Entries</Text>

      {entries.length === 0 ? (
        <Text style={styles.p}>No past entries found.</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderEntry}
          contentContainerStyle={{ paddingBottom: 80 }}
          style={{ width: "100%" }}
        />
      )}

      <NavBar navigation={navigation} />
    </View>
  );
}
