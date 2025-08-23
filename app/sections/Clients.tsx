'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

type Client = {
  name: string;
  src: string;
};

const clients: Client[] = [
  { name: 'Colliers International', src: 'https://drive.google.com/file/d/1B3a4bvhfMcwEui_wWN3rBG4uWgKMNnJd/view' },
  { name: 'Makeship', src: 'https://drive.google.com/file/d/1ICuriyZE3UtKyXUhqEYK5MsaPSmnpUDx/view' },
  { name: 'Best Buy', src: 'https://drive.google.com/file/d/1Zi1CZFqOXg3YWaXF1M7KSfD8maiaAcWI/view' },
  { name: 'Pattison Food Group', src: 'https://drive.google.com/file/d/1fkRTWDtt6PlKOCrl7QrpIpV__39bscOu/view' },
  { name: 'Rubicon Organics', src: 'https://drive.google.com/file/d/1dR2VefIVjBKqqVhVFyXVvpAHqt9tIb1Z/view' },
  { name: 'Rocky Mountaineer', src: 'https://drive.google.com/file/d/1swLoCwK7ZLIQEPfg_zS7FcbBE-_j7IDf/view' },
  { name: 'RBC Royal Bank', src: 'https://drive.google.com/file/d/1MUrOtIJxaicOUXC6VQd1R2pTXolupM_B/view' },
];

export default function Clients() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const toDirect = (src: string): string => {
    // Convert Google Drive "view" URL to direct CDN URL usable by next/image
    // e.g. https://drive.google.com/file/d/<ID>/view -> https://lh3.googleusercontent.com/d/<ID>=s500
    const match = src.match(/\/d\/([^/]+)/);
    if (match) {
      return `https://lh3.googleusercontent.com/d/${match[1]}=s500`;
    }
    return src;
  };

  return (
    <Section id="clients" background="dark" className="py-16">
      <SectionTitle
        title="Trusted by forward‑thinking teams"
        subtitle="A selection of brands I've partnered with"
        className="mb-10"
      />

      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-10 md:gap-14 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...clients, ...clients].map((c, idx) => (
              <div key={`${c.name}-${idx}`} className="flex-shrink-0">
                {!failed[c.name] ? (
                  <div className="relative h-10 md:h-12 w-36 md:w-40 opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src={toDirect(c.src)}
                      alt={c.name}
                      fill
                      sizes="160px"
                      className="object-contain grayscale brightness-200"
                      onError={() => setFailed((f) => ({ ...f, [c.name]: true }))}
                    />
                  </div>
                ) : (
                  <span className="text-main-secondary/80 text-sm md:text-base">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}


