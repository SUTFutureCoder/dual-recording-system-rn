import React, { useEffect } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SignaturePad from "react-native-signature-pad";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import Orientation from "react-native-orientation-locker";
import Sound from "react-native-sound";

var penMinWidth = 2;  // Default value: 1
var penMaxWidth = 3;  // Default value: 4

function Sign({ navigation }): React.JSX.Element {

  let final_sign_data = "";
  let _signaturePadChange = ({ base64DataUrl }) => {
    final_sign_data = base64DataUrl;
  };

  let device = useCameraDevice("front");
  let isActive = true;

  useEffect(() => {
    stage12();
    Camera.requestCameraPermission();
    Orientation.lockToLandscapeLeft();
  }, []);

  let s: Sound
  const stage12 = () => {
    const sound = new Sound(require("./assets/stage12.mp3"), (error) => {
      s = sound
      if (!error) {
        sound.play((success) => {
          sound.release();
          if (success) {
            console.log("音频12播放完成");
          }
        });
      }
    });
  };
  return (
    <SafeAreaView>
      <View style={{ marginTop: 0, height: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "stretch" }}>
          <View style={{ flex: 5 }}>
            <SignaturePad
              penMinWidth={penMinWidth}
              penMaxWidth={penMaxWidth}
              onChange={_signaturePadChange}
              style={{ flex: 1, backgroundColor: "white" }}
              useFont={false}
            />
            <Button color={"#ff361e"} title={"提交"} onPress={() => {
              if (s !== undefined) {
                s.stop().release()
              }
              isActive = false;
              navigation.navigate("PdfPageNoticeWithSign", { sign_64: final_sign_data });
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
