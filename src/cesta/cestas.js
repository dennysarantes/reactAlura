import topo from "../../assets/topo.png";
import jenny from "../../assets/logo.png";

import TopoCesta from "./topo";
import DetalhesCesta from "./detalhes";
import { Button, Pressable, View, Text, StyleSheet, ScrollView } from "react-native";
import { Itens } from "./itens";

export function Cesta({mock}) {

  comprarTeste = () => {
    alert('Comprar...')
  }

  return (
    <>
    <ScrollView accessibilityElementsHidden={true}>
      <TopoCesta img={mock?.imgTopo} titulo={mock.topo.titulo} ></TopoCesta>
      <DetalhesCesta 
          img={mock.detalhes.logoFazenda}
          nomeFazenda={mock.detalhes.nomeFazenda}
          textoTopo={mock.detalhes.nome}
          textoDestaque={mock.detalhes.descricao}
          valor={mock.detalhes.preco}
          >
      </DetalhesCesta>
      
      <Itens ></Itens>  
      <View style={estilo.container}>
        <Pressable 
            style={estilo.botaoComprar}
            onPress={comprarTeste}
            android_ripple={{color: 'black', borderless: false}}>
          <Text style={estilo.textoBotao}>COMPRAR</Text>
        </Pressable>
      </View> 
      </ScrollView>
    </>
  );
}

const estilo = StyleSheet.create({
    container: {
      padding: 5,
      alignItems:"center",
      justifyContent:"center",
      
    },
    botaoComprar:{
      width:"75%",
      backgroundColor:"#219f85",
      paddingVertical: 16,
      borderRadius: 6,
      marginBottom: 20,
      marginTop:-30,
      alignItems:"center"
    },
    textoBotao: {
      color:'white',
      fontWeight:"bold",
      lineHeight: 16
    }
})


