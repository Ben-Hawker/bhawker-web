import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {Header} from "~/components/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-lime-50 bg-opacity-10">
        <Header />
        <div className="min-h-screen">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <p>© 2025 Ben Hawker. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default function App() {
  return <Outlet />;
}
