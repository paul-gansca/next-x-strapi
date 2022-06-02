import { useState } from "react";
import Search from "../components/search";
import Seo from "../components/seo";
import Tile from "../components/tile";
import { fetchAPI } from "../lib/api";

const Home = ({ teams, homepage }) => {
  const [searchVal, setSearchVal] = useState("");
  const onSearch = (e) => setSearchVal(e.target.value);

  return (
    <div>
      <Seo seo={homepage.attributes.seo} />
      <Search onSearch={onSearch} />
      {teams
        .filter((t) => t.attributes.name.indexOf(searchVal) > -1)
        .map((t) => (
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
