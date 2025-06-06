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
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        {ProjectsDetailsText.screenshots}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative w-full rounded-lg overflow-hidden group"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Screenshot ${index + 1}`}
              width={1000} // actual image width (or approximate aspect ratio)
              height={600} // actual image height
              className="w-full h-auto object-contain transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
