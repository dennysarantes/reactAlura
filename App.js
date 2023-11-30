import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Cesta } from './src/telas/cestas';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta></Cesta>
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