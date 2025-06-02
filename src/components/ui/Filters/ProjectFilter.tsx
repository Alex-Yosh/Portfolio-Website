"use client";

import { Badge } from "@/components/ui/imported/badge";
import { Gamepad2, Globe, Apple, Bot, AppWindow, Filter } from "lucide-react";
import { ProjectsPageText } from "@/data/strings";

interface TypeFilterProps {
  selectedType: string | null;
  types: string[];
  setSelectedType: (type: string | null) => void;
}

const getTypeFilterLabel = (type: string) => {
  switch (type) {
    case "Game":
      return (
        <>
          <Gamepad2 className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.game}
        </>
      );
    case "Web":
      return (
        <>
          <Globe className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.web}
        </>
      );
    case "iOS":
      return (
        <>
          <Apple className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.ios}
        </>
      );
    case "Android":
      return (
        <>
          <Bot className="w-3 h-3 mr-1" />
          {ProjectsPageText.typeLabels.android}
        </>
      );
    default:
      return (
        <>
          <AppWindow className="w-3 h-3 mr-1" />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </>
      );
  }
};

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "Game":
      return "bg-purple-600";
    case "Web":
      return "bg-teal-600";
    case "iOS":
      return "bg-orange-600";
    case "Android":
      return "bg-green-600";
    default:
      return "bg-gray-600";
  }
};

export default function ProjectFilter({
  selectedType,
  types,
  setSelectedType,
}: TypeFilterProps) {
  return (
    <div className="mb-12 space-y-6">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-blue-400" />
        <h2 className="text-xl font-semibold">
          {ProjectsPageText.filterTitle}
        </h2>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-2">
          {ProjectsPageText.filterTitle}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedType === null ? "default" : "outline"}
            className={`cursor-pointer ${
              selectedType === null
                ? "bg-blue-600"
                : "bg-transparent border-gray-600 hover:bg-gray-800"
            }`}
            onClick={() => setSelectedType(null)}
          >
            {ProjectsPageText.filterAllType}
          </Badge>

          {types.map((type) => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className={`cursor-pointer ${
                selectedType === type
                  ? getTypeBadgeColor(type)
                  : "bg-transparent border-gray-600 hover:bg-gray-800"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {getTypeFilterLabel(type)}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
