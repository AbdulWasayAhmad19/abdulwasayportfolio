# Changes — September 2026

- **Loading animation** (`src/components/common/preloader.tsx`): black screen, "ABDUL WASAY" typed letter by letter with the
  white dot + red triangle caret from the reference video, and a 0 → 100% counter with a thin progress line. Runs once per
  session, skipped under reduced motion; the page remounts afterwards so the hero entrance plays after the loader.
- **Client Projects section** (`src/components/ui/client-projects-section.tsx`, replaces `ventures-section.tsx`): all 8
  projects with category filters (Client Website / Full Stack / AI & Computer Vision / Desktop), tech tags, year and status.
- **Project images**: `public/assets/pinauto.jpg` (your screenshot), plus rendered mockups `bank.jpg`, `visionguard.jpg`,
  `elegant.jpg`, `studynet.jpg` (original artwork, so no third-party image licensing).
- **Vision Guard** added to `src/data/portfolio.ts` with the nine capabilities shown as a checklist on the card.
- **Certifications**: ACM entries removed. One LinkedIn certificate entry with a "View on LinkedIn" button.
  **Edit the title / issuer / date in `src/data/portfolio.ts` to match the certificate on your profile**, and optionally
  add its image as `public/assets/linkedin-certificate.png` and set `image` accordingly.
