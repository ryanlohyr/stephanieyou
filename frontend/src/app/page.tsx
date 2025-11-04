import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";

const experiences = [
  {
    company: "ThinkPink Foundation, Melbourne",
    role: "Social Media Intern",
    period: "Oct 2025 - Present",
    description:
      "Lead end-to-end IG/Facebook content; design event assets; capture on-site coverage. Manage community and sponsors; track reach/saves/shares; refine topics and formats.",
    socialMedia: "https://www.instagram.com/think.pink.foundation/",
  },
  {
    company: "LearnKata, Remote",
    role: "Marketing Lead",
    period: "Oct 2025 - Present",
    description:
      "Lead B2C edtech marketing from strategy to execution: research trends, design campaigns, optimize SEO, and produce video content.",
    socialMedia: "https://www.tiktok.com/@learnkata",
  },
  {
    company: "Weber Shandwick, Shenzhen",
    role: "Public Relation Intern",
    period: "Sep 2024 - Jan 2025",
    description:
      "International launches (TECNO @ CES, MINISO North America, URBAN REVIVO Bangkok); secured 50+ media/KOL and 80+ earned pieces. Consolidated publicly available exposure metrics into a single tracker (platform exports, press coverage); standardized definitions and issued weekly snapshots.",
  },
  {
    company: "Mandarin Oriental, Macau",
    role: "Management Trainee",
    period: "Jan 2024 - Jul 2024",
    description:
      "Compiled weekly Fans of M.O. sign-up reports, cleaned and tagged by channel (Front Office, F&B, QR/web), and produced a one-page snapshot with conversion rates and placement suggestions for Marketing/CRM.",
  },
  {
    company: "McCann Worldgroup, Shanghai",
    role: "Account Executive Intern",
    period: "Jun 2023 - Sep 2023",
    description:
      "Drove day-to-day AE ops across Dyson Zone, Acqua Panna, MINISO (and other consumer accounts): media/KOL sourcing, bilingual press kits, asset trafficking, cross-team alignment. Consolidated publicly available exposure data into a single tracker and issued concise weekly status reports to guide timing, creatives, and seeding.",
  },
  {
    company: "Publicis Groupe, Shanghai",
    role: "Account Executive Intern",
    period: "Jan 2023 - Mar 2023",
    description:
      "Supported Chevrolet new-model launch event: coordinated venue, vendors, run-of-show and event coverage tracking, issuing next-day highlights to the client. Built press/KOL outreach lists and localized press kit; handled media check-in and post-event coverage tracking.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline experiences={experiences} />
      <Contact />
    </div>
  );
}
