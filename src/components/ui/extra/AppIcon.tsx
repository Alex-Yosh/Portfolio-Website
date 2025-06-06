import Image from "next/image";

interface AppIconProps {
  iconUrl?: string;
}

export default function AppIcon({ iconUrl }: AppIconProps) {
  if (!iconUrl) return null;

  return (
    <div className="relative mr-4">
      <Image
        src={iconUrl}
        alt="App icon"
        width={80}
        height={80}
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}
