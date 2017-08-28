/**
 * Returns whether the provided value is a promise
 *
 * @param {object} value Potential promise
 * @return {Boolean}
 */
const isPromise = (value) => {
  //return !!value && value instanceof Promise;

  // return !!value &&
  //   typeof value.promise === 'object' &&
  //   typeof value.promise.then === 'function';

  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
};

export default isPromise;

