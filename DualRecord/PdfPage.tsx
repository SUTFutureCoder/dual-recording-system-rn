import React,  { useEffect, useState } from "react";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Pdf, PdfUtil } from 'react-native-pdf-light';
import { Dirs, FileSystem } from 'react-native-file-access';

function useAsset(asset: string) {
  const [path, setPath] = useState<string | undefined>(undefined);
  useEffect(() => {
    const dest = `${Dirs.CacheDir}/${asset}`;
    FileSystem.cpAsset(asset, dest)
      .catch(() => {}) // Ignore errors.
      .finally(() => setPath(dest));
  }, [asset, setPath]);

  return path;
}

function PdfPage({navigation}): React.JSX.Element {
  let device = useCameraDevice('front');
  let isActive = true;
  let file = require('./assets/hetongshuqt.pdf')
  let fileuri = Image.resolveAssetSource(file).uri
  Alert.alert(Image.resolveAssetSource(file).uri)
  console.log('资源导入', file);
  const source = useAsset('assets/id.jpeg');
  // FileSystem.ls(`${Dirs.DocumentDir}`).then(function(ls ) {
  //   for (let i in ls) {
  //     Alert.alert(ls[i])
  //   }
  // })
  // FileSystem.exists(source).then(function(exist) {
  //   if (exist) {
  //
  //     Alert.alert('exist')
  //   } else {
  //     Alert.alert('not-exist')
  //   }
  //
  // });
  // Alert.alert(file)
  return (
    <SafeAreaView>
      <View style={{marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 5}}>
            <Pdf source={fileuri} />
            <Button title={"文件"}></Button>
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
                请阅读并朗读“我同意”
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default PdfPage;
