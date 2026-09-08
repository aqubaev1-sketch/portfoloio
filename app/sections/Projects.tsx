import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

const projectsList: ProjectCardProps[] = [
  {
    title: "CanvasFlow",
    description:
      "CanvasFlow — это интерактивная онлайн-доска для командной работы, которая позволяет рисовать, проводить мозговые штурмы и взаимодействовать в режиме реального времени.",
    image: "/canvasflow.jpg",
    tags: ["React.JS", "TypeScript", "TurboRepo", "Express.JS", "WebSockets"],
    githubLink: "https://github.com/aqubaev1-sketch/CanvasFlow",
    isLive: false,
    isBuilding: true,
  },
  {
    title: "Lesson Study",
    description:
      "Lesson Study — это цифровая платформа для педагогов, предназначенная для совместного планирования исследовательских уроков.",
    image: "/textly.jpg",
    tags: ["Angular", "TypeScript",  "Node.JS", "Tailwind CSS"],
    liveLink: "https://lessonstudy.asia/login",
    githubLink: "https://github.com/BaisultanRamazan/Lesson-Study-2",
    isLive: true,
  },
  {
    title: "Room Chat-App",
    description:
      "Simple Room Chat — приложение для мгновенного обмена сообщениями в режиме реального времени, позволяющее создавать комнаты, приглашать друзей и общаться без задержек.",
    image: "/chat-app.jpg",
    tags: ["React.JS", "WebSockets", "Typescript", "Node.JS"],
    liveLink: "https://chat-application-brown-one.vercel.app",
    githubLink: "https://github.com/aqubaev1-sketch/Room-Chat-App",
    isLive: true,
  },
  {
    title: "ASHYQ BILIM",
    description:
      "ASHYQ BILIM — открытая цифровая образовательная платформа, предназначенная для публикации, хранения и исследования научных и учебных материалов.",
    image: "/goalkeeper.jpg",
    tags: ["Next.JS", "Node.JS", "Express.JS", "MongoDB", "Tailwind CSS"],
    liveLink: "https://ashyq-bilim-f.vercel.app/",
    githubLink: "https://github.com/aqubaev1-sketch/----ashyqbilim-final------",
    isLive: true,
  },
];

export default function Projects() {
  const total = projectsList.length;
  return (
    <div className="relative">
      <Heading title="Projects" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className={cn(
              "px-8 py-6 md:px-16 md:py-8",
              idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
              idx === total - 1 ? "border-b-0" : "border-b",
              idx < 2 ? "md:border-b" : "md:border-b-0",
              idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
            )}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <HeadingButton title={"View All Projects"} href={"/projects"} />
    </div>
  );
}
