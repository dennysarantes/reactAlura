import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    Image,
  } from 'react-native';
import mockCesta from '../mock/mock-arquivo';
import { TextoFontBalsamiq } from '../telas/componentes-shared/texto-balsamiq-bold';

export function Itens() {

  const objItens = mockCesta.itens;
  let data = [];
  let DATA = [{title: objItens.titulo, data: []}];

  objItens.lista.forEach((i) => {
    console.log("i: ", i);
    data.push(i)
});

  DATA[0].data = [...data];
  console.log("DATA: ", DATA[0]);


  return (
        <SafeAreaView style={styles.container}>
         <SectionList
            scrollToOverflowEnabled={true}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section: {title}}) => (
                <TextoFontBalsamiq valor={title} estiloHerdado={styles.titulo} ></TextoFontBalsamiq>
              )}
            renderItem={({item}) => (
                <View style={styles.item}>
                  <Image source={item.imagem} style={styles.imagemItem}></Image>
                  <Text style={styles.texto}>{item.nome}</Text>
                </View>
              )}
         >
         </SectionList>
         </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        //flex: 1,
        //paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    titulo:{
        padding: 15,
        fontWeight:"bold"
    },
    item: {
       alignItems:"center",
       flexDirection:"row",
       padding: 10,
       marginVertical: 2,
      },
    texto: {
        textAlign:"center",
        color:"black"
    },
    imagemItem: {
        width: 32,
        height: 32,
        marginRight: 12
      },
});