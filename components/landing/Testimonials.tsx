"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import Reveal from "@/components/Reveal";

type Testimonial = { name: string; role: string; company: string; content: string; rating: number };

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16" delay={50}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-slate-600">See how {APP_NAME} is transforming service operations worldwide</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={100 + index * 120}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-slate-600">{testimonial.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-slate-500 text-sm">{testimonial.role} • {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
