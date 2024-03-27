import React from 'react';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignaturePad from 'react-native-signature-pad';
import { Camera, useCameraDevice } from "react-native-vision-camera";

var penMinWidth = 2;  // Default value: 1
var penMaxWidth = 3;  // Default value: 4

function Sign({navigation}): React.JSX.Element {

  let final_sign_data = ''
  let _signaturePadChange = ({base64DataUrl}) => {
    final_sign_data = base64DataUrl
  };

  Camera.requestCameraPermission();
  let device = useCameraDevice('front');
  let isActive = true;

  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <SignaturePad
              penMinWidth={penMinWidth}
              penMaxWidth={penMaxWidth}
              onChange={_signaturePadChange}
              style={{flex: 1, backgroundColor: 'white'}}
              useFont={false}
            />
            <Button title={"确认签约"} onPress={() => {isActive = false; navigation.navigate('FinSign', {sign_64: final_sign_data});}}></Button>
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
                请在左侧签署您的姓名
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default Sign;
