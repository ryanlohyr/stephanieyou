"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ShowcaseItem {
  src: string;
  type: "image" | "video";
  company: string;
  alt: string;
  description: string;
  link?: string;
  stats?: string;
}

const showcaseData: ShowcaseItem[] = [
  // LearnKata
  {
    src: "/showcase/learnkata/chrome-skit.mp4",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata content 1",
    description: "Educational skit demonstrating Chrome browser safety and best practices for online learning.",
    stats: "500K+ views",
  },
  {
    src: "/showcase/learnkata/illegal-skit.MOV",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata skit",
    description: "Engaging content about digital citizenship and understanding online regulations.",
    stats: "350K+ views",
  },
  {
    src: "/showcase/learnkata/sleep-skit.mp4",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata sleep skit",
    description: "Creative piece highlighting the importance of healthy sleep habits for students.",
    stats: "420K+ views",
  },
  // ThinkPink
  {
    src: "/showcase/thinkpink/Day of indulgence_1028.mp4",
    type: "video",
    company: "ThinkPink Foundation",
    alt: "ThinkPink Day of Indulgence",
    description: "Day of Indulgence event coverage showcasing breast cancer awareness initiatives and community support.",
    link: "https://thinkpink.org.au",
  },
  {
    src: "/showcase/thinkpink/IMG_0426.PNG",
    type: "image",
    company: "ThinkPink Foundation",
    alt: "ThinkPink content 1",
    description: "Social media campaign promoting breast cancer awareness and early detection.",
  },
  {
    src: "/showcase/thinkpink/IMG_0427.PNG",
    type: "image",
    company: "ThinkPink Foundation",
    alt: "ThinkPink content 2",
    description: "Community engagement content for ThinkPink Foundation's fundraising initiatives.",
  },
  // Toyota
  {
    src: "/showcase/toyota/demo-1.png",
    type: "image",
    company: "Toyota",
    alt: "Toyota work 1",
    description: "Marketing campaign showcasing Toyota's latest vehicle features and innovation.",
  },
  {
    src: "/showcase/toyota/demo-2.png",
    type: "image",
    company: "Toyota",
    alt: "Toyota work 2",
    description: "Brand content highlighting Toyota's commitment to sustainability and performance.",
  },
];

const companies = [...new Set(showcaseData.map((item) => item.company))];

export default function Showcase() {
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  const filteredItems =
    selectedCompany === "All"
      ? showcaseData
      : showcaseData.filter((item) => item.company === selectedCompany);

  return (
    <section id="showcase" className="py-20 bg-brand-blue/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Showcase
        </h2>
        <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          A collection of my work across various companies and projects
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => setSelectedCompany(company)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCompany === company
                  ? "bg-accent-blue text-white shadow-lg"
                  : "bg-white/80 text-foreground/60 hover:bg-white hover:text-foreground shadow-sm"
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                <div className="flex flex-col h-full">
                  <div
                    className="group relative aspect-9/16 bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                          <svg
                            className="w-12 h-12 text-white opacity-80"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium text-xs">{item.company}</p>
                    </div>
                  </div>
                  
                  {/* Description, Stats, and Link */}
                  <div className="mt-3 px-1">
                    <p className="text-sm text-foreground/80 mb-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      {item.stats && (
                        <span className="text-xs text-accent-blue font-medium">
                          {item.stats}
                        </span>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent-blue hover:underline font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/50 text-lg">
              No work available for this filter
            </p>
          </div>
        )}
      </div>

      {/* Modal/Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            &times;
          </button>
          <div
            className="max-w-5xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
            <div className="text-white text-center mt-4">
              <p className="text-lg font-medium mb-2">{selectedItem.company}</p>
              <p className="text-sm text-white/80 mb-3 max-w-2xl mx-auto">
                {selectedItem.description}
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {selectedItem.stats && (
                  <span className="text-xs text-blue-400 font-medium">
                    {selectedItem.stats}
                  </span>
                )}
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

