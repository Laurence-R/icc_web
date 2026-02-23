"use client";

import { useState, useCallback } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Publication } from "@/data/publications";

/* ── Highlight author name ─────────────────────────── */
const AUTHOR_RE = /(Ing-Chau Chang|張英超|I\.C\.?\s*Chang)/gi;

function Authors({ text }: { text: string }) {
  const parts = text.split(AUTHOR_RE);
  return (
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      {parts.map((part, i) =>
        AUTHOR_RE.test(part) ? (
          <span
            key={i}
            className="font-semibold text-slate-900 underline decoration-blue-500/40 decoration-2 underline-offset-2 dark:text-white"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

/* ── Type badge ────────────────────────────────────── */
const TYPE_META: Record<
  Publication["type"],
  { label: string; color: string }
> = {
  journal: {
    label: "期刊",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  "international-conference": {
    label: "國際會議",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  "local-conference": {
    label: "國內會議",
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
  thesis: {
    label: "學位論文",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
};

/* ── Single publication row ────────────────────────── */
function PubRow({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const meta = TYPE_META[pub.type];

  const hasDetails = pub.impactFactor || pub.rank || pub.nscProject || pub.doi;

  return (
    <div className="rounded-xl border border-slate-200/60 bg-white transition-shadow hover:shadow-md dark:border-white/5 dark:bg-white/[0.03]">
      <div className="p-5">
        {/* Top row: id + year + badges */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            [{pub.id}]
          </span>
          <span className="text-xs font-semibold text-slate-400">
            {pub.year}
          </span>
          <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${meta.color}`}>
            {meta.label}
          </span>
          {pub.indexes?.map((idx) => (
            <span
              key={idx}
              className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
            >
              {idx}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-900 dark:text-white sm:text-base">
          {pub.title}
        </h3>

        {/* Authors */}
        <Authors text={pub.authors} />

        {/* Venue */}
        <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-500">
          {pub.venue}
          {pub.volume && `, Vol.${pub.volume}`}
          {pub.issue && `, No.${pub.issue}`}
          {pub.pages && `, pp.${pub.pages}`}
          {pub.publisher && `, ${pub.publisher}`}
        </p>

        {/* Expand toggle */}
        {hasDetails && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
          >
            詳細資訊
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {/* Details (no framer-motion, plain conditional) */}
        {open && hasDetails && (
          <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-xs dark:border-white/5">
            {pub.impactFactor && (
              <Detail label="Impact Factor" value={pub.impactFactor} />
            )}
            {pub.rank && <Detail label="Rank" value={pub.rank} />}
            {pub.nscProject && (
              <Detail label="國科會計畫" value={pub.nscProject} />
            )}
            {pub.doi && (
              <div className="flex gap-2">
                <span className="font-medium text-slate-500">DOI:</span>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                >
                  {pub.doi}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="font-medium text-slate-500">{label}:</span>
      <span className="text-slate-700 dark:text-slate-300">{value}</span>
    </div>
  );
}

/* ── Scrollable list (virtualised-feel via fixed height) ── */
interface Props {
  publications: Publication[];
}

export function PublicationsList({ publications }: Props) {
  return (
    <div
      className="space-y-3 overflow-y-auto pr-1"
      style={{ maxHeight: "65vh" }}
    >
      {publications.length === 0 ? (
        <p className="py-16 text-center text-sm text-slate-400 dark:text-slate-500">
          找不到符合條件的論文
        </p>
      ) : (
        publications.map((pub) => <PubRow key={pub.id} pub={pub} />)
      )}
    </div>
  );
}
