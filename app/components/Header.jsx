import { Link, NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center shadow-sm border-b border-b-orange-600 sticky top-0  bg-lime-50  z-10">
      <div className=" w-full max-w-7xl  flex justify-between items-center p-4">
        <a href="/" className="hover:text-gray-400">
          <div className="text-2xl md:text-4xl text-orange-600 font-bold">
            Ben Hawker.
          </div>
        </a>
        <nav className="flex space-x-4 flex-row gap-2 md:gap-4 items-center">
          <Link to="/" className="text-black hover:text-gray-400 font-bold">
            Home
          </Link>
          <Link
            to="/articles"
            className="text-black hover:text-gray-400 font-bold "
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-gray-400 font-bold "
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className={
              " hidden md:flex bg-black px-4 py-2 text-lime-50  font-bold uppercase border border-lime-50 rounded-full shadow-xl hover:bg-lime-50 hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out "
            }
          >
            get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
