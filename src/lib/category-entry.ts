import { getEntriesByCategory, parseEntryId } from '~/lib/content';
import { detailPath, listPath } from '~/lib/url';
import type { Locale } from '~/i18n/routing';

/** A one-page category opens its answer directly; larger groups keep a guide. */
export async function categoryEntryPath(category: string, locale: Locale): Promise<string> {
  const entries = await getEntriesByCategory(category, locale);
  if (entries.length === 1) {
    const parsed = parseEntryId(entries[0].id);
    if (parsed) return detailPath(parsed.category, parsed.slug, locale);
  }
  return listPath(category, locale);
}
