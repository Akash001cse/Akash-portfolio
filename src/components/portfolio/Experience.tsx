import { Briefcase } from "lucide-react";
import { Section, Reveal } from "./ui";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <Section id="experience" title="Internship & Experience" subtitle="Where I've applied and grown my skills.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-hero md:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className={`relative pl-14 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className={`absolute top-1.5 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero text-white left-0 md:left-auto ${i % 2 ? "md:-left-5" : "md:-right-5"}`}>
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{e.duration}</p>
                  <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                  <div className={`mt-3 flex flex-wrap gap-2 ${i % 2 ? "" : "md:justify-end"}`}>
                    {e.points.map((p) => <span key={p} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{p}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
