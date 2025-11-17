import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Practices", href: "#practices" },
    { label: "Community", href: "#community" },
    { label: "Journal", href: "#journal" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 shadow-inner"></div>
              <span className="text-white text-lg font-semibold tracking-wide">YAWP</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="ml-2 inline-flex items-center rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-shadow"
              >
                Join the Roar
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 p-2 text-white"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow"
                >
                  Join the Roar
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
