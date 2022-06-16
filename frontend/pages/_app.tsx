import { Layout } from "../components/layout";
import "../styles/globals.css";
import "../styles/article-categories.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
