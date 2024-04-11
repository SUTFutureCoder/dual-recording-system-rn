import React, { useEffect, useRef, useState } from "react";
import {  AppState, BackHandler, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SignaturePad from "react-native-signature-pad";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import Orientation from "react-native-orientation-locker";
import Sound from "react-native-sound";

var penMinWidth = 2;  // Default value: 1
var penMaxWidth = 3;  // Default value: 4

function Sign({ navigation }): React.JSX.Element {
  Orientation.lockToLandscapeLeft();
  // let final_sign_data = "";
  // let _signaturePadChange = ({ base64DataUrl }) => {
  //   final_sign_data = base64DataUrl;
  // };
  const [appState, setAppState] = useState(AppState.currentState);
  const soundRef = useRef(null);  // 使用 useRef 来持久化声音实例

  let device = useCameraDevice("front");
  let isActive = true;

  useEffect(() => {

    // Camera.requestCameraPermission();

    // App state change listener
    const appStateListener = AppState.addEventListener("change", _handleAppStateChange);

    // Hardware back press listener
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      // Clean up: release sound and remove listeners
      soundRef.current?.release();
      appStateListener.remove();
      backHandler.remove();
    };
  }, []);

  let s: Sound
  const stage12 = () => {
    const sound = new Sound(require("./assets/stage12.mp3"), (error) => {
      s = sound
      soundRef.current = sound;
      if (!error) {
        sound.play((success) => {
          sound.release();
          soundRef.current = null;
          if (success) {
            console.log("音频12播放完成");
          }
        });
      }
    });
  };

  stage12();

  const handleBackPress = () => {
    soundRef.current?.stop();  // 停止播放声音
    navigation.goBack();
    return true;  // Prevent default back behavior
  };

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    } else if (nextAppState === 'background') {
      console.log('App has gone to the background!');
      soundRef.current?.stop();  // 停止播放声音
    }
    // setAppState(nextAppState);
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 0, height: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "stretch" }}>
          <View style={{ flex: 5 }}>
            <SignaturePad
              penMinWidth={penMinWidth}
              penMaxWidth={penMaxWidth}
              style={{ flex: 1, backgroundColor: "white" }}
              useFont={false}
            />
            <Button color={"#ff361e"} title={"提交"} onPress={() => {
              if (s !== undefined) {
                s.stop().release()
              }
              isActive = false;
              navigation.navigate("PdfPageNoticeWithSign");
            }}></Button>
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
      </View>
    </SafeAreaView>
  );
}


export default Sign;
