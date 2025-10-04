/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { useRouter } from "next/navigation";
import { Jersey_10 } from "next/font/google";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import { BorderBeam } from "../ui/border-beam";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const active = "text-green01 underline font-semibold";
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const navigateAndScroll = (to: string) => {
    if (window.location.pathname !== "/") {
      router.push("/");
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        offset: -50,
        duration: 500,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarLinks = (
    <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
      {["home", "about", "skills", "projects", "blogs", "contact"].map(
        (section) =>
          location.pathname === "/" ? (
            <LinkScroll
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={section === "home" ? -200 : -100}
              duration={500}
              activeClass={active}
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

  return (
    <MagicCard
      gradientColor="#262626"
      className="w-full h-full border max-w-[1120px] mx-auto sticky top-4 rounded-full bg-black  z-[100]  px-4 py-2 "
    >
      <div className="flex items-center justify-between ">
        <Link href={"/"}>
          <h1 className={`${jersey.className} text-4xl px-2`}>Naim</h1>
        </Link>
        <menu>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal ">{navbarLinks}</ul>
          </div>
        </menu>
        <div className="w-fit">
          <Button className="rounded-full" variant={"secondary"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </MagicCard>
  );
};

export default Navbar;
