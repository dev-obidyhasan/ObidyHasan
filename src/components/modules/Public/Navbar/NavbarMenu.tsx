"use client";
import { usePathname, useRouter } from "next/navigation";
import { getNavbarLinks } from "./NavbarLink";
import { scroller } from "react-scroll";

const NavbarMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <menu>
      <div className="hidden navbar-center md:flex">
        <nav>{getNavbarLinks(pathname, navigateAndScroll)}</nav>
      </div>
    </menu>
  );
};

export default NavbarMenu;
