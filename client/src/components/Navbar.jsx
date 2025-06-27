import { Link, useResolvedPath } from "react-router-dom";
import {ShoppingCartIcon, StoreIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useProductStore } from "../store/useProductStore";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";
  const { products } = useProductStore();

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-6 min-h-[4.5rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link
              to="/"
              className="hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary drop-shadow mr-1" />
                <span className="font-extrabold font-mono tracking-widest text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-800 drop-shadow">
                  PRODUCT STORE
                </span>
              </div>
            </Link>
          </div>
          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 pl-4 border-l border-base-content/10">
            <ThemeSelector />
            {isHomePage && (
              <div className="indicator">
                <div
                  className="p-2 rounded-full bg-base-200/80 hover:bg-primary/20 transition-all shadow cursor-pointer"
                  aria-label="Shopping cart"
                  tabIndex={0}
                >
                  <StoreIcon className="size-7"/>
                  <span className="badge badge-sm badge-primary indicator-item animate-pulse">
                    {products.length}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;