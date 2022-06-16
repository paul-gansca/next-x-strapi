import React from "react";
import Card from "./articleCard";

const Articles = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-40 mt-16 px-4">
      {articles &&
        articles.map((article, index) => (
          <Card article={article} key={index} />
        ))}
    </div>
  );
};

export default Articles;
