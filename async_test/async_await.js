// Asynchronous function using async/await
async function fetchData() {
    try {
      // Simulating an asynchronous operation, like fetching data from an API
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      // Once the Promise is resolved, the code below will execute
      let data = await response.json();
      
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Calling the async function
  fetchData();