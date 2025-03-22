import { useLoaderData } from "@remix-run/react";
import { getBlogArticles } from "../components/api/BlogArticles.server";
import { BlogArticles, PageBodyContainer } from "./_index";
export async function loader({ params }) {
  const { blogArticles } = await getBlogArticles();
  return {
    blogArticles,
  };
}

export default function Articles() {
  return (
    <div className="flex flex-col max-w-7xl  items-center justify-center m-auto  p-4 py-12">
      <div className="flex flex-col gap-4 items-center justify-center  bg-opacity-10 w-full max-w-7xl">
        <div className="w-full ">
          <div className="py-4">
            <nav className="flex items-center gap-2">
              <a href="/" className="text-blue-500 hover:underline">
                Home
              </a>
              <span className="text-gray-500">/</span>
              <div className="text-gray-500">Articles</div>
            </nav>
          </div>
        </div>
        <h2 className=" text-5xl font-bold text-left text-black mx-4">
          Articles
        </h2>
        <PageBodyContainer>
          <BlogArticles />
        </PageBodyContainer>
      </div>
    </div>
  );
}
