import { CheckCircle2 } from "lucide-react";
import { Section, Reveal } from "./ui";
import { PROFILE, ABOUT_HIGHLIGHTS } from "./data";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know who I am and what drives me.">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">{PROFILE.about}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((h, i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="glass flex items-center gap-3 rounded-xl px-4 py-3 transition-transform hover:scale-[1.03]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="glass neon-glow rounded-2xl p-8 text-center">
            <p className="text-5xl font-bold text-gradient">CSE '27</p>
            <p className="mt-2 text-muted-foreground">Final-year Engineering Student</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div><p className="text-3xl font-bold text-primary">8.8</p><p className="text-xs text-muted-foreground">CGPA</p></div>
              <div><p className="text-3xl font-bold text-primary">100+</p><p className="text-xs text-muted-foreground">LeetCode Problems</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
