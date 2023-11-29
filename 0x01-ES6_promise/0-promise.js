export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating and API call with setTimeout
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('Successfull Response!!');
      } else {
        reject(new Error('Error: API request failed'));
      }
    }, 2000);
  });
}
