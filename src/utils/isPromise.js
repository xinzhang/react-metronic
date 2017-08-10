/**
 * Returns whether the provided value is a promise
 *
 * @param {object} value Potential promise
 * @return {Boolean}
 */
const isPromise = (value) => {
  return !!value &&
    typeof value.promise === 'object' &&
    typeof value.promise.then === 'function';
};

export default isPromise;

