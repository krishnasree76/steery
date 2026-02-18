import { Phone, Mail, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-heading font-extrabold tracking-tight">
              Steer<span className="text-accent">y</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-1">Personal Driving Training · Hyderabad</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:7671978080" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Phone">
              <Phone size={18} />
            </a>
            <a href="mailto:venkatsaisai77@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://www.instagram.com/drivingtrainer_hyd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com/@drivingtrainer_hyd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} Steery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
