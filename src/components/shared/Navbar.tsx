import Link from "next/link";
import { Jersey_10 } from "next/font/google";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import NavbarMenu from "../modules/Public/Navbar/NavbarMenu";
import NavbarPopover from "../modules/Public/Navbar/NavbarPopover";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const isLoggedIn = () => {
    return false;
  };
  return (
    <div className="max-w-6xl mx-auto sticky top-4 px-4  z-[100]">
      <MagicCard
        gradientColor="#262626"
        className="w-full h-full border rounded-full bg-black px-4 py-2 "
      >
        <div className="flex items-center justify-between ">
          <div className="flex gap-2">
            <div className="md:hidden">
              <NavbarPopover />
            </div>
            <Link href={"/"}>
              <h1 className={`${jersey.className} text-3xl px-2`}>Naim</h1>
            </Link>
          </div>
          <NavbarMenu />
          <div className="w-fit">
            {isLoggedIn() ? (
              <Button className="rounded-full" variant={"secondary"} asChild>
                <Link href={"/dashboard/profile"}>Dashboard</Link>
              </Button>
            ) : (
              <Button className="rounded-full" variant={"secondary"} asChild>
                <Link href={"/login"}>Login</Link>
              </Button>
            )}
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default Navbar;
