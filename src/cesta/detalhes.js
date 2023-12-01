import { Text, StyleSheet, View, Image } from "react-native";
import { TextoFontBalsamiq } from '../telas/componentes-shared/texto-balsamiq-bold.js'

export default function DetalhesCesta({img, nomeFazenda, textoDestaque, valor}) {
    return (
        <View style={estilos.containerDetalhe}>
        <Text style={estilos.titulo2}>Cesta de verduras</Text>
        <View style={estilos.conteinerJenny}>
            <Image source={img} style={estilos.imagemFazenda}></Image>
            <TextoFontBalsamiq valor={nomeFazenda} estiloHerdado={estilos.titulo3}></TextoFontBalsamiq>
        </View>
        <Text style={estilos.descricao}>
          {textoDestaque}
        </Text>
        <Text style={estilos.preco}>R$ {valor}</Text>
      </View>
    )
}

const estilos = StyleSheet.create({
    containerDetalhe: {
      padding: 15,
    },
    titulo2: {
      color: "#464646",
      fontWeight: "bold",
      lineHeight:42,
      fontSize: 30,
    },
    titulo3:{
      lineHeight:26,
      fontSize: 16,
      fontWeight:'bold',
      color: 'green'
    },
    descricao:{
      color: '#a3a3a3',
      fontSize:16,
      lineHeight: 26,
      marginTop:15
    },
    preco: {
      color: '#2a9f85',
      fontWeight:'bold',
      fontSize:26,
      lineHeight:42,
      marginTop:8
    },
    imagemFazenda: {
      width: 32,
      height: 32,
      marginRight: 12
    },
    conteinerJenny:{
      flexDirection: "row",
      paddingVertical:12
    }
  });