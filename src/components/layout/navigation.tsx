"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  {
    title: "首頁",
    href: "/",
  },
  {
    title: "關於我",
    href: "/about",
  },
  {
    title: "教學",
    href: "/teaching",
  },
  {
    title: "研究",
    items: [
      { title: "研究方向", href: "/research/areas" },
      { title: "論文著作", href: "/research/publications" },
      { title: "研究計畫", href: "/research/projects" },
      { title: "榮譽與獎項", href: "/research/awards" },
      { title: "學術服務", href: "/research/services" },
      { title: "無線與行動網路實驗室", href: "/research/lab" },
    ],
  },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-glass sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 font-bold text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Image
              src="/NCUE_seal.svg"
              alt="NCUE Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span>Ing-Chau Chang</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigationItems.map((item, index) =>
              item.items ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="gap-1 font-medium"
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.items.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link
                          href={subItem.href}
                          className="w-full cursor-pointer"
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  asChild
                  className="font-medium"
                >
                  <Link href={item.href!}>{item.title}</Link>
                </Button>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">開啟選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>選單</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      {item.items ? (
                        <div className="space-y-2">
                          <div className="font-semibold text-gray-900 dark:text-white px-4 py-2">
                            {item.title}
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
