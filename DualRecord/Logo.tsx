import React, { useEffect, useRef, useState } from "react";
import { AppState, BackHandler, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";
import { Camera } from "react-native-vision-camera";
import Orientation from "react-native-orientation-locker";

const screenWidth = Dimensions.get("window").width; // 获取屏幕宽度
const screenHeight = Dimensions.get("window").height; // 获取屏幕宽度
function Logo({ navigation }): React.JSX.Element {
  Orientation.lockToLandscapeLeft();
  const [appState, setAppState] = useState(AppState.currentState);
  const soundRef = useRef(null);  // 使用 useRef 来持久化声音实例
  useEffect(() => {
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

  let s : Sound
  const stage16 = () => {
    const sound = new Sound(require("./assets/stage16.mp3"), (error) => {
      s = sound
      soundRef.current = sound;
      if (!error) {
        sound.play((success) => {
          sound.release();
          soundRef.current = null;
          if (success) {
            console.log("音频14播放完成");
          }
        });
      }
    });
  };


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
    setAppState(nextAppState);
  };


  stage16();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./assets/final3.png")}
          resizeMode="stretch" // 横向拉伸以填满容器
          style={styles.image}
        />
        <View style={{
          position: "absolute", // 绝对定位
          bottom: 0, // 定位到图片顶部
          left: 0, // 定位到图片左侧
          right: 0, // 定位到图片右侧
          height: "20%", // 高度为屏幕高度的5%
          backgroundColor: "rgba(128, 128, 128, 0.5)", // 灰色透明背景
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          zIndex: 9999
        }}>
          <Text style={{
            color: "#FFFFFF",
            fontSize: 15
          }}>本次录制即将结束，销售人员和客户如有补充说明请在此环节补充。如无补充，请点击结束录制</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button2} onPress={() => {
              if (s !== undefined) {
                s.stop().release()
              }
              navigation.navigate("Last1")}}>
              <Text style={styles.buttonText}>结束录制</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // 纵向居中
    alignItems: "center", // 横向居中
    backgroundColor: "#fff" // 可选背景颜色
  },
  image: {
    width: screenWidth, // 设置图片宽度为屏幕宽度
    height: "70%", // 高度自动调整以保持图片的宽高比
    aspectRatio: 3.82 // 你可以根据图片实际宽高比进行调整
  },
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

export default Logo;
