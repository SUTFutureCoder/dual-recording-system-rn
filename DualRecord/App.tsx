/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Logo from "./Logo.tsx";
import Cam from "./Cam.tsx";
import Sign from "./Sign.tsx";
import Id from "./Id.tsx";
import PdfPage from "./PdfPage.tsx";
import FinSign from "./FinSign.tsx";

type RootStackNavigatorParamsList = {
  Logo: undefined;
  Cam: undefined;
  Sign: undefined;
  Id: undefined;
  PdfPage: undefined;
  FinSign: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App(): React.JSX.Element {

  let order_id = Math.floor(1000000000 + Math.random() * 9000000000).toString().replace(/^0/, String(Math.floor(1 + Math.random() * 9)));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logo" component={Logo} options={{ title: "欢迎使用XX人寿双录系统" }}/>
        <Stack.Screen name="Cam" component={Cam} options={{ title: order_id + " - XX人寿双录系统" }}/>
        <Stack.Screen name="Sign" component={Sign} options={{ title: order_id + " - XX人寿双录系统" }}/>
        <Stack.Screen name="Id" component={Id} options={{ title: order_id + " - XX人寿双录系统" }}/>
        <Stack.Screen name="PdfPage" component={PdfPage} options={{ title: order_id + " - XX人寿双录系统" }}/>
        <Stack.Screen name="FinSign" component={FinSign} options={{ title: order_id + " - XX人寿双录系统" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
