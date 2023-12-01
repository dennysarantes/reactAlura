import { Text, Image, StyleSheet, Dimensions, View } from "react-native";

export default function TopoCesta({img, titulo}) {

    return (
        <>
          <Image source={img} style={estilos.topo}></Image>
          <Text style={estilos.titulo}>{titulo}</Text>
        </>)
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
      }
})