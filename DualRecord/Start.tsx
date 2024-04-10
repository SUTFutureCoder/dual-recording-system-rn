import React from 'react';
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

function Start({navigation}): React.JSX.Element {
  Camera.requestCameraPermission();
  Orientation.lockToPortrait();
  return (
    <SafeAreaView>
      {/*<TouchableNativeFeedback onPress={() => navigation.navigate('Cam')}>*/}
      <TouchableNativeFeedback onPress={() => navigation.navigate('Id')}>
        <Image style={{height: "100%", width: "100%"}} resizeMode={"stretch"} source={require('./assets/9b4907a24ef775a0f823ba5ee39ce79c.jpg')}></Image>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}


export default Start;
