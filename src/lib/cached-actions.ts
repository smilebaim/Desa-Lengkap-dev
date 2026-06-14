/**
 * cached-actions.ts
 *
 * Layer caching untuk query Firestore yang sering dipanggil.
 * Menggunakan `unstable_cache` dari Next.js yang terintegrasi dengan
 * Data Cache milik Next.js (persists across requests di Vercel).
 *
 * Jika NEXT_PUBLIC_DEV_MODE=true → langsung return dummy data lokal (tanpa Firebase).
 */

import { unstable_cache } from 'next/cache';
import { getPublishedPosts } from './posts-actions';
import { getSiteSettings } from './site-settings-actions';
import { getMenusWithItems } from './menu-actions';
import {
  DUMMY_SITE_SETTINGS,
  DUMMY_ALL_MENUS,
  DUMMY_POSTS,
} from './dummy-data';

// Flag dev mode — baca dari env, fallback false
const IS_DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === 'true';

// ─── Cache Tags ───────────────────────────────────────────────────────────────
export const CACHE_TAGS = {
  POSTS: 'posts',
  SITE_SETTINGS: 'site-settings',
  MENUS: 'menus',
} as const;

// ─── Cached: Published Posts ──────────────────────────────────────────────────
const _cachedPosts = unstable_cache(
  async () => getPublishedPosts(),
  ['published-posts'],
  { revalidate: 300, tags: [CACHE_TAGS.POSTS] }
);

export async function getCachedPublishedPosts() {
  if (IS_DEV_MODE) return DUMMY_POSTS;
  return _cachedPosts();
}

// ─── Cached: Site Settings ────────────────────────────────────────────────────
const _cachedSettings = unstable_cache(
  async () => getSiteSettings(),
  ['site-settings'],
  { revalidate: 600, tags: [CACHE_TAGS.SITE_SETTINGS] }
);

export async function getCachedSiteSettings() {
  if (IS_DEV_MODE) return DUMMY_SITE_SETTINGS;
  return _cachedSettings();
}

// ─── Cached: Menu Data ───────────────────────────────────────────────────────
const _cachedMenus = unstable_cache(
  async () => getMenusWithItems(),
  ['menus-with-items'],
  { revalidate: 600, tags: [CACHE_TAGS.MENUS] }
);

export async function getCachedMenusWithItems() {
  if (IS_DEV_MODE) return DUMMY_ALL_MENUS;
  return _cachedMenus();
}

