import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight, FiPhone, FiChevronDown } from "react-icons/fi";
import ApplyNowForm from "../ApplyNowForm/ApplyNowForm";
import ProgramsSlider from "../../pages/ProgramsSlider/ProgramsSlider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [apply, setApply] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [scroll, setScroll] = useState(false);

  const links = [
    ["Home", "/"],
    ["About GNI", "/about"],
    ["Programs", null],
    ["Placements", "/placements"],
    ["Campus Life", "/campus-life"],
    ["Contact Us", "/contact"]
  ];

  useEffect(() => {
    const scrollHandler = () => setScroll(window.scrollY > 15);
    const keyHandler = (e) => e.key === "Escape" && setOpen(false);

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("keydown", keyHandler);

    document.body.style.overflow = open ? "hidden" : "";
    document.body.style.overflowX = open ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const openApply = () => {
    setOpen(false);
    setPrograms(false);
    setApply(true);
  };

  const openPrograms = () => {
    setOpen(false);
    setPrograms(true);
  };

  const linkStyle = ({ isActive }) => `group relative py-3 text-sm font-medium transition-all duration-300 xl:text-[15px] ${isActive ? "text-[#f85b0b]" : "text-[#171717] hover:text-[#f85b0b]"}`;

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scroll
            ? "bg-white/95 shadow-lg backdrop-blur-2xl"
            : "bg-white/75 backdrop-blur-xl"
        }`}
      >
        <div
          className={`flex items-center px-4 sm:px-6 lg:px-10 xl:px-12 ${
            scroll ? "h-[66px] lg:h-[74px]" : "h-[74px] lg:h-[84px]"
          }`}
        >
          {/* logo */}
          <NavLink to="/" end onClick={closeMenu} className="group">
            <img
              src="/logo.png"
              alt="Guru Nanak Institutions"
              className="h-16 w-16 object-contain transition duration-300 group-hover:scale-105 sm:h-[68px] sm:w-[68px] lg:h-[70px] lg:w-[70px]"
            />
          </NavLink>

          {/* desktop */}
          <div className="ml-auto hidden items-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              {links.map(([name, href]) =>
                href ? (
                  <NavLink
                    key={name}
                    to={href}
                    end={href === "/"}
                    className={linkStyle}
                  >
                    {name}
                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#f85b0b] transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ) : (
                  <button
                    key={name}
                    onClick={openPrograms}
                    className={`group relative flex items-center gap-1 py-3 text-sm font-medium transition xl:text-[15px] ${
                      programs
                        ? "text-[#f85b0b]"
                        : "text-[#171717] hover:text-[#f85b0b]"
                    }`}
                  >
                    {name}

                    <FiChevronDown
                      className={`text-base transition-transform duration-300 ${
                        programs ? "rotate-180" : ""
                      }`}
                    />

                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#f85b0b] transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              )}
            </div>

            <button
              onClick={openApply}
              className="ml-8 rounded-md bg-[#f85b0b] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e65008] hover:shadow-lg active:scale-95"
            >
              Apply Now
            </button>
          </div>

          {/* mobile */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            {/* <button onClick={openApply} className="hidden rounded-md bg-[#f85b0b] px-3 py-2 text-xs font-bold text-white sm:block">
              Apply
            </button> */}

            <button
              onClick={() => setOpen(!open)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-orange-50"
            >
              <FiMenu
                className={`absolute text-2xl transition ${
                  open ? "scale-0 rotate-90" : ""
                }`}
              />

              <FiX
                className={`absolute text-2xl text-[#f85b0b] transition ${
                  open ? "" : "scale-0 -rotate-90"
                }`}
              />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`overflow-hidden border-t bg-white/95 transition-all duration-500 lg:hidden ${
            open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 p-4">
            {links.map(([name, href]) =>
              href ? (
                <NavLink
                  key={name}
                  to={href}
                  end={href === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group relative flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-300 ${
                      isActive
                        ? "bg-orange-50 pl-7 font-semibold text-[#f85b0b] shadow-sm before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-1 before:rounded-r-full before:bg-[#f85b0b]"
                        : "hover:bg-orange-50 hover:pl-6"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{name}</span>

                      <FiArrowRight
                        className={`text-[#f85b0b] transition ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ) : (
                <button
                  key={name}
                  onClick={openPrograms}
                  className="group flex w-full items-center justify-between rounded-xl px-4 py-4 text-left transition hover:bg-orange-50 hover:pl-6 hover:text-[#f85b0b]"
                >
                  <span className="flex items-center gap-1">
                    {name}
                    <FiChevronDown className="text-base transition-transform duration-300" />
                  </span>

                  <FiArrowRight className="translate-x-[-8px] text-[#f85b0b] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </button>
              )
            )}

            <button
              onClick={openApply}
              className="mt-4 w-full rounded-xl bg-[#f85b0b] py-4 font-bold text-white transition hover:bg-[#e65008] active:scale-[.98]"
            >
              Apply Now
            </button>

            <a
              href="tel:+911234567890"
              className="flex justify-center gap-2 border-t pt-5 text-sm text-gray-500 hover:text-[#f85b0b]"
            >
              <FiPhone className="text-[#f85b0b]" />
              Contact GNI Admissions
            </a>
          </div>
        </div>
      </nav>

      <div
        className={scroll ? "h-[66px] lg:h-[74px]" : "h-[74px] lg:h-[84px]"}
      />

      <ApplyNowForm isOpen={apply} onClose={() => setApply(false)} />

      <ProgramsSlider
        isOpen={programs}
        onClose={() => setPrograms(false)}
      />
    </>
  );
};

export default Navbar;
