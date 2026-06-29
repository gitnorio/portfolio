"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#1F2A44]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-[family-name:var(--font-space)] text-xl font-semibold"
        >
          Gilbert Atché
        </a>

        <div className="hidden gap-8 font-[family-name:var(--font-space)] md:flex">
          <a
            href="#about"
            className="transition hover:text-slate-300"
          >
            About Me
          </a>

          <a
            href="#skills"
            className="transition hover:text-slate-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-slate-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-slate-300"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="font-[family-name:var(--font-space)] md:hidden"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 bg-[#1F2A44] px-6 pb-6 font-[family-name:var(--font-space)] md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>
            About Me
          </a>

          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}