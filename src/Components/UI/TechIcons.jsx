import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import SpotlightCard from "./SpotlightCard";

const techStack = [
  { icon: FaHtml5, color: "#E34F26", label: "HTML" },
  { icon: FaCss3Alt, color: "#1572B6", label: "CSS" },
  { icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { icon: FaReact, color: "#61DAFB", label: "React" },
  { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  { icon: SiReactrouter, color: "#CA4245", label: "Router" },
  { icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  { icon: FaNodeJs, color: "#339933", label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
];

export default function TechGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {techStack.map((tech, i) => {
        const Icon = tech.icon;
        return (
          <SpotlightCard
            key={i}
            spotlightColor="rgba(133, 133, 133, 0.562)"
            className="group flex h-[140px] w-[120px] cursor-pointer flex-col items-center justify-center rounded-xl shadow-md transition-transform duration-700 ease-in-out hover:scale-110"
          >
            <div className="transition-transform delay-100 duration-700 ease-in-out group-hover:scale-125">
              <Icon color={tech.color} size={50} />
            </div>

            <p className="mt-2 text-sm font-medium">{tech.label}</p>
          </SpotlightCard>
        );
      })}
    </div>
  );
}
