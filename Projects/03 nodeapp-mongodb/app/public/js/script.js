function getUserProfile() {
  fetch("/get-profile")
    .then((res) => res.json())
    .then((data) => {
      const name = data.name || "John Doe";
      const email = data.email || "john@example.com";
      const interests = data.interests || "Coding";

      document.querySelector("#name").textContent = name;
      document.querySelector("#email").textContent = email;
      document.querySelector("#interests").textContent = interests;
    })
    .catch((error) => {
      console.error("Error fetching profile:", error);
    });
}

function editProfile() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container-edit").style.display = "block";

  const name = document.querySelector("#name").textContent;
  const email = document.querySelector("#email").textContent;
  const interests = document.querySelector("#interests").textContent;

  document.querySelector("#input-name").value = name;
  document.querySelector("#input-email").value = email;
  document.querySelector("#input-interests").value = interests;
}

function saveProfile() {
  const userObj = {
    name: document.querySelector("#input-name").value,
    email: document.querySelector("#input-email").value,
    interests: document.querySelector("#input-interests").value,
  };

  fetch("/update-profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userObj),
  })
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#name").textContent = data.name;
      document.querySelector("#email").textContent = data.email;
      document.querySelector("#interests").textContent = data.interests;
    });
  document.querySelector(".container-edit").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
