import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignaturePad from "@yz1311/react-native-signature-pad";
import { Camera, useCameraDevice } from "react-native-vision-camera";

function Id({navigation}): React.JSX.Element {
  Camera.requestCameraPermission();
  let device = useCameraDevice('front');
  let isActive = true;
  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <Image source={require('./assets/id.jpeg')} style={{ width: '100%', height: "90%"}}></Image>
            <Button title={"文件"} onPress={() => {isActive = false; navigation.navigate('PdfPage');}}></Button>
          </View>

          <View style={{flex: 1, marginLeft: 10, marginRight: 5}}>
            <View  style={{height: "25%", marginBottom: 5}}>
              <Camera
                style={[StyleSheet.absoluteFill, {height: "100%"}]}
                device={device}
                isActive={isActive}
              />
            </View>
            <ScrollView style={{height: "70%", marginBottom: 5}} >
              <Text style={{fontSize: 15}}>
                请确认您的身份证件
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default Id;
