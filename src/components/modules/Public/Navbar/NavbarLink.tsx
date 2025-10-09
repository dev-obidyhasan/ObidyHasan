"use client";

import { Link as LinkScroll } from "react-scroll";

const activeClass = "text-green01 underline font-semibold";

export const getNavbarLinks = (
  pathname: string,
  navigateAndScroll: (to: string) => void
) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 md:flex-row">
      {["home", "about", "skills", "projects", "blogs", "contact"].map(
        (section) =>
          pathname === "/" ? (
            <LinkScroll
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={section === "home" ? -50 : -50}
              duration={500}
              activeClass={activeClass}
              className="cursor-pointer hover:underline"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </LinkScroll>
          ) : (
            <button
              key={section}
              onClick={() => navigateAndScroll(section)}
              className="cursor-pointer hover:underline"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          )
      )}
    </div>
  );
};
