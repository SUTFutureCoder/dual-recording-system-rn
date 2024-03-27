import React from 'react';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignaturePad from 'react-native-signature-pad';
import { Camera, useCameraDevice } from "react-native-vision-camera";
import sign from "./Sign.tsx";

var penMinWidth = 2;  // Default value: 1
var penMaxWidth = 3;  // Default value: 4

function FinSign({route, navigation}): React.JSX.Element {

  let {sign_64} = route.params;

  Camera.requestCameraPermission();
  let device = useCameraDevice('front');
  let isActive = true;

  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <View style={{marginLeft: '5%'}}>
                <Text style={{fontSize: 20}}>投保人亲笔签名：</Text>
              </View>
              <View style={{width: '100%'}}>
                <Image resizeMode={'contain'} style={{width: '60%', height: '60%',  borderWidth: 3, borderColor: 'red'}} source={{uri: sign_64}}/>
              </View>
            </View>

            <View style={{marginTop: 40}}>
              <Button title={"确认投保"} onPress={() => {Alert.alert('欢迎使用XX人寿双录系统', '您已完成签约'); navigation.navigate('Logo')}}></Button>
            </View>
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
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default FinSign;
