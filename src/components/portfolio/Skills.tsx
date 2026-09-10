import { motion } from "framer-motion";
import { Section, Reveal } from "./ui";
import { SKILL_GROUPS } from "./data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <h3 className="mb-5 text-lg font-semibold text-gradient">{group.title}</h3>
              <div className="space-y-4">
                {group.items.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-2 font-medium">
                          <Icon className="h-4 w-4 text-primary" /> {s.name}
                        </span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-gradient-hero"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
