import type { PageDefinition } from '@/types/platform';

/**
 * Temporary presentation copy only. Replace each selector with a typed API client
 * when the associated feature integration is introduced.
 */
export function getEmptyState(definition: PageDefinition) {
  return { title: definition.emptyTitle, description: definition.emptyDescription };
}
