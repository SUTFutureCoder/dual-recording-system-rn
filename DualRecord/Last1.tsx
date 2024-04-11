import React, { useEffect, useRef, useState  } from "react";
import { AppState, BackHandler, Image, SafeAreaView, TouchableNativeFeedback } from "react-native";
import Orientation from "react-native-orientation-locker";

function Last1({ navigation }): React.JSX.Element {
  const [showFinal1, setShowFinal1] = useState(true);
  const [appState, setAppState] = useState(AppState.currentState);
  Orientation.lockToPortrait();

  useEffect(() => {
    // App state change listener
    const appStateListener = AppState.addEventListener("change", _handleAppStateChange);

    // Hardware back press listener
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      appStateListener.remove();
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    Orientation.lockToLandscapeLeft()
    navigation.goBack();
    return true;  // Prevent default back behavior
  };

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    } else if (nextAppState === 'background') {
      console.log('App has gone to the background!');
    }
    setAppState(nextAppState);
  };

  return (
    <SafeAreaView>
      {/*<TouchableNativeFeedback onPress={() => navigation.navigate('Cam')}>*/}
      <TouchableNativeFeedback onPress={() => {
        setShowFinal1(false);
      }}>
        <Image style={{
          display: showFinal1 ? undefined : "none",
          height: "100%",
          width: "100%", // 图片宽度与屏幕宽度一致
          // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
          resizeMode: "cover" // 保证图片覆盖，但可能裁切部分内容
        }} source={require("./assets/b8b1f53a06841707d88e42c6eff6b38e.jpg")}></Image>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate("Start")
      }}>
        <Image style={{
          display: showFinal1 ? "none" : undefined,
          height: "100%",
          width: "100%", // 图片宽度与屏幕宽度一致
          // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
          resizeMode: "cover" // 保证图片覆盖，但可能裁切部分内容
        }} resizeMode={"stretch"} source={require("./assets/2492c6931852bebd2eff146e62e5997b.jpg")}></Image>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}


export default Last1;
