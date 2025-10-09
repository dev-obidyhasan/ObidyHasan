import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import logo from "@/assets/logo-icon.png";
import Image from "next/image";
import { IProfile } from "@/types";
import { Button } from "../ui/button";

const Footer = async () => {
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
    <div className="px-4 mx-auto max-w-6xl">
      <div className="px-4 py-4  border-t text-white">
        <div className="flex flex-wrap items-center justify-between gap-5 ">
          <Link href={"/"} className="flex items-center gap-2 mx-auto sm:mx-0">
            <figure>
              <Image src={logo} className="w-10 h-10" alt="logo" />
            </figure>
            <h1 className="text-lg font-bold font-fira">Obidy Hasan</h1>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-3 mx-auto sm:mx-0">
            {profile?.githubUrl && (
              <Button variant={"outline"} size={"icon"}>
                <Link href={profile?.githubUrl} target="_blank">
                  <FaGithub className="text-xl"></FaGithub>
                </Link>
              </Button>
            )}
            {profile?.linkedinUrl && (
              <Button variant={"outline"} size={"icon"}>
                <Link href={profile?.linkedinUrl} target="_blank">
                  <FaLinkedinIn className="text-xl"></FaLinkedinIn>
                </Link>
              </Button>
            )}
            {profile?.facebookUrl && (
              <Button variant={"outline"} size={"icon"}>
                <Link href={profile?.facebookUrl} target="_blank">
                  <FaFacebookF className="text-xl"></FaFacebookF>
                </Link>
              </Button>
            )}
          </div>
        </div>
        <p className="mt-4 text-xs text-center font-fira">
          © 2025 Obidy Hasan. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
