'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

export default function PlatformPreview() {

  const films = [
    {
      id: 1,
      title: 'Kaset Terakhir',
      creator: 'Raka Pratama',
      genre: 'Drama',
      views: '2.4K',
    },
    {
      id: 2,
      title: 'Di Balik Lampu Kota',
      creator: 'Naya Putri',
      genre: 'Thriller',
      views: '1.8K',
    },
    {
      id: 3,
      title: 'Langit Setelah Hujan',
      creator: 'Studio Senja',
      genre: 'Drama',
      views: '3.2K',
    },
  ];

  return (
    <motion.section 
      className="py-20 bg-slate-900 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Preview Platform Cineku
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Lihat bagaimana film-film Indonesia ditampilkan di Cineku dengan desain modern dan
            user experience yang intuitif.
          </motion.p>
        </div>

        {/* Preview Container */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 p-8 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Mock Browser Header */}
          <div className="mb-6 pb-6 border-b border-slate-700/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
            </div>
            <div className="text-sm text-slate-500 bg-slate-800/50 rounded px-3 py-2">
              https://cineku.id/discover
            </div>
          </div>

          {/* Mock Content */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Cari film atau kreator..."
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-500 text-sm"
                readOnly
              />
              <button className="px-6 py-3 bg-amber-500 text-slate-950 font-semibold rounded-lg text-sm hover:bg-amber-400 transition-colors">
                Cari
              </button>
            </div>

            {/* Film Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {films.map((film) => (
                <div
                  key={film.id}
                  className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/30 hover:border-amber-500/30 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all">
                    <Play className="w-12 h-12 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">
                      {film.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">{film.creator}</p>

                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded">
                        {film.genre}
                      </span>
                      <span className="text-slate-500">{film.views} views</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 text-slate-400">
                      <button className="flex items-center gap-1 text-xs hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center gap-1 text-xs hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center gap-1 text-xs hover:text-amber-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action below preview */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-400 mb-4">
            Interface yang intuitif dan responsif untuk pengalaman terbaik di semua perangkat.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
