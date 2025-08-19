"use client";
import {
  BarChart3,
  Shield,
  Workflow,
  Users,
  HeadphonesIcon,
  DollarSign,
} from "lucide-react";
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
    title: "Work Order Management",
    description:
      "Track, assign, and resolve service requests with ease. Streamline your entire service workflow from request to completion.",
  },
  {
    icon: Shield,
    title: "Product & Asset Tracking",
    description:
      "Manage products, brands, and models efficiently. Keep track of all your assets and inventory in one centralized system.",
  },
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Assign tasks with auto-generated employee codes. Manage your team efficiently with role-based access and task tracking.",
  },
  {
    icon: DollarSign,
    title: "Invoicing & Payments",
    description:
      "Create, send, and track invoices in just a few clicks. Streamline your billing process and get paid faster.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Portal",
    description:
      "Give customers real-time updates on their requests. Improve transparency and customer satisfaction with self-service options.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Get insights into team performance and service efficiency. Make data-driven decisions with comprehensive reporting.",
  },
];

const whyChooseUs: WhyChooseUs[] = [
  {
    title: "Reduce Manual Work",
    description: "Automate repetitive service tasks and eliminate paperwork with smart workflows.",
  },
  {
    title: "Improve Customer Satisfaction",
    description: "Faster updates and reliable communication keep your customers happy and informed.",
  },
  {
    title: "All-in-One Platform",
    description:
      "Replace spreadsheets and multiple tools with one comprehensive service management solution.",
  },
  {
    title: "Scalable Solution",
    description:
      "From small teams to enterprise service providers, our platform grows with your business.",
  },
];

const howItWorks: HowItWorks[] = [
  {
    step: "01",
    title: "Create a Work Order",
    description: "Customers or admins log service requests through the portal or mobile app.",
  },
  {
    step: "02",
    title: "Assign & Track",
    description: "Managers assign jobs to employees and track progress in real-time.",
  },
  {
    step: "03",
    title: "Complete & Invoice",
    description: "Service is finished and invoices are generated instantly with automated billing.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Michael Rodriguez",
    role: "Service Manager",
    company: "ProTech Services",
    content:
      `Our service response time improved by 45% after switching to ${APP_NAME}. The work order management system is incredibly intuitive.`,
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    company: "Elite Maintenance Co",
    content:
      "Managing products and employees has never been easier. The automated employee codes and task assignment features are game-changers.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    company: "Thompson Services",
    content:
      "The customer portal has transformed our client relationships. Customers love getting real-time updates on their service requests.",
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
        <title>{APP_NAME} - All-in-One CRM Solution</title>
        <meta
          name="description"
          content={`Streamline your sales process, manage customer relationships, and boost your business growth with ${APP_NAME}.`}
        />
      </Head>

      <Hero />


      <Features features={features} />

      <WhyChoose items={whyChooseUs} />

      <HowItWorks steps={howItWorks} />

      <Testimonials testimonials={testimonials} />

      <Pricing plans={pricingPlans} />

      <CTA />

      <Contact />

    </div>
  );
}