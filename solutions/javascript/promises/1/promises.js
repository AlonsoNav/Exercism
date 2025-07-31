//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) 
          reject(error);
        else
          resolve(result);
      });
    });
  };
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises === undefined || promises.length === 0)
      resolve(promises);

    const results = [];
    let resolved = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          resolved++;

          if (resolved === promises.length) 
            resolve(results);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

export const allSettled = (promises) => {
  return new Promise(resolve => {
    if (promises === undefined || promises.length === 0)
      resolve(promises);

    const results = [];
    let resolved = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
        })
        .catch(error => {
          results[index] = error;
        })
        .finally(() => {
          resolved++;
          if (resolved === promises.length) 
            resolve(results);
        })
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises === undefined || promises.length === 0)
      resolve(promises);

    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value)
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises === undefined || promises.length === 0)
      resolve(promises);

    const errors = [];
    let rejected = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          errors[index] = error;
          rejected++;

          if (rejected === promises.length)
            reject(errors);
        });
    });
  });

};
