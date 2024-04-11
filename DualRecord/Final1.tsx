import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Orientation from "react-native-orientation-locker";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import Sound from "react-native-sound";

function Final1({ navigation }): React.JSX.Element {
  useEffect(() => {
    stage15();
    Camera.requestCameraPermission();
    Orientation.lockToLandscapeLeft();
  }, []);

  let device = useCameraDevice("front");
  let isActive = true;
  Orientation.lockToLandscapeLeft();


  const stage15 = () => {
    const sound = new Sound(require("./assets/stage15.mp3"), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log("音频15播放完成");
          }
          sound.release();
        });
      }
    });
  };

  const [showFinal1, setShowFinal1] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", height: "100%" }}>
        <View style={{ flex: 4 }}>
          <TouchableWithoutFeedback onPress={() => {
            setShowFinal1(false);
          }}>
            <Image
              source={require("./assets/final1.jpg")}
              style={{
                display: showFinal1 ? undefined : "none",
                height: "100%",
                width: "100%", // 图片宽度与屏幕宽度一致
                // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
                resizeMode: "cover" // 保证图片覆盖，但可能裁切部分内容
              }}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("Logo");
          }}>
            <Image
              source={require("./assets/final2.jpg")}
              style={{
                display: showFinal1 ? "none" : undefined,
                height: "100%",
                width: "100%", // 图片宽度与屏幕宽度一致
                // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
                resizeMode: "cover" // 保证图片覆盖，但可能裁切部分内容
              }}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
          <View style={{ height: "25%", marginBottom: 5 }}>
            <Camera
              style={[StyleSheet.absoluteFill, { height: "100%" }]}
              device={device}
              isActive={isActive}
            />
          </View>
          <ScrollView style={{ height: "70%", marginBottom: 5 }}>
            <Text style={{ fontSize: 20 }}>

            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#367bd8",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5
  },
  button2: {
    backgroundColor: "#ff361e",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15
  }
});

export default Final1;
