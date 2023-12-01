import topo from "../../assets/topo.png";
import jenny from "../../assets/logo.png";

import TopoCesta from "./topo";
import DetalhesCesta from "./detalhes";

export function Cesta({mock}) {

  return (
    <>
      <TopoCesta img={mock?.imgTopo} titulo={mock.topo.titulo} ></TopoCesta>
      <DetalhesCesta 
          img={mock.detalhes.logoFazenda}
          nomeFazenda={mock.detalhes.nomeFazenda}
          textoDestaque={mock.detalhes.descricao}
          valor={mock.detalhes.preco}
          >
      </DetalhesCesta>
    </>
  );
}

const textoDestaque = 'Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha'


