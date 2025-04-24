import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";
export default function Estiloso() {
  return (
    <Layout title="Exemplo css modularizado">
      <div className={styles.roxo}>
        <h1>Usando css Módules</h1>
      </div>
    </Layout>
  );
}
