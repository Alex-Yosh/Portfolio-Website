import { ProjectsDetailsText } from "@/data/strings";

interface ProjectDetailChallengeSolutionProps {
  challenges: string[];
  solutions: string[];
}

export default function ProjectDetailChallengeSolution({
  challenges,
  solutions,
}: ProjectDetailChallengeSolutionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-red-400">
          {ProjectsDetailsText.challenges}
        </h3>
        <ul className="space-y-3">
          {challenges.map((challenge, index) => (
            <li key={index} className="text-gray-300 leading-relaxed">
              • {challenge}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-green-400">
          {ProjectsDetailsText.solutions}
        </h3>
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="text-gray-300 leading-relaxed">
              • {solution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
