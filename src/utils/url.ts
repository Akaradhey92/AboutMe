/**
 * Utility functions for handling URLs and base path normalization
 * to ensure 100% compatibility with GitHub Pages (both root domains
 * and subpath repositories like /username/repository-name).
 */

export function withBase(path: string): string {
  // If the path is an external link or anchor on current page, return as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Return base + cleanPath
  return `${cleanBase}${cleanPath}`;
}

