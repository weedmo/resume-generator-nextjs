# Joonmo Han — Resume

Robotics data engineer — building data pipelines and collection systems for robot learning.

- Web: https://weedmo.github.io/resume-generator-nextjs/
- PDF: https://weedmo.github.io/resume-generator-nextjs/resume.pdf
- LinkedIn: https://www.linkedin.com/in/joonmo-han-476b77344/

## Build

Content lives in `payload/`. Pushing to `main` builds the site and PDF and deploys them to GitHub Pages.

```bash
npm install --legacy-peer-deps
cp payload/index_ko.ts payload/index.ts
npx next build && npx next export -o out   # Node 17+: NODE_OPTIONS=--openssl-legacy-provider
```

Based on [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs) via [eunki-7/resume-generator-nextjs](https://github.com/eunki-7/resume-generator-nextjs) (MIT).
