"use client";

type Item = { title: string; description: string };
import { CheckCircle } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export default function WhyChoose({ items }: { items: Item[] }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose {APP_NAME}?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Transform your service operations with our comprehensive platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
