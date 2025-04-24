import Navegador from "../components/Navegador";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />{" "}
      <Navegador texto="Navegação #01" destino="/navegacao" cor="#956d32" />
      <Navegador
        texto="Navegação #02"
        destino="/cliente/sp2/123"
        cor="#489b18"
      />
      <Navegador
        texto="Componente com Estado"
        destino="/estado"
        cor="#dd2222"
      />
      <Navegador
        texto="Integração com API"
        destino="/integracao_1"
        cor="#8eafd4ec"
      />
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#8c114a" />
    </div>
  );
}
