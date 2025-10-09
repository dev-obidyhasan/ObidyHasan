import { Marquee } from "@/components/ui/marquee";
import { SkillCard } from "./SkillCard";
import { ISkill } from "@/types";

const SkillSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: skills = [] } = await res.json();

  return (
    <div id="skills">
      <div className="relative w-full text-center pt-20 pb-10 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl font-fira">
            Technologies I Use
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-dart03">
            Technologies and tools I use to build modern, scalable, and
            interactive websites.
          </p>
        </div>
        <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {skills
              ?.filter((skill: ISkill) => skill?.category === "FRONTEND")
              .map((skill: ISkill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {skills
              ?.filter((skill: ISkill) => skill?.category === "BACKEND")
              .map((skill: ISkill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </Marquee>

          <div className="from-black to-transparent pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-black to-transparent pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
