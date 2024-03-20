import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from 'react-native-webview';
import SignaturePad from '@yz1311/react-native-signature-pad';

var penMinWidth = 2;  // Default value: 1
var penMaxWidth = 3;  // Default value: 4

function Sign({navigation}): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <SignaturePad
        penMinWidth={penMinWidth}
        penMaxWidth={penMaxWidth}
        style={{flex: 1, backgroundColor: 'white'}}
        useFont={false}
        />
      <Button title={"身份证录入"} onPress={() => navigation.navigate('Id')}></Button>
    </View>
  );
}


export default Sign;
