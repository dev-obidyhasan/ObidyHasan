import AnimatedDots from "@/components/ui/animated-dots";
import Earth from "@/components/ui/globe";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-full min-h-screen text-white max-w-6xl mx-auto">
        <div className="w-full min-h-screen">
          {/* Hero Content */}
          <section>
            <div className="flex flex-col items-center justify-center px-5 py-20 mx-auto text-center mt-12 max-w-6xl">
              <h2 className="flex items-center gap-2 mt-2 text-lg text-dart03">
                <span>Hey There, This is</span>
                <span className="text-xl font-medium text-light01 font-fira">
                  Obidy Hasan Naim
                </span>
              </h2>
              <h1 className="font-fira font-semibold text-4xl sm:text-5xl md:text-7xl my-5">
                Full-Stack Web Developer
              </h1>
              {/* <span className="pointer-events-none bg-gradient-to-b to-black from-gray-300/100 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
                Meteors
              </span> */}
              <p className="max-w-xl mx-auto text-dart03">
                My goal is to{" "}
                <span className="text-light01">write maintainable, clean</span>{" "}
                and <span className="text-light01">understandable</span> code to
                process development was enjoyable.
              </p>
              {/* <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                <Link
                  to={
                    "https://drive.google.com/file/d/17YmDiTyI5wda3sGpmNT4Oe1XRTey0q1S/view?usp=sharing"
                  }
                  target="_blank"
                  className="btn btn-outline text-light01 font-fira"
                >
                  Resume
                </Link>

                <Link
                  to={"https://github.com/obidyhasan"}
                  target="_blank"
                  className="p-3 border rounded-lg border-light01"
                >
                  <FaGithub className="text-xl"></FaGithub>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/obidyhasan/"}
                  target="_blank"
                  className="p-3 border rounded-lg border-light01"
                >
                  <FaLinkedinIn className="text-xl"></FaLinkedinIn>
                </Link>
                <Link
                  to={"https://www.facebook.com/obidyhasan/"}
                  target="_blank"
                  className="p-3 border rounded-lg border-light01"
                >
                  <FaFacebookF className="text-xl"></FaFacebookF>
                </Link>
              </div> */}
            </div>
          </section>
        </div>
        <div className="absolute top-2/5 flex justify-center w-full">
          <div className="absolute h-fit w-full ">
            <div className="flex items-center justify-center">
              <AnimatedDots />
            </div>
          </div>
          <Earth className="max-w-5xl z-[0] w-full h-full" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
