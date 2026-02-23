"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
    { title: "關於我", href: "/about" },
    { title: "研究方向", href: "/research/areas" },
    { title: "論文著作", href: "/research/publications" },
    { title: "研究計畫", href: "/research/projects" },
];

const teachingLinks = [
    { title: "目前課程", href: "/teaching/current" },
    { title: "歷年課程", href: "/teaching/history" },
    { title: "榮譽與獎項", href: "/research/awards" },
    { title: "實驗室", href: "/research/lab" },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Top divider */}
            <div className="section-divider" />

            {/* Background */}
            <div className="absolute inset-0 bg-slate-50/90 dark:bg-gray-950/90" />
            <div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden="true" />

            {/* Main footer content */}
            <div className="relative container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-1 space-y-5">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/NCUE_seal.svg"
                                alt="NCUE Logo"
                                width={36}
                                height={36}
                                className="dark:invert transition-transform duration-300 group-hover:scale-105"
                            />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                                    張英超
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Ing-Chau Chang
                                </p>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            國立彰化師範大學 資訊工程學系<br />
                            專注於智慧車聯網技術與創新應用之研究與發展
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            研究
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Teaching links */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            教學與更多
                        </h4>
                        <ul className="space-y-2.5">
                            {teachingLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            聯絡資訊
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:icchang@cc.ncue.edu.tw"
                                    className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                >
                                    <Mail className="h-4 w-4 flex-shrink-0" />
                                    icchang@cc.ncue.edu.tw
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                <span>寶山校區 工學院大樓 E136</span>
                            </li>
                            <li>
                                <a
                                    href="https://ieeexplore.ieee.org/author/37640555800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                >
                                    <Image
                                        src="/IEEE_logo.svg"
                                        alt="IEEE"
                                        width={16}
                                        height={16}
                                        className="h-4 w-4"
                                    />
                                    IEEE Xplore
                                    <ExternalLink className="h-3 w-3 opacity-50" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="section-divider mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        &copy; {new Date().getFullYear()} Ing-Chau Chang. National Changhua University of Education.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Department of Computer Science &amp; Information Engineering
                    </p>
                </div>
            </div>
        </footer>
    );
}