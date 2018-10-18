import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import Swiper from "react-native-swiper";
import PageBottomText from "./PageBottomText";

export default class App extends React.Component {
  state = {
    index: 0
  };

  next = () => {
    let _index = this.state.index;

    if (_index === 2) {
      _index = 0;
    } else {
      _index++;
    }

    this.setState(
      {
        index: _index
      },
      () => {
        this.refs.swiper.scrollBy(_index);
      }
    );
  };

  render() {
    const { next } = this.state;
    return (
      <View style={styles.container}>
        <Swiper
          ref="swiper"
          dot={
            <View
              style={{
                backgroundColor: "gray",
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "blue",
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{}}
          loop={false}
        >
          <View style={[styles.slide, { backgroundColor: "white" }]}>
            <Image source={require("img/img1.png")} style={styles.wrapper} />
            <PageBottomText
              text1="SIMPLE ABROAD CALLS"
              text2="Wonep converts international calls to local calls without WiFi or data"
            />
          </View>
          <View style={[styles.slide, { backgroundColor: "white" }]}>
            <Image source={require("img/img2.png")} style={styles.wrapper} />
            <PageBottomText
              text1="FREE WONEP TO WONEP"
              text2="Wonep converts international calls to local calls without WiFi or data"
            />
          </View>
          <View style={[styles.slide, { backgroundColor: "white" }]}>
            <Image source={require("img/img3.png")} style={styles.wrapper} />
            <PageBottomText
              text1="FREE WONEP TO WONEP"
              text2="Wonep converts international calls to local calls without WiFi or data"
            />
          </View>
        </Swiper>
        <View style={styles.wrapper2}>
          <TouchableHighlight style={styles.btn1} onPress={this.next}>
            <Text
              style={{
                color: this.state.index < 3 ? "white" : "gray",
                alignSelf: "center",
                fontSize: 17
              }}
            >
              NEXT
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn2}>
            <Text style={{ color: "blue", alignSelf: "center", fontSize: 17 }}>
              Skip
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    resizeMode: "contain",
    width: "100%",
    height: 360
  },
  wrapper2: {
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 20
  },
  slide: {
    flex: 1
  },
  container: {
    flex: 1
  },
  btn1: {
    width: 300,
    paddingVertical: 10,
    backgroundColor: "blue",
    borderRadius: 7
  },
  btn2: {
    width: 300,
    paddingVertical: 10,
    backgroundColor: "white"
  }
});
