"use client";
import { BarChart3, Shield, Workflow, Users, HeadphonesIcon, DollarSign } from "lucide-react";
import Head from "next/head";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import WhyChoose from "@/components/landing/WhyChoose";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import { APP_NAME } from "@/lib/constants";
import Contact from "@/components/landing/Contact";

// TypeScript interfaces for type safety
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface WhyChooseUs {
  title: string;
  description: string;
}

interface HowItWorks {
  step: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

// Data arrays (constants)
const features: Feature[] = [
  {
    icon: Workflow,
    title: "Tasks & Work Orders",
    description: "Create, assign, schedule, and track to completion with SLAs and status updates.",
  },
  {
    icon: Users,
    title: "Smart Filters & Views",
    description: "Apply multi-type filters, save views, and share context across teams.",
  },
  {
    icon: Users,
    title: "Agent Performance",
    description: "Analyze productivity with agent reports—assignments, completions, and last activity.",
  },
  {
    icon: DollarSign,
    title: "Invoicing & Billing",
    description: "Build invoices from tasks, auto-populate items, and streamline approvals.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "See monthly revenue, most-used services, and operational KPIs at a glance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Profiles",
    description: "Centralize contacts, service history, and communication threads.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Trigger notifications, reminders, and task updates automatically.",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Define roles and permissions to protect sensitive data.",
  },
  {
    icon: Users,
    title: "Integrations",
    description: "Email, SMS/WhatsApp notifications, accounting tools, and more.",
  },
];

const whyChooseUs: WhyChooseUs[] = [
  {
    title: "Unified Operations",
    description: "Manage tasks, work orders, customers, and invoices from a single dashboard.",
  },
  {
    title: "Real‑Time Insights",
    description: "Monitor workload, revenue, and agent performance with visual dashboards and reports.",
  },
  {
    title: "Faster Payments",
    description: "Generate invoices in seconds and track collections with built‑in payment workflows.",
  },
  {
    title: "Secure & Scalable",
    description: "Role‑based access control (RBAC), audit logs, and enterprise‑grade security.",
  },
];

const howItWorks: HowItWorks[] = [
  { step: "01", title: "Capture", description: "Log requests, convert to tasks, and auto-assign based on rules." },
  { step: "02", title: "Execute", description: "Collaborate in real time, track progress, and meet SLAs." },
  { step: "03", title: "Bill & Learn", description: "Generate invoices instantly and improve with actionable insights." },
];

const testimonials: Testimonial[] = [
  {
    name: "Operations Lead",
    role: "",
    company: "FieldCare",
    content: "We cut our turnaround time by 35% within the first month.",
    rating: 5,
  },
  {
    name: "Finance Manager",
    role: "",
    company: "Maintena",
    content: "Invoices that took hours now take minutes—and they’re error‑free.",
    rating: 5,
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for small teams getting started with basic features",
    features: [
      "Up to 3 users",
      "Basic work order management",
      "Customer portal access",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Advanced reporting, integrations, and team collaboration",
    features: [
      "Up to 15 users",
      "Advanced reporting & analytics",
      "Automated invoicing",
      "Product & asset tracking",
      "Priority support",
      "API integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom solutions for large service organizations",
    features: [
      "Unlimited users",
      "Custom workflows",
      "White-label solution",
      "Dedicated support",
      "Custom integrations",
      "Enterprise security",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Service Management Software for Fast‑Moving Teams | {APP_NAME}</title>
        <meta
          name="description"
          content={
            "Centralize tasks, automate workflows, and accelerate billing. Real‑time dashboards, agent performance reports, and secure RBAC—start free today"
          }
        />
      </Head>

      <Hero />


      <Features features={features} />

      <WhyChoose items={whyChooseUs} />

      <HowItWorks steps={howItWorks} />

      <Testimonials testimonials={testimonials} />

      {/* Metrics / Impact */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-slate-50">
              <p className="text-3xl font-bold text-slate-900">40%</p>
              <p className="text-slate-600">Faster Task Turnaround</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50">
              <p className="text-3xl font-bold text-slate-900">2x</p>
              <p className="text-slate-600">Faster Invoicing</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50">
              <p className="text-3xl font-bold text-slate-900">99.9%</p>
              <p className="text-slate-600">Uptime</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50">
              <p className="text-3xl font-bold text-slate-900">&lt;1 Minute</p>
              <p className="text-slate-600">to First Task Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by audience */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Solutions</h2>
            <p className="text-xl text-slate-600">Purpose-built for every team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-2">Service Teams</h3>
              <p className="text-slate-600">Schedule, dispatch, and resolve faster with fewer errors.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-2">Finance & Ops</h3>
              <p className="text-slate-600">Get accurate billing and real-time revenue reporting.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold mb-2">Management</h3>
              <p className="text-slate-600">See performance trends, capacity, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Security & Compliance</h2>
            <p className="text-xl text-slate-600">Enterprise-grade protection out of the box</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>RBAC with granular permissions</li>
              <li>Encrypted at rest and in transit</li>
              <li>Audit trails and session management</li>
              <li>SSO and MFA support</li>
            </ul>
          </div>
        </div>
      </section>

      <Pricing plans={pricingPlans} />

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">FAQ</h2>
            <p className="text-xl text-slate-600">Short answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Is onboarding included?</h3>
              <p className="text-slate-700">Yes—guided setup and best practices.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Can we import existing data?</h3>
              <p className="text-slate-700">Yes—CSV import and assisted migration.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Do you offer role-based permissions?</h3>
              <p className="text-slate-700">Yes—fully configurable RBAC.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">How do invoices work?</h3>
              <p className="text-slate-700">Create from tasks, auto-fill items, and send in clicks.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Contact />

    </div>
  );
}