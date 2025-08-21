"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
};

export default function Pricing({ plans }: { plans: PricingPlan[] }) {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16" delay={50}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple plans for teams of every size.</h2>
          <p className="text-xl text-slate-600">Free 14‑day trial. No credit card required.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={100 + index * 120}>
              <Card
                className={`relative border-2 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "border-blue-500 shadow-xl" : "border-slate-200 hover:border-blue-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <CardDescription className="text-slate-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-900 hover:bg-slate-800"
                    } focus:ring-2 focus:ring-blue-500`}
                    asChild={plan.name === "Enterprise"}
                  >
                    {plan.name === "Enterprise" ? (
                      <a href="https://x.ai/api">Contact Sales</a>
                    ) : (
                      "Get Started"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
