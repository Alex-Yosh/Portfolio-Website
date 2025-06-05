interface TechPillsProps {
  technologies: string[];
}

export default function TechPills({ technologies }: TechPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 bg-blue-600 text-xs rounded-full">
          {tech}
        </span>
      ))}
    </div>
  );
}
