import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TradeCoop",
      status: "In progress",
      image: "/images/tradecoop.png",
      description:
        "A social trading platform where day traders can publish live BUY/SELL signals, follow successful traders, compare performance statistics and collaborate through private trading channels.",
      motivation:
        "I started this CRUD project after noticing that most trading communities rely on Discord or Telegram, where performance is difficult to verify objectively. My goal is to build a transparent platform that helps traders learn from successful investors through real trading statistics.",
      technologies: ["Vue.js", ".NET Framework", "PostgreSQL", "REST API"],
      github: "https://github.com/gitnorio/TradeCoop",
    },

    {
      title: "Vtrine",
      status: "In progress",
      image: "/images/vtrine.png",
      description:
        "A mobile-first auction platform that allows sellers to create a personalized page, publish live auctions, and share a single link with their audience.",
      motivation:
        "This project was inspired by the growing number of creators selling products on Instagram and TikTok. I wanted to simplify the buying experience by giving sellers a single page where all their live auctions are automatically displayed.",
      technologies: ["React", ".NET Framework", "PostgreSQL", "REST API"],
      github: "https://github.com/gitnorio/Vtrine",
    },

    {
      title: "3D Scene Editor",
      status: "Accademic Project",
      video: "/videos/infographie.mp4",
      description:
        "A desktop 3D scene editor inspired by Blender and Unity featuring a scene graph architecture, object manipulation tools, lighting controls, and modern OpenGL rendering.",
      motivation:
        "This university project allowed me to deepen my understanding of computer graphics, rendering pipelines, scene graph architectures, and graphical user interface development using OpenFrameworks and ImGui.",
      technologies: ["C++", "OpenFrameworks", "OpenGL", "ImGui", "OOP"],
    },

    {
      title: "UFood",
      status: "Accademic Project",
      image: "/images/ufood.png",
      description:
        "A restaurant reservation frontend built with Vue.js where users can browse restaurants, search, filter results, and explore restaurant information through a responsive interface.",
      motivation:
        "This project strengthened my frontend development skills by focusing on reusable Vue.js components, state management, and responsive user interface design.",
      technologies: ["Vue.js", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="bg-[#1F2A44] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-slate-400">
            A selection of projects I've built
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-space)] text-5xl font-bold md:text-6xl">
            Projects
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}