export async function getBlogArticles() {
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

  return {
    blogArticles: res?.data?.blogArticles,
  };
}
