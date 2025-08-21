"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-700">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal delay={50}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start Managing Your Services Smarter Today</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of service providers already using {APP_NAME} to streamline operations and improve customer satisfaction.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-slate-50 focus:ring-2 focus:ring-blue-500"
            >
              <a href="https://service-mgmt.web.app/" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-2 focus:ring-blue-500"
            >
              <a href="/#contact">Book a Demo</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
