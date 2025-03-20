import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const hygraphUrl =
    "https://eu-west-2.cdn.hygraph.com/content/cm8gmkmx703jl07uy9v4n4xvn/master";

  const query = `{
      blogArticles {
        slug
        stage
        publishedAt
        updatedAt
        createdAt
        featuredImage {
          url
        }
        id
        title
        subtitle
        content {
          markdown
          html
        }
      }
    }`;

  const res = await fetch(hygraphUrl, {
    method: "POST",
    body: JSON.stringify({ query }),
  }).then((res) => {
    if (res.status === 401) {
      throw new Error("Unauthorized");
    }
    return res.json();
  });

  let blogArticles = res?.data?.blogArticles;

  const { slug } = params;
  const blogArticle = blogArticles?.find((article) => article.slug === slug);
  if (!blogArticle) {
    throw new Response("Blog article not found", {
      status: 404,
    });
  }
  return {
    blogArticle,
  };
}

export function Breadcrumbs() {
  return (
    <>
      <div className="py-4">
        <nav className="flex items-center gap-2">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
          <span className="text-gray-500">/</span>
          <a href="/articles" className="text-blue-500 hover:underline">
            Articles
          </a>
          <span className="text-gray-500">/</span>
          <span className="text-gray-500">Blog Article</span>
        </nav>
      </div>
    </>
  );
}
export default function BlogArticle() {
  const { blogArticle } = useLoaderData();
  return (
    <div className="flex max-w-[1660px] items-center justify-center m-auto p-4 py-12">
      <div className="flex flex-col gap-0 max-w-prose text-black">
        <Breadcrumbs />
        <div className="flex flex-col gap-4 max-w-prose bg-black p-4 ">
          <h1 className="text-4xl font-bold text-lime-500">
            {blogArticle.title}
          </h1>
          <p className=" text-lime-50">{blogArticle.subtitle}</p>
        </div>
        <img
          src={blogArticle.featuredImage.url}
          alt={blogArticle.title}
          className="w-full h-auto mb-8"
        />
        <div
          dangerouslySetInnerHTML={{ __html: blogArticle.content.html }}
          className="prose"
        />
      </div>
    </div>
  );
}
