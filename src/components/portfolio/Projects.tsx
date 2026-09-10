import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, Sparkles, ListChecks, Wrench, Lightbulb } from "lucide-react";
import { Section, Reveal } from "./ui";
import { PROJECTS } from "./data";

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects" subtitle="A selection of things I've built.">
      <div className="grid gap-7 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div
              onClick={() => setActive(p)}
              className="glass group h-full cursor-pointer overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-hero">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">{p.role}</p>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{t}</span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold text-primary">Click to view details →</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-7"
            >
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-muted hover:bg-muted-foreground/20">
                <X className="h-4 w-4" />
              </button>
              <div className="mb-5 h-56 overflow-hidden rounded-xl">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">{active.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{active.role}</p>

              <Block icon={Sparkles} title="Project Overview">{active.overview}</Block>
              <Block icon={ListChecks} title="Key Features">
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {active.features.map((f) => <li key={f} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{f}</li>)}
                </ul>
              </Block>
              <Block icon={Wrench} title="Technologies Used">
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>)}
                </div>
              </Block>
              <Block icon={Lightbulb} title="Challenges Faced">{active.challenges}</Block>
              <Block icon={Lightbulb} title="Solutions Implemented">{active.solutions}</Block>

              <div className="mt-6 flex gap-3">
                <a href={active.github} target="_blank" rel="noreferrer" className="bg-gradient-hero inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:scale-105"><Github className="h-4 w-4" /> View on GitHub</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Block({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h4 className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        <Icon className="h-4 w-4 text-primary" /> {title}
      </h4>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
