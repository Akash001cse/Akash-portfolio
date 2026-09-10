import { Section, Reveal, useCountUp } from "./ui";
import { ACHIEVEMENTS } from "./data";

function Counter({ a }: { a: (typeof ACHIEVEMENTS)[number] }) {
  const { ref, display } = useCountUp(a.value, a.decimals ?? 0);
  return (
    <div className="glass neon-glow rounded-2xl p-6 text-center transition-transform hover:-translate-y-1.5">
      <p className="text-4xl font-bold text-gradient">
        {a.text ? a.text : <span ref={ref}>{display}</span>}
        {!a.text && <span className="text-2xl">{a.suffix}</span>}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{a.label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones along my journey.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.08}><Counter a={a} /></Reveal>
        ))}
      </div>
    </Section>
  );
}
