export default function Footer() {
  return (
    <footer className="bg-[#1F2A44] py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Gilbert Atché · IT Analyst & Software Developer
        </p>
      </div>
    </footer>
  );
}