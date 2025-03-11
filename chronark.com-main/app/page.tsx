import { motion } from "framer-motion";
import { LampDemo } from "./components/lamp";
import Particles from "./components/particles";
import Link from "next/link";
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const navigator = [
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/contact", name: "Contact" },
];
const techStack = [
  {
    name: "JavaScript",
    icon: <FaJsSquare color="yellow" />,
    description: "Modern JavaScript for dynamic web applications"
  },
  {
    name: "React",
    icon: <FaReact color="blue" />,
    description: "Building interactive user interfaces"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="green" />,
    description: "Server-side JavaScript runtime"
  },
  {
    name: "TypeScript",
    icon: <FaJsSquare color="blue" />,
    description: "Type-safe JavaScript development"
  },
  {
    name: "Next.js",
    icon: <FaReact color="black" />,
    description: "React framework for production"
  },
  {
    name: "Tailwind CSS",
    icon: <FaCss3Alt color="teal" />,
    description: "Utility-first CSS framework"
  },
  {
    name: "HTML5",
    icon: <FaHtml5 color="orange" />,
    description: "Modern web markup language"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <header className="flex flex-col items-center justify-center min-h-screen px-4">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigator.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text">
          Hi, I'm Thabiso 👋
        </h1>
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            A full stack Software Developer <span className="text-zinc-300">based in South Africa.</span>
          </h2>
        </div>
      </header>
      <main className="relative">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={200} />
        <section className="flex flex-col items-center justify-center min-h-screen">
          <LampDemo />
          <div className="relative w-full h-[400px] max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                  x: [0, index % 2 === 0 ? 10 : -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="absolute p-4 rounded-full bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-700/50 transition-colors"
                style={{
                  top: `${Math.random() * 60}%`,
                  left: `${(index * (100 / techStack.length)) + Math.random() * 10}%`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-xs text-zinc-400">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
