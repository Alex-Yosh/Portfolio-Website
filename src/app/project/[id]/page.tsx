import ProjectDetail from "@/components/ui/ProjectDetail";

export default function ProjectPage({ params }: { params: { id: string } }) {
  console.log("Project ID:", params.id);
  // In a real app, you would fetch project data based on params.id
  return <ProjectDetail />;
}
