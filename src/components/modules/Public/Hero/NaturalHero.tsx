"use client";
import NeuralNoise from "@/components/ui/neural-noise";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Play, Sparkles } from "lucide-react";
import { AlignJustify, X } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import { Drawer } from "vaul";
import AboutSection from "./About";

const NeutralHero = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section
      className=" min-h-screen relative pb-10 bg-cover bg-center bg-no-repeat bg-black"
      ref={heroRef}
    >
      <TimelineContent
        as="figure"
        className="absolute top-0 left-0 w-full h-full"
        animationNum={5}
        timelineRef={heroRef}
        customVariants={revealVariants}
      >
        <NeuralNoise />
      </TimelineContent>

      <TimelineContent
        as="header"
        animationNum={0}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="max-w-7xl flex gap-2 z-50 text-white backdrop-blur-xl bg-black/15 top-2 rounded-lg items-center justify-between mx-auto p-4 sticky"
      >
        {!isMobile ? (
          <>
            <h1 className="text-xl uppercase">Obidy Hasan</h1>
            <nav className="flex gap-4 font-medium">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Solutions</a>
              <a href="#">Resources</a>
              <a href="#">Blog</a>
            </nav>
            <button className="text-lg h-10 px-4 rounded-lg text-white flex items-center gap-2 bg-neutral-800 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-t before:from-neutral-800 before:to-neutral-300 before:rounded-t-lg  transition-all group">
              Log In
            </button>
          </>
        ) : (
          <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="px-2 text-white h-9 grid place-content-center bg-neutral-800 w-fit rounded-lg">
              <AlignJustify />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Drawer.Content
                className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
                style={
                  {
                    "--initial-transform": "calc(100% + 8px)",
                  } as React.CSSProperties
                }
              >
                <div className="bg-gradient-to-t from-black via-neutral-800 to-neutral-950 border border-neutral-400 text-white p-2 h-full w-full grow flex flex-col rounded-[16px]">
                  <div className="w-full flex justify-between">
                    <div className="flex gap-2 px-4 flex-shrink-0 items-center text-2xl font-semibold  ">
                      <span>LOGO</span>
                    </div>
                    <button
                      className="rounded-md w-fit bg-neutral-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </button>
                  </div>
                  <div className="rounded-b-md py-2 px-3">
                    <ul className="space-y-2">
                      <li className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md">
                        Features
                      </li>
                      <li className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md">
                        Pricing
                      </li>
                      <li className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md">
                        Solutions
                      </li>
                      <li className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md">
                        Resources
                      </li>
                      <li className="hover:bg-neutral-800 cursor-pointer p-1.5 px-2 rounded-md">
                        Blog
                      </li>
                    </ul>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )}
      </TimelineContent>
      <article className="xl:px-0 px-4 text-white py-32 w-fit max-w-4xl mx-auto text-center space-y-4 relative z-10">
        <h1 className="2xl:text-6xl sm:text-5xl text-4xl font-semibold text-white mb-6 capitalize">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0.4, // After header (animationNum 0)
            }}
          >
            A Smarter Way to Manage Your Content.
          </VerticalCutReveal>
        </h1>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="2xl:max-w-3xl max-w-2xl mx-auto sm:text-base text-sm 2xl:text-lg"
        >
          Our AI-powered content management platform streamlines your workflow,
          saving you time and effort while ensuring your content is always fresh
          and engaging.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="flex gap-2 mt-5 mx-auto w-fit"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white bg-gradient-to-t from-blue-600 to-blue-800 shadow-md shadow-blue-600 border border-blue-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <Sparkles size={20} />
              Get started
            </button>
            <button className="text-white bg-gradient-to-t from-neutral-900 to-neutral-800 shadow-md shadow-neutral-900 border border-neutral-900 px-4 py-2 rounded-lg flex items-center gap-2">
              Watch demo
              <Play size={20} />
            </button>
          </div>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={3}
          timelineRef={heroRef}
          customVariants={revealVariants}
        >
          {" "}
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={4}
        timelineRef={heroRef}
        customVariants={revealVariants}
        className="relative max-w-7xl mx-auto"
      >
        <figure className="rounded-lg p-4 text-white backdrop-blur-lg bg-white/5 ">
          <AboutSection />
        </figure>
      </TimelineContent>
    </section>
  );
};

export default NeutralHero;
