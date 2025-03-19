import { Link } from "@remix-run/react";
import { PageBodyContainer } from "./_index";

export async function loader() {
  return null;
}

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center ">
      <PageBodyContainer>
        <div className="p-4 grid justify-center gap-8 w-full">
          <h1 className="text-4xl font-bold mb-4">Contact me.</h1>
          <div className={"flex flex-col items-center justify-center"}>
            Send me an email at{" "}
            <Link to={"mailto:ben@bhawker.co.uk"} className="text-blue-500">
              ben@bhawker.co.uk
            </Link>
          </div>
        </div>
      </PageBodyContainer>
    </div>
  );
}
