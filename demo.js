// Step 1: Locate DOM Elements
const articleHearts = document.querySelectorAll('.like-button');
console.log(articleHearts); // Check the NodeList in the console
// Step 2: Mock Server Communication
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random server failure.
      Math.random() < 0.2 ? reject("Random server error. Try again!") : resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
// Step 3: Add Event Listeners
articleHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle the "liked" class on success
        heart.classList.toggle('liked');
      })
      .catch((error) => {
        // Alert the user in case of a server error
        alert(error);
      });
  });
});
