/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  MessageSquare,
  TrendingUp,
  Calendar,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Search,
  Settings,
  Rocket,
  Menu,
  X,
  Plus,
  ArrowUpRight,
  Code,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Request Secured
        </h3>
        <p className="text-slate-500 mb-6">
          An automation specialist will contact you in 24 hours.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setStep(1);
          }}
          className="text-blue-600 font-bold hover:underline"
        >
          Check another date
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl border border-slate-800 max-w-lg mx-auto">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-1">Request a Consultation</h3>
        <p className="text-slate-400 text-xs">
          Speak with an expert in 24 hours.
        </p>
      </div>

      <form
        action="https://formspree.io/f/mqenbywp"
        method="POST"
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-white placeholder-slate-600"
              placeholder="Alex Johnson"
            />
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">
                Schedule
              </label>
              <input
                type="date"
                name="date"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all text-white placeholder-slate-600"
              placeholder="alex@company.com"
            />
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Secure My Spot
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const BookingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg z-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:rotate-90 transition-transform duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <BookingForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenAudit }: { onOpenAudit: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-3xl font-bold tracking-tight text-blue-600">
              Palette & Pixel
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a
              href="#solutions"
              className="hover:text-blue-600 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#case-studies"
              className="hover:text-blue-600 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#process"
              className="hover:text-blue-600 transition-colors"
            >
              Process
            </a>
            <button
              onClick={onOpenAudit}
              className="ml-4 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all"
            >
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a
                href="#solutions"
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Solutions
              </a>
              <a
                href="#case-studies"
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Case Studies
              </a>
              <a
                href="#pricing"
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Pricing
              </a>
              <a
                href="#process"
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                Process
              </a>
              <button
                onClick={() => {
                  onOpenAudit();
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-brand-primary text-white px-5 py-3 rounded-md font-semibold"
              >
                Get a Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenAudit }: { onOpenAudit: () => void }) => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase tracking-widest text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-6">
            Enterprise Ready
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Scale your salon business
            <br />
            without the friction.
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            The all-in-one execution platform designed to unify your workflow,
            eliminate silos, and accelerate delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOpenAudit} className="btn-primary">
              Book an Audit
            </button>
            <button onClick={() => window.location.href = "/demo"} className="btn-outline">View Demo</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img
              src="/analyse.png"
              alt="Dashboard Analytics"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full blur-3xl -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <div className="w-10 h-10 shrink-0 bg-red-50 text-red-500 rounded flex items-center justify-center font-bold">
          !
        </div>
      ),
      title: "Missed booking from Whatsapp",
      description:
        "Client messages get buried under personal chats, leading to lost revenue and frustated regulators.",
    },
    {
      icon: (
        <div className="w-10 h-10 shrink-0 bg-red-50 text-red-500 rounded flex items-center justify-center font-bold">
          !
        </div>
      ),
      title: "No proper tracking system",
      description:
        "Without data, you don't know who your best client are or which services are actually making you profit.",
    },
    {
      icon: (
        <div className="w-10 h-10 shrink-0 bg-red-50 text-red-500 rounded flex items-center justify-center font-bold">
          !
        </div>
      ),
      title: "Manual scheduling confusion",
      description:
        "Double-booking a no-show eat away at your time. Manual entry is prone to human error",
    },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-4">
          The Core Challenges
        </h4>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Overcoming Operational Friction
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md flex flex-col items-start"
          >
            <div className="mb-6">{prob.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {prob.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {prob.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BookingSolution = () => {
  const steps = [
    {
      num: 1,
      title: "User Books Easily",
      desc: "A mobile-first form designed for speed. Clients pick a service and time in under 30 seconds.",
    },
    {
      num: 2,
      title: "Data Securely Stored",
      desc: "Every appointment is instantly logged into a professional dashboard for easy tracking.",
    },
    {
      num: 3,
      title: "Owner Notified via WhatsApp",
      desc: "Receive a structured notification the moment a booking is made. No more hunting through chats.",
    },
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            The Frictionless Booking Solution
          </h2>
          <p className="text-slate-500">
            One automated flow. Zero friction for you and your clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 items-start p-8 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DemoComparison = () => {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Salon Booking System Demo
          </h2>
          <p className="text-slate-500">
            Real results: Transforming chaos into a refined client experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">
              The Old Way
            </h4>
            <div className="relative rounded-2xl overflow-hidden aspect-video group bg-slate-100">
              <img
                src="/mess.png"
                alt="Chaotic Desk"
                className="w-full h-full object-cover filter grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-end justify-end p-6">
                <span className="px-8 py-4 bg-red-600 text-white font-black rounded-lg text-lg shadow-xl uppercase tracking-tight">
                  Manual & Chaotic
                </span>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <XCircle className="w-5 h-5 text-red-400" />
                4-hour delay in replies
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <XCircle className="w-5 h-5 text-red-400" />
                Manual entry errors
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <XCircle className="w-5 h-5 text-red-400" />
                15% No-show rate
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest">
              The Palette & Pixel Way
            </h4>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-blue-50">
              <img
                src="/messfree.png"
                alt="Automated Success"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 flex items-end justify-end p-6">
                <span className="px-8 py-4 bg-blue-600 text-white font-black rounded-lg flex items-center gap-3 text-lg shadow-xl">
                  <CheckCircle2 className="w-6 h-6" />
                  100% Automated
                </span>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                Instant confirmations
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                Auto-sync to Google Sheets
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                WhatsApp reminders sent
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onOpenAudit }: { onOpenAudit: () => void }) => {
  const plan = {
    name: "Enterprise Pro",
    price: "200",
    sub: "one-time + domain acquiring charges",
    desc: "The complete automated booking engine",
    features: [
      "Custom Booking Form",
      "WhatsApp Integration",
      "Google Sheets Dashboard",
      "Mobile Optimization",
      "Email Notifications",
    ],
    cta: "Inquire",
  };

  return (
    <section className="py-24 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500">
            Everything your salon needs to manage bookings on autopilot.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative flex flex-col p-8 bg-white border border-blue-600 rounded-3xl shadow-xl transition-all hover:scale-[1.02]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full">
              Full Package
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-slate-500 text-sm mb-8">{plan.desc}</p>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-extrabold text-blue-600">
                ${plan.price}
              </span>
              <span className="ml-2 text-slate-400 text-xs font-medium uppercase tracking-wider">
                {plan.sub}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenAudit}
              className="w-full py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-100"
            >
              {plan.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Audit",
      desc: "We analyze your current flow and identify leakage points.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Build",
      desc: "Engineered with modern stacks for speed and reliability.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Setup",
      desc: "Connecting your WhatsApp and data tracking dashboards.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch",
      desc: "Go live with full support and a 30-day monitoring period.",
    },
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our 4-Step Technical Process
          </h2>
          <p className="text-slate-500">
            How we take your salon from chaos to clarity in 14 days.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-8 flex justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[50%] left-[80%] w-full h-[1px] bg-slate-100 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ onOpenAudit }: { onOpenAudit: () => void }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative w-full h-full py-20 px-8 rounded-[40px] overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C24D5] via-[#A646E1] to-[#D659B6]"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Stop Losing Bookings
          </h2>
          <p className="text-white/80 text-lg mb-10 font-medium italic">
            "Your salon deserves a system that works as hard as you do."
          </p>
          <button
            onClick={onOpenAudit}
            className="bg-white text-brand-primary px-10 py-4 rounded-xl font-extrabold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Get Your Free Audit
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <span className="text-2xl font-black text-brand-primary tracking-tight">
              Palette & Pixel
            </span>
            <p className="text-slate-400 text-xs mt-3">
              &copy; 2026 Palette & Pixel. Engineered for Technical Excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenAudit={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenAudit={() => setIsModalOpen(true)} />
        <ProblemSection />
        <BookingSolution />
        <DemoComparison />
        <Pricing onOpenAudit={() => setIsModalOpen(true)} />
        <Process />
        <FinalCTA onOpenAudit={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
