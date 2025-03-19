import { Form, Link, useLoaderData } from "@remix-run/react";
import { PageBodyContainer, ScrollingWordsStacked } from "./_index";

export async function loader() {
  return null;
}

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="flex flex-col justify-start items-start gap-8 w-full">
        <div className="flex flex-col items-center justify-center bg-orange-200 w-full p-4">
          <PageBodyContainer>
            <div className="flex flex-col items-start justify-start  w-full p-2 gap-4">
              <h1 className="text-4xl font-bold  text-black w-full text-left">
                Contact me.
              </h1>
              <p className="text-left w-full text-lg">
                If you want to get in touch, i'd love to hear from you.
              </p>
              {/*<Form className="w-full flex flex-col gap-4">
                <textarea
                  className=" p-2 w-full bg-white rounded-sm"
                  placeholder="Your message..."
                ></textarea>
              </Form>*/}
              <Link
                to={"mailto:ben@bhawker.co.uk"}
                className={
                  " bg-black px-4 py-2 text-lime-50 text-3xl font-bold uppercase border border-lime-50 rounded-full shadow-xl hover:bg-lime-50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
                }
              >
                send me an email
              </Link>
            </div>
          </PageBodyContainer>
        </div>
      </div>
    </div>
  );
}
