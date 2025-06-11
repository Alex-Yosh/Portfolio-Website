// ProjectCard.tsx
import { Project, isPhonePlatform } from "@/data/projects";
import MobileProjectCard from "./MobileProjectCard";
import OtherProjectCard from "./OtherProjectCard";

export default function ProjectCard({ project }: { project: Project }) {
  return isPhonePlatform(project) ? (
    <MobileProjectCard project={project} />
  ) : (
    <OtherProjectCard project={project} />
  );
}
