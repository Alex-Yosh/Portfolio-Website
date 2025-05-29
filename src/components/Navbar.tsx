"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Alex Yoshida</h1>
      <div className="space-x-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:underline ${
              pathname === link.href ? "font-semibold text-blue-600" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
