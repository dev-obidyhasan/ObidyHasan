"use client";
import { Button } from "@/components/ui/button";
import { HiMenuAlt4 } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";
import { getNavbarLinks } from "./NavbarLink";
import { scroller } from "react-scroll";

const NavbarPopover = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <HiMenuAlt4 />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ml-5 mt-5 max-w-[200px]">
        {getNavbarLinks(pathname, navigateAndScroll)}
      </PopoverContent>
    </Popover>
  );
};

export default NavbarPopover;
