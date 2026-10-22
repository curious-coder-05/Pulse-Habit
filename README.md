# ⚡ PulseHabit

A high-performance, mobile-first Progressive Web App (PWA) designed for frictionless daily habit tracking, deep-work session logging, and cross-device telemetry. Built with zero build steps, vanilla web standards, and optional Supabase cloud persistence.

![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)
![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline-indigo.svg)
![Storage: IndexedDB](https://img.shields.io/badge/Storage-IndexedDB%20%2B%20Supabase-blue.svg)

---

## ✨ Features

- **Progress Telemetry Ring:** Real-time dynamic visualizer rendering daily completion percentages with celebration effects at 100% execution.
- **7-Day Rolling Velocity Strip:** Quick-select matrix to inspect, log, or backfill habits across the previous 7 days.
- **Micro-Target Scheduling:** Supports multi-type goals including binary checks, frequency targets (e.g., $3\times/\text{week}$), and quantifiable daily volume metrics (pages, reps, glasses).
- **Streak Preservation Protocol:** Dedicated skip (`⏭`) mechanics to accommodate rest days or illness without zeroing active streaks.
- **Deep Work Focus Sprint:** Built-in Pomodoro timer linked directly to habit logging with synthesized Web Audio acoustic feedback.
- **Local-First Architecture:** Asynchronous data persistence via IndexedDB with multi-tab `BroadcastChannel` synchronization.
- **Optional Cloud Replication:** Passwordless Magic Link authentication backed by Supabase with client-side multi-device merge logic.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Runtime** | Vanilla HTML5 / ES6+ | Zero build-step deployment with maximum execution speed. |
| **Styling Engine** | Native CSS Custom Properties | Midnight-violet dark theme with dynamic accent toggling. |
| **Client Storage** | IndexedDB API | High-capacity, non-blocking local storage replacing `localStorage`. |
| **Offline Pipeline** | Service Worker (`sw.js`) | Full asset precaching for offline reliability in low-connectivity zones. |
| **Cloud Backend** | Supabase (PostgreSQL + Auth) | Optional row-level secure cloud sync and passwordless email auth. |

---

## 📁 Project Directory Structure

```text
pulsehabit/
├── index.html              # Main application shell, reactive UI, and state logic
├── manifest.webmanifest    # Web app manifest for native mobile installation
├── sw.js                   # Service Worker handling offline asset caching
├── icon.svg                # Scalable vector application icon
├── config.js               # Supabase credentials (URL and publishable anon key)
├── schema.sql              # PostgreSQL schema with Row Level Security (RLS) policies
└── README.md               # Repository documentation and architecture overview
