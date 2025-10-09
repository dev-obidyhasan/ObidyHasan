import AnimatedDots from "@/components/ui/animated-dots";
import { Button } from "@/components/ui/button";
import Earth from "@/components/ui/globe";
import { IProfile } from "@/types";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = async () => {
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
    <div id="home">
      {/* Hero Section */}
      <section className="relative h-full  text-white max-w-6xl mx-auto">
        <div className="w-full">
          {/* Hero Content */}
          <section className="w-full mx-auto absolute top-1/5 z-50">
            <div className="flex flex-col items-center justify-center px-5 mx-auto text-center max-w-6xl">
              <h2 className="flex items-center gap-2 mt-2 text-base sm:text-lg">
                <span>
                  Hey There, This is {profile.name || `Obidy Hasan Naim`}
                </span>
              </h2>
              <h1 className="font-fira font-semibold text-4xl sm:text-5xl md:text-7xl my-5">
                {profile?.title || `Full-Stack Web Developer`}
              </h1>

              <p className="max-w-xl text-sm sm:text-base mx-auto">
                My goal is to write maintainable, clean and understandable code
                to process development was enjoyable.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                {profile?.resumeUrl && (
                  <Button variant={"outline"}>
                    <Link href={profile?.resumeUrl} target="_blank">
                      Resume
                    </Link>
                  </Button>
                )}
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
          </section>
        </div>
        <div className="flex justify-center w-full">
          <div className="absolute h-fit w-full ">
            <div className="flex items-center justify-center">
              <AnimatedDots />
            </div>
          </div>
          <Earth className="max-w-5xl z-[0] w-full h-full" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
