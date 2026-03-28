import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaClock } from "react-icons/fa";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { default: Content } = await import(`@/content/${slug}.mdx`);

  return (
    <main className="min-h-screen py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-crimson transition-colors cursor-pointer"
        >
          <FaArrowLeft className="text-xs" /> Back to Blog
        </Link>

        <article className="mt-10">
          <div className="flex items-center gap-3 text-sm text-muted">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded bg-navy/10 text-navy-light border border-navy/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 max-w-none">
            <Content />
          </div>
        </article>
      </div>
    </main>
  );
}
