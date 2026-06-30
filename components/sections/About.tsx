export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1F2A44] py-32 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">


        <h2 className="mt-4 font-[family-name:var(--font-space)] text-5xl font-bold md:text-6xl">
          About Me
        </h2>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <p className="leading-8 text-slate-300">
            With a Bachelor of Applied Science (B.A.Sc.) in Computer Science
            and Management, I am an IT Analyst and Software Developer who
            bridges the gap between business and technical teams. I enjoy
            clarifying complex business needs, optimizing processes, and
            transforming ideas into practical solutions through automation,
            system integration, and artificial intelligence.
          </p>

          <p className="leading-8 text-slate-300">
            I am structured, autonomous, fast in execution, and
            solution-oriented. I communicate effectively with both clients and
            technical teams, bringing judgment, rigor, and critical thinking to
            every project. Beyond my professional experience, I am passionate
            about continuous learning and enjoy exploring new technologies
            through personal projects. Every challenge is an opportunity to
            strengthen my skills, optimize processes, and build
            solutions that deliver real value.
          </p>
        </div>
      </div>
    </section>
  );
}