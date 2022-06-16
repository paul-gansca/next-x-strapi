import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { getStrapiMedia } from "../lib/media";

const ArticleCard = ({ article }) => {
  const { category, title, description, slug, locale, author } =
    article.attributes;
  return (
    <div className="max-h-[300px] h-[300px] md:even:pt-8">
      <span className="inline-block py-2 px-2 rounded bg-secondary-lightest text-secondary text-xs font-medium tracking-widest">
        {category.data.attributes.name}
      </span>
      {/* <img
        alt={image.data.attributes.alternativeText}
        src={getStrapiMedia(delve(image, "data.attributes.url"))}
        className="max-h-48 w-full py-3 object-cover"
      /> */}
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{description}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full link-container">
        <Link href={`/blog/${slug}?lang=${locale}`}>
          <a className="group text-secondary-darker inline-flex items-center hover:text-orange-500 hover:cursor-pointer">
            Learn More
            <svg
              className="w-4 h-4 ml-2 duration-300 transform group-hover:translate-x-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
