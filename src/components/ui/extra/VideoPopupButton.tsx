"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function VideoModal({
  videoUrl,
  phoneRes,
  onClose,
}: {
  videoUrl: string;
  phoneRes: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  // Conditional class for portrait vs landscape
  const aspectClass = phoneRes
    ? "w-[90%] max-w-sm aspect-[9/16]" // portrait
    : "w-full max-w-3xl aspect-video"; // landscape

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className={`relative ${aspectClass}`}>
        <button
          className="absolute top-2 right-2 text-white z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <video
          className="w-full h-full rounded-lg"
          controls
          autoPlay
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>,
    document.body
  );
}
