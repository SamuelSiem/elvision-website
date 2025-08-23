'use client';

import Image from 'next/image';
import { useState } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

type Client = {
  name: string;
  src: string;
};

const clients: Client[] = [
  { name: 'Rubicon Organics', src: '/images/clients/rubicon.png' },
  { name: 'Makeship', src: '/images/clients/makeship.png' },
  { name: 'Rocky Mountaineer', src: '/images/clients/rocky-mountaineer.png' },
  { name: 'Best Buy', src: '/images/clients/best-buy.png' },
  { name: 'Pattison Food Group', src: '/images/clients/pattison-food-group.png' },
];

export default function Clients() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <Section id="clients" background="dark" className="py-16">
      <SectionTitle
        title="Trusted by forward‑thinking teams"
        subtitle="A selection of brands Ive partnered with"
        className="mb-10"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-center">
              {!failed[c.name] ? (
                <div className="relative h-10 md:h-12 w-36 md:w-40 opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className="object-contain mix-blend-screen invert brightness-200"
                    onError={() => setFailed((f) => ({ ...f, [c.name]: true }))}
                    priority={false}
                  />
                </div>
              ) : (
                <span className="text-main-secondary/80 text-sm md:text-base">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


