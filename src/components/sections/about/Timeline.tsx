"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const educationHistory = [
  {
    degree: "博士",
    field: "資訊工程研究所",
    school: "國立台灣大學",
    year: "1992/09 – 1997/06",
  },
  {
    degree: "碩士",
    field: "資訊工程研究所",
    school: "國立台灣大學",
    year: "1990/09 – 1992/06",
  },
  {
    degree: "學士",
    field: "資訊科學系",
    school: "國立交通大學",
    year: "1986/09 – 1990/06",
  },
];

const workExperience = [
  {
    position: "教授",
    department: "國立彰化師範大學 資訊工程學系",
    year: "2014/02 – 現在",
    active: true,
  },
  {
    position: "副教授",
    department: "國立彰化師範大學 資訊工程學系",
    year: "2006/08 – 2014/01",
  },
  {
    position: "助理教授",
    department: "國立彰化師範大學 資訊工程學系",
    year: "2003/08 – 2006/07",
  },
  {
    position: "助理教授",
    department: "朝陽科技大學 資訊管理系",
    year: "1997/08 – 2003/07",
  },
];

function TimelineItem({
  color,
  title,
  subtitle,
  meta,
  year,
  index,
  active,
}: {
  color: "blue" | "violet";
  title: string;
  subtitle: string;
  meta?: string;
  year: string;
  index: number;
  active?: boolean;
}) {
  const dotColor =
    color === "blue"
      ? "bg-blue-500 shadow-blue-500/30"
      : "bg-violet-500 shadow-violet-500/30";
  const lineColor =
    color === "blue"
      ? "border-blue-200 dark:border-blue-800/50"
      : "border-violet-200 dark:border-violet-800/50";
  const yearColor =
    color === "blue"
      ? "text-blue-600 dark:text-blue-400"
      : "text-violet-600 dark:text-violet-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative cursor-default border-l-2 pl-7 pb-8 last:pb-0 ${lineColor}`}
    >
      {/* Dot */}
      <div
        className={`absolute -left-[7px] top-0.5 h-3 w-3 rounded-full shadow-md transition-transform duration-200 group-hover:scale-150 ${dotColor}`}
      />
      {active && (
        <span
          className={`absolute -left-[11px] top-[-4px] h-5 w-5 animate-ping rounded-full opacity-30 ${dotColor}`}
        />
      )}

      <p
        className={`mb-0.5 text-xs font-semibold tracking-wide ${yearColor}`}
      >
        {year}
      </p>
      <h4 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {title}
      </h4>
      <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      {meta && (
        <p className="mt-0.5 text-sm text-slate-400 dark:text-slate-500">
          {meta}
        </p>
      )}
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section className="bg-slate-50/50 py-20 dark:bg-gray-950/50 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            學經歷
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Education & Career
          </p>
        </motion.div>

        <TracingBeam className="max-w-4xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-12">
            {/* Education */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                  <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  學歷
                </h3>
              </div>

              <div>
                {educationHistory.map((edu, i) => (
                  <TimelineItem
                    key={i}
                    color="blue"
                    title={edu.degree}
                    subtitle={edu.field}
                    meta={edu.school}
                    year={edu.year}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Work */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 dark:bg-violet-500/20">
                  <Briefcase className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  教學經歷
                </h3>
              </div>

              <div>
                {workExperience.map((w, i) => (
                  <TimelineItem
                    key={i}
                    color="violet"
                    title={w.position}
                    subtitle={w.department}
                    year={w.year}
                    index={i}
                    active={w.active}
                  />
                ))}
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
