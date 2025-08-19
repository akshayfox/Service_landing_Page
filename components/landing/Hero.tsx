"use client";

import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-8" delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
              New: Workflow automation just got smarter
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              End‑to‑End <span className="text-blue-600">Service Management</span> Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Manage work orders, teams, SLAs, products, and billing in one place. Automate routine tasks and deliver faster, more reliable service.
            </p>

            <ul className="space-y-3">
              {[
                "Create, assign, and track work orders end‑to‑end",
                "Meet SLAs with real‑time status and alerts",
                "First‑time‑fix improvements with product & asset history",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-base font-medium rounded-lg focus:ring-2 focus:ring-blue-500">
                Try for Free
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-base font-medium rounded-lg focus:ring-2 focus:ring-blue-500">
                Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                SOC2-ready security
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <p>No credit card required</p>
              <div className="h-4 w-px bg-gray-200" />
              <p>14-day free trial</p>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-green-100 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-yellow-100 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-pink-100 border-2 border-white"></div>
              </div>
              <div className="text-sm text-gray-600">
                <p>
                  Over <span className="font-semibold">20K+</span> Reviews
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-1">5.0</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">Trusted by modern teams</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center opacity-80">
                <div className="h-6 bg-gray-100 rounded" />
                <div className="h-6 bg-gray-100 rounded" />
                <div className="h-6 bg-gray-100 rounded" />
                <div className="hidden sm:block h-6 bg-gray-100 rounded" />
                <div className="hidden sm:block h-6 bg-gray-100 rounded" />
              </div>
            </div>
          </Reveal>

          <Reveal className="relative" delay={150}>
            <div className="bg-gray-100 rounded-2xl p-2 shadow-xl border border-gray-200">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">Open Work Orders</p>
                      <p className="font-semibold">128</p>
                      <p className="text-green-500 text-xs">-14% WoW</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">SLA Compliance</p>
                      <p className="font-semibold">98.2%</p>
                      <p className="text-green-500 text-xs">+3.1%</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">First‑Time Fix Rate</p>
                      <p className="font-semibold">87%</p>
                      <p className="text-green-500 text-xs">+2.7%</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Recent Activities</p>
                      <p className="text-xs text-gray-500">Updated 3 mins ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500">
                      View All
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-100 rounded-full -z-10"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
