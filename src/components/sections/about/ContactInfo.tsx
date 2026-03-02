"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const contacts = [
  {
    icon: Mail,
    label: "電子郵件",
    value: "icchang@cc.ncue.edu.tw",
    color: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: MapPin,
    label: "辦公室",
    value: "寶山校區 工學院大樓 E136",
    color: "from-violet-500 to-purple-400",
    iconColor: "text-violet-500 dark:text-violet-400",
  },
  {
    icon: MapPin,
    label: "實驗室",
    value: "無線與行動網路實驗室 E114",
    color: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: Phone,
    label: "辦公室電話",
    value: "04-7232105 ext. 8427",
    color: "from-amber-500 to-orange-400",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  {
    icon: Phone,
    label: "實驗室電話",
    value: "04-7232105 ext. 8414",
    color: "from-rose-500 to-pink-400",
    iconColor: "text-rose-500 dark:text-rose-400",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-slate-50/50 py-20 dark:bg-gray-950/50 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            聯絡方式
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Contact Information
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="mx-auto max-w-3xl space-y-4">
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="group relative flex items-center gap-4 rounded-xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm transition-all hover:border-slate-300/80 hover:shadow-md dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:shadow-lg dark:hover:shadow-blue-500/5">
                {/* Accent line */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b ${item.color} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                {/* Icon */}
                <div className={`flex-shrink-0 ${item.iconColor}`}>
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <MovingBorderButton
            as="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="0.875rem"
            containerClassName="h-11 w-auto"
            className="gap-2 bg-gradient-to-r from-blue-600 to-violet-600 px-6 font-medium text-white border-0"
            borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
          >
            <Mail className="h-4 w-4" />
            寄送 Email
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
}
