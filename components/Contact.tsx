import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-6 py-20 text-center font-tagesschrift bg-[#691506]" >
      <h2 className="text-3xl font-semibold text-[#FFFFFF]">
        Ready to Order?
      </h2>

      <p className="mt-4 text-[#FFFFFF]">
        Place your order directly with us for freshness and personal care.
      </p>

      <a
        href="https://wa.me/919148772221" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        <MessageCircle size={20} />
        WhatsApp to Order
      </a>
    </section>
  );
}
