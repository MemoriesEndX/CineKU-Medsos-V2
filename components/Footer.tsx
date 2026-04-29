import Link from 'next/link';
import { Film } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Film className="w-6 h-6 text-amber-400" />
              <span className="font-bold text-lg text-white">Cineku</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Platform digital untuk showcase, discovery, portfolio, dan kolaborasi filmmaker
              Indonesia. Membangun ekosistem film lokal yang lebih baik dan sustainable.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Produk
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Tentang Cineku
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#how" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Cineku. All rights reserved. Built with ❤️ for Indonesian filmmakers.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
