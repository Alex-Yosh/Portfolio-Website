import Image from "next/image";
import { ProjectsDetailsText } from "@/data/strings";

interface ProjectDetailGalleryProps {
  gallery: string[];
}

export default function ProjectDetailGallery({
  gallery,
}: ProjectDetailGalleryProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-400">{ProjectsDetailsText.screenshots}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden group"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={"/placeholder.svg"}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
