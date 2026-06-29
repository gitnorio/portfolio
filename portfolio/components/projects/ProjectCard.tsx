import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  status: string;
  image?: string;
  video?: string;
  description: string;
  motivation?: string;
  technologies: string[];
  github?: string;
};

export default function ProjectCard({
  title,
  status,
  image,
  video,
  description,
  motivation,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#2B3653] transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {video ? (
        <video
          className="aspect-video w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        image && (
          <div className="relative aspect-video w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )
      )}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{title}</h3>

<span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-white">
  {status}
</span>
        </div>

        <p className="mt-4 leading-7 text-slate-200">
          {description}
        </p>

        {motivation && (
          <p className="mt-5 leading-7 text-slate-200">
            {motivation}
          </p>
        )}

        <div className="mt-8 flex items-end justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#1F2A44] px-3 py-1 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-slate-300 transition duration-300 hover:scale-110 hover:text-white"
            >
              <FaGithub size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}