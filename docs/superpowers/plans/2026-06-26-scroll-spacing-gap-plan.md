# Scroll Spacing Gap Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replicate the reference folder's fixed-positioning overrides and z-index swap to eliminate the empty scroll spacing gap on the landing page projects section.

**Architecture:** We will adjust the GSAP ScrollTrigger timeline to stop card fade-out, monitor scroll progress to set the container to fixed at >= 95% progress, swap z-indices, and style the next sections with higher z-indices and solid backgrounds so they slide over the fixed cards container.

**Tech Stack:** React, Tailwind CSS, GSAP (ScrollTrigger)

---

### Task 1: Update GSAP Timeline and ScrollTrigger Configuration

**Files:**
- Modify: `app/src/pages/LandingPage.tsx:183-200`

- [ ] **Step 1: Replace GSAP ScrollTrigger configuration and Card Timeline**
  Modify the timeline setup inside the `useEffect` hook in `app/src/pages/LandingPage.tsx` to include `onUpdate` and `onLeaveBack` callbacks, and remove the `opacity` tween from the cards:
  ```typescript
      const ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".cards-trigger-container",
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              if (self.progress >= 0.95) {
                gsap.set(".cards-trigger-container", {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: 0,
                });
              } else {
                gsap.set(".cards-trigger-container", {
                  zIndex: 10,
                });
              }
            },
            onLeaveBack: () => {
              gsap.set(".cards-trigger-container", {
                clearProps: "all",
              });
            }
          }
        })
        .to(".showcase-card", {
          yPercent: -100,
          stagger: 0.5,
          ease: "none"
        });
      });
  ```

---

### Task 2: Adjust Layout Styling of Overlapping Sections

**Files:**
- Modify: `app/src/pages/LandingPage.tsx:487-489` and `app/src/pages/LandingPage.tsx:564-566`

- [ ] **Step 1: Add solid background, relative positioning, and z-index to Selected Work section**
  Modify the Projects section in `app/src/pages/LandingPage.tsx` to add `relative` positioning and explicit `backgroundColor` inline:
  ```typescript
          {/* Projects Section */}
          <section className="w-full max-w-7xl px-6 pb-20 relative z-10 font-prompt" style={{ backgroundColor: 'var(--bg-color)' }}>
  ```

- [ ] **Step 2: Add relative positioning and z-index to footer**
  Modify the footer in `app/src/pages/LandingPage.tsx` to add `relative z-10`:
  ```typescript
          {/* Decorative footer details */}
          <footer className="w-full py-8 text-center font-prompt text-[9px] text-[#4e6b54] tracking-widest uppercase border-t border-[var(--accent-color)] select-none relative z-10" style={{ backgroundColor: 'var(--bg-color)' }}>
  ```

---

### Task 3: Build Verification & Manual Testing

**Files:**
- Manual Verification

- [ ] **Step 1: Check build for TypeScript compiling and correctness**
  Run: `npm run build` in directory `app/`
  Expected output: Clean build with no TypeScript or compiler errors.

- [ ] **Step 2: Run Development Server and Test Scroll Interaction**
  Run: `npm run dev` in directory `app/` and test manually by scrolling through the showcase deck to verify:
  1. No blank gap occurs at the end of the showcase stack.
  2. The "Selected Work" section slides smoothly on top of the final card deck frame.
  3. Scrolling back up reverses the animation and restores the cards.
