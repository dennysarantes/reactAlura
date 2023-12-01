import { useCallback } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Cesta } from './src/cesta/cestas';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold,
} from '@expo-google-fonts/balsamiq-sans';

import * as SplashScreen from 'expo-splash-screen';
import mockCesta from './src/mock/mock-arquivo';
  
SplashScreen.preventAutoHideAsync();


export default function App() {

  const mock = mockCesta

  let [fontsLoaded, fontError] = useFonts({
    'BalsamiqRegular': BalsamiqSans_400Regular,
    'BalsamiqBold':BalsamiqSans_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar></StatusBar>
      <Cesta mock={{...mock}}></Cesta>
    </SafeAreaView>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */