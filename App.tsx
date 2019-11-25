import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <WebView source={{ uri: 'https://eldorado-loto.com.ua/' }} />
    </>
  );
};

export default App;
