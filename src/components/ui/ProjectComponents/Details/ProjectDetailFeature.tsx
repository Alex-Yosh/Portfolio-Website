import { Zap } from "lucide-react";
import { ProjectsDetailsText } from "@/data/strings";

interface ProjectDetailFeatureProps {
  features: string[];
}
export default function ProjectDetailFeature({
  features,
}: ProjectDetailFeatureProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        {ProjectsDetailsText.features}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Zap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
