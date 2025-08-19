"use client";

import Reveal from "@/components/Reveal";
import { APP_NAME } from "@/lib/constants";
import { CheckCircle, Users, Target, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 border-b border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={40} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">About {APP_NAME}</h1>
            <p className="text-lg sm:text-xl text-slate-600">
              We help service teams manage work orders, meet SLAs, and delight customers with an end‑to‑end platform that scales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal delay={60}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to remove friction from service operations. From request to resolution, {APP_NAME} brings
                work orders, products, teams, SLAs, and billing into one streamlined flow so you can focus on outcomes.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Reduce manual work with automation",
                  "Improve first‑time‑fix with product & asset context",
                  "Deliver on time with SLA tracking and alerts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">98.2%</p>
                  <p className="text-sm text-slate-500">SLA Compliance</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">-45%</p>
                  <p className="text-sm text-slate-500">Response Time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">+32%</p>
                  <p className="text-sm text-slate-500">FTF Rate</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={40} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Principles that shape our product and partnerships.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={80}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-slate-200">
                <Users className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Customer Obsession</h3>
                <p className="text-slate-600">We build with technicians, managers, and customers in mind.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-slate-200">
                <Target className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Operational Excellence</h3>
                <p className="text-slate-600">Reliable workflows, accurate data, and measurable outcomes.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-slate-200">
                <Sparkles className="h-6 w-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Simplicity</h3>
                <p className="text-slate-600">Powerful features, packaged in a clean, easy interface.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal delay={40}>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Want to learn more?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Explore how {APP_NAME} can streamline your service operations — from work order intake to invoicing.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Contact Us
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
