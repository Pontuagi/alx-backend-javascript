// Payment token module

const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Successful response from the API' });
      }, 1000); // Simulating an asynchronous operation
    });
  } else {
    return Promise.resolve(); // Resolving with no value for failure case
  }
};

module.exports = getPaymentTokenFromAPI;
