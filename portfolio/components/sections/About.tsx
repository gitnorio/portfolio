import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#1F2A44] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Get To Know More
          </p>

          <h2 className="mt-4 text-5xl font-bold">About Me</h2>
        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[360px_1fr]">
          <div className="relative h-[430px] overflow-hidden rounded-3xl">
            <Image
              src="/profile.jpg"
              alt="Gilbert Atché"
              fill
              className="object-cover object-top grayscale"
              sizes="360px"
            />
          </div>

          <div>


            <p className="mt-10 leading-8 text-slate-300">
              With a B.A. Computer Science & Management, I am an IT Analyst and Software Developer who acts as a bridge
              between business teams and technical teams. I enjoy clarifying
              unclear needs, optimizing processes, and transforming business
              problems into concrete solutions through automation, integrations
              and artificial intelligence.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              I am structured, autonomous, fast in execution and
              solution-oriented. I communicate well with clients and technical
              teams, and I bring judgment, rigor and critical thinking to every
              project. Beyond my professional experience, I am passionate about continuous learning and enjoy exploring new technologies through personal projects. Every challenge is an opportunity to strengthen my skills, optimize processes, and build intelligent solutions that deliver real value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}