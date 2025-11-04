"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function About() {
  const brands = [
    { name: "Think Pink", image: "/brands/think-pink.png", url: "https://www.thinkpink.org.au/" },
    { name: "Chevrolet", image: "/brands/chevrolet.png", url: "https://www.chevrolet.com/" },
    { name: "Acqua Panna", image: "/brands/acquapanna.png", url: "https://www.acquapanna.com/" },
    { name: "Dyson", image: "/brands/dyson.png", url: "https://www.dyson.com/" },
    { name: "Urban Revivo", image: "/brands/urban-revivo.png", url: "https://www.urbanrevivo.com/" },
    { name: "Miniso", image: "/brands/miniso.png", url: "https://www.miniso.com/" },
    { name: "Techno", image: "/brands/techno.png", url: "https://www.tecno-mobile.com/" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const getItemVariants = (index: number, totalItems: number): Variants => {
    const center = (totalItems - 1) / 2;
    const distanceFromCenter = Math.abs(index - center);
    const delay = distanceFromCenter * 0.1;

    return {
      hidden: { opacity: 0, scale: 0, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
        },
      },
    };
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-b from-background to-brand-blue/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
          <p>
            I&apos;m a passionate masters student at the University of Melbourne, specializing in marketing 
            and digital strategy. I completed my bachelor&apos;s degree in Macau, where I developed a strong 
            foundation in business and marketing principles. My journey in marketing began with a deep 
            curiosity about how brands connect with their audiences in meaningful ways.
          </p>
          
          <p>
            Through my academic pursuits and hands-on experience managing social media accounts, I&apos;ve 
            developed a unique perspective on creating engaging content and building authentic communities. 
            I believe that great marketing is about telling stories that resonate and creating experiences 
            that matter.
          </p>
          
          <p>
            When I&apos;m not studying or working on digital campaigns, you can find me rock climbing or 
            diving, staying updated with the latest marketing trends, and continuously learning 
            new ways to make an impact in the digital space.
          </p>
          
          <div className="pt-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Brands whose marketing campaigns I have contributed to
            </h3>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {brands.map((brand, index) => (
                <motion.a
                  key={index}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-26 h-26 rounded-full overflow-hidden bg-white/10 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  variants={getItemVariants(index, brands.length)}
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover p-2"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

