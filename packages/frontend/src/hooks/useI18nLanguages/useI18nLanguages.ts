import { i18n } from 'i18next';
import { useMemo } from 'react';

export function useI18nLanguages(i18nConfig: i18n): string[] {
  const whitelist = i18nConfig.options.whitelist as string[];

  return useMemo(() => whitelist.filter((lang) => lang !== 'cimode').sort(), [
    whitelist,
  ]);
}
