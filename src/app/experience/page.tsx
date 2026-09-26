import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperiencePillars from "@/components/experience/ExperiencePillars";
import ExperienceSpaces from "@/components/experience/ExperienceSpaces";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata = {
  title: "Experience | The Styled Edit Live",
  description:
    "Discover the fashion, culture, creativity and community behind The Styled Edit Live.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ExperienceHero />
      <ExperiencePillars />
      <ExperienceSpaces />
      <ExperienceTimeline />
      <ExperienceCTA />
    </main>
  );
}