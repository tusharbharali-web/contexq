"use client";

/**
 * Hero "Explore Platform": scrolls to the "Solutions built on one connected foundation"
 * section further down the homepage (#solutions-section).
 *
 * It is a button, not a "#solutions" link: that hash is also the name of the Solutions
 * pie view, so the old link left "#solutions" in the address and a refresh (or Back)
 * opened the pie view. Scrolling in code keeps the address clean.
 */
export default function ExplorePlatformButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const target = document.getElementById("solutions-section");
        if (!target) return;
        const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--site-header-height")) || 76;
        const top = target.getBoundingClientRect().top + window.scrollY - header;
        window.scrollTo({ top, behavior: "smooth" });
      }}
    >
      Explore Platform
    </button>
  );
}
