import React, { useEffect } from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Orientation from 'react-native-orientation-locker';
import { Camera, useCameraDevice } from "react-native-vision-camera";
import Sound from "react-native-sound";

function Id({navigation}): React.JSX.Element {
  useEffect(() => {
    stage6();
    Camera.requestCameraPermission();
    Orientation.lockToLandscapeRight();
  }, []);

  let device = useCameraDevice('front');
  let isActive = true;
  Orientation.lockToLandscapeRight();


  const stage6 = () => {
    const sound = new Sound(require('./assets/stage6.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频6播放完成');
          }
          sound.release();
        });
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', height: '100%' }}>
        <View style={{ flex: 4 }}>
          <ScrollView
            style={{ height: "90%" }}
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal={false}  // 确保ScrollView为垂直滚动
          >
            <Image
              source={require('./assets/id.jpg')}
              style={{
                width: "100%", // 图片宽度与屏幕宽度一致
                height: undefined,  // 高度未定义
                aspectRatio: 0.8,   // 假设图片的宽高比为1.5 (适当调整以符合您的图片实际宽高比)
                resizeMode: 'cover' // 保证图片覆盖，但可能裁切部分内容
              }}
            />
          </ScrollView>
          <View style={{
            position: 'absolute', // 绝对定位
            bottom: 0, // 定位到图片顶部
            left: 0, // 定位到图片左侧
            right: 0, // 定位到图片右侧
            height: '20%', // 高度为屏幕高度的5%
            backgroundColor: 'rgba(128, 128, 128, 0.5)', // 灰色透明背景
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10
          }}>
            <Text style={{ color: '#FFFFFF', fontSize: 15 }}>投屏所示为销售人员身份证件，请投保人亲自滑屏浏览并核对</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Id')}>
                <Text style={styles.buttonText}>刷新</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('PdfPage')}>
                <Text style={styles.buttonText}>核对完毕</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

export default Id;
