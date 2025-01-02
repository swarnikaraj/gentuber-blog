"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { Rss } from "lucide-react";
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-bold">About GenTuber</h4>
          <p className="text-sm mt-2 opacity-75">
            Empowering YouTubers with AI-driven tools for video analytics, script generation, and more. Join us on a journey to make YouTube content creation smarter and more efficient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-lg font-bold">Stay Connected</h4>
          <div className="flex items-center space-x-4 mt-4">
            <Link href="https://twitter.com">
              <AiFillTwitterCircle size={30} className="hover:opacity-75" />
            </Link>
            <Link href="https://youtube.com">
              <AiFillYoutube size={30} className="hover:opacity-75" />
            </Link>
            <Link href="https://instagram.com">
              <AiFillInstagram size={30} className="hover:opacity-75" />
            </Link>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-semibold">Subscribe to Our Newsletter</h5>
            <form className="flex mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="p-2 rounded-r bg-primary text-white hover:bg-primary-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs opacity-75">
        <p>© GenTuber 2025 | Designed with ❤️ for Creators</p>
        <p>Helping YouTubers Grow Smarter</p>
      </div>
    </footer>
  );
};
