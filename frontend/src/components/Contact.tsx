export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-accent-blue/5 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let&apos;s Connect
        </h2>
        
        <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
          I&apos;m always open to new opportunities, collaborations, and conversations. 
          Whether you have a project in mind or just want to chat about marketing and digital strategy, 
          feel free to reach out!
        </p>
        
        <div className="space-y-6">
          <a
            href="mailto:stephaniehyangcho@gmail.com"
            className="inline-flex items-center gap-2 text-lg text-foreground border-b-2 border-accent-blue/50 hover:border-accent-blue transition-colors duration-300 pb-1"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Send me an email
          </a>
          
          <div className="pt-8">
            <p className="text-sm text-foreground/50 mb-4">Or find me on social media</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://xhslink.com/m/3UeMnrSmjJd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent-blue transition-colors"
              >
                小红书
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

