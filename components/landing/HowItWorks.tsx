"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type Step = { step: string; title: string; description: string };

export default function HowItWorks({ steps }: { steps: Step[] }) {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16" delay={50}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get started with our simple 3-step process</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Reveal key={index} delay={100 + index * 120} className="text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <ArrowRight className="h-6 w-6 text-slate-300 mx-auto" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
