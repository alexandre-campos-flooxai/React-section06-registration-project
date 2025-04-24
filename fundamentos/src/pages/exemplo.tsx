import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";
export default function Exemplo() {
  return (
    <Layout title="Usando componente">
      <Cabecalho title="Aprendendo Next.js" />
      <Cabecalho title="Vamos estudar esse framework" />
    </Layout>
  );
}
