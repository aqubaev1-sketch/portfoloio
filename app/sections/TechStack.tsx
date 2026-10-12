"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import StackBtn from "@/components/StackBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiSocketdotio,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

interface StackItem {
  title: string;
  icon: React.ReactNode;
  url: string;
  type: "language" | "frontend" | "backend" | "design" | "tool";
}

const stackItems: StackItem[] = [
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "language",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
    type: "language",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    type: "frontend",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "frontend",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
    type: "frontend",
  },
  {
    title: "React",
    icon: <FaReact />,
    url: "https://react.dev/",
    type: "frontend",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    url: "https://nextjs.org/",
    type: "frontend",
  },
  {
    title: "Vite",
    icon: <SiVite />,
    url: "https://vitejs.dev/",
    type: "frontend",
  },
  {
    title: "Firebase",
    icon: <SiFirebase />,
    url: "https://firebase.google.com/",
    type: "backend",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    url: "https://nodejs.org/",
    type: "backend",
  },
  {
    title: "Express",
    icon: <SiExpress />,
    url: "https://expressjs.com/",
    type: "backend",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    url: "https://www.mongodb.com/",
    type: "backend",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
    type: "backend",
  },
  {
    title: "SQL",
    icon: <TbSql />,
    url: "https://en.wikipedia.org/wiki/SQL",
    type: "backend",
  },
  {
    title: "Supabase",
    icon: <SiSupabase />,
    url: "https://supabase.com/",
    type: "backend",
  },
  // {
  //   title: "Cloudinary",
  //   icon: <SiCloudinary />,
  //   url: "https://cloudinary.com/",
  //   type: "backend",
  // },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui />,
    url: "https://ui.shadcn.com/",
    type: "frontend",
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
    url: "https://vercel.com/",
    type: "tool",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    url: "https://git-scm.com/",
    type: "tool",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/",
    type: "tool",
  },
  {
    title: "Figma",
    icon: <FaFigma />,
    url: "https://www.figma.com/",
    type: "design",
  },
 
];

const filters = [
  { label: "All", value: "all" },
  { label: "Languages", value: "language" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tool" },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? stackItems
      : stackItems.filter((item) => item.type === activeFilter);

  return (
    <>
      <Heading title="Tech Stack">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="mr-3 flex h-7 items-center gap-1.5 px-2.5 py-1 text-xs font-semibold"
          >
            <span>{filters.find((f) => f.value === activeFilter)?.label}</span>
            <span className="text-[10px]">
              <RiArrowDropDownLine />
            </span>
          </Button>
          {dropdownOpen && (
            <div className="bg-popover text-popover-foreground absolute right-0 z-50 mt-1 w-40 overflow-hidden rounded-md border font-mono text-xs shadow-md">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "hover:bg-muted block w-full cursor-pointer px-3 py-2 text-left font-semibold transition-colors",
                    activeFilter === filter.value &&
                      "bg-muted/80 text-foreground",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Heading>
      <div className="relative flex flex-wrap gap-1 px-8 py-5 md:px-12">
        {filteredItems.map((item, index) => (
          <StackBtn
            key={index}
            icon={item.icon}
            text={item.title}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}
