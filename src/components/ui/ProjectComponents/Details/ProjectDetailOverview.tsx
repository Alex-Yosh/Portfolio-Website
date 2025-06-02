import { ProjectsDetailsText } from "@/data/strings";
interface ProjectDetailOverviewProps {
  longDescription: string;
}

export default function ProjectDetailOverview({
  longDescription,
}: ProjectDetailOverviewProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        {ProjectsDetailsText.projectOverview}
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg">{longDescription}</p>
    </div>
  );
}
