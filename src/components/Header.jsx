import React from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-lg bg-linear-to-br from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-lg bg-[#0a0e27] flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
            </div>
            <div className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-pink-500 font-bold text-2xl tracking-tight">
              Demo
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    Who we are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg shadow-xl p-6 w-56">
                      <ListItem href="/about-us" title="About Us">
                        Learn about our mission and team.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    What we do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg shadow-xl p-6 w-56">
                      <ListItem href="/services" title="Services">
                        What we do and how we help organisations.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      to="/blogs"
                      className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      Blogs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/contact-us">
              <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-medium">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block px-4 py-3 hover:bg-linear-to-r hover:from-cyan-100 hover:to-pink-100 rounded-md text-gray-800 no-underline transition-all"
        >
          <div className="text-base leading-none font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-pink-600">
            {title}
          </div>
          <p className="text-gray-600 line-clamp-2 text-sm leading-snug mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
