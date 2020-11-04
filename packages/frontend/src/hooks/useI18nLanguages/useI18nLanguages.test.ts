import { i18n } from 'i18next';
import React from 'react';

import { useI18nLanguages } from './useI18nLanguages';

describe('hooks/useI18nLanguages', () => {
  let useMemoSpy: jest.SpyInstance;

  beforeEach(() => {
    useMemoSpy = jest
      .spyOn(React, 'useMemo')
      .mockImplementation((fct) => fct());
  });

  it('should return the whitelisted languages from the i18n context', () => {
    const config = { options: { whitelist: ['fr', 'pt', 'en'] } } as i18n;

    const languages = useI18nLanguages(config);

    expect(languages).toEqual(['en', 'fr', 'pt']);
    expect(useMemoSpy).toHaveBeenCalled();
  });

  it('should filter any value named "cimode"', () => {
    const config = {
      options: { whitelist: ['fr', 'en', 'cimode', 'pt'] },
    } as i18n;

    const languages = useI18nLanguages(config);

    expect(languages).toEqual(['en', 'fr', 'pt']);
    expect(useMemoSpy).toHaveBeenCalled();
  });
});
