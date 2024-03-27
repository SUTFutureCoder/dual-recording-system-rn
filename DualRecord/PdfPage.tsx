import React, { useState } from "react";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

function PdfPage({navigation}): React.JSX.Element {
  let device = useCameraDevice('front');
  let isActive = true;


  const images = [{ url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_1.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_2.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_3.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_4.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_5.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_6.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_7.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_8.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_9.jpg' },
    { url: 'https://project256.oss-cn-beijing.aliyuncs.com/uPic/hetongshuqt_10.jpg' }]


  const [button_disabled, set_button_disabled] = useState('True');

  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <ImageViewer imageUrls={images} style={{width: '100%'}}/>
            <Button title={"执业人员居民身份证信息"} disabled={button_disabled == 'True'} onPress={() => {isActive = false; navigation.navigate('Id');}}></Button>
          </View>

          <View style={{flex: 1, marginLeft: 10, marginRight: 5}}>
            <View  style={{height: "25%", marginBottom: 5}}>
              <Camera
                style={[StyleSheet.absoluteFill, {height: "100%"}]}
                device={device}
                isActive={isActive}
              />
            </View>
            <ScrollView style={{height: "35%", marginBottom: 5}} >
              <Text style={{fontSize: 15}}>
                请阅读并朗读“我同意”
              </Text>
            </ScrollView>
            <View style={{height: "35%", marginBottom: 5}}>
              <TouchableOpacity onPress={() => set_button_disabled('False')}>
                <Image resizeMode={'contain'} style={{height: "90%", width: '100%'}} source={require('./assets/0c2895d48b844ffe9285bfc9c1251d1f.png')} ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default PdfPage;
