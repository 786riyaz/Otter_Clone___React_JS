import { useState } from "react";
import OtterLogo from "./OtterLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 z-50">
      <div className="hidden md:flex items-center gap-1">
        <a
          href="#"
          className="px-4 py-2 text-sm font-medium text-[#00373E] hover:opacity-60 transition-opacity"
        >
          Log in
        </a>
        <a
          href="#"
          className="px-5 py-2 text-sm font-medium text-[#00373E] border-2 border-[#00373E] rounded-full hover:bg-[#00373E] hover:text-white transition-all"
        >
          Sign up
        </a>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mx-auto">
        <a href="/">
          <OtterLogo />
        </a>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#00373E] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#00373E] transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#00373E] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#F5F2EE] border-t border-black/5 p-6 flex flex-col gap-3 shadow-md z-50">
          <a href="#" className="text-sm font-medium text-[#00373E]">
            Log in
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[#00373E] border-2 border-[#00373E] rounded-full px-5 py-2.5 text-center hover:bg-[#00373E] hover:text-white transition-all"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
}
