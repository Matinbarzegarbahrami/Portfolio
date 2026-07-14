// app/about/page.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaUsers,
  FaCoffee,
  FaBriefcase,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";
import { MdSpeed, MdCleanHands, MdTouchApp } from "react-icons/md";

// ─── شمارنده ───────────────────────────────────────────────
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[#EAB308]">
      {count}
      {suffix}
    </span>
  );
};

// ─── آیتم تایم‌لاین ────────────────────────────────────────
const TimelineItem = ({
  year,
  title,
  description,
  index,
}: {
  year: string;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-10 border-l-2 border-[#3f3f3f] last:border-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#EAB308] border-2 border-[#242424]" />
      <span className="text-sm font-mono text-[#EAB308]">{year}</span>
      <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      <p className="text-zinc-400 mt-1">{description}</p>
    </motion.div>
  );
};

// ─── کامپوننت اصلی صفحه ──────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // ─── متون ────────────────────────────────────────────────
  const heroText = {
    persian: {
      greeting: "سلام، من متین هستم.",
      title: "توسعه‌دهنده Frontend با تمرکز روی React، Next.js و TypeScript.",
      desc: "علاقه‌مند به ساخت رابط‌های سریع، تمیز و کاربردی که فقط زیبا نباشند، بلکه واقعاً تجربه خوبی برای کاربر ایجاد کنند.",
    },
    english: {
      greeting: "Hi, I'm Matin.",
      title: "A Frontend Developer focused on React, Next.js and TypeScript.",
      desc: "building fast, clean and user-friendly web applications.",
    },
  };

  const story = {
    persian: [
      "برنامه‌نویسی را با کنجکاوی شروع کردم؛ اینکه پشت هر وب‌سایت چه اتفاقی می‌افتد برایم جذاب بود. این علاقه به مرور تبدیل به ساعت‌های طولانی یادگیری، ساخت پروژه و حل مسئله شد.",
      "امروز بیشتر زمانم را صرف توسعه پروژه‌های واقعی با Next.js و React می‌کنم و همیشه سعی دارم کدی بنویسم که علاوه بر کار کردن، قابل نگهداری و توسعه هم باشد.",
    ],
    english: [
      "I started programming out of curiosity. I wanted to understand how websites actually work behind the scenes.",
      "Over time, curiosity became a daily habit of learning, building projects and solving problems. Today I mainly work with React, Next.js and TypeScript while focusing on clean architecture, maintainable code and user experience.",
    ],
  };

  const focusItems = [
    "Building production-ready Next.js applications",
    "Learning backend architecture",
    "Improving UI/UX design skills",
    "Looking for remote frontend opportunities",
  ];

  const funFacts = [
    { icon: <FaCoffee />, label: "Coffee Driven" },
    { icon: <FaBriefcase />, label: "2+ Years Experience" },
    { icon: <FaGlobe />, label: "Open to Remote Work" },
    { icon: <FaGraduationCap />, label: "Always Learning" },
  ];

  const skills = [
    { Icon: SiReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiGit, name: "Git" },
    { Icon: SiGithub, name: "GitHub" },
    { Icon: SiPrisma, name: "Prisma" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
  ];

  const cares = [
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "⚡ Performance",
      desc: "Building applications that feel fast and responsive.",
    },
    {
      icon: <MdCleanHands className="text-3xl" />,
      title: "🧩 Clean Code",
      desc: "Readable, maintainable and scalable code over quick hacks.",
    },
    {
      icon: <MdTouchApp className="text-3xl" />,
      title: "🎯 User Experience",
      desc: "Simple interfaces that help users accomplish tasks effortlessly.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#242424] text-white overflow-x-hidden relative">
      {/* ── گرادیان شعاعی محو زرد ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#EAB308]/5 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#EAB308]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* ─── HERO ─────────────────────────────────────────── */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="space-y-2">
            <p className="text-3xl md:text-5xl font-bold text-white">
              {heroText.persian.greeting}
            </p>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              {heroText.persian.title}
            </p>
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl">
              {heroText.persian.desc}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-[#3f3f3f]">
            <p className="text-sm text-zinc-500">{heroText.english.greeting}</p>
            <p className="text-sm text-zinc-400">{heroText.english.title}</p>
            <p className="text-sm text-zinc-500">{heroText.english.desc}</p>
          </div>
        </motion.section>

        {/* ─── MY STORY (با تایم‌لاین) ───────────────────── */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            My Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {story.persian.map((p, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-4 text-sm text-zinc-400">
              {story.english.map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* تایم‌لاین */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-6">مسیر من</h3>
            <div className="relative">
              <TimelineItem
                year="۲۰۲۲"
                title="شروع کنجکاوی"
                description="آشنایی با HTML, CSS و JavaScript و ساخت اولین صفحه وب"
                index={0}
              />
              <TimelineItem
                year="۲۰۲۳"
                title="تسلط بر React"
                description="کار با React، hooks، state management و ساخت پروژه‌های شخصی"
                index={1}
              />
              <TimelineItem
                year="۲۰۲۴"
                title="ورود به Next.js"
                description="توسعه اپلیکیشن‌های full-stack با Next.js، TypeScript و Prisma"
                index={2}
              />
              <TimelineItem
                year="۲۰۲۵"
                title="تمرکز بر کیفیت و UX"
                description="بهینه‌سازی عملکرد، طراحی سیستم و همکاری در تیم‌های remote"
                index={3}
              />
            </div>
          </div>
        </section>

        {/* ─── WHAT I WORK WITH ───────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What I Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map(({ Icon, name }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#EAB308",
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.15)",
                }}
                className="bg-[#2d2d2d] border border-[#3f3f3f] rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300"
              >
                <Icon className="text-3xl md:text-4xl text-[#EAB308] mb-2" />
                <span className="text-sm text-zinc-300">{name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── WHAT I CARE ABOUT ──────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What I Care About
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {cares.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#EAB308",
                  boxShadow: "0 0 25px rgba(234, 179, 8, 0.15)",
                }}
                className="bg-[#2d2d2d] border border-[#3f3f3f] rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="flex justify-center text-[#EAB308] mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CURRENT FOCUS (بخش ویژه) ───────────────────── */}
        <section className="mb-20">
          <div className="bg-[#2d2d2d] border border-[#EAB308]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#EAB308]/5">
            <h2 className="text-2xl font-bold text-white mb-4">Current Focus</h2>
            <ul className="space-y-2 text-zinc-300">
              {focusItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#EAB308]">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── BEYOND CODING ───────────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Beyond Coding
          </h2>
          <div className="bg-[#2d2d2d] border border-[#3f3f3f] rounded-xl p-6 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              وقتی در حال برنامه‌نویسی نیستم، معمولاً در حال یادگیری تکنولوژی‌های جدید،
              توسعه پروژه‌های شخصی یا ورزش هستم.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              اعتقاد دارم بهترین راه یادگیری، ساختن پروژه‌های واقعی است.
            </p>
            <div className="pt-4 border-t border-[#3f3f3f] text-sm text-zinc-400">
              <p>Outside of coding, I enjoy learning new technologies, improving personal projects and working out.</p>
              <p>I believe the best way to learn is by building real products.</p>
            </div>
          </div>
        </section>

        {/* ─── FUN FACTS ───────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Fun Facts
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#EAB308",
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.1)",
                }}
                className="bg-[#2d2d2d] border border-[#3f3f3f] rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300"
              >
                <span className="text-2xl text-[#EAB308] mb-2">{fact.icon}</span>
                <span className="text-sm text-zinc-300">{fact.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── شمارنده پروژه‌ها ───────────────────────────── */}
        <section className="mb-20">
          <div className="bg-[#2d2d2d] border border-[#3f3f3f] rounded-xl p-8 text-center">
            <p className="text-zinc-400 mb-2">پروژه‌های ساخته شده</p>
            <Counter target={15} suffix="+" />
            <p className="text-zinc-500 text-sm mt-2">and counting...</p>
          </div>
        </section>

        {/* ─── CTA نهایی ───────────────────────────────────── */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#2d2d2d] border border-[#EAB308]/30 rounded-2xl p-8 md:p-12 shadow-xl shadow-[#EAB308]/5"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Have an idea?
            </h2>
            <p className="text-lg text-zinc-300 mb-6">
              Let's build something great together.
            </p>
            <p className="text-sm text-zinc-400 mb-6">
              Looking for a Frontend Developer? Let's talk.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#EAB308] text-[#242424] font-semibold px-8 py-3 rounded-full transition-all hover:bg-[#facc15] shadow-lg shadow-[#EAB308]/20"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}