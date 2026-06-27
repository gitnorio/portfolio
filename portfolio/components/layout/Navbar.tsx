"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="fixed top-0 z-50 w-full bg-[#1F2A44]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-semibold">
          GA
        </a>

        <div className="hidden gap-8 md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          Menu
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 bg-zinc-900 px-6 pb-6 md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}