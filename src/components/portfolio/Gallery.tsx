import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Section, Reveal } from "./ui";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "./data";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const shown = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);

  const close = useCallback(() => { setIndex(null); setZoom(1); }, []);
  const next = useCallback(() => { setIndex((i) => (i === null ? i : (i + 1) % shown.length)); setZoom(1); }, [shown.length]);
  const prev = useCallback(() => { setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length)); setZoom(1); }, [shown.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  return (
    <Section id="gallery" title="Gallery & Events" subtitle="Workshops, hackathons, industrial visits, symposiums and internship moments.">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              filter === c ? "bg-gradient-hero text-white" : "glass hover:scale-105"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((item, i) => (
            <motion.button
              layout key={item.id}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIndex(i)}
              className="glass group relative block w-full overflow-hidden rounded-2xl p-0 text-left"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img src={item.image} alt={item.caption} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-2 group-hover:ring-primary" />
              <div className="flex min-h-[64px] items-center bg-background/80 p-3 text-xs font-medium leading-snug backdrop-blur-sm">
                {item.caption}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={close} />
            <button onClick={close} className="glass absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full"><X className="h-5 w-5" /></button>
            <button onClick={prev} className="glass absolute left-4 z-10 grid h-11 w-11 place-items-center rounded-full"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={next} className="glass absolute right-4 z-10 grid h-11 w-11 place-items-center rounded-full"><ChevronRight className="h-5 w-5" /></button>
            <div className="absolute bottom-6 z-10 flex gap-2">
              <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} className="glass grid h-11 w-11 place-items-center rounded-full"><ZoomIn className="h-5 w-5" /></button>
              <button onClick={() => setZoom((z) => Math.max(z - 0.25, 1))} className="glass grid h-11 w-11 place-items-center rounded-full"><ZoomOut className="h-5 w-5" /></button>
            </div>
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onWheel={(e) => setZoom((z) => Math.min(Math.max(z - e.deltaY * 0.002, 1), 3))}
              className="relative z-[1] max-h-[80vh] w-[90vw] max-w-4xl overflow-hidden rounded-2xl bg-black"
            >
              <img src={shown[index].image} alt={shown[index].caption} className="mx-auto max-h-[80vh] object-contain transition-transform duration-200" style={{ transform: `scale(${zoom})` }} />
              <p className="absolute inset-x-0 bottom-0 bg-black/60 p-3 text-center text-sm font-medium text-white">{shown[index].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
