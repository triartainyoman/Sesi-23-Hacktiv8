import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#121212",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
