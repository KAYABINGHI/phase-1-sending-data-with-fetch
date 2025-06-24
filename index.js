function submitData(name, email) {
  // Return the fetch chain for testing purposes
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle successful response - append the new id to the DOM
    const newId = data.id;
    document.body.innerHTML += `<p>New user created with ID: ${newId}</p>`;
    return data; // Return data for potential chaining
  })
  .catch(function(error) {
       const body = document.querySelector("body");
       const errorElement = document.createElement("p");
       errorElement.textContent = error.message;
       body.appendChild(errorElement);
     }); 
}