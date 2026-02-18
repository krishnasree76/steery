import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917671978080?text=Hi%20Venkat,%20I%20want%20to%20join%20driving%20classes%20at%20Steery.%20Please%20share%20details.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center whatsapp-pulse transition-transform hover:scale-110"
      style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
