import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl">
        {/* Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-brand-orange/20">
          <Image
            src="/image.png"
            alt="Stephanie You"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Text content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hello, I&apos;m Stephanie
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60">
            Aspiring Marketer based in Melbourne
          </p>
          <p className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-xl mx-auto pt-4">
            I am a masters student studying at the University of Melbourne, passionate about creating meaningful digital experiences and building communities.
          </p>
        </div>
      </div>
      
      {/* Arrow pointing down */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground/40"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
}

