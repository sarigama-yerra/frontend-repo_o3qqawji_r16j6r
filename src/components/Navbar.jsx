import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 shadow" />
            <span className="text-xl font-bold tracking-tight">bolko media</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
            <a href="#work" className="text-gray-600 hover:text-gray-900">Results</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">
              <Phone size={16} /> Book a strategy call
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#services" className="py-2 text-gray-700">Services</a>
              <a href="#process" className="py-2 text-gray-700">Process</a>
              <a href="#work" className="py-2 text-gray-700">Results</a>
              <a href="#cta" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium">
                <Phone size={16} /> Book a strategy call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
