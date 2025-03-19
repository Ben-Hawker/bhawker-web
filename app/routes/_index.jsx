import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

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

  return {
    thingIDo,
  };
}

export default function Index() {
  const { thingIDo } = useLoaderData();
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center ">
      <PageBodyContainer>
        <div className="p-4 grid md:grid-cols-1 justify-center gap-8 w-full">
          <ScrollingWordsStacked words={thingIDo} />
        </div>
      </PageBodyContainer>
      <div className="flex flex-col items-center justify-center bg-orange-200 w-full p-4">
        <PageBodyContainer>
          <div className="flex flex-col items-start justify-start  w-full p-2">
            <h2 className="text-3xl font-semibold mb-4 text-black ">
              Want to chat?
            </h2>
            <Link
              to={"/contact"}
              className={
                "  bg-black px-4 py-2 text-lime-50 text-3xl font-bold uppercase border border-lime-50 rounded-full shadow-xl hover:bg-lime-50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
              }
            >
              Contact me
            </Link>
          </div>
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

function ScrollingWordsStacked({ words }) {
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
          {wordsToDisplay.slice(activeIndex + 1).map((skill, index) => {
            return (
              <div
                key={index}
                className={`transform transition-all duration-500 ease-in-out text-left opacity-30`}
              >
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
