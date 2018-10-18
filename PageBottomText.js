import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class PageBottomText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt1}>{this.props.text1}</Text>
        <Text style={styles.txt2}>{this.props.text2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: "center"
  },
  txt1: {
    color: "gray",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold"
  },
  txt2: {
    color: "gray",
    textAlign: "center",
    fontSize: 14
  }
});
