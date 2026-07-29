import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Sparkles } from 'lucide-react';

export default function Location() {
  const mapAddress = "St. Mary's Cathedral, Marine Drive, Kochi, Kerala 682031";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;

  return (
    <section id="location" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Venue</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            Church & Map Location
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-xl mx-auto">
            Find your way to celebrate with us at St. Mary's Cathedral.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 border border-gold/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                St. Mary's Cathedral
              </h3>
              <p className="text-gold text-xs font-cinzel uppercase tracking-widest mb-6">
                Cathedral Basilica of Kochi
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-grayText font-poppins mb-8">
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Marine Drive, Broadway Junction, Kochi, Kerala 682031</span>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Landmark: Opposite Marine Drive Promenade</span>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full gold-button font-cinzel text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>

          </motion.div>

          {/* Right Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl overflow-hidden border border-gold/30 min-h-[360px] relative group"
          >
            <iframe
              title="Baptism Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0838183182885!2d76.2758!3d9.9790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d507b5a83cd%3A0x2fa581ff25b29bc2!2sSt.%20Mary&#39;s%20Cathedral%20Basilica%2C%20Ernakulam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0 filter grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/40 text-[11px] text-gold font-cinzel">
              📍 Kochi, Kerala
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
