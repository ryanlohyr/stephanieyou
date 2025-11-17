"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ShowcaseItem {
  src: string;
  type: "image" | "video";
  company: string;
  alt: string;
  description?: string;
  link?: string;
  stats?: string;
}

const showcaseData: ShowcaseItem[] = [
  // LearnKata
  {
    src: "/showcase/learnkata/first-vid.mp4",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata content 1",
    link: "https://www.tiktok.com/@learnkata/video/7567279937627999506?is_from_webapp=1&sender_device=pc&web_id=7541600165145806354"
  },
  {
    src: "/showcase/learnkata/illegal-skit.MOV",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata skit",
    link: 'https://www.tiktok.com/@learnkata/video/7569159330612677908?is_from_webapp=1&sender_device=pc&web_id=7541600165145806354'
  },
  {
    src: "/showcase/learnkata/sleep-skit.mp4",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata sleep skit",
    link: 'https://www.tiktok.com/@learnkata/video/7568400063815519508?is_from_webapp=1&sender_device=pc&web_id=7541600165145806354'
  },
  {
    src: "/showcase/learnkata/chrome-skit.mp4",
    type: "video",
    company: "LearnKata",
    alt: "LearnKata content 1",
  },
  // ThinkPink
  {
    src: "/showcase/thinkpink/Day of indulgence_1028.mp4",
    type: "video",
    company: "ThinkPink Foundation",
    alt: "ThinkPink Day of Indulgence",
  },
  {
    src: "/showcase/thinkpink/IMG_0426.PNG",
    type: "image",
    company: "ThinkPink Foundation",
    alt: "ThinkPink content 1",
  },
  {
    src: "/showcase/thinkpink/IMG_0427.PNG",
    type: "image",
    company: "ThinkPink Foundation",
    alt: "ThinkPink content 2",
  },
  // Toyota
  {
    src: "/showcase/toyota/demo-1.png",
    type: "image",
    company: "Toyota",
    alt: "Toyota work 1",
  },
  {
    src: "/showcase/toyota/demo-2.png",
    type: "image",
    company: "Toyota",
    alt: "Toyota work 2",
  },
];

const companies = [...new Set(showcaseData.map((item) => item.company))];

export default function Showcase() {
  const [selectedCompany, setSelectedCompany] = useState("LearnKata");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const filteredItems =
    selectedCompany === "All"
      ? showcaseData
      : showcaseData.filter((item) => item.company === selectedCompany);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    const onReInit = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    // Initialize
    onSelect();

    // Listen for changes
    api.on("select", onSelect);
    api.on("reInit", onReInit);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  // Reinitialize carousel when filtered items change
  useEffect(() => {
    if (!api) return;
    api.reInit();
  }, [api, filteredItems]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

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
          setApi={setApi}
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
                    className="group relative aspect-9/16 bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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

        {/* Pagination Dots */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-8 h-2 bg-accent-blue"
                    : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/50 text-lg">
              No work available for this filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

