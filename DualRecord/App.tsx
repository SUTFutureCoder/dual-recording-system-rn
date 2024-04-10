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
import Start from "./Start.tsx";
import PdfPageDisclaimer from "./PdfPageDisclaimer.tsx";
import PdfPageClaimer from "./PdfPageClaimer.tsx";
import PdfPageClaimerWithSign from "./PdfPageClaimerWithSign.tsx";
import PdfPageNoticeWithSign from "./PdfPageNoticeWithSign.tsx";
import Final1 from "./Final1.tsx";
import Last1 from "./Last1.tsx";

type RootStackNavigatorParamsList = {
  Start: undefined;
  Logo: undefined;
  Cam: undefined;
  Sign: undefined;
  Id: undefined;
  PdfPage: undefined;
  FinSign: undefined;
  PdfPageDisclaimer: undefined;
  PdfPageClaimer: undefined;
  PdfPageClaimerWithSign: undefined;
  PdfPageNoticeWithSign: undefined;
  Final1: undefined;
  Last1: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App(): React.JSX.Element {

  let order_id = Math.floor(1000000000 + Math.random() * 9000000000).toString().replace(/^0/, String(Math.floor(1 + Math.random() * 9)));
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="Logo" component={Logo} options={{  headerShown: false  }}/>
        <Stack.Screen name="Cam" component={Cam} options={{  headerShown: false  }}/>
        <Stack.Screen name="Sign" component={Sign} options={{  headerShown: false  }}/>
        <Stack.Screen name="Id" component={Id} options={{  headerShown: false  }}/>
        <Stack.Screen name="PdfPage" component={PdfPage} options={{  headerShown: false  }}/>
        <Stack.Screen name="PdfPageDisclaimer" component={PdfPageDisclaimer} options={{  headerShown: false  }}/>
        <Stack.Screen name="PdfPageClaimer" component={PdfPageClaimer} options={{  headerShown: false  }}/>
        <Stack.Screen name="FinSign" component={FinSign} options={{  headerShown: false  }}/>
        <Stack.Screen name="PdfPageClaimerWithSign" component={PdfPageClaimerWithSign} options={{  headerShown: false  }}/>
        <Stack.Screen name="PdfPageNoticeWithSign" component={PdfPageNoticeWithSign} options={{  headerShown: false  }}/>
        <Stack.Screen name="Final1" component={Final1} options={{  headerShown: false  }}/>
        <Stack.Screen name="Last1" component={Last1} options={{  headerShown: false  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
