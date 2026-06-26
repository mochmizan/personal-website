# Tech Stack Layout Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Tech Stack/Skills section to use a clean two-column layout without enclosing panels, matching the reference project's tag and icon proportions.

**Architecture:** Refactor React markup in LandingPage.tsx to split category rendering into two vertical columns and update tailwind utilities on the items.

**Tech Stack:** React, Tailwind CSS

---

### Task 1: Column Split and Container Clean-up in LandingPage.tsx

**Files:**
- Modify: [LandingPage.tsx](file:///c:/Users/Mizan/Documents/psyche-run/app/src/pages/LandingPage.tsx)

- [ ] **Step 1: Refactor categories map into explicit column groups**
  
  Replace the existing single map grid container with a two-column structure.
  
  Target Code to Replace (around lines 358-360):
  ```tsx
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {stackCategories.map((category, catIdx) => (
                <div 
                  key={catIdx}
                  className="p-6 border flex flex-col gap-4 rounded-none"
                  style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border-color)' }}
                >
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-color)] font-roboto border-b border-[var(--border-muted)] pb-2 text-[16px] font-semibold lg:font-semibold">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2.5 font-roboto">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[var(--panel-bg-darker)] border border-[var(--border-muted)] hover:border-[var(--accent-color)] transition-colors duration-200"
                      >
                        <img 
                          src={item.icon} 
                          alt={item.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-[14px] max-lg:text-[12px] text-white font-medium font-roboto">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
  ```
  
  Replacement Code:
  ```tsx
            <div className="w-full flex flex-col md:flex-row md:gap-12 gap-8 justify-start items-start pt-4">
              {/* Left Column: Programming Languages & Framework and Library */}
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                {stackCategories.slice(0, 2).map((category, catIdx) => (
                  <div key={catIdx} className="flex flex-col gap-3">
                    <p className="font-roboto text-[16px] font-medium lg:font-semibold text-white mb-1">
                      {category.title}
                    </p>
                    <div className="flex justify-start flex-wrap items-center gap-2 font-roboto">
                      {category.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx}
                          className="flex items-center gap-2 px-2 py-1 bg-[var(--panel-bg-darker)] border border-[var(--border-muted)] hover:border-[var(--accent-color)] transition-colors duration-200"
                        >
                          <img 
                            src={item.icon} 
                            alt={item.name}
                            className="w-6 h-6 max-lg:w-5 max-lg:h-5 object-contain"
                          />
                          <span className="text-[14px] max-lg:text-[12px] text-white font-medium font-roboto">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Animation & Project Management */}
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                {stackCategories.slice(2, 4).map((category, catIdx) => (
                  <div key={catIdx + 2} className="flex flex-col gap-3">
                    <p className="font-roboto text-[16px] font-medium lg:font-semibold text-white mb-1">
                      {category.title}
                    </p>
                    <div className="flex justify-start flex-wrap items-center gap-2 font-roboto">
                      {category.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx}
                          className="flex items-center gap-2 px-2 py-1 bg-[var(--panel-bg-darker)] border border-[var(--border-muted)] hover:border-[var(--accent-color)] transition-colors duration-200"
                        >
                          <img 
                            src={item.icon} 
                            alt={item.name}
                            className="w-6 h-6 max-lg:w-5 max-lg:h-5 object-contain"
                          />
                          <span className="text-[14px] max-lg:text-[12px] text-white font-medium font-roboto">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
  ```

- [ ] **Step 2: Run linter verification**
  
  Run: `npm run lint`
  Expected: No new lint errors in LandingPage.tsx.

### Task 2: Build Verification

**Files:**
- Verify only.

- [ ] **Step 1: Run production compilation**
  
  Run: `npm run build`
  Expected: Clean compilation with exit code 0.
