import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, MapPin, Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { PROFILE } from "./data";
import profileImg from "@/assets/profile/profile-placeholder.jpg";

function Typing() {
  const roles = PROFILE.typingRoles;
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setTxt(full.slice(0, txt.length + 1));
        if (txt === full) setTimeout(() => setDel(true), 1200);
      } else {
        setTxt(full.slice(0, txt.length - 1));
        if (txt === "") {
          setDel(false);
          setI((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i, roles]);

  return (
    <span className="text-gradient font-semibold">
      {txt}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}



export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8 lg:px-12">
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-neon-blue/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-neon-purple/20 blur-3xl" />
        {Array.from({ length: 18 }).map((_, k) => (
          <motion.span
            key={k}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{ left: `${(k * 53) % 100}%`, top: `${(k * 37) % 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + (k % 4), repeat: Infinity, delay: k * 0.2 }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Hi, I'm
          </p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <p className="mt-3 text-xl font-medium sm:text-2xl">
            <Typing />
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">{PROFILE.summary}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#resume" className="bg-gradient-hero neon-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
              <Eye className="h-4 w-4" /> View Resume
            </a>
            <a href="/assets/resume/Akash_A_Resume.pdf" download className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {PROFILE.location}</span>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground"><Mail className="h-4 w-4 text-primary" /> {PROFILE.email}</a>
            <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-1.5 hover:text-foreground"><Phone className="h-4 w-4 text-primary" /> {PROFILE.phone}</a>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              { Icon: FaLinkedin, url: PROFILE.socials.linkedin },
              { Icon: FaGithub, url: PROFILE.socials.github },
              { Icon: SiLeetcode, url: PROFILE.socials.leetcode },
              { Icon: SiCodechef, url: PROFILE.socials.codechef },
            ].map(({ Icon, url }, k) => (
              <a key={k} href={url} target="_blank" rel="noreferrer" className="glass grid h-11 w-11 place-items-center rounded-full text-lg transition-all hover:scale-110 hover:text-primary">
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="relative h-[380px] w-[290px] sm:h-[420px] sm:w-[320px]">
            <motion.div
              className="absolute -inset-1 rounded-[2rem] bg-gradient-hero opacity-70 blur-md"
              animate={{ opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-2 border-background">
              {/* <!-- Replace with Profile Photo --> */}
              <img src={profileImg} alt="Akash A portrait" className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
