"use client";
import { FunctionComponent } from "react";
import Link from "next/link";
import { Rss } from "lucide-react";
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Logo from "./Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0d1117] via-[#1a1f26] to-[#0d1117] w-full text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <div className="flex items-center space-x-4">
              <div className='mr-4'><Logo /></div>
              <h1 className="text-2xl font-bold text-white ml-4">About GenTuber</h1>
            </div>
          <p className="text-sm mt-2 opacity-75">
            Empowering YouTubers with AI-driven tools for video analytics, script generation, and more. Join us on a journey to make YouTube content creation smarter and more efficient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
               <a href="https://gentuber.com/" target="_blank" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="mailto:support@gentuber.com" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
             <a href="https://gentuber.com/policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://dev.gentuber.com/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-lg font-bold">Stay Connected</h4>
          <div className="flex items-center space-x-4 mt-4">
            <Link
                    href="https://x.com/gen_tuber"
                    title="GenTuber Twitter"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <FaXTwitter /> 
                  </Link>
            <Link href="https://www.youtube.com/@GenTuber-k8i" title="GenTuber youtuber"
                    className="flex items-center space-x-2 hover:text-gray-400">
              <AiFillYoutube size={30} className="hover:opacity-75" />
            </Link>
             <Link
                    href="https://www.linkedin.com/company/105065012"
                    title="GenTuber LinkedIn"
                    className="flex items-center space-x-2 hover:text-gray-400"
                  >
                    <FaLinkedin /> 
                  </Link>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-semibold">Subscribe to Our Newsletter</h5>
            <form className="flex mt-2">
             
               <input
          type="email"
          placeholder="Your Email"
          className="flex-grow px-4 py-2 bg-[#1a1a1a] border border-[rgba(255,255,255,0.2)]  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#b641ff]"
        />
              <button className="p-2 rounded-r bg-primary text-gray-700 hover:bg-primary-dark">
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
