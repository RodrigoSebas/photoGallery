import {
  Disclosure,
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-blue-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only"> Abrir Menu</span>
                  {open ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </DisclosureButton>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-200 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-200 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Login
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
