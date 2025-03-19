import { Link } from "@remix-run/react";
import { PageBodyContainer } from "./_index";

export async function loader() {
  return null;
}

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center ">
      <PageBodyContainer>
        <div className="p-4 flex flex-col justify-start items-start gap-8 w-full">
          <h1 className="text-4xl font-bold mb-4  text-black w-full text-left">
            Contact me.
          </h1>
          <div className={"flex flex-col gap-4 items-start justify-center"}>
            <p className="text-left w-full text-lg">
              If you want to get in touch, feel free to reach out via email.
            </p>
            <Link
              to={"mailto:ben@bhawker.co.uk"}
              className={
                " bg-black px-4 py-2 text-lime-50 text-3xl font-bold uppercase border border-lime-50 rounded-full shadow-xl hover:bg-lime-50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
              }
            >
              send me an email
            </Link>
          </div>
        </div>
      </PageBodyContainer>
    </div>
  );
}
