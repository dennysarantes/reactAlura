import { StyleSheet, Text } from "react-native";

export function TextoFontBalsamiq({valor, estiloHerdado}) {
        return <Text style={definirEstilos(estiloHerdado)?.estilos}>{valor}</Text>
}

const definirEstilos = (estiloHerdado) => {
        let copyEstilo = estiloHerdado ? JSON.parse(JSON.stringify(estiloHerdado)) : null;
        const ehBold = copyEstilo?.fontWeight == "bold";
        copyEstilo && (delete copyEstilo['fontWeight']);
        
        return StyleSheet.create({
                estilos :{ 
                        fontFamily: ehBold ? "BalsamiqBold" : "BalsamiqRegular",
                        fontWeight:'normal',
                        ...copyEstilo

                }
        })
}
