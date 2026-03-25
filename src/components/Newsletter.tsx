import { Mail } from "lucide-react";

const Newsletter = () => (
  <section className="container my-10">
    <div className="bg-newsletter text-newsletter-foreground rounded-lg px-6 md:px-16 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <h2 className="font-integral text-2xl md:text-4xl leading-tight text-center md:text-left max-w-md">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <div className="relative">
          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-primary-foreground text-foreground rounded-full pl-11 pr-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button className="bg-primary-foreground text-foreground rounded-full py-3 text-sm font-medium hover:opacity-90 transition-opacity">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
