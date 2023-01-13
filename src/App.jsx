import Vercel from "./components/Vercel";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Vercel />
      <Layout>
        <Header />
        <Main />
      </Layout>
    </>
  );
}
