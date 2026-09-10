import { ExternalLink } from "lucide-react";
import { Section, Reveal } from "./ui";
import { CODING_PROFILES } from "./data";

export default function CodingProfiles() {
  return (
    <Section id="profiles" title="Coding Profiles" subtitle="Where I practice, compete and contribute.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CODING_PROFILES.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.name} delay={i * 0.08}>
              <a href={p.url} target="_blank" rel="noreferrer" className="glass group flex h-full flex-col items-center rounded-2xl p-6 text-center transition-transform hover:-translate-y-1.5">
                <Icon className="h-10 w-10 transition-transform group-hover:scale-110" style={{ color: p.color }} />
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.stat}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Visit <ExternalLink className="h-3 w-3" /></span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
