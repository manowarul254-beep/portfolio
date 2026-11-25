"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

/* ====== আপনার তথ্য এখানে বদলান ====== */
const DATA = {
  name: "MD. MANOWARUL ISLAM",
  intro: "I turn Figma designs into fast, responsive websites using React, Next.js and Tailwind CSS.",
  email: "manowarul254@gmail.com",
  about: ["I’m a frontend developer who loves turning ideas and Figma designs into clean, responsive websites. I work with React, Next.js and Tailwind CSS, and I’ve built projects like an e-commerce store, a fashion shop UI and a business invoice system.", "I care about the small details: pixel-perfect layouts, smooth animations and fast loading on every device. I learn quickly, communicate clearly and always deliver on time, so working with me feels simple and stress-free."],
  skills: [
    { n: "React", v: 80, c: "#22D3EE" }, { n: "Tailwind CSS", v: 85, c: "#C6F432" },
    { n: "JavaScript", v: 75, c: "#FFD84A" }, { n: "Next.js", v: 70, c: "#8B5CF6" },
    { n: "Figma to Code", v: 70, c: "#FF4D8D" }, { n: "Git & GitHub", v: 65, c: "#34D399" },
  ],
  projects: [
   { t: "My E-commerce Store", cat: "React", d: "Product pages, cart and checkout built from a Figma design.", c: "#C6F432", c2: "#22D3EE", live: "https://fasco-brown.vercel.app/", git: "https://github.com/manowarul254-beep/fasco.git" },
    { t: "My E-commerce Store", cat: "React", d: "Online store with product listing, category filters, pagination and a responsive cart experience.", c: "#8B5CF6", c2: "#FF4D8D",live: "https://exclusive-teal.vercel.app", git: "https://github.com/manowarul254-beep/Exclusive.git" },
    { t: "[PROJECT 4]", cat: "Tailwind", d: "[SHORT DESCRIPTION]", c: "#22D3EE", c2: "#8B5CF6",live: "https://digital-agency-hksr.vercel.app/", git: "https://github.com/manowarul254-beep/digital-agency.git" },
  ],
};
const NAV = ["About", "Skills", "Projects", "Services", "Journey", "FAQ", "Contact"];
const fade = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };


function Sec({ id, label, title, c, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pt-32">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
        <motion.span variants={fade} className="inline-block rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.25em]"
          style={{ color: c, borderColor: c + "66", background: c + "18" }}>{label}</motion.span>
        <motion.h2 variants={fade} className="mb-14 mt-5 text-4xl font-bold leading-tight md:text-6xl">{title}</motion.h2>
        {children}
      </motion.div>
    </section>
  );
}

/* গ্রেডিয়েন্ট বর্ডারওয়ালা কার্ড */
function GCard({ c = "#C6F432", c2 = "#FF4D8D", className = "", children }) {
  return (
    <motion.div variants={fade} whileHover={{ y: -10, scale: 1.02 }} className={`group relative rounded-3xl p-[1.5px] ${className}`}
      style={{ background: `linear-gradient(135deg, ${c}, transparent 45%, ${c2})` }}>
      <div className="absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50" style={{ background: c }} />
      <div className="relative h-full overflow-hidden rounded-[22px] bg-[#13131C] p-6">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl" style={{ background: c }} />
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B10]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold"><span className="grad-text">{DATA.name}</span></a>
        <nav className="hidden gap-7 text-zinc-400 md:flex">
          {NAV.map((n, i) => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:-translate-y-0.5 hover:text-white">{n}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[#FF4D8D] to-[#FF9F1C] px-5 py-2.5 text-sm font-bold text-black md:block">Hire me</a>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="min-h-11 min-w-11 text-2xl md:hidden">{open ? "✕" : "☰"}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-4 overflow-hidden px-6 pb-5 text-zinc-300 md:hidden">
            {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

const ROLES = ["Frontend Developer", "React Developer", "Next.js Developer", "UI Designer"];

/* ধীরে ফুটে ওঠা → মিলিয়ে যাওয়া → পরের লেখা */
function Typer() {
  const [ready, setReady] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => { const t = setTimeout(() => setReady(true), 2400); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setI((n) => (n + 1) % ROLES.length), 3800);
    return () => clearTimeout(t);
  }, [ready, i]);
  return (
    <div className="mt-6 flex h-10 items-center gap-3 text-2xl font-bold">
      {ready && <span className="text-zinc-500">I’m a</span>}
      <AnimatePresence mode="wait">
        {ready && (
          <motion.div key={i} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -8, transition: { duration: 0.8 } }} className="text-[#22D3EE]">
            {ROLES[i].split("").map((ch, k) => (
              <motion.span key={k} className="inline-block" variants={{ hidden: { opacity: 0, y: 10, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}>
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const words = ["I", "build", "web", "products", "that"];
  const chips = [["React", "#22D3EE", "-top-2 -left-6"], ["Tailwind", "#C6F432", "top-16 -right-8"], ["Next.js", "#8B5CF6", "bottom-20 -left-10"], ["Framer", "#FF4D8D", "-bottom-2 right-4"]];
  return (
    <div id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 md:grid-cols-[1.3fr_1fr]">
      <div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6F432]/40 bg-[#C6F432]/10 px-4 py-1.5 text-sm text-[#C6F432]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#C6F432]" /> Open to work &amp; freelance
        </motion.p>
        <h1 className="text-5xl font-bold leading-[1.02] md:text-7xl">
          {words.map((w, i) => (
            <motion.span key={w} className="mr-4 inline-block" initial={{ opacity: 0, y: 24, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.3 * i, duration: 1.1 }}>{w}</motion.span>
          ))}
          <motion.span className="grad-text inline-block" initial={{ opacity: 0, y: 24, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 1.5, duration: 1.2 }}>stand out.</motion.span>
        </h1>
        <Typer />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1.2 }} className="mt-4 max-w-xl text-xl text-zinc-400">{DATA.intro}</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3, duration: 1 }} className="mt-9 flex flex-wrap gap-4">
          <motion.a href="#projects" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }} className="min-h-12 rounded-full bg-gradient-to-r from-[#C6F432] via-[#22D3EE] to-[#8B5CF6] px-8 py-3.5 font-bold text-black shadow-[0_0_40px_#22D3EE55]">View my work →</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.07 }} className="min-h-12 rounded-full border border-[#FF4D8D]/60 px-8 py-3.5 text-[#FF4D8D] transition hover:bg-[#FF4D8D] hover:text-black">Let’s talk</motion.a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="glow-ring absolute inset-0 rounded-full blur-[2px]" />
        <div className="absolute inset-[6px] overflow-hidden rounded-full bg-[#13131C]"><Image src="/me.jpg" alt="Portrait of MD. MANOWARUL ISLAM" fill priority sizes="400px" className="object-cover" /></div>
        {chips.map(([t, c, pos], i) => (
          <motion.span key={t} animate={{ y: [0, -12, 0] }} transition={{ duration: 3 + i, repeat: Infinity }} className={`absolute ${pos} rounded-2xl px-4 py-2 text-sm font-bold text-black shadow-xl`} style={{ background: c }}>{t}</motion.span>
        ))}
      </motion.div>
    </div>
  );
}

const Marquee = () => {
  const items = [["React", "#22D3EE"], ["Next.js", "#8B5CF6"], ["Tailwind", "#C6F432"], ["JavaScript", "#FFD84A"], ["Framer Motion", "#FF4D8D"], ["Figma", "#FF9F1C"], ["Git", "#34D399"]];
  const row = [...items, ...items].map(([w, c], i) => <span key={i} className="mx-6 text-4xl font-bold" style={{ color: c }}>{w} <span className="text-white/30">✦</span></span>);
  return (
    <div className="mt-28 overflow-hidden whitespace-nowrap border-y border-white/10 bg-white/[0.03] py-6">
      <motion.div className="inline-flex" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>{row}{row}</motion.div>
    </div>
  );
};

/* সলিড রঙিন কার্ড */
const Highlights = () => (
  <Sec id="why" label="WHY ME" c="#FF9F1C" title={<>What I <span className="grad-text">bring</span></>}>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[["⚡", "Fast learner", "I pick up new tools quickly.", "#22D3EE"], ["🎯", "Detail-focused", "Pixel-perfect from Figma.", "#8B5CF6"], ["📱", "Responsive", "Great on every screen.", "#FF4D8D"], ["🤝", "Reliable", "Clear talk, on-time work.", "#34D399"]].map(([i, t, d, c], k) => (
        <motion.div key={t} variants={fade} whileHover={{ rotate: k % 2 ? 2 : -2, y: -8 }} className="rounded-3xl p-6 text-black" style={{ background: c }}>
          <div className="text-4xl">{i}</div><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-1 font-medium opacity-80">{d}</p>
        </motion.div>
      ))}
    </div>
  </Sec>
);

const About = () => (
  <Sec id="about" label="ABOUT" c="#22D3EE" title={<>A little <span className="grad-text">about me</span></>}>
    <div className="grid items-center gap-12 md:grid-cols-2">
      <motion.div variants={fade} className="relative">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-[#8B5CF6] to-[#FF4D8D]" />
        <div className="relative h-96 overflow-hidden rounded-[2rem] bg-[#13131C]"><Image src="/me.jpg" alt="Portrait of MD. MANOWARUL ISLAM" fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover object-top" /></div>
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-5 -left-5 rounded-2xl bg-[#22D3EE] px-4 py-2 text-sm font-bold text-black shadow-xl">React Developer</motion.span>
        <motion.span animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -right-3 -top-4 rounded-2xl bg-[#FF4D8D] px-4 py-2 text-sm font-bold text-black shadow-xl">Next.js ✦</motion.span>
      </motion.div>
      <motion.div variants={fade} className="space-y-5 text-lg text-zinc-300">
        {DATA.about.map((p, i) => <p key={i}>{p}</p>)}
        <div className="flex flex-wrap gap-3 pt-2">{[["Dhaka, BD", "#22D3EE"], ["Frontend", "#C6F432"], ["Available", "#FF4D8D"]].map(([t, c]) => <span key={t} className="rounded-full px-4 py-1.5 text-sm font-bold text-black" style={{ background: c }}>{t}</span>)}</div>
      </motion.div>
    </div>
  </Sec>
);

const Skills = () => (
  <Sec id="skills" label="SKILLS" c="#C6F432" title={<>My <span className="grad-text">toolbox</span></>}>
    <div className="grid gap-6 md:grid-cols-2">
      {DATA.skills.map((s) => (
        <GCard key={s.n} c={s.c} c2="#8B5CF6">
          <div className="mb-3 flex justify-between"><span className="text-lg font-bold">{s.n}</span><span className="font-bold" style={{ color: s.c }}>{s.v}%</span></div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${s.c}, #fff8)`, boxShadow: `0 0 18px ${s.c}` }} initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} viewport={{ once: true }} transition={{ duration: 1.3, ease: "easeOut" }} />
          </div>
        </GCard>
      ))}
    </div>
  </Sec>
);

const Projects = () => {
  const cats = ["All", ...new Set(DATA.projects.map((p) => p.cat))];
  const [f, setF] = useState("All");
  const list = DATA.projects.filter((p) => f === "All" || p.cat === f);
  return (
    <Sec id="projects" label="PROJECTS" c="#FF4D8D" title={<>Selected <span className="grad-text">work</span></>}>
      <motion.div variants={fade} className="mb-10 flex flex-wrap gap-3">
        {cats.map((c) => <button key={c} onClick={() => setF(c)} className={`min-h-11 rounded-full px-6 font-bold transition ${f === c ? "bg-gradient-to-r from-[#C6F432] to-[#22D3EE] text-black" : "border border-white/15 text-zinc-300 hover:border-[#C6F432]"}`}>{c}</button>)}
      </motion.div>
      <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div layout key={p.t} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#13131C] transition-shadow duration-500 hover:shadow-[0_20px_60px_var(--sh)]" style={{ "--sh": p.c + "55" }}>
              <div className="relative flex h-52 items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.c}, ${p.c2})` }}>
                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/25" /><div className="absolute -bottom-10 right-4 h-40 w-40 rounded-full bg-black/15" />
                <span className="relative text-7xl font-bold text-black/80 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-125">0{i + 1}</span>
              </div>
              <div className="p-6">
                <span className="rounded-full px-3 py-1 text-xs font-bold text-black" style={{ background: p.c }}>{p.cat}</span>
                <h3 className="mt-3 text-xl font-bold">{p.t}</h3>
                <p className="mt-1 text-zinc-400">{p.d}</p>
                <div className="mt-5 flex gap-5 text-sm font-bold">
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: p.c }}>Live demo ↗</a>}
                  {p.git && <a href={p.git} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">GitHub ↗</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Sec>
  );
};
const Services = () => (
  <Sec id="services" label="SERVICES" c="#8B5CF6" title={<>What I can <span className="grad-text">build for you</span></>}>
    <div className="grid gap-6 md:grid-cols-3">
      {[["Portfolio & Business Sites", "Modern, fast, responsive websites.", "#C6F432", "#22D3EE"], ["E-commerce UI", "Product, cart and checkout screens.", "#FF4D8D", "#FF9F1C"], ["Figma to React", "Your design turned into clean code.", "#8B5CF6", "#22D3EE"]].map(([t, d, c, c2], i) => (
        <GCard key={t} c={c} c2={c2}>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-black" style={{ background: `linear-gradient(135deg, ${c}, ${c2})` }}>{i + 1}</div>
          <h3 className="mt-6 text-2xl font-bold">{t}</h3><p className="mt-2 text-zinc-400">{d}</p>
        </GCard>
      ))}
    </div>
  </Sec>
);

const Journey = () => (
  <Sec id="journey" label="JOURNEY" c="#FF9F1C" title={<>My learning <span className="grad-text">journey</span></>}>
    <div className="relative space-y-6 pl-10">
      <div className="absolute bottom-2 left-[11px] top-2 w-1 rounded-full bg-gradient-to-b from-[#34D399] via-[#C6F432] to-[#FF4D8D]" />
      {[["DONE", "HTML, CSS, JavaScript", "#34D399"], ["DONE", "React & Tailwind CSS projects", "#22D3EE"], ["NOW", "Next.js & Framer Motion", "#C6F432"], ["NEXT", "Backend & full-stack projects", "#FF4D8D"]].map(([s, t, c]) => (
        <motion.div key={t} variants={fade} whileHover={{ x: 8 }} className="relative rounded-2xl border border-white/10 bg-[#13131C] p-5">
          <span className="absolute -left-[38px] top-6 h-6 w-6 rounded-full ring-4 ring-[#0B0B10]" style={{ background: c, boxShadow: `0 0 20px ${c}` }} />
          <span className="text-xs font-bold tracking-widest" style={{ color: c }}>{s}</span><h3 className="text-xl font-bold">{t}</h3>
        </motion.div>
      ))}
    </div>
  </Sec>
);

const FAQ = () => {
  const [o, setO] = useState(0);
  const q = [["How long does a project take?", "[YOUR ANSWER]", "#22D3EE"], ["Do you work with Figma designs?", "Yes, I convert Figma designs into responsive React + Tailwind code.", "#FF4D8D"], ["How can we start?", "Send me a message through the contact form below.", "#C6F432"]];
  return (
    <Sec id="faq" label="FAQ" c="#22D3EE" title={<>Common <span className="grad-text">questions</span></>}>
      <div className="space-y-4">
        {q.map(([a, b, c], i) => (
          <motion.div key={a} variants={fade} className="overflow-hidden rounded-2xl border bg-[#13131C]" style={{ borderColor: o === i ? c : "#ffffff1a" }}>
            <button onClick={() => setO(o === i ? -1 : i)} className="flex min-h-16 w-full items-center justify-between px-6 text-left text-lg font-bold">{a}<span className="text-2xl" style={{ color: c }}>{o === i ? "−" : "+"}</span></button>
            <AnimatePresence>{o === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-6 pb-5 text-zinc-400">{b}</motion.p>}</AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Sec>
  );
};

const Contact = () => (
  <section id="contact" className="mx-auto max-w-6xl px-6 pt-32">
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-[#1B1440] via-[#13131C] to-[#0E2A33] p-8 md:p-14">
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#8B5CF6]/35 blur-3xl" /><div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#FF4D8D]/25 blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-2">
        <div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Let’s work <span className="grad-text">together!</span></h2>
          <p className="mt-4 text-lg text-zinc-300">Have a project in mind? Send me a message.</p>
          <p className="mt-6 text-xl font-bold text-[#22D3EE]">{DATA.email}</p><p className="mt-2 text-zinc-400">GitHub · LinkedIn · Facebook</p></div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {["Name", "Email"].map((l) => <input key={l} placeholder={l} aria-label={l} className="min-h-12 w-full rounded-xl border border-white/15 bg-[#0B0B10]/70 px-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#22D3EE]" />)}
          <textarea rows="4" placeholder="Message" aria-label="Message" className="w-full rounded-xl border border-white/15 bg-[#0B0B10]/70 p-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#22D3EE]" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="min-h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D8D] px-8 font-bold text-white shadow-[0_0_30px_#8B5CF655]">Send message →</motion.button>
        </form>
      </div>
    </motion.div>
  </section>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [top, setTop] = useState(false);
  useEffect(() => { const f = () => setTop(window.scrollY > 600); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className="dots relative overflow-x-clip">
      <motion.div style={{ scaleX: bar }} className="fixed left-0 top-0 z-50 h-1.5 w-full origin-left bg-gradient-to-r from-[#C6F432] via-[#22D3EE] via-[#8B5CF6] to-[#FF4D8D]" />
      <div className="pointer-events-none fixed -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#8B5CF6] opacity-35 blur-[110px]" />
      <div className="pointer-events-none fixed -right-24 top-1/3 h-96 w-96 rounded-full bg-[#FF4D8D] opacity-30 blur-[110px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#22D3EE] opacity-25 blur-[110px]" />
      <div className="pointer-events-none fixed right-1/4 top-0 h-72 w-72 rounded-full bg-[#C6F432] opacity-15 blur-[110px]" />
      <Navbar /><Hero /><Marquee /><Highlights /><About /><Skills /><Projects /><Services /><Journey /><FAQ /><Contact />
      <footer className="mx-auto mt-28 flex max-w-6xl flex-wrap justify-between gap-3 px-6 pb-10 text-sm text-zinc-500"><span>© 2026 {DATA.name}</span><span>Built with Next.js, Tailwind &amp; Framer Motion</span></footer>
      <AnimatePresence>{top && <motion.a href="#top" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#C6F432] to-[#22D3EE] font-bold text-black shadow-lg">↑</motion.a>}</AnimatePresence>
    </div>
  );
}