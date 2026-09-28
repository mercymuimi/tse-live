import Hero from "@/components/home/Hero";
import EventIntro from "@/components/home/EventIntro";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import VendorPreview from "@/components/home/VendorPreview";
import SchedulePreview from "@/components/home/SchedulePreview";
import Location from "@/components/home/Location";
import TicketCTA from "@/components/home/TicketCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventIntro />
      <ExperiencePreview />
      <VendorPreview />
      <SchedulePreview />
      <Location />
      <TicketCTA />
    </main>
  );
}