import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center shadow-sm sticky top-0  bg-lime-50  z-10">
      <div className=" w-full max-w-7xl  flex justify-between items-center p-4">
        <a href="/" className="hover:text-gray-400">
          <div className="text-4xl text-orange-600 font-bold">Ben Hawker.</div>
        </a>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
