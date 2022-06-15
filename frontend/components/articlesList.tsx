import React from "react";
import Card from "./articleCard";

const Articles = ({ articles }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-40 mt-16 px-4">
      {articles &&
        articles.map((article, index) => (
          <Card article={article} key={index} />
        ))}
    </div>
  );
};

export default Articles;
