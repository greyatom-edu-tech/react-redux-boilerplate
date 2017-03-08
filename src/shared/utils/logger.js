import _ from 'lodash';

export const LOG_LEVELS = ['log', 'debug', 'info', 'warn', 'error'];

export const service = {};

export const factory = {
  init(levels) {
    this.setup(levels);
  },
  setup(levels = LOG_LEVELS) {
    _.each(levels, (level) => {
      service[level] = _.bind((lvl, ...otherArgs) => {
        this.handleLog(lvl, ...otherArgs);
      }, this, level);
    });
  },
  handleLog(level, message) {
    /* eslint-disable no-console */
    console.log(level, message); // TODO: Replace this with actual backend calls.
    /* eslint-enable no-console */
  },
};

Object.freeze(factory);

factory.init();

export default service;
