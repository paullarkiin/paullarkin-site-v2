import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/writing/cyber-gamificiation",
        destination: "/writing/cyber-gamification",
        permanent: true,
      },
      {
        source: "/writing/picoCTF-2018",
        destination: "/writing/pico-ctf-2018",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
