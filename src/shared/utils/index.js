import auth from './auth';
import * as navigation from './navigation';
import * as permissions from './permissions';
import loggerService from './logger';
import localization from './localization';

export default {
  auth,
  ...navigation,
  ...permissions,
  translations: localization,
  loggerService,
};
