import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#691506] text-slate-300 px-6 py-8 font-tagesschrift">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/anugrasabyanjali?igsh=MWZqOGk5YWVqeHN0cQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="hover:text-white cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/anjali-rawat-448588396/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="hover:text-white cursor-pointer" />
          </a>

          <a
            href="https://www.youtube.com/@anugrasa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}
