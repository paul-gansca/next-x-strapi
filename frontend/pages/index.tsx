import Search from "../components/search";
import Seo from "../components/seo";
import Tile from "../components/tile";
import { fetchAPI } from "../lib/api";

const Home = ({ teams, homepage }) => {
  return (
    <div>
      <Seo seo={homepage.attributes.seo} />
      <Search />
      {teams.map((t) => (
        <Tile key={t.id} team={{ ...t.attributes }} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  // Run API calls in parallel
  const [teamsRes, homepageRes] = await Promise.all([
    fetchAPI("/teams", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);
  return {
    props: { teams: teamsRes.data, homepage: homepageRes.data },
  };
};

export default Home;
