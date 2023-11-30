import { Text, Image, StyleSheet, Dimensions, View } from "react-native";
import topo from "../../assets/topo.png";
import jenny from "../../assets/logo.png"

export function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo}></Image>
      <Text style={estilos.titulo}>Detalhe da cesta</Text>

      <View style={estilos.containerDetalhe}>
        <Text style={estilos.titulo2}>Cesta de verduras</Text>
        <View style={estilos.conteinerJenny}>
            <Image source={jenny} style={estilos.imagemFazenda}></Image>
            <Text style={estilos.titulo3}>Jenny Jack farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta de produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
    marginTop: "20%",
  },
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
