// Load Projects
getData("projects").then(projects => {
  const container = document.getElementById("projectList");
  projects.forEach(p => {
    container.innerHTML += `
      <div class="p-4 border rounded shadow">
        <img src="${p.image}" alt="${p.name}" class="mb-2 w-full h-40 object-cover">
        <h3 class="font-bold">${p.name}</h3>
        <p>${p.description}</p>
      </div>`;
  });
});

// Load Clients
getData("clients").then(clients => {
  const container = document.getElementById("clientList");
  clients.forEach(c => {
    container.innerHTML += `
      <div class="p-4 border rounded shadow">
        <img src="${c.image}" alt="${c.name}" class="mb-2 w-full h-40 object-cover">
        <h3 class="font-bold">${c.name} (${c.designation})</h3>
        <p>${c.description}</p>
      </div>`;
  });
});

// Handle Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("contacts", data).then(() => alert("Contact submitted!"));
});

// Handle Newsletter Form
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("newsletter", data).then(() => alert("Subscribed successfully!"));
});
