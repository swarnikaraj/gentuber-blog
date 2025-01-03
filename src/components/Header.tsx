"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import Logo from "./Logo";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Features", href: "https://gentuber.com/#products" ,openInNewTab:true},
  { name: "Pricing", href: "https://gentuber.com/#pricing",openInNewTab:true },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "mailto:team-gentuber@gentuber.com" ,openInNewTab:true},
];
 
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav >
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-400 transition-colors",
                pathname === item.href && "font-semibold text-gray-600"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 hover:text-red-600 transition duration-300",
                      pathname === item.href && "font-semibold text-red-600"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const style = {
    darkbg: {
      background:
        'linear-gradient(#0e1011, #09090a) padding-box, linear-gradient(to bottom, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.08)) border-box',
      borderBottom: '1px solid rgb(46, 46, 46)',
    },
  };
  return (
    <header style={style.darkbg} 
      className="text-white fixed z-10 w-full top-0 left-0 right-0 flex justify-between items-center px-6 py-3 shadow-lg">
      <Link href="/">
        <div className="flex items-center gap-4 cursor-pointer">
            <Logo />
            <h1 className="text-3xl ml-4 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-gray-300 bg-clip-text text-transparent">
              GenTuber
            </h1>
          </div>
      </Link>
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search blogs, tools..."
          className="flex-grow px-4 py-2 bg-[#1a1a1a] border border-[rgba(255,255,255,0.2)]  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#b641ff]"
        />
      </div>
      <Navigation />
      <div className="relative">
        <a href="https://gentuber.com/login" target="_blank" rel="noopener noreferrer">
          <div className="relative z-10 text-white font-bold py-2 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg shadow-lg hover:from-blue-500 hover:to-red-600 transition-all">
           Get Started
          </div>
        </a>
        <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border bg-clip-border" />
      </div>
    </header>
  );
};
