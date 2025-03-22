import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const hygraphUrl =
    "https://eu-west-2.cdn.hygraph.com/content/cm8gmkmx703jl07uy9v4n4xvn/master";

  const query = `{
      blogArticles {
        slug
        stage
        subtitle
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
  const { blogArticle } = useLoaderData();
  const { title } = blogArticle;
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
          <span className="text-gray-500">{title}</span>
        </nav>
      </div>
    </>
  );
}
export default function BlogArticle() {
  const { blogArticle } = useLoaderData();
  return (
    <div className="flex flex-col max-w-7xl  items-center justify-center m-auto p-4 py-12">
      <div className="w-full">
        <Breadcrumbs />
      </div>

      <div className="flex flex-col justify-center items-center gap-0 text-black max-w-prose">
        <div className="flex flex-col gap-4  w-full pt-8 pb-8  m-auto  border-b border-orange-600 mb-8">
          <h1 className="text-5xl font-bold text-black pb-8 w-full border-b border-orange-600 mb-4">
            {blogArticle.title}
          </h1>
          <p className="text-black">{blogArticle.subtitle}</p>
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
