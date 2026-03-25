import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary pt-12 pb-6">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-border">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-integral text-2xl md:text-3xl">SHOP.CO</Link>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
          { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
          { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
          { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-medium text-sm tracking-widest mb-4">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
        <p className="text-muted-foreground text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-3">
          {["Visa", "Mastercard", "PayPal", "Apple Pay", "G Pay"].map((name) => (
            <div key={name} className="bg-background rounded px-3 py-1 text-xs font-bold border border-border">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
