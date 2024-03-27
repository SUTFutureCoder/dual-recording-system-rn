/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Cam from "./Cam.tsx";
import Sign from "./Sign.tsx";
import Id from "./Id.tsx";
import PdfPage from "./PdfPage.tsx";

type RootStackNavigatorParamsList = {
  Cam: undefined;
  Sign: undefined;
  Id: undefined;
  PdfPage: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cam" component={Cam} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Id" component={Id} />
        <Stack.Screen name="PdfPage" component={PdfPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
