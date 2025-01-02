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

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-red-600 transition duration-300",
                pathname === item.href && "font-semibold text-red-600"
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
  return (
    <header className="flex items-center justify-between py-6 px-4 md:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight hover:text-red-600 transition duration-300">
          GenTuber
        </h1>
        <p className="text-sm opacity-80 mt-1">AI-Driven Tools for YouTubers</p>
      </Link>
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search blogs, tools..."
          className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>
      <Navigation />
      <div className="hidden md:flex ml-4">
        <Link
          href="/signup"
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};
