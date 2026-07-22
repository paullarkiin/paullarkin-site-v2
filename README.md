# Paul Larkin — Personal site

My personal website, built with Next.js and Tailwind CSS. Writing and work
case studies are authored as MDX files under [`content/`](content/).

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, static generation)
- **[Tailwind CSS 4](https://tailwindcss.com)**
- **[MDX](https://mdxjs.com)** via `@next/mdx` for writing and project content
- **TypeScript**

## Getting started

Requires [pnpm](https://pnpm.io) and Node 20+.

```bash
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description                        |
| ------------ | --------------------------------- |
| `pnpm dev`   | Start the local development server |
| `pnpm build` | Create a production build          |
| `pnpm start` | Serve the production build         |
| `pnpm lint`  | Run ESLint                         |

## Content

- **Writing** lives in [`content/writing/`](content/writing/) as `.mdx` files.
- **Work / case studies** live in [`content/projects/`](content/projects/) as `.mdx` files.

Each file uses frontmatter for `title`, `date`, and `summary`. Set
`draft: true` in the frontmatter to keep a post visible in `pnpm dev` while
hiding it from production builds (and from the sitemap).
