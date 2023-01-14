import Vercel from "./components/organisms/Vercel";
import Layout from "./components/layouts/Layout";
import Header from "./components/organisms/Header";
import Main from "./components/layouts/Main";

export default function App() {
  return (
    <div>
      <Vercel />
      <Layout>
        <Header />
        <Main />
      </Layout>
    </div>
  );
}
