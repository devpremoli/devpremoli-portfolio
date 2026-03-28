import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-8 mb-3 text-crimson">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-muted leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 text-muted mb-4 ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 text-muted mb-4 ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-muted leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-crimson hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-crimson/40 pl-4 italic text-muted/80 my-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-surface-light px-1.5 py-0.5 rounded text-sm text-navy-light">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-surface-light border border-white/5 rounded-xl p-4 overflow-x-auto my-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  strong: ({ children }) => (
    <strong className="text-foreground font-semibold">{children}</strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
