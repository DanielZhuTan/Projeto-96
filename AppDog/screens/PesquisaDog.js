import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class PesquisaDog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PesquisaDog</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});