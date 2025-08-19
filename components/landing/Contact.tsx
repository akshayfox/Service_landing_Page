"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12" delay={50}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about {APP_NAME} or need a custom demo? Send us a message and we’ll get back to you within 1 business day.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Reveal delay={120}>
              <form className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a bit about your needs..."
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">We care about your data in our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.</p>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Sales",
                desc: "Talk to our product experts about plans and pricing.",
                extra: (
                  <a href="mailto:sales@example.com" className="text-blue-600 hover:underline">sales@example.com</a>
                ),
              },
              {
                title: "Support",
                desc: "Need help with your account? We're here for you.",
                extra: (
                  <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
                ),
              },
              {
                title: "Headquarters",
                desc: (
                  <>
                    123 Market Street, Suite 500
                    <br /> San Francisco, CA 94103
                  </>
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={160 + i * 120}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-2">{item.desc}</p>
                  {item.extra}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
