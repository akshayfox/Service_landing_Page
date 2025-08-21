"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  <Image
                    src="/logo.svg"
                    alt={`${APP_NAME} logo`}
                    width={130}
                    height={40}
                    priority
                    className="h-9 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Home</Link>
                <Link href="/#features" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Features</Link>
                <Link href="/#pricing" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Pricing</Link>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">About</Link>
                <Link href="/#contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Contact</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
              <a href="https://service-mgmt.web.app/" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500">
              <a href="https://service-mgmt.web.app/" target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Home</Link>
            <Link href="/#features" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Features</Link>
            <Link href="/#testimonials" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Testimonials</Link>
            <Link href="/#pricing" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Pricing</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">About</Link>
            <Link href="/#contact" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Contact</Link>
            <div className="pt-4 pb-3 border-t border-slate-200 flex flex-col space-y-2">
              <Button variant="outline" asChild className="mx-3 focus:ring-2 focus:ring-blue-500">
                <a href="https://service-mgmt.web.app/">Login</a>
              </Button>
              <Button asChild className="mx-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                <a href="https://service-mgmt.web.app/" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
