import { useEffect, useState } from "react";
import {
  Microscope,
  Shield,
  Activity,
  HeartPulse,
  Sparkles,
  ChevronRight,
  Clock,
  EyeOff,
  Calendar,
  Lightbulb,
  Droplet,
  Flame,
  Waves,
  Zap,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import cervixImage from "../imports/image.png";

const palette = {
  magenta: "#C21875",
  plum: "#5B2C4D",
  lilac: "#CDB4F6",
  lavender: "#9D8DF1",
  cream: "#F7F2EE",
  blush: "#F8D7E8",
  sage: "#9CC9A3",
  peach: "#F4B6A8",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "hpv", label: "HPV" },
  { id: "mechanism", label: "Cell Changes" },
  { id: "progression", label: "Progression" },
  { id: "why", label: "Why It Matters" },
  { id: "symptoms", label: "Symptoms" },
  { id: "summary", label: "Summary" },
  { id: "references", label: "References" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#F8D7E8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
          style={{ color: palette.plum }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${palette.magenta}, ${palette.lavender})`,
            }}
          >
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>
            Know HerBetter
          </span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-2 rounded-full text-sm transition-colors hover:bg-[#F8D7E8]"
              style={{ color: palette.plum }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-full"
          onClick={() => setOpen(!open)}
          style={{ color: palette.plum }}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#F8D7E8] bg-white px-6 py-3 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full text-left px-3 py-2 rounded-xl hover:bg-[#F7F2EE]"
              style={{ color: palette.plum }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function CervixIllustration() {
  return (
    <svg viewBox="0 0 320 320" className="w-full h-full">
      <defs>
        <radialGradient id="cervixGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F8D7E8" />
          <stop offset="100%" stopColor="#C21875" />
        </radialGradient>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5B2C4D" />
          <stop offset="100%" stopColor="#9D2766" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="url(#cervixGrad)" opacity="0.95" />
      <circle cx="160" cy="160" r="85" fill="#F8D7E8" opacity="0.7" />
      <circle cx="160" cy="160" r="22" fill="url(#centerGrad)" />
      {[
        [70, 80],
        [250, 70],
        [60, 240],
        [260, 250],
        [40, 160],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" fill="#9D8DF1" opacity="0.85" />
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const rad = (a * Math.PI) / 180;
            return (
              <circle
                key={a}
                cx={cx + Math.cos(rad) * 16}
                cy={cy + Math.sin(rad) * 16}
                r="3.5"
                fill="#CDB4F6"
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${palette.plum} 0%, ${palette.magenta} 60%, ${palette.lavender} 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: palette.lilac, filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: palette.blush, filter: "blur(80px)" }}
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <Badge
            className="rounded-full px-4 py-1.5 border-0 text-white"
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Pathophysiology · Educational
          </Badge>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 600, lineHeight: 1.1 }}
          >
            HPV & Cervical Cancer
          </h1>
          <p
            style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "rgba(255,255,255,0.92)" }}
          >
            A guide to how a virus can quietly change cervical
            cells and what those changes mean for your body. Designed for women
            in their 30s and 40s who want to truly understand the science.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={() =>
                document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full px-6 py-6 border-0 hover:opacity-90"
              style={{ background: palette.sage, color: palette.plum, fontWeight: 600 }}
            >
              Start Learning <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() =>
                document.getElementById("symptoms")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="rounded-full px-6 py-6 bg-transparent border-white/40 text-white hover:bg-white/10"
            >
              Explore Symptoms
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {["The cervix", "HPV science", "Cell changes", "Symptoms"].map((c) => (
              <span
                key={c}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-[3rem]"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          />
          <div className="relative p-8">
            <CervixIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div
        className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
        style={{
          background: palette.blush,
          color: palette.magenta,
          fontWeight: 600,
          letterSpacing: "0.08em",
        }}
      >
        {eyebrow.toUpperCase()}
      </div>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          color: palette.plum,
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4"
          style={{ color: "#6b5563", fontSize: "1.05rem", lineHeight: 1.6 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Overview() {
  return (
    <section id="overview" className="py-20 px-6" style={{ background: palette.cream }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 01"
          title="What is cervical cancer?"
          subtitle="The cervix is the lower, narrow end of the uterus that opens into the vagina. Cervical cancer begins when normally well-behaved cells lining the cervix lose control over how they grow and divide."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            className="md:col-span-2 p-8 rounded-3xl border-0 shadow-sm"
            style={{ background: "white" }}
          >
            <h3 style={{ color: palette.plum, fontWeight: 600, fontSize: "1.35rem" }}>
              A slow, silent shift in cell behavior
            </h3>
            <p className="mt-4" style={{ color: "#574257", lineHeight: 1.7 }}>
              Healthy cervical cells are organized in tidy layers and replace
              themselves on a careful schedule. In cervical cancer, that schedule
              breaks down usually after years of persistent HPV infection. Cells
              begin to look abnormal, then multiply where they shouldn't, and
              eventually push past the boundary that normally keeps them in place.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Starts in the surface (epithelial) layer of the cervix .",
                "Almost always linked to persistent high-risk HPV infection.",
                "Typically develops >10 years, with early stages causing no symptoms (M. Kusakabe et al., 2023).",
              ].map((b) => (
                <div key={b} className="flex gap-3 items-start">
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: palette.magenta }}
                  />
                  <span style={{ color: "#574257" }}>{b}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card
            className="p-8 rounded-3xl border-0 flex flex-col items-center justify-center text-center"
            style={{
              background: `linear-gradient(160deg, ${palette.lilac}, ${palette.lavender})`,
            }}
          >
            <img
              src={cervixImage}
              alt="Anatomical diagram of the cervix"
              className="w-48 h-auto"
            />
            <p className="mt-4 text-white" style={{ fontWeight: 600 }}>
          
            </p>
            <p className="mt-2 text-white/90 text-sm">
              A small canal connecting the uterus to the vagina and the gateway
              where HPV begins its work.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HPVSection() {
  return (
    <section id="hpv" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 02"
          title="What is HPV?"
          subtitle="Human papillomavirus is the 4th common cancer & leading cause of cancer death in women worldwide (WHO,2022)."
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <p style={{ color: "#574257", lineHeight: 1.7, fontSize: "1.05rem" }}>
              HPV is a family of more than 200 related viruses. Most clear on
              their own within a year or two. The trouble begins when{" "}
              <strong style={{ color: palette.magenta }}>high-risk strains</strong>{" "}
              (especially HPV 16 and 18) settle into cervical cells and remain
              there for years.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "70-80%", l: "of sexually active people are infected atleast once (S.Bowden et al.,2023)" },
                { v: "200+", l: "known HPV types (WHO,2024)" },
                { v: "11.13M", l: "of new cervical cancer cases (WHO,2022)" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="p-4 rounded-2xl text-center"
                  style={{ background: palette.cream }}
                >
                  <div
                    style={{ color: palette.magenta, fontWeight: 700, fontSize: "1.4rem" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#7a637a" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="a"
                className="rounded-2xl border-0 px-5"
                style={{ background: palette.blush }}
              >
                <AccordionTrigger style={{ color: palette.plum }}>
                  Why does persistent infection matter?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#574257" }}>
                  Most infections are cleared by the immune system. But when
                  high-risk HPV stays in cervical cells for years, its proteins
                  have time to breach the cell's growth controls which is the
                  first step toward cancer (Liyuan & Zhou et al.,2022).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="b"
                className="rounded-2xl border-0 px-5"
                style={{ background: palette.cream }}
              >
                <AccordionTrigger style={{ color: palette.plum }}>
                  How does HPV enter cervical cells?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#574257" }}>
                  HPV reaches the deepest layer of cells through tiny breaks in
                  the cervical lining. It uses the cell's own machinery to enter our cell and disrupt the gene expression (S.K.Baba et al.,2025).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="c"
                className="rounded-2xl border-0 px-5"
                style={{ background: palette.blush }}
              >
                <AccordionTrigger style={{ color: palette.plum }}>
                  Does HPV always cause cancer?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#574257" }}>
                  No. Most HPV infections are silent and clear naturally. Only a
                  small fraction of persistent high-risk infections progress to
                  precancer or cancer and that progression takes usually more than 10 years (Liyuan Zhou et al.,2022).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Card
            className="p-10 rounded-3xl border-0"
            style={{
              background: `linear-gradient(160deg, ${palette.cream}, ${palette.blush})`,
            }}
          >
            <div className="aspect-square">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <radialGradient id="vGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={palette.lilac} />
                    <stop offset="100%" stopColor={palette.lavender} />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="55" fill="url(#vGrad)" />
                {Array.from({ length: 18 }).map((_, i) => {
                  const a = (i * 20 * Math.PI) / 180;
                  const x = 100 + Math.cos(a) * 70;
                  const y = 100 + Math.sin(a) * 70;
                  return (
                    <g key={i}>
                      <line
                        x1={100 + Math.cos(a) * 55}
                        y1={100 + Math.sin(a) * 55}
                        x2={x}
                        y2={y}
                        stroke={palette.magenta}
                        strokeWidth="2"
                      />
                      <circle cx={x} cy={y} r="6" fill={palette.magenta} />
                    </g>
                  );
                })}
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="600"
                >
                  HPV
                </text>
              </svg>
            </div>
            <p
              className="text-center mt-4 text-sm"
              style={{ color: palette.plum }}
            >
              An illustrated HPV virion protein shell with surface spikes that
              latch onto cervical cells.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Mechanism() {
  const steps = [
    {
      icon: Microscope,
      title: "Normal cell",
      body: "Cell remain in controlled growth and normal division function (S.K.Baba et al., 2025).",
      color: palette.sage,
    },
    {
      icon: Zap,
      title: "HPV infects",
      body: "High-risk HPV (type 16&18) enters basal cervical cells through micro-tears (Markowitz, L. E.,& Unger, E. R, 2023).",
      color: palette.lavender,
    },
    {
      icon: Shield,
      title: "E6 & E7 disrupt",
      body: "Viral proteins switch off p53 and Rb the cell's safety brakes to repair and cell division S.K.Baba et al., 2025)",
      color: palette.magenta,
    },
    {
      icon: Activity,
      title: "Cells multiply",
      body: "Without brakes, damaged cells divide unchecked and pile up abnormally (S.K.Baba et al., 2025).",
      color: palette.peach,
    },
    {
      icon: Flame,
      title: "Cancer forms",
      body: "Eventually, abnormal cells break through to invade nearby tissue (Liyuan Zhou et al., 2022).",
      color: palette.plum,
    },
  ];
  return (
    <section id="mechanism" className="py-20 px-6" style={{ background: palette.cream }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 03"
          title="How HPV changes cervical cells"
          subtitle="HPV doesn't kill cells it hijacks them. Two viral proteins, E6 and E7, disable the natural safety systems that keep cell growth in check (S.K.Baba et al., 2025)."
        />
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <Card
                className="p-6 rounded-3xl border-0 h-full bg-white hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "0 4px 24px rgba(91,44,77,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: s.color }}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-xs mb-2"
                  style={{ color: s.color, fontWeight: 600 }}
                >
                  STEP {i + 1}
                </div>
                <h4 style={{ color: palette.plum, fontWeight: 600 }}>{s.title}</h4>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "#6b5563", lineHeight: 1.5 }}
                >
                  {s.body}
                </p>
              </Card>
              {i < steps.length - 1 && (
                <ChevronRight
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: palette.lavender }}
                />
              )}
            </div>
          ))}
        </div>
        <Card
          className="mt-10 p-8 rounded-3xl border-0"
          style={{
            background: `linear-gradient(120deg, ${palette.plum}, ${palette.magenta})`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center text-white">
            <div>
              <Badge
                className="rounded-full border-0 mb-3"
                style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
              >
                The science, simply
              </Badge>
              <h3
                className="text-white"
                style={{ fontWeight: 600, fontSize: "1.4rem" }}
              >
                Why E6 and E7 are the villains
              </h3>
              <p className="mt-3 text-white/90" style={{ lineHeight: 1.7 }}>
                Your cells have built-in "off switches" called p53 and Rb that
                stop damaged cells from dividing. The HPV protein E6 destroys
                p53, While E7 inactivate Rb. With both brakes gone, the cell can copy
                mistakes endlessly the seed of dysplasia and cancer (S.K.Baba et al., 2025).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { p: "E6", t: "Disables p53", c: palette.blush, dark: true },
                { p: "E7", t: "Disables Rb", c: palette.lilac, dark: true },
                { p: "p53", t: "DNA guardian (lost)", c: "rgba(255,255,255,0.15)", dark: false },
                { p: "Rb", t: "Growth brake (lost)", c: "rgba(255,255,255,0.15)", dark: false },
              ].map((b) => (
                <div
                  key={b.p}
                  className="p-4 rounded-2xl"
                  style={{
                    background: b.c,
                    color: b.dark ? palette.plum : "white",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>{b.p}</div>
                  <div className="text-xs mt-1 opacity-90">{b.t}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Progression() {
  const stages = [
    {
      label: "Healthy",
      sub: "Normal cervix",
      desc: "Cells layered neatly. No HPV-driven changes (S.K.Baba et al., 2025).",
      color: palette.sage,
    },
    {
      label: "CIN 1",
      sub: "Low-grade changes",
      desc: "Mild dysplasia, abnormal cells in the lowest third of the epithelium (Khorramabadi et al., 2026).",
      color: palette.peach,
    },
    {
      label: "CIN 2–3",
      sub: "High-grade changes",
      desc: "Moderate-to-severe dysplasia spreading through more of the layer(Khorramabadi et al., 2026).",
      color: palette.magenta,
    },
    {
      label: "Invasive",
      sub: "Cervical cancer",
      desc: "Abnormal cells break through the basement membrane into tissue (Liyuan Zhou et al., 2022).",
      color: palette.plum,
    },
  ];
  return (
    <section id="progression" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 04"
          title="From dysplasia to cervical cancer"
          subtitle="Cancer doesn't appear overnight. It moves through recognizable stages, often over a decade or more."
        />
        <div className="relative">
          <div
            className="absolute left-0 right-0 top-12 h-1 rounded-full hidden md:block"
            style={{
              background: `linear-gradient(90deg, ${palette.sage}, ${palette.peach}, ${palette.magenta}, ${palette.plum})`,
            }}
          />
          <div className="grid md:grid-cols-4 gap-6 relative">
            {stages.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="flex justify-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white relative z-10"
                    style={{
                      background: s.color,
                      boxShadow: `0 8px 24px ${s.color}55`,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "1rem" }}>
                      {s.label}
                    </span>
                  </div>
                </div>
                <Card
                  className="mt-6 p-6 rounded-3xl border-0"
                  style={{ background: palette.cream }}
                >
                  <div
                    style={{ color: s.color, fontWeight: 600, fontSize: "0.85rem" }}
                  >
                    STAGE {i + 1}
                  </div>
                  <h4
                    className="mt-1"
                    style={{ color: palette.plum, fontWeight: 600 }}
                  >
                    {s.sub}
                  </h4>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "#6b5563", lineHeight: 1.5 }}
                  >
                    {s.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-10 p-6 rounded-3xl text-center"
          style={{ background: palette.blush, color: palette.plum }}
        >
          <Clock className="w-6 h-6 inline-block mr-2" />
          <span>
            This entire progression typically takes{" "}
            <strong>10 to 20 years</strong> a long window in which cell changes
            are detectable.
          </span>
        </div>
      </div>
    </section>
  );
}

function WhyItMatters() {
  const cards = [
    {
      icon: EyeOff,
      title: "Early stages are silent",
      body: "Dysplasia and early cancer rarely cause symptoms the body gives no warning (J.Wolf et al., 2024).",
    },
    {
      icon: Clock,
      title: "Changes happen slowly",
      body: "Cell changes unfold over years, often through your 30s and 40s (Jing Na et al., 2023).",
    },
    {
      icon: Calendar,
      title: "HPV may be long-standing",
      body: "Many adults carry HPV picked up years earlier in the teens or 20s without ever knowing (Jing Na et al., 2023).",
    },
    {
      icon: Lightbulb,
      title: "Knowledge means awareness",
      body: "Understanding the disease helps you notice meaningful changes in your body.",
    },
  ];
  return (
    <section
      id="why"
      className="py-20 px-6"
      style={{
        background: `linear-gradient(180deg, ${palette.cream}, ${palette.blush})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 05"
          title="Why it matters for women 30–40"
          subtitle="This is the decade when most cell changes are happening quietly inside the cervix. Understanding the biology will turns this silence into opportunity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <Card
              key={c.title}
              className="p-6 rounded-3xl border-0 bg-white hover:-translate-y-1 transition-transform"
              style={{ boxShadow: "0 4px 20px rgba(91,44,77,0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${palette.lilac}, ${palette.lavender})`,
                }}
              >
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h4 style={{ color: palette.plum, fontWeight: 600 }}>{c.title}</h4>
              <p
                className="mt-2 text-sm"
                style={{ color: "#6b5563", lineHeight: 1.55 }}
              >
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Symptoms() {
  const items = [
    {
      icon: Droplet,
      title: "Unusual vaginal bleeding",
      body: "As abnormal cells grow, they form fragile new blood vessels. Bleeding between periods or after intercourse reflects damage to that delicate tissue (Klaudia Szymonowichz et al., 2020).",
    },
    {
      icon: Waves,
      title: "Unusual discharge",
      body: "Growing tumors disrupt cervical mucus production and may release fluid, sometimes tinged with blood or odor from tissue breakdown (Klaudia Szymonowichz et al., 2020).",
    },
    {
      icon: Flame,
      title: "Pelvic pain",
      body: "Advanced tumors press on surrounding nerves, ligaments and organs in the pelvis, producing a deep, persistent ache (Klaudia Szymonowichz et al., 2020).",
    },
    {
      icon: Zap,
      title: "Pain when urinating",
      body: "When the tumor extends near the bladder or urethra, it irritates these structures and causes burning or discomfort during urination (Klaudia Szymonowichz et al., 2020).",
    },
  ];
  return (
    <section id="symptoms" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 06"
          title="Symptoms explained by the disease process"
          subtitle="Each symptom is the body's response to a specific change in cervical tissue. Linking them to the underlying biology makes them easier to recognize and remember."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((s) => (
            <Card
              key={s.title}
              className="p-7 rounded-3xl border-0 flex gap-5 items-start hover:-translate-y-0.5 transition-transform"
              style={{
                background: palette.cream,
                boxShadow: "0 4px 20px rgba(91,44,77,0.05)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${palette.magenta}, ${palette.lavender})`,
                }}
              >
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 style={{ color: palette.plum, fontWeight: 600 }}>{s.title}</h4>
                <p className="mt-2" style={{ color: "#6b5563", lineHeight: 1.6 }}>
                  {s.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section
      id="summary"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${palette.plum}, ${palette.magenta} 70%, ${palette.lavender})`,
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-10 left-10 w-72 h-72 rounded-full"
          style={{ background: palette.lilac, filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full"
          style={{ background: palette.blush, filter: "blur(70px)" }}
        />
      </div>
      <div className="relative max-w-3xl mx-auto text-center text-white space-y-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs"
          style={{ background: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}
        >
          <HeartPulse className="w-4 h-4" /> A CLOSING NOTE
        </div>
        <h2
          className="text-white"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Knowledge is the gentlest form of care.
        </h2>
        <p className="text-white/90" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          Cervical cancer is the story of small, slow cellular changes a
          persistent virus, disabled safety brakes, and cells that gradually
          forget their boundaries.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Button
            onClick={() =>
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full px-6 py-6 border-0"
            style={{ background: palette.sage, color: palette.plum, fontWeight: 600 }}
          >
            Back to the top
          </Button>
        </div>
        <p className="text-xs text-white/70 pt-8">
          Educational content. Not a substitute for medical advice. Speak with a
          healthcare professional about your individual care.
        </p>
      </div>
    </section>
  );
}

function References() {
  const references = [
    {
      authors: "Baba, S., Alblooshi, S., Yaqoob, R., Behl, S., Saleem, M., Rakha, E., Malik, F., Singh, M., Macha, M., Akhtar, M., Houry, W., Bhat, A., Menhali, A., Zheng, Z., & Mirza, S.",
      year: "2025",
      title: "Human papilloma virus (HPV) mediated cancers: An insightful update.",
      journal: "Journal of Translational Medicine",
      volume: "23",
      doi: "https://doi.org/10.1186/s12967-025-06470-x",
    },
    {
      authors: "Khorramabadi, S. M., Ebrahimi, N., Shiri Aghbash, P., Zenderuh Ravanlo, Z., & Bannazadeh Baghi, H.",
      year: "2026",
      title: "Silencing HPV: The rise of RNA therapeutics in cervical cancer.",
      journal: "Infectious Agents and Cancer",
      volume: "21",
      pages: "18",
      doi: "https://doi.org/10.1186/s13027-026-00733-y",
    },
    {
      authors: "Kusakabe, M., Taguchi, A., Sone, K., Mori, M., & Osuga, Y.",
      year: "2023",
      title: "Carcinogenesis and management of human papillomavirus-associated cervical cancer.",
      journal: "International Journal of Clinical Oncology",
      volume: "28",
      pages: "965–974",
      doi: "https://doi.org/10.1007/s10147-023-02337-7",
    },
    {
      authors: "Markowitz, L. E., & Unger, E. R.",
      year: "2023",
      title: "Human papillomavirus vaccination.",
      journal: "New England Journal of Medicine",
      volume: "388",
      issue: "19",
      pages: "1790–1798",
      doi: "https://doi.org/10.1056/NEJMcp2108502",
    },
    {
      authors: "Wolf, J., Kist, L., Pereira, S., Quessada, M., Petek, H., Pille, A., Maccari, J., Mutlaq, M., & Nasi, L.",
      year: "2024",
      title: "Human papillomavirus infection: Epidemiology, biology, host interactions, cancer development, prevention, and therapeutics.",
      journal: "Reviews in Medical Virology",
      volume: "34",
      doi: "https://doi.org/10.1002/rmv.2537",
    },
    {
      authors: "Zhou, L., Qiu, Q., Zhou, Q., Li, J., Yu, M., Li, K., Xu, L., Ke, X., Xu, H., Lu, B., Wang, H., Lu, W., Liu, P., & Lu, Y.",
      year: "2022",
      title: "Long-read sequencing unveils high-resolution HPV integration and its oncogenic progression in cervical cancer.",
      journal: "Nature Communications",
      volume: "13",
      doi: "https://doi.org/10.1038/s41467-022-30190-1",
    },
    {
      authors: "Szymonowicz, K., & Chen, J. ",
      year: "2020",
      title: "Biological and clinical aspects of HPV-related cancers.",
      journal: "Cancer Biology & Medicine,",
      volume: "17, 864–878",
      doi: "https://doi.org/10.20892/j.issn.2095-3941.2020.0370",
    },
  ];

  return (
    <section id="references" className="py-20 px-6" style={{ background: palette.cream }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Section 08"
          title="References"
          subtitle="This educational resource is built on peer-reviewed scientific literature. All claims are supported by current research in virology, oncology, and cervical pathophysiology."
        />
        <div className="space-y-4">
          {references.map((ref, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl border-0 bg-white hover:shadow-md transition-shadow"
              style={{ boxShadow: "0 2px 12px rgba(91,44,77,0.04)" }}
            >
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${palette.lilac}, ${palette.lavender})`,
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p style={{ color: "#574257", lineHeight: 1.7 }}>
                    {ref.authors} ({ref.year}). <em>{ref.title}</em>{" "}
                    <span style={{ fontStyle: "italic" }}>{ref.journal}</span>
                    {ref.volume && `, ${ref.volume}`}
                    {ref.issue && `(${ref.issue})`}
                    {ref.pages && `, ${ref.pages}`}.{" "}
                    <a
                      href={ref.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                      style={{ color: palette.magenta, fontWeight: 500 }}
                    >
                      {ref.doi}
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="min-h-screen" style={{ background: palette.cream }}>
      <NavBar />
      <Hero />
      <Overview />
      <HPVSection />
      <Mechanism />
      <Progression />
      <WhyItMatters />
      <Symptoms />
      <Summary />
      <References />
    </div>
  );
}
