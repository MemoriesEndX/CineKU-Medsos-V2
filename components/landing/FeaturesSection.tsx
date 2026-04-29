'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/landing';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform lengkap dengan teknologi terdepan untuk pengalaman pemilahan production yang maksimal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br ${feature.color} transition-opacity duration-300 -z-10`}
              />

              {/* Icon */}
              <div className="text-5xl mb-4 inline-block">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
