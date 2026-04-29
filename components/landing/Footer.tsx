'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#security' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: '📱', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '📧', label: 'Email', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent mb-4 inline-block">
              Cineku
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Platform sosial media untuk kreator film yang menghubungkan filmmaker, talent, dan kru produksi dengan cara yang seamless dan profitable.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-amber-500/20 border border-gray-700 hover:border-amber-500/50 flex items-center justify-center text-lg transition-all duration-200"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Cineku. Semua hak dilindungi.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Status Page
            </a>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Hubungi Kami
            </a>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
