import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';

export function Itens({item}) {
  return (
    <>
      <View style={styles.item}>
        <Image source={item?.imagem} style={styles.imagemItem}></Image>
        <Text style={styles.texto}>{item?.nome}</Text>
      </View>
    </>
  )  
}

const styles = StyleSheet.create({
    item: {
       alignItems:"center",
       flexDirection:"row",
       padding: 10,
       marginVertical: 2,
       marginHorizontal: 16
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