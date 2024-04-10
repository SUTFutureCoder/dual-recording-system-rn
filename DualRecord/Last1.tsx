import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import Orientation from 'react-native-orientation-locker';

function Last1({navigation}): React.JSX.Element {
  const [showFinal1, setShowFinal1] = useState(true);
  return (
    <SafeAreaView>
      {/*<TouchableNativeFeedback onPress={() => navigation.navigate('Cam')}>*/}
      <TouchableNativeFeedback onPress={() => {setShowFinal1(false);}}>
        <Image style={{
          display: showFinal1 ? undefined : 'none',
          height: "100%",
          width: "100%", // 图片宽度与屏幕宽度一致
          // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
          resizeMode: 'cover' // 保证图片覆盖，但可能裁切部分内容
        }} source={require('./assets/b8b1f53a06841707d88e42c6eff6b38e.jpg')}></Image>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Image style={{
          display: showFinal1 ? 'none' : undefined,
          height: "100%",
          width: "100%", // 图片宽度与屏幕宽度一致
          // aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
          resizeMode: 'cover' // 保证图片覆盖，但可能裁切部分内容
        }} resizeMode={"stretch"} source={require('./assets/b8b1f53a06841707d88e42c6eff6b38e.jpg')}></Image>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}


export default Last1;
