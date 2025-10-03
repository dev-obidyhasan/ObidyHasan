import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="flex flex-col items-center gap-10  mx-auto max-w-7xl md:flex-row">
        <div className="w-full sm:w-4/6 md:w-2/6">
          <figure className="w-full h-[500px]">
            <Image
              src="https://res.cloudinary.com/drkyqxkqw/image/upload/v1756707585/picofme_6_a_rosa65.png"
              className="object-cover w-full h-full rounded-full bg-dart02"
              alt="image"
              width={400}
              height={500}
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
          <Button className="mt-8 btn btn-outline text-light01 font-fira">
            Explore Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
