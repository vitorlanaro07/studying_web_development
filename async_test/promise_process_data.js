function processData(data) {
    return new Promise((resolve, reject) => {
      // Simulating data processing
      setTimeout(() => {
        const processedData = data.map((item) => item * 2);
        resolve(processedData);
      }, 1000);
    });
  }
  
  function displayData(data) {
    return new Promise((resolve, reject) => {
      // Simulating displaying data
      setTimeout(() => {
        console.log(data.map((item) => item * 2)); // Output: [4, 8, 12, 16, 20]
        resolve('Data displayed successfully');
      }, 3000);
    });
  }
  
  // Chaining promises to process and display data sequentially
  const originalData = [1, 2, 3, 4, 5];
  processData(originalData)
    .then((processedData) => {
      console.log(processedData); // Output: [2, 4, 6, 8, 10]
      return displayData(processedData);
    })
    .then((result) => {
      console.log(result); // Output: Data displayed successfully
    })
    .catch((error) => {
      console.error('Error:', error);
    });