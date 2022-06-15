import ArticlesList from "../components/articlesList";
import Seo from "../components/seo";

const Blog = () => {
  const seo = {
    metaTitle: "Blog",
    metaDescription: `Blog with posts to help next x strapi`,
    shareImage: "imageUrl",
  };
  return (
    <div>
      <div className="bg-[url('/inkstain.svg')] lg:w-[100vw] w-[calc(100vw-18px)] h-[calc(100vh-80px)] absolute left-0 top-[73px] opacity-10" />
      <Seo seo={seo} />
      <div className="relative">
        <div className="text-center pt-16">
          <h2 className="text-primary font-extrabold tracking-wide uppercase">
            A collection of guides for using Next JS with Strapi
          </h2>
        </div>
        <ArticlesList
          articles={[
            {
              attributes: {
                slug: 1,
                title: "This is title",
                description:
                  "A little bit about this lovely description which will preview the article break here sfkjgndfkj fdglkdfmlk fdsgkmflkdm",
                image: "fds",
                category: { data: { attributes: { name: "Category type" } } },
              },
            },
            {
              attributes: {
                slug: 1,
                title: "This is title",
                description:
                  "A little bit about this lovely description which will preview the article break here sfkjgndfkj fdglkdfmlk fdsgkmflkdm",
                image: "fds",
                category: { data: { attributes: { name: "Category type" } } },
              },
            },
            {
              attributes: {
                slug: 1,
                title: "This is title",
                description:
                  "A little bit about this lovely description which will preview the article break here sfkjgndfkj fdglkdfmlk fdsgkmflkdm",
                image: "fds",
                category: { data: { attributes: { name: "Category type" } } },
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Blog;
