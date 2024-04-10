import React, { useState, useEffect } from "react";
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Camera, useCameraDevice } from 'react-native-vision-camera';
import Orientation from 'react-native-orientation-locker';
import Sound from 'react-native-sound';

const initialText = "欢迎进入双录系统，请调整镜头使人像位于取景框正中央，面部无遮挡。请您预留30分钟时间，保持设备电量70%以上，双录过程中请不要退出系统，感谢您的配合。";
const sound_gif = require('./assets/sound.gif');
const mic_gif = require('./assets/mic.gif');

function Cam({ navigation }): React.JSX.Element {
  const [rightText, setRightText] = useState(initialText);
  const [rightGif, setRightGif] = useState(sound_gif);

  useEffect(() => {
    stage1();
    Camera.requestCameraPermission();
    Orientation.lockToLandscapeRight();
  }, []);

  const stage1 = () => {
    let sound = new Sound(require('./assets/stage1.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频1播放完成');
            setRightText("钟宁女士您好！为规范保险销售从业人员的销售行为，也为了更好地保护您的合法权益，根据保监会有关规定，我们将以录音录像方式对我的销售过程关键环节予以记录。请问您是否同意？")
            stage2();
          }
          sound.release();
        });
      }
    });
  };

  const stage2 = () => {
    const sound = new Sound(require('./assets/stage2.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频2播放完成');
            setRightGif(mic_gif);
            setTimeout(stage3, 1500);
          }
          sound.release();
        });
      }
    });
  };

  const stage3 = () => {
    setRightText('请保险经纪人薛晓舟与投保人钟宁女士同框出镜，并且在后续录制过程中保持同框。')
    setRightGif(sound_gif);
    const sound = new Sound(require('./assets/stage3.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频3播放完成');
            setTimeout(stage4, 1500);
          }
          sound.release();
        });
      }
    });
  };

  const stage4 = () => {
    setRightText('此次录音录像过程对于今后您维护权益非常关键，请您认真阅读您签署文件的具体内容，如实回答相关问题。如果销售人员向您作出任何与书面文件内容不一致都是无效的，您是否清楚。')
    const sound = new Sound(require('./assets/stage4.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频4播放完成');
            setTimeout(stage5, 1500);
          }
          sound.release();
        });
      }
    });
  };

  const stage5 = () => {
    setRightText('本次为您办理的销售人员是太盈国际保险经纪有限公司的保险经纪人薛晓舟。')
    const sound = new Sound(require('./assets/stage5.mp3'), (error) => {
      if (!error) {
        sound.play((success) => {
          if (success) {
            console.log('音频5播放完成');
            navigation.navigate('Id');
          }
          sound.release();
        });
      }
    });
  };

  const device = useCameraDevice('front');
  const isActive = true;

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'column', marginTop: 0, height: "100%" }}>
        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <View style={{ flex: 4 }}>
            <Camera
              style={[StyleSheet.absoluteFill, { height: "100%" }]}
              device={device}
              isActive={isActive}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10, marginRight: 5, height: "100%" }}>
            <ScrollView style={{ height: "92%", marginBottom: 5 }}>
              <Text style={{ fontSize: 20 }}>
                {rightText}
              </Text>
            </ScrollView>
            <View>
              <Image resizeMode={'stretch'} style={{ width: '100%', height: '60%' }} source={rightGif}></Image>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default Cam;
