
import TopoCesta from "./topo";
import DetalhesCesta from "./detalhes";
import { Pressable, View, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { Itens } from "./itens";
import mockCesta from "../mock/mock-arquivo";
import { TextoFontBalsamiq } from "../telas/componentes-shared/texto-balsamiq-bold";

export function Cesta({mock}) {

  comprarTeste = () => {
    alert('Comprar...')
  }
  const objItens = mockCesta.itens;

  const getDATA = () => {
    data = [];
    let DATA = [{title: objItens.titulo, data: []}];
    objItens.lista.forEach((i) => {
      this.data.push(i)
    });
    DATA[0].data = [...this.data];
    return DATA;
  }
  

  return (
    <>
      <SafeAreaView style={estilo.containerItem}>
         <SectionList
            scrollToOverflowEnabled={true}
            sections={getDATA()}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section: {title}}) => (
                <TextoFontBalsamiq valor={title} estiloHerdado={estilo.titulo} ></TextoFontBalsamiq>
              )}
            renderItem={({item}) => Itens({item})}
            ListHeaderComponent={() => {
              return (
                <>
                    <TopoCesta img={mock?.imgTopo} titulo={mock.topo.titulo} ></TopoCesta>
                    <DetalhesCesta 
                        img={mock.detalhes.logoFazenda}
                        nomeFazenda={mock.detalhes.nomeFazenda}
                        textoTopo={mock.detalhes.nome}
                        textoDestaque={mock.detalhes.descricao}
                        valor={mock.detalhes.preco}
                        >
                    </DetalhesCesta>

                  <View style={estilo.container}>
                    <Pressable 
                        style={estilo.botaoComprar}
                        onPress={comprarTeste}
                        android_ripple={{color: 'black', borderless: false}}>
                      <Text style={estilo.textoBotao}>COMPRAR</Text>
                    </Pressable>
                  </View> 
                </>
              )
            }}
         >
         </SectionList>
       </SafeAreaView>
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
      //marginTop:-30,
      alignItems:"center"
    },
    textoBotao: {
      color:'white',
      fontWeight:"bold",
      lineHeight: 16
    },
    containerItem: {
      //flex: 1,
      //paddingTop: StatusBar.currentHeight,
      //marginHorizontal: 16,
    },
    titulo:{
        padding: 15,
        fontWeight:"bold"
    },
})


