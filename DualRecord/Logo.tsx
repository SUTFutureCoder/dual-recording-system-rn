import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable, TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import SignaturePad from "@yz1311/react-native-signature-pad";
import { Camera, useCameraDevice } from "react-native-vision-camera";

function Logo({navigation}): React.JSX.Element {
  Camera.requestCameraPermission();
  let device = useCameraDevice('front');
  let isActive = true;
  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 0}}>
              <TouchableHighlight style={{height: "100%", width: '100%'}} onPress={() => {isActive = navigation.navigate('Cam');}}>
                <Image resizeMode={'cover'} style={{height: "100%", width: '100%'}} source={require('./assets/2a2005bfb7328a5.jpg')} ></Image>
              </TouchableHighlight>
            </View>
          </View>

          <View style={{flex: 1}}>
            <View  style={{height: "25%", marginBottom: 5}}>
              <Camera
                style={[StyleSheet.absoluteFill, {height: "100%"}]}
                device={device}
                isActive={isActive}
              />
            </View>
            <ScrollView style={{height: "70%", marginBottom: 5}} >
              <Text style={{fontSize: 15}}>
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default Logo;
