import { Eye, Download, Printer, FileText } from "lucide-react";
import { Section, Reveal } from "./ui";

const RESUME_URL = "/assets/resume/Akash_A_Resume.pdf";

export default function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="Preview, download or print my resume.">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="glass neon-glow mx-auto flex aspect-[1/1.3] w-full max-w-xs flex-col items-center justify-center rounded-2xl p-8">
            <FileText className="h-20 w-20 text-primary" />
            <p className="mt-4 font-semibold">Akash_A_Resume.pdf</p>
            <p className="text-xs text-muted-foreground">PDF Document</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              My complete resume covers my education, technical skills, projects, internships and achievements.
              View it inline, download a copy, or print it directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="bg-gradient-hero inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white hover:scale-105"><Eye className="h-4 w-4" /> View Resume</a>
              <a href={RESUME_URL} download className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:scale-105"><Download className="h-4 w-4" /> Download</a>
              <button onClick={() => window.open(RESUME_URL)?.print?.()} className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:scale-105"><Printer className="h-4 w-4" /> Print</button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
