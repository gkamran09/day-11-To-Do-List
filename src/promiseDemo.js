function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      if (userId === 1) {
        const user = { id: 1, name: "Kamran" };
        resolve(user); 
      } else {
        reject(new Error("User not found"));
      }
    });
  }
  
  fetchUserData(1)
    .then((user) => {
      console.log("User data:", user);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  