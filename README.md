# Joonmo Han — Resume

Robotics data engineer — building data pipelines and collection systems for robot learning.

- Web: https://weedmo.github.io/
- PDF: https://weedmo.github.io/resume.pdf
- LinkedIn: https://www.linkedin.com/in/joonmo-han-476b77344/

## Build

Content lives in `payload/`. The site and PDF are built and deployed by [weedmo/weedmo.github.io](https://github.com/weedmo/weedmo.github.io).

```bash
npm install --legacy-peer-deps
cp payload/index_ko.ts payload/index.ts
npx next build && npx next export -o out   # Node 17+: NODE_OPTIONS=--openssl-legacy-provider
```

Based on [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs) via [eunki-7/resume-generator-nextjs](https://github.com/eunki-7/resume-generator-nextjs) (MIT).
