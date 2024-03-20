import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Id(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Image source={require('./img/id.jpeg')} style={{ width: '100%', height: "90%"}}></Image>
      <Button title={"文件"}></Button>
    </View>
  );
}


export default Id;
