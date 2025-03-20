import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { getBlogArticles } from "~/components/api/BlogArticles.server";

export const meta = () => {
  return [
    { title: "Ben Hawker | bhawker.co.uk" },
    {
      name: "description",
      content:
        "I am a web developer and designer who builds things that make a difference.",
    },
  ];
};

export async function loader() {
  const thingIDo = [
    "I build.",
    "I write code.",
    "I design.",
    "I make things work.",
    "I solve problems.",
    "I strategise.",
    "I innovate.",
    "I develop.",
    "I engineer.",
    "I learn.",
    "I help.",
    "I create.",
    "I collaborate.",
    "I am a web developer and designer who builds things that make a difference.",
  ];

  const { blogArticles } = await getBlogArticles();

  return {
    thingIDo,
    blogArticles,
  };
}

export default function Index() {
  const { thingIDo } = useLoaderData();
  return (
    <div className="w-full flex flex-col gap-0 items-center justify-center h-full">
      <PageBodyContainer>
        <div className="p-4 py-12 flex flex-col justify-center gap-8 w-full md:min-h-[600px]  h-max items-start">
          <ScrollingWordsStacked words={thingIDo} />
          <Link
            to={"/contact"}
            className={
              "  bg-orange-600 px-4 py-2 text-lime-50 text-3xl font-bold uppercase border border-lime-50 rounded-full shadow-xl hover:bg-lime-50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
            }
          >
            Contact me
          </Link>
        </div>
      </PageBodyContainer>
      <div className="py-12 flex flex-col gap-4 items-center justify-center bg-lime-50 bg-opacity-10 w-full border-t border-t-orange-600">
        <h2 className=" text-5xl font-bold text-left text-black mx-4">
          Ramblings of late.
        </h2>
        <PageBodyContainer>
          <BlogArticles />
        </PageBodyContainer>
      </div>
      <div className="py-12 flex flex-col gap-4 items-center justify-center bg-black w-full border-t border-t-orange-600">
        <h2 className=" text-5xl font-bold text-left text-lime-50">
          About me.
        </h2>
        <PageBodyContainer>
          <WelcomeSection />
        </PageBodyContainer>
      </div>
    </div>
  );
}

export function PageBodyContainer({ children }) {
  return (
    <div className=" w-full max-w-7xl  flex justify-between items-center ">
      {children}
    </div>
  );
}

export function WelcomeSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 md:py-12">
      <div className="flex flex-col gap-8 items-center justify-center ">
        <div className="grid  md:grid-cols-2 gap-4 w-full h-full items-start justify-center align-middle">
          <img
            src="/ben2021.png"
            alt="Ben Hawker"
            width={400}
            height={400}
            className="rounded-md  object-cover shadow-lg w-full"
          />
          <div className="prose">
            <h2 className="text-4xl font-bold text-lime-50 ">Hi, I'm Ben.</h2>
            <p className="text-lg text-lime-50">
              I started building websites back in 2012 and I haven't stopped
              since.
            </p>
            <p className="text-lg text-lime-50">
              It all began back in Bath, England, where I was born and raised.
              At school, I was the kid who spent more time tinkering with Flash,
              Dreamweaver and Visual Basic than studying. I was always
              fascinated by how things worked, and I loved the idea of creating
              something from nothing. I remember spending hours experimenting
              with different programming languages and tools, trying to figure
              out how to make my ideas come to life.
            </p>
            <p className="text-lg text-lime-50">
              I went on to complete my bachelors degree in Computer Science at
              the University of Bath. The highlight of my studies was building
              EyeSynth, a musical instrument designed using eye gaze tracking
              helping people with motorneurone disease play electronic music.
              This project helped me understand the importance of user-centred
              design and how technology can be used to improve people's lives.
            </p>
            <p className="text-lg text-lime-50">
              Soon after graduating, I started building websites for friends and
              family, where I moved on to building websites for local businesses
              in Bath. I quickly realised that I had a passion for creating
              beautiful, functional websites that not only looked great but also
              provided a seamless user experience.
            </p>
            <p className="text-lg text-lime-50">
              Since then, I've had the opportunity to work on a wide range of
              projects, from e-commerce websites to interactive web
              applications, with a range of clients. I love the challenge of
              taking a vision and turning it into a reality, and I'm always
              looking for new ways to push the boundaries of what's possible on
              the web, whilst also keeping up with the latest trends and
              technologies.
            </p>
            <p className="text-lg text-lime-50">
              Since 2021, I've been working full time as the Head of Technology
              at Field Doctor, where I was part of the founding team.
            </p>
            <p className="text-xl text-lime-50">~ Ben</p>
          </div>
        </div>

        <div className=" hidden bg-white p-8 rounded-lg shadow-lg max-w-lg prose">
          <h2 className="text-4xl font-bold text-black">Hi, I'm Ben.</h2>
          <p className="text-lg text-black">
            I started building websites back in 2012 and I haven't stopped
            since.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ScrollingWordsStacked({ words }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [wordsToDisplay, setWordsToDisplay] = useState(
    words.sort((a, b) => {
      //sort in order of length
      return a.length - b.length;
    })
  );
  useEffect(() => {
    if (activeIndex < wordsToDisplay.length - 1) {
      const timeout = setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, wordsToDisplay.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === wordsToDisplay.length - 1) {
      /*setWordsToDisplay([
        ...wordsToDisplay,
        ...words.sort((a, b) => {
          //sort in order of length
          return a.length - b.length;
        }),
      ]);*/
    }
  }, [activeIndex]);

  //add an inner gradient to the top of the container

  //add a css typing effect to the words

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-fit ">
      <div
        ref={containerRef}
        className="overflow-hidden scrollbar-hide flex flex-col items-center w-full"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex flex-row  gap-x-4 gap-y-2 flex-wrap items-start   w-full    ">
          {wordsToDisplay.slice(0, activeIndex + 1).map((skill, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ease-in-out text-left  ${
                index === activeIndex
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {index == wordsToDisplay.length - 1 ? <br /> : null}
              <div
                className={`text-4xl md:text-5xl font-bold   ${
                  index < wordsToDisplay.length * 0.9
                    ? " text-lime-500"
                    : "   text-black hover:text-lime-900"
                }`}
              >
                {skill}
              </div>
            </div>
          ))}
          {wordsToDisplay.slice(activeIndex + 1).map((skill, index, array) => {
            return (
              <div
                key={index}
                className={`transform transition-all duration-500 ease-in-out text-left opacity-30`}
              >
                {skill?.includes("developer and des") ? <br /> : null}
                <div
                  className={`text-4xl md:text-5xl font-bold rounded-lg   ${" text-neutral-200"}`}
                >
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function BlogArticles() {
  const { blogArticles } = useLoaderData();
  console.log(blogArticles);
  const publishedDateToUKDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-GB", options);
  };
  return (
    <div className="container mx-auto p-4">
      <ul className="flex flex-row items-center gap-4">
        {blogArticles?.map((article) => (
          <li
            key={article.id}
            className="w-full max-w-md bg-black border rounded-sm shadow-xl border-orange-600 mb-2"
          >
            <Link
              to={`/articles/${article.slug}`}
              className=" hover:underline decoration-orange-600 "
            >
              <img
                src={article.featuredImage.url}
                alt={article.title}
                className="rounded-none object-cover w-full max-h-64"
                width={400}
                height={300}
              />
              <div className=" p-12 text-lime-50 flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-lime-500">
                  {article.title}
                </h2>
                <p className="text-sm">
                  {publishedDateToUKDate(article.publishedAt)}
                </p>
                <p className="">{article.subtitle}</p>
                <span className="underline">read more</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
