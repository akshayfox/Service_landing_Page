"use client";

import { APP_NAME } from "@/lib/constants";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">{APP_NAME}</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Complete service management platform trusted by service providers worldwide.
              Simplify your operations and grow your business with confidence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">X</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2025 {APP_NAME}. All rights reserved. Trusted by service providers and enterprises worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
