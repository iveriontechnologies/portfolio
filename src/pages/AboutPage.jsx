import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import aboutCards from "@/lib/aboutData";
import { data } from "@/lib/images";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 md:gap-16 p-4 md:p-8">
      <div>
        <h1 className="text-4xl font-bold">About Me</h1>
        <h3 className="text-xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-tertiary)] bg-clip-text text-transparent">
          Bridging Reality and Creativity
        </h3>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Developing beautiful and functional websites is what I love doing, and
          that's why I give my all in every new challenge. When I work on a
          project, I strive to create solutions that are not only visually
          appealing but also provide an excellent user experience. I believe
          that great design and functionality go hand in hand to create
          memorable digital experiences. It has been a journey of continuous
          learning and growth, and I am excited to see where it takes me.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} size="sm">
                <CardHeader>
                  <Icon className="w-6 h-6 text-[var(--color-secondary)]" />
                  <CardTitle className="text-sm font-semibold">
                    {card.title}
                  </CardTitle>
                  <CardDescription>
                    <p className="text-muted-foreground text-xs">
                      {card.description}
                    </p>
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
      {/* image */}

      <div className="w-full md:w-[420px] shrink-0 border border-[var(--color-accent)] overflow-hidden cursor-pointer">
        <img src={data.about_me} alt="About Image" className="w-full " />
      </div>
    </div>
  );
};

export default AboutPage;
