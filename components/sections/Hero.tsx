import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#1F2A44] text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">

        {/* Profile Picture */}
        <div className="relative mb-8 h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-2xl">
          <Image
            src="/gilbertAboutMe.png"
            alt="Gilbert Atché"
            fill
            priority
            sizes="208px"
            className="object-cover object-top"
          />
        </div>

        <p className="uppercase tracking-[0.3em] text-slate-400">
          Greetings, I'm
        </p>

        <h1 className="mt-4 font-(family-name:--font-space) text-6xl font-bold leading-tight md:text-8xl">
          Gilbert Atché
        </h1>

        <p className="mt-5 font-(family-name:--font-space) text-xl text-slate-300">
          IT Analyst • Software Developer
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/Gilbert_Atche_CV.pdf"
            className="rounded-full bg-white px-9 py-3.5 font-(family-name:--font-space) font-medium text-[#1F2A44] transition hover:bg-slate-200"
          >
            View My Resume
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-500 px-9 py-3.5 font-(family-name:--font-space) font-medium transition hover:border-white"
          >
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-5">
          <a
            href="https://github.com/gitnorio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500 transition hover:border-white hover:bg-white hover:text-[#1F2A44]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/gilbert-norio-stephane-atche"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500 transition hover:border-white hover:bg-white hover:text-[#1F2A44]"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}