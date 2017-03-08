import LocalizedStrings from 'react-localization';

import en from '../../../translations/en-us';
import it from '../../../translations/it';

const translations = new LocalizedStrings({
  en,
  it,
});

// setup language
translations.setLanguage('en');

export default translations;
