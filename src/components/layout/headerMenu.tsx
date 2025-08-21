"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ThemeSelector } from "../theme-selector";
import { ConfigDrawer } from "../config-drawer";
import SearchInput from "../search-input";
import { Menu } from 'lucide-react';

export default function HamburgerSidebar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}
      <Button
        ref={btnRef}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        variant='secondary'
        size='icon'
        className="group/toggle size-8 fixed top-4 md:top-6 right-4 z-50 inline-flex h-8 w-8 items-center justify-center p-2 backdrop-blur shadow-md hover:shadow-lg transition active:scale-95 "
      >
       <Menu size="20px" />
      </Button>

      {/* Overlay */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-sidebar shadow-2xl border-l border-gray-200 transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-5 flex flex-col h-full">
        <h2 className="mb-4 text-lg font-semibold">Menu</h2>
          <div className="flex flex-col gap-2 flex-1">
         <div>
         <ThemeSelector className="" />
         </div>
         <Button variant="outline" className="justify-start pl-0">
         <ConfigDrawer variant="ghost"/> 
         </Button>
         <div className="lg:hidden">
         <SearchInput className="md:w-full" />
         </div>
           
          </div>
          <Button
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
}
