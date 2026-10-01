/**
 * Platform glyph for the iOS store actions.
 *
 * lucide's `Apple` is a piece of fruit, which read as a mistake next to a
 * button labelled "Get iOS Beta". This is the Apple logo silhouette, drawn
 * filled so it carries the same optical weight as the lucide `Play` triangle
 * used for the Android action.
 */
interface MarkProps {
  size?: number;
  className?: string;
}

/**
 * X's wordmark. lucide still ships the pre-rebrand `Twitter` bird, which no
 * longer matches the platform it links to.
 */
export function XMark({ size = 18, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.53 3h3.02l-6.6 7.54L21.7 21h-6.07l-4.76-6.22L5.42 21H2.4l7.06-8.07L2.3 3h6.22l4.3 5.69L17.53 3Zm-1.06 16.17h1.67L7.6 4.73H5.8l10.67 14.44Z" />
    </svg>
  );
}

export function AppleMark({ size = 18, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.05 12.54c-.02-2.62 2.14-3.88 2.24-3.94-1.22-1.79-3.12-2.03-3.79-2.06-1.62-.16-3.15.95-3.97.95-.82 0-2.08-.93-3.42-.9-1.76.03-3.38 1.02-4.29 2.59-1.83 3.17-.47 7.87 1.31 10.45.87 1.26 1.91 2.67 3.28 2.62 1.31-.05 1.81-.85 3.4-.85 1.58 0 2.03.85 3.42.82 1.41-.02 2.3-1.28 3.16-2.55.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.73-1.05-2.76-4.2ZM14.47 4.87c.72-.88 1.21-2.1 1.08-3.31-1.04.04-2.3.69-3.04 1.56-.66.78-1.25 2.02-1.09 3.21 1.16.09 2.34-.59 3.05-1.46Z" />
    </svg>
  );
}
