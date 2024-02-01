function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulating fetching user data from an API
      setTimeout(() => {
        const userData = { id: userId, username: 'john_doe' };
        resolve(userData);
      }, 3000);
    });
  }
  
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    // Simulating fetching user posts from an API
    setTimeout(() => {
      const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ];
      resolve(posts);
    }, 3000);
  });
}
  
// Chaining promises to fetch user data and posts sequentially
fetchUserData(123)
  .then((userData) => {
    console.log(userData); // Output: { id: 123, username: 'john_doe' }
    return fetchUserPosts(userData.id);
  })
  .then((userPosts) => {
    console.log(userPosts); // Output: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]
  })
  .catch((error) => {
    console.error('Error:', error);
  });