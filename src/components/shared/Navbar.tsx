import Link from "next/link";
import { Jersey_10 } from "next/font/google";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import NavbarMenu from "../modules/Public/Navbar/NavbarMenu";
import NavbarPopover from "../modules/Public/Navbar/NavbarPopover";
import { IProfile } from "@/types";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user?email=${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data } = await res.json();
  const profile: IProfile = data;

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
            {profile?.resumeUrl ? (
              <Button className="rounded-full" variant={"secondary"}>
                <Link href={profile?.resumeUrl} target="_blank">
                  Resume
                </Link>
              </Button>
            ) : (
              <Button className="rounded-full" variant={"secondary"} asChild>
                <Link href={"/"}>Resume</Link>
              </Button>
            )}
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default Navbar;
