import { FaFacebookF, FaTwitter, FaInstagram, FaGraduationCap, FaArrowRight, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9ff] text-[#18233b]">

      {/* footer */}
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:pb-12">

        {/* top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* logo */}
          <div className="lg:pr-5">

            <div className="mb-5">
              <img src="/logo.png" alt="Guru Nanak Institutions" width="70" height="70" className="h-auto w-[58px] object-contain sm:w-[65px]" />
            </div>

            {/* description */}
            <p className="max-w-[280px] text-[14px] leading-[1.7] text-gray-600 sm:text-[15px] lg:text-[15px]">
              Empowering students through quality education,
              experienced faculty, and career-focused learning for a
              brighter future.
            </p>

          </div>

          {/* follow us */}
          <div>

            <h3 className="mb-5 text-[18px] font-bold text-[#18233b] sm:text-[19px] lg:text-[20px]">
              Follow Us
            </h3>

            <div className="flex items-center gap-2.5">

              {/* facebook */}
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white text-[13px] text-[#ff6b35] shadow-sm transition-all duration-300 hover:bg-[#ff6b35] hover:text-white">
                <FaFacebookF />
              </a>

              {/* twitter */}
              <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white text-[13px] text-[#ff6b35] shadow-sm transition-all duration-300 hover:bg-[#ff6b35] hover:text-white">
                <FaTwitter />
              </a>

              {/* instagram */}
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white text-[13px] text-[#ff6b35] shadow-sm transition-all duration-300 hover:bg-[#ff6b35] hover:text-white">
                <FaInstagram />
              </a>

              {/* education */}
              <a href="#" aria-label="Education" className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white text-[13px] text-[#ff6b35] shadow-sm transition-all duration-300 hover:bg-[#ff6b35] hover:text-white">
                <FaGraduationCap />
              </a>

            </div>

          </div>

          {/* newsletter */}
          <div>

            <h3 className="mb-4 text-[18px] font-bold text-[#18233b] sm:text-[19px] lg:text-[20px]">
              Subscribe Our Newsletter
            </h3>

            <p className="mb-4 max-w-[300px] text-[13px] leading-[1.6] text-gray-600 sm:text-[14px]">
              Get the latest courses, tips & stories delivered to your inbox.
            </p>

            <form className="flex w-full max-w-[330px]">

              <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-l-[3px] border-0 bg-white px-3 py-2.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 sm:text-[14px]" />

              <button type="submit" className="flex shrink-0 items-center gap-2 rounded-r-[3px] bg-[#ff6b35] px-4 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#e85d29] sm:px-5 sm:text-[14px]">
                Subscribe
                <FaArrowRight className="text-[10px]" />
              </button>

            </form>

          </div>

          <div className="hidden lg:block" />

        </div>

        {/* links & contact */}
        <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 lg:mt-5 lg:grid-cols-4 lg:gap-8">

          {/* quick links */}
          <div>

            <h3 className="mb-4 text-[17px] font-bold text-[#18233b] sm:text-[18px] lg:text-[19px]">
              Quick Links
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a href="/about" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  About Us
                </a>
              </li>

              <li>
                <a href="/programs" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  All Courses
                </a>
              </li>

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Admission
                </a>
              </li>

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Events
                </a>
              </li>

              <li>
                <a href="/contact" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="/campus-life" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Gallery
                </a>
              </li>

            </ul>

          </div>

          {/* top categories */}
          <div>

            <h3 className="mb-4 text-[17px] font-bold text-[#18233b] sm:text-[18px] lg:text-[19px]">
              Top Categories
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a href="/programs/btech" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  B.Tech
                </a>
              </li>

              <li>
                <a href="/programs/mtech" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  M.Tech
                </a>
              </li>

              <li>
                <a href="/programs/bba" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  BBA
                </a>
              </li>

              <li>
                <a href="/programs/mba" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  MBA
                </a>
              </li>

              <li>
                <a href="/programs/computer-application" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Computer Applications
                </a>
              </li>

              <li>
                <a href="/programs/pharmacy" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  B.Pharm
                </a>
              </li>

            </ul>

          </div>

          {/* student corner */}
          <div>

            <h3 className="mb-4 text-[17px] font-bold text-[#18233b] sm:text-[18px] lg:text-[19px]">
              Student Corner
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Online Admission
                </a>
              </li>

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Examination
                </a>
              </li>

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Result
                </a>
              </li>

              <li>
                <a href="#" className="text-[13px] text-gray-500 transition-colors hover:text-[#ff6b35] sm:text-[14px]">
                  Academic Calendar
                </a>
              </li>

            </ul>

          </div>

          {/* get in touch */}
          <div className="col-span-2 sm:col-span-1">

            <h3 className="mb-4 text-[17px] font-bold text-[#18233b] sm:text-[18px] lg:text-[19px]">
              Get in Touch
            </h3>

            <div className="space-y-3">

              {/* email */}
              <div>
                <p className="mb-1 text-[13px] text-gray-600 sm:text-[14px]">
                  Email:
                </p>

                <a href="mailto:info@gni.edu.in" className="break-all text-[13px] text-[#ff6b35] underline underline-offset-2 sm:text-[14px]">
                  info@gni.edu.in
                </a>
              </div>

              {/* phone */}
              <div>
                <p className="mb-1 text-[13px] text-gray-600 sm:text-[14px]">
                  Phone:
                </p>

                <a href="tel:+91989650140" className="text-[13px] text-[#ff6b35] underline underline-offset-2 sm:text-[14px]">
                  (+91) 98965-00140
                </a>

                <span className="text-[13px] text-gray-500 sm:text-[14px]">
                  {" "}
                  (+91) 99986-00140
                </span>
              </div>

              {/* address */}
              <div>
                <p className="mb-1 text-[13px] text-gray-600 sm:text-[14px]">
                  Address:
                </p>

                <p className="text-[13px] leading-[1.6] text-gray-600 sm:text-[14px]">
                  Guru Nanak Institutions
                  <br />
                  Hema Majra Road, Mullana (Ambala)
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* copyright */}
      <div className="border-t border-gray-200">

        <div className="mx-auto max-w-7xl px-5 py-4 text-center sm:px-8 lg:px-10">

          <p className="flex flex-wrap items-center justify-center gap-1 text-[11px] leading-5 text-gray-500 sm:text-[12px] md:text-[13px]">
            <FaRegCopyright className="shrink-0 text-[11px] sm:text-[12px]" />
            2026{" "}
            <span className="text-[#ff6b35]">
              Jindal&apos;s Guru Nanak Institutions Mullana
            </span>{" "}
            - All rights reserved. Developed and Maintained by:{" "}
            <span className="underline">
              SKYLINE INFOSOLUTIONS PVT. LTD.
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;