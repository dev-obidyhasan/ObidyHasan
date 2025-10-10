"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import profile from "@/assets/profile.png";
import { ShineBorder } from "@/components/ui/shine-border";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="relative z-40 w-full text-white text-center bg-">
        <div className="flex flex-col items-center gap-10 p-4 mx-auto max-w-6xl md:flex-row">
          <div className="w-full sm:w-4/6 md:w-2/6">
            <figure className="w-full h-[500px]">
              <Image
                loading="lazy"
                src={profile}
                className="object-cover w-full h-full rounded-full"
                alt=""
                width={300}
                height={300}
              />
            </figure>
          </div>
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-2xl font-semibold sm:text-3xl font-fira">
              Get to know Me
            </h1>
            <div className="space-y-3 text-justify mt-7 text-dart03">
              {/* Introduction */}
              <p>
                {`Hi, I’m Obidy Hasan, a passionate front-end developer skilled in
            creating dynamic, responsive, and visually appealing web
            applications. My expertise lies in technologies like React, Tailwind
            CSS, and JavaScript. I thrive on solving challenging problems and
            delivering seamless user experiences.`}
              </p>
              {/* Journey */}
              <p>
                {` My journey in web development began with a curiosity for building
            interactive websites, and it has grown into a deep love for crafting
            elegant and functional digital solutions. I’ve worked on exciting
            projects like 'BPL Dream 11,' where I combined creativity and
            technical knowledge to deliver a fantasy league platform.`}
              </p>
              {/* Hobbies and Interests */}
              <p>{`When I’m not coding, I enjoy playing video games, exploring new frameworks, and honing my skills to keep pace with industry trends. Want to collaborate or learn more about me? Check out my projects below!`}</p>
            </div>
            <div className="mt-10">
              <LinkScroll
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="relative mt-8 btn btn-outline text-light01 font-fira"
              >
                <div className="relative w-max rounded-full mx-auto sm:mx-0">
                  <Button variant={"ghost"} className="rounded-full px-6 py-5">
                    Explore Projects
                  </Button>
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                </div>
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
