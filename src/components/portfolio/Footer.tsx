import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { MapPin } from "lucide-react";
import { PROFILE, NAV_LINKS } from "./data";

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="glass mt-10 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-gradient">{PROFILE.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{PROFILE.role}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> {PROFILE.location}</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {NAV_LINKS.slice(0, 8).map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-left text-sm text-muted-foreground hover:text-primary">{l.label}</button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <div className="mt-3 flex gap-3">
            {[
              { Icon: FaLinkedin, url: PROFILE.socials.linkedin },
              { Icon: FaGithub, url: PROFILE.socials.github },
              { Icon: SiLeetcode, url: PROFILE.socials.leetcode },
              { Icon: SiCodechef, url: PROFILE.socials.codechef },
            ].map(({ Icon, url }, k) => (
              <a key={k} href={url} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-muted text-lg transition-all hover:scale-110 hover:text-primary">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t pt-6 text-center text-sm text-muted-foreground">
        <p>© 2026 Akash A. All Rights Reserved.</p>
        <p className="mt-1">Designed &amp; Developed by Akash A</p>
      </div>
    </footer>
  );
}
