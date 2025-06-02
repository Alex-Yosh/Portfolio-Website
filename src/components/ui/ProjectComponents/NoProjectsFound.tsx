import { noProjectsFoundText } from "@/data/strings";

export default function NoProjectsFound() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-400 text-lg">{noProjectsFoundText}</p>
    </div>
  );
}
