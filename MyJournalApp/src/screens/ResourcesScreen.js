// src/screens/ResourcesScreen.js
import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NavBar from "../components/NavBar";
import styles from "../styles/globalStyles";

export default function ResourcesScreen({ navigation }) {
  const [province, setProvince] = useState("");

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
          Select your province to find and explore local mental health programs
          and hotlines.
        </Text>

        <Picker
          selectedValue={province}
          onValueChange={setProvince}
          style={styles.picker}
        >
          <Picker.Item label="Select Province" value="" />
          <Picker.Item label="Ontario" value="ontario" />
          <Picker.Item label="Quebec" value="quebec" />
          <Picker.Item label="British Columbia" value="british-columbia" />
          <Picker.Item label="Alberta" value="alberta" />
          <Picker.Item label="Manitoba" value="manitoba" />
          <Picker.Item label="Saskatchewan" value="saskatchewan" />
          <Picker.Item label="Nova Scotia" value="nova-scotia" />
          <Picker.Item label="New Brunswick" value="new-brunswick" />
          <Picker.Item
            label="Newfoundland and Labrador"
            value="newfoundland-labrador"
          />
          <Picker.Item
            label="Prince Edward Island"
            value="prince-edward-island"
          />
          <Picker.Item
            label="Northwest Territories"
            value="northwest-territories"
          />
          <Picker.Item label="Yukon" value="yukon" />
          <Picker.Item label="Nunavut" value="nunavut" />
        </Picker>

        <NavBar navigation={navigation} />
      </View>
    </ScrollView>
  );
}
