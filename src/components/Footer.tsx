import { siteConfig } from "@/lib/data";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold">
              <span className="text-crimson">&lt;</span>
              Prem
              <span className="text-navy-light"> /</span>
              <span className="text-crimson">&gt;</span>
            </a>
            <p className="text-muted text-sm mt-1">
              Building the web, one line at a time.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-crimson transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-crimson transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-crimson transition-colors text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted text-sm flex items-center justify-center gap-1">
            Made with <FaHeart className="text-crimson text-xs" /> by Prem Raj Oli
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
