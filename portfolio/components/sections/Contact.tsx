import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1F2A44] py-32 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-slate-400">
          Contact
        </p>

        <h2 className="mt-4 font-[family-name:var(--font-space)] text-5xl font-bold md:text-6xl">
          Get In Touch
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
          Feel free to contact me for any work or suggestions below.
        </p>

        {/* Email */}
        <div className="mt-14 flex justify-center">
          <a
            href="mailto:atchegilbert@gmail.com"
            className="flex items-center gap-3 rounded-full bg-[#2B3653] px-8 py-4 transition duration-300 hover:-translate-y-1 hover:bg-[#344263]"
          >
            <MdEmail size={24} />
            <span className="text-lg font-medium">
              atchegilbert@gmail.com
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/gitnorio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2B3653] transition duration-300 hover:-translate-y-1 hover:bg-[#344263]"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/gilbert-norio-stephane-atche"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2B3653] transition duration-300 hover:-translate-y-1 hover:bg-[#344263]"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </section>
  );
}