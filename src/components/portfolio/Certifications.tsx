import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Download, X } from "lucide-react";
import { Section, Reveal } from "./ui";
import { CERTIFICATIONS } from "./data";

export default function Certifications() {
  const [active, setActive] = useState<(typeof CERTIFICATIONS)[number] | null>(null);
  return (
    <Section id="certifications" title="Certifications" subtitle="Verified courses and achievements.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <div className="glass group h-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5">
              <div className="h-44 overflow-hidden bg-muted">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setActive(c)} className="glass inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold hover:scale-105"><Eye className="h-3.5 w-3.5" /> View</button>
                  <a href={c.image} download className="bg-gradient-hero inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-white hover:scale-105"><Download className="h-3.5 w-3.5" /> Download</a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-background">
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white"><X className="h-4 w-4" /></button>
              <img src={active.image} alt={active.name} className="h-full w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
