import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function PostPage() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>PostPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
  },
});
