"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Conditions", href: "/#conditions" },
  { label: "Locations", href: "/#locations" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Your Rights", href: "/#rights" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/#blog" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group relative -ml-1 flex items-center"
      aria-label="My ESA Therapist — home"
    >
      <div className="relative h-14 w-[190px] flex-none transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        <Image
          src="/hero/ESALetterLogo.jpg"
          alt="My ESA Therapist"
          fill
          priority
          sizes="190px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
/** Site header — sticky, blurred, with an animated underline nav and a mobile slide-down menu. */
export function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route-level escape and lock body scroll while open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-3.5 py-2 text-base font-semibold text-neutral-600 transition-colors duration-200 hover:text-brand-700"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/#apply"
              className="shadow-sm shadow-accent-900/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-900/20"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger — morphs into an X when open */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 flex-none items-center justify-center rounded-control text-neutral-700 transition-colors hover:bg-brand-50 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu — smooth height/opacity transition, no layout shift when closed */}
      <div
        className={`grid overflow-hidden border-t border-neutral-200/70 bg-white transition-all duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={`rounded-control px-3.5 py-2.5 text-base font-semibold text-neutral-700 transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/#apply" size="lg" className="mt-4 w-full justify-center">
              Get Started
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
