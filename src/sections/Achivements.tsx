import BetaMLSA from "@/assets/images/LevelBeta.png";
import DesignHub from "@/assets/images/designhub.png";
import amazonIcon from "@/assets/images/amazon.png";
import adobeIcon from "@/assets/images/adobe.png";
import hackathonIcon from "@assets/images/computer.png";
import SIH from "@/assets/images/SIH.png";
import Hacktober from "@/assets/images/hacktober.png";
import Bertelsmann from "@/assets/images/Bertelsmann.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

export const Achievements = [
  {
    title: "Adobe India Hackathon",
    description: "Become a participant in a national level hackathon organized by Adobe",
    year: "2025",
    icon: adobeIcon,
  },
  {
    title: "Amazon HackOn Season 5",
    description: "Successfully qualified for and competed up to Round 2 in a nationwide hackathon organized by Amazon.",
    year: "2025",
    icon: amazonIcon,
  },
  {
    title: "CodeNex Hackathon",
    description: "Become a Finalist and gain lots of experience in development",
    year: "2024",
    icon: hackathonIcon,
  },
  
];


export const AchivementsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-full md:max-w-4xl lg:max-w-[100rem] mx-auto">
        <SectionHeader
          eyebrow="Achivements"
          title="What I have accomplished till now?"
          description="Doing many amazing things has been a part of my college life, but there's still a lot to be done, so I'm working on it."
        />

        <div
          className="mt-12 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {Achievements.map((achievement) => (
                  <Card
                    key={achievement.title}
                    className="max-w-[23rem] md:max-w-md p-6 md:p-8 lg:max-w-lg hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 lg:size-20">
                        <Image
                          src={achievement.icon}
                          alt={achievement.title}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold lg:text-2xl">
                          {achievement.title}
                        </div>
                        <div className="text-sm text-white/40 lg:text-lg">
                          {achievement.year}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm text-justify md:text-base lg:text-lg">
                      {achievement.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
