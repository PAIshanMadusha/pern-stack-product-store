import { ShoppingCartIcon, GithubIcon, MailIcon, HomeIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-content/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 font-mono font-bold text-xl text-primary">
            <ShoppingCartIcon className="size-6 text-primary" />
            PRODUCT STORE
          </span>
          <span className="text-sm text-base-content/60 ml-2">
            © {new Date().getFullYear()} | Developed by PAIshanMadusha
          </span>
        </div>
        {/* Links */}
        <div className="flex gap-6 text-base-content/60 text-sm">
          <a
            href="https://github.com/PAIshanMadusha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href="mailto:support@example.com"
            className="hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            <MailIcon className="size-4" />
            Contact
          </a>
          <a
            href="/"
            className="hover:text-primary transition-colors font-medium flex items-center gap-1"
          >
            <HomeIcon className="size-4" />
            Home
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;