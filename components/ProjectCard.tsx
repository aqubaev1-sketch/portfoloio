import { TbWorld } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import LinkIcon from "./icons/LinkIcon";
import TagIcon from "./icons/TagIcon";
import LiveIcon from "./icons/LiveIcon";
import BuildingIcon from "./icons/BuildingIcon";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  isLive?: boolean;
  isBuilding?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
  isLive = false,
  isBuilding = false,
}: ProjectCardProps) {
  return (
    <Card className="group/card relative mx-auto w-full rounded-2xl border bg-transparent pt-0 shadow-none ring-0">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
        />
      </div>
      <CardHeader className="pt-0">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-foreground text-base tracking-tight">
            {title}
          </CardTitle>
          {isLive ? <LiveIcon /> : isBuilding ? <BuildingIcon /> : null}
        </div>
        <CardDescription className="text-muted-foreground line-clamp-3 text-xs leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <TooltipProvider>
        <CardFooter className="flex items-center justify-between gap-1.5 border-none bg-transparent pt-0 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Tooltip key={index}>
                <TooltipTrigger
                  render={<TagIcon key={index} title={tag} tag={tag} />}
                />
                <TooltipContent side={"bottom"}>{tag}</TooltipContent>
              </Tooltip>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {githubLink && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <LinkIcon
                      link={githubLink}
                      icon={<TbBrandGithub size={16} />}
                    />
                  }
                />
                <TooltipContent side="bottom">GitHub</TooltipContent>
              </Tooltip>
            )}
            {liveLink && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <LinkIcon link={liveLink} icon={<TbWorld size={16} />} />
                  }
                />
                <TooltipContent side="bottom">Live</TooltipContent>
              </Tooltip>
            )}
          </div>
        </CardFooter>
      </TooltipProvider>
    </Card>
  );
}
