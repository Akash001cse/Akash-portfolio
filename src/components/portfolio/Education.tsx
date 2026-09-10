import { GraduationCap } from "lucide-react";
import { Section, Reveal } from "./ui";
import { EDUCATION } from "./data";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic journey.">
      <div className="relative mx-auto max-w-2xl pl-8">
        <div className="absolute left-2.5 top-2 h-full w-0.5 bg-gradient-hero" />
        <div className="space-y-8">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[1.65rem] top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-hero text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="glass rounded-2xl p-6 transition-transform hover:-translate-x-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{e.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  {e.detail && <p className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{e.detail}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
