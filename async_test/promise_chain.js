const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("First operation completed");
    }, 500);
  });
  
  const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second operation completed");
    }, 3000);
  });
  
  const thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third operation completed");
    }, 500);
  });
  
  firstPromise
    .then((result) => {
      console.log(result); // Output: First operation completed
      return secondPromise;
    })
    .then((result) => {
      console.log(result); // Output: Second operation completed
      return thirdPromise;
    })
    .then((result) => {
      console.log(result); // Output: Third operation completed
    });