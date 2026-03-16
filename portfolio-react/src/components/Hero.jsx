import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaYoutube, FaReact, FaAws, FaPython, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiTypescript, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FiArrowDown } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { roles } from "../data";

const ALL_ICONS = [
  { Icon: FaReact,      color: "#61DAFB", label: "React"      },
  { Icon: SiFlutter,    color: "#54C5F8", label: "Flutter"    },
  { Icon: FaAws,        color: "#FF9900", label: "AWS"        },
  { Icon: FaPython,     color: "#3776AB", label: "Python"     },
  { Icon: FaNodeJs,     color: "#339933", label: "Node.js"    },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiMongodb,    color: "#47A248", label: "MongoDB"    },
  { Icon: SiNextdotjs,  color: "#000000", label: "Next.js"    },
];

// 3 fixed anchor positions relative to the avatar center
const SLOTS = [
  { x: -110, y: -80  }, // top-left
  { x:  115, y: -60  }, // top-right
  { x:   90, y:  100 }, // bottom-right
];

// gentle float offsets per slot so they don't all move in sync
const FLOATS = [
  { y: [-6, 6],  dur: 3.2 },
  { y: [5, -7],  dur: 2.8 },
  { y: [-5, 7],  dur: 3.6 },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp  = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function TechBadge({ icon, float }) {
  const { Icon, color, label } = icon;
  return (
    <motion.div
      key={label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white/90 px-3 py-2 shadow-lg shadow-gray-900/[0.07] backdrop-blur-sm dark:border-gray-700/60 dark:bg-gray-800/90 dark:shadow-gray-950/20"
    >
      <Icon size={18} style={{ color }} />
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(roles);

  // track which icon index is shown in each slot
  const [slotIndices, setSlotIndices] = useState([0, 1, 2]);
  const [swappingSlot, setSwappingSlot] = useState(null);

  useEffect(() => {
    // every 2.5s pick a random slot and advance its icon
    const id = setInterval(() => {
      const slot = Math.floor(Math.random() * SLOTS.length);
      setSwappingSlot(slot);
      setSlotIndices((prev) => {
        const next = [...prev];
        // find next icon not currently visible
        const used = new Set(prev);
        let candidate = (prev[slot] + 1) % ALL_ICONS.length;
        while (used.has(candidate)) candidate = (candidate + 1) % ALL_ICONS.length;
        next[slot] = candidate;
        return next;
      });
      setTimeout(() => setSwappingSlot(null), 400);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-5">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#5361ff]/[0.08] blur-[100px] dark:bg-[#5361ff]/[0.15]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#7b68ee]/[0.06] blur-[100px] dark:bg-[#7b68ee]/[0.12]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 py-16 lg:flex-row lg:justify-between lg:gap-16 lg:py-0">

        {/* ── Text column ── */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl text-center lg:text-left">
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5361ff]/20 bg-[#5361ff]/[0.06] px-4 py-1.5 text-xs font-medium text-[#5361ff] dark:border-[#5361ff]/30 dark:bg-[#5361ff]/[0.1]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5361ff] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5361ff]" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#5361ff] to-[#7b68ee] bg-clip-text text-transparent">Snehasis</span>
              <motion.span className="absolute -bottom-1 left-0 h-3 w-full rounded-sm bg-[#5361ff]/10 dark:bg-[#5361ff]/20"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }} />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 h-8 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#5361ff] align-middle" style={{ height: "1.2em" }} />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Building innovative digital products and helping beginners learn through tutorials.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="https://github.com/Snehasis4321" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/20 dark:bg-white dark:text-gray-900">
              <FaGithub size={18} className="transition-transform duration-300 group-hover:rotate-12" /> Github
            </a>
            <a href="https://www.youtube.com/@Snehasis4321" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border-2 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:text-red-600 hover:shadow-xl hover:shadow-red-500/10 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-red-500/40 dark:hover:text-red-400">
              <FaYoutube size={18} className="transition-transform duration-300 group-hover:scale-110" /> Youtube
            </a>
          </motion.div>
        </motion.div>

        {/* ── Avatar + floating tech badges ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
          style={{ width: 300, height: 300 }}
        >
          {/* Soft glow */}
          <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-[#5361ff]/20 to-[#7b68ee]/20 blur-2xl dark:from-[#5361ff]/30 dark:to-[#7b68ee]/30" />

          {/* Avatar */}
          <img
            src="https://avatars.githubusercontent.com/u/96995340"
            alt="Snehasis Ghosh"
            className="relative z-[2] h-52 w-52 rounded-full object-cover shadow-2xl shadow-[#5361ff]/15 ring-4 ring-white dark:ring-gray-800 sm:h-60 sm:w-60"
            loading="eager"
          />

          {/* 3 floating tech badges at fixed positions */}
          {SLOTS.map((pos, slotIdx) => (
            <motion.div
              key={slotIdx}
              className="absolute z-10"
              style={{ left: "50%", top: "50%", marginLeft: -60, marginTop: -20 }}
              animate={{ x: [pos.x, pos.x], y: [pos.y + FLOATS[slotIdx].y[0], pos.y + FLOATS[slotIdx].y[1]] }}
              transition={{ duration: FLOATS[slotIdx].dur, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                <TechBadge
                  key={ALL_ICONS[slotIndices[slotIdx]].label}
                  icon={ALL_ICONS[slotIndices[slotIdx]]}
                  float={FLOATS[slotIdx]}
                />
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <FiArrowDown className="text-gray-400 dark:text-gray-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
