import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#1F2A44] text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row">
        {/* Left */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="uppercase tracking-[0.3em] text-slate-400">
            Greetings, I'm
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            Gilbert Atché
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            IT Analyst • Software Developer
          </p>

<div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
  <a
    href="/resume.pdf"
    className="rounded-full bg-white px-6 py-3 font-medium text-[#1F2A44] transition hover:bg-slate-200"
  >
    Get My Resume
  </a>

  <a
    href="#contact"
    className="rounded-full border border-slate-500 px-6 py-3 font-medium transition hover:border-white"
  >
    Contact
  </a>
</div>

<div className="mt-8 flex justify-center gap-5 lg:justify-start">
  <a
    href="https://github.com/gitnorio"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 transition hover:border-white hover:bg-white hover:text-[#1F2A44]"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://linkedin.com/in/gilbert-norio-stephane-atche"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 transition hover:border-white hover:bg-white hover:text-[#1F2A44]"
  >
    <FaLinkedin size={22} />
  </a>
</div>
        </div>

        {/* Right */}
          <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full border-4 border-white shadow-2xl ">
<Image
  src="/profile.jpg"
  alt="Gilbert Atché"
  fill
  priority
  sizes="(max-width: 1024px) 430px, 430px"
  className="object-cover object-top"
/>
          </div>
      </div>
    </section>
  );
}


