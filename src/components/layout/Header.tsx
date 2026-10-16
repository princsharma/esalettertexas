"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  HEADER_CTA_HREF,
  HEADER_CTA_LABEL,
  MAIN_NAV,
  RESOURCE_LINKS,
  type NavDropdown,
  type NavItem,
} from "@/data/nav";

const CONVERSION_NAV = [{ label: "How It Works", href: "/how-it-works/" }];

/** Single-line desktop nav — readable type, scales up on wider viewports. */
const NAV_LINK_CLASS =
  "whitespace-nowrap px-1.5 py-2 text-xs font-semibold leading-snug text-neutral-700 transition-colors hover:text-brand-700 lg:px-2 lg:text-sm xl:px-2.5 xl:text-[15px] 2xl:text-base";

function Logo() {
  return (
    <Link
      href="/"
      className="group relative flex shrink-0 items-center"
      aria-label="My ESA Therapist, home"
    >
      <div className="relative h-10 w-[118px] flex-none transition-transform duration-300 ease-out group-hover:scale-[1.02] lg:h-11 lg:w-[132px] xl:h-12 xl:w-[152px] 2xl:h-[3.25rem] 2xl:w-[168px]">
        <Image
          src="/hero/ESALetterLogo.jpg"
          alt="My ESA Therapist"
          fill
          priority
          sizes="(max-width: 1280px) 132px, 168px"
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180 text-brand-700" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DesktopNavDropdown({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <div className="relative flex items-center whitespace-nowrap">
        <Link href={item.href} onClick={onClose} className={NAV_LINK_CLASS}>
          {item.label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`${item.label} submenu`}
          className="rounded-control p-0.5 text-neutral-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
        >
          <Chevron open={isOpen} />
        </button>
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-1 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-600 transition-transform duration-300 ${isOpen ? "scale-x-100" : "scale-x-0"}`}
        />
      </div>

      <div
        className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
      >
        <div className="rounded-card border border-neutral-200 bg-white p-2 shadow-card-hover">
          <Link
            href={item.href}
            onClick={onClose}
            className="mb-1 block rounded-control px-3 py-2 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
          >
            {item.viewAllLabel}
          </Link>
          {item.items.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block rounded-control px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={`group relative ${NAV_LINK_CLASS}`}>
      {label}
      <span
        aria-hidden="true"
        className="absolute inset-x-1 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
      />
    </Link>
  );
}

function DesktopResourcesDropdown({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`relative flex items-center gap-0.5 ${NAV_LINK_CLASS}`}
      >
        Resources
        <Chevron open={isOpen} />
        <span
          aria-hidden="true"
          className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-600 transition-transform duration-300 xl:inset-x-3 ${isOpen ? "scale-x-100" : "scale-x-0"}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
      >
        <div className="rounded-card border border-neutral-200 bg-white p-2 shadow-card-hover">
          {RESOURCE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block rounded-control px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderDesktopItem(
  item: NavItem,
  openId: string | null,
  setOpenId: (id: string | null) => void,
) {
  if (item.type === "link") {
    return <DesktopNavLink key={item.href} href={item.href} label={item.label} />;
  }
  return (
    <DesktopNavDropdown
      key={item.id}
      item={item}
      isOpen={openId === item.id}
      onToggle={() => setOpenId(openId === item.id ? null : item.id)}
      onClose={() => setOpenId(null)}
    />
  );
}

/** Site header: sticky nav with silo dropdowns per IA spec. */
export function Header() {
  const pathname = usePathname();
  const isConversion = pathname === "/apply-now" || pathname === "/apply-now/";

  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenDropdown(null);
        setResourcesOpen(false);
        setMobileExpanded(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = isConversion ? null : MAIN_NAV;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white">
      <Container className="!max-w-[84rem] !px-3 sm:!px-4 md:!px-6">
        <div className="flex h-16 items-center gap-2 lg:h-[4.5rem] lg:gap-3">
          <Logo />

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
            aria-label="Primary"
          >
            <div className="flex flex-nowrap items-center justify-center">
            {isConversion ? (
              CONVERSION_NAV.map((link) => (
                <DesktopNavLink key={link.href} href={link.href} label={link.label} />
              ))
            ) : (
              <>
                {navItems?.map((item) =>
                  renderDesktopItem(item, openDropdown, (id) => {
                    setOpenDropdown(id);
                    if (id) setResourcesOpen(false);
                  }),
                )}
                <DesktopResourcesDropdown
                  isOpen={resourcesOpen}
                  onToggle={() => {
                    setResourcesOpen((v) => !v);
                    setOpenDropdown(null);
                  }}
                  onClose={() => setResourcesOpen(false)}
                />
              </>
            )}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Button
              href={isConversion ? "#assessment-form" : HEADER_CTA_HREF}
              className="!px-3 !py-2.5 !text-xs !leading-snug shadow-sm shadow-accent-900/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-900/20 sm:!text-sm lg:!px-4 lg:!text-sm xl:!px-5 xl:!text-base"
            >
              {HEADER_CTA_LABEL}
            </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 flex-none items-center justify-center rounded-control text-neutral-700 transition-colors hover:bg-brand-50 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`}
              />
            </span>
          </button>
          </div>
        </div>
      </Container>

      <div
        className={`grid overflow-hidden border-t border-neutral-200/70 bg-white transition-all duration-300 ease-out lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-0 opacity-0"}`}
      >
        <div className="overflow-hidden">
          <Container className="max-h-[min(85vh,32rem)] overflow-y-auto py-4">
            {!isConversion && navItems && (
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                        className={`rounded-control px-3.5 py-2.5 text-base font-semibold text-neutral-700 transition-all hover:bg-brand-50 hover:text-brand-700 ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const expanded = mobileExpanded === item.id;
                  return (
                    <div key={item.id}>
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex-1 rounded-control px-3.5 py-2.5 text-base font-semibold text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} menu`}
                          onClick={() => setMobileExpanded(expanded ? null : item.id)}
                          className="rounded-control p-2.5 text-neutral-500 hover:bg-brand-50"
                        >
                          <Chevron open={expanded} />
                        </button>
                      </div>
                      {expanded && (
                        <div className="ml-3 border-l border-neutral-200 pl-3">
                          {item.items.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-control px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            )}

            {!isConversion && (
              <>
                <p className="mt-4 px-3.5 text-caption text-neutral-400">Resources</p>
                <nav className="mt-1 flex flex-col gap-1">
                  {RESOURCE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-control px-3.5 py-2.5 text-sm font-semibold text-neutral-600 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </>
            )}

            {isConversion &&
              CONVERSION_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-control px-3.5 py-2.5 text-base font-semibold text-neutral-700 hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              ))}

            <Button
              href={isConversion ? "#assessment-form" : HEADER_CTA_HREF}
              size="lg"
              className="sticky bottom-0 mt-4 w-full justify-center"
            >
              {HEADER_CTA_LABEL}
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
