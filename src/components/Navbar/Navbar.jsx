import { useState } from "react";
import ApplyNowForm from "../ApplyNowForm/ApplyNowForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About GNI", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Placements", href: "/placements" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      {/* navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/[0.06] bg-white/70 shadow-[0_4px_25px_rgba(0,0,0,0.05)] backdrop-blur-xl">

        <div className="mx-auto flex h-[70px] w-full items-center px-4 sm:h-[76px] sm:px-6 md:px-8 lg:h-[82px] lg:px-10 xl:h-[86px] xl:px-12">

          {/* logo */}
          <div className="shrink-0">
            <a href="/" aria-label="Guru Nanak Institutions">
              <img src="/logo.png" alt="Guru Nanak Institutions" width="90" height="90" className="h-[52px] w-[52px] object-contain sm:h-[56px] sm:w-[56px] md:h-[60px] md:w-[60px] lg:h-[64px] lg:w-[64px] xl:h-[68px] xl:w-[68px]" />
            </a>
          </div>

          {/* desktop navbar */}
          <div className="ml-auto hidden items-center lg:flex">

            {/* navigation */}
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">

              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="relative whitespace-nowrap py-2 text-[14px] font-medium text-[#171717] transition-colors duration-300 hover:text-[#f85b0b] xl:text-[15px] 2xl:text-[16px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#f85b0b] after:transition-all after:duration-300 hover:after:w-full">
                  {link.name}
                </a>
              ))}

            </div>

            {/* desktop apply now */}
            <button type="button" onClick={() => setIsApplyOpen(true)} className="ml-7 h-[40px] shrink-0 rounded-[4px] bg-[#f85b0b] px-5 text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(248,91,11,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#dc4e08] hover:shadow-[0_7px_18px_rgba(248,91,11,0.25)] xl:ml-8 xl:h-[43px] xl:px-6 xl:text-[15px]">
              Apply Now
            </button>

          </div>

          {/* mobile hamburger */}
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="ml-auto flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden" aria-label="Toggle navigation" aria-expanded={isOpen}>

            <span className={`h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />

            <span className={`h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />

            <span className={`h-[2px] w-6 bg-black transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />

          </button>

        </div>

        {/* mobile menu */}
        <div className={`overflow-hidden border-t border-black/[0.06] bg-white/80 backdrop-blur-xl transition-all duration-300 lg:hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-transparent opacity-0"}`}>

          <div className="px-4 py-4 sm:px-6">

            <div className="flex flex-col">

              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="rounded-md px-3 py-2.5 text-[15px] font-medium text-[#171717] transition-colors hover:bg-orange-50 hover:text-[#f85b0b] sm:text-[16px]">
                  {link.name}
                </a>
              ))}

              {/* mobile apply now */}
              <button type="button" onClick={() => { setIsOpen(false); setIsApplyOpen(true) }} className="mt-3 w-full rounded-[4px] bg-[#f85b0b] py-2.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#dc4e08]">
                Apply Now
              </button>

            </div>

          </div>

        </div>

      </nav>

      {/* navbar spacing */}
      <div className="h-[70px] sm:h-[76px] lg:h-[82px] xl:h-[86px]" />

      {/* apply now form */}
      <ApplyNowForm isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
};

export default Navbar;