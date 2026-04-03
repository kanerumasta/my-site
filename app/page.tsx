'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-60px)] flex flex-col justify-center px-6 py-20 md:py-30">
        <div
          className={`transform transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Building systems that <span className="text-primary">work smarter</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
            I'm Mac — a developer focused on automation, scalable systems, and modern web apps.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/blog"
              className="bg-primary px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Read Blog
            </a>

            <a
              href="#projects"
              className="border border-foreground/20 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-foreground/40 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mb-32 px-6 max-w-5xl mx-auto">
        <div
          className={`transform transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            About
          </h2>

          <p className="text-gray-300 leading-7 max-w-2xl text-lg">
            I specialize in building efficient systems and solving real-world problems.
            From PDF processing pipelines to workflow automation, I enjoy simplifying
            complex processes into scalable solutions.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 max-w-6xl mx-auto mb-32">
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-8">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* PROJECT CARD 1 - FEATURED */}
            <div className="lg:col-span-2 lg:row-span-2 group border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/images/echoease.png"
                    alt="Echoease"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  Echoease
                </h3>

                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  High-performance pipeline for processing large-scale PDF documents with efficiency and reliability.
                </p>

                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Django · Next.js · Backend
                </span>
              </div>
            </div>

            {/* PROJECT CARD 2 */}
            <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  PDF Processing System
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  High-performance pipeline for processing large-scale PDF documents with efficiency and reliability.
                </p>

                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Python · Automation · Backend
                </span>
              </div>
            </div>

            {/* PROJECT CARD 3 */}
            <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  Workflow Automation Tool
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  System designed to streamline admin workflows and reduce manual processes.
                </p>

                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Next.js · Dataverse · Automation
                </span>
              </div>
            </div>

            {/* PROJECT CARD 4 */}
            <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  API Integration Suite
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Comprehensive integration platform for seamless third-party API management.
                </p>

                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Next.js · React · Frontend
                </span>
              </div>
            </div>

            {/* PROJECT CARD 5 */}
            <div className="group border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  Data Analytics Dashboard
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Real-time analytics platform with interactive visualizations and reporting.
                </p>

                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  React · TypeScript · D3.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}