import { Badge } from "../imported/badge";
import { ProjectsPageText } from "@/data/strings";
import {
  // Download,
  AppWindow,
  Apple,
  Bot,
  Gamepad2,
  Globe,
} from "lucide-react";

const getTypeBadge = (type: string) => {
  switch (type) {
    case "Game":
      return (
        <Badge className="bg-purple-600">
          <Gamepad2 className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.game}
        </Badge>
      );
    case "Web":
      return (
        <Badge className="bg-teal-600">
          <Globe className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.web}
        </Badge>
      );

    case "iOS":
      return (
        <Badge className="bg-orange-600">
          <Apple className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.ios}
        </Badge>
      );
    case "Android":
      return (
        <Badge className="bg-green-600">
          <Bot className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.android}
        </Badge>
      );

    default:
      return (
        <Badge className="bg-green-600">
          <AppWindow className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.default}
        </Badge>
      );
  }
};

interface TypePillsProps {
  types: ("Game" | "Web" | "iOS" | "Android")[];
}

export default function TypePills({ types }: TypePillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((t) => (
        <span key={t}>{getTypeBadge(t)}</span>
      ))}
    </div>
  );
}
